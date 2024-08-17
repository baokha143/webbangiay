package com.lab.Controller;

import com.lab.Entity.Account;
import com.lab.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccount(@PathVariable Integer id) {
        return accountService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        return ResponseEntity.ok(accountService.save(account));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(
            @PathVariable Integer id,
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("isSell") Boolean isSell,
            @RequestParam("isAdmin") Boolean isAdmin,
            @RequestParam(value = "profileImage", required = false) MultipartFile profileImage) {

        try {
            Account account = accountService.getAccountById(id);

            if (account == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            // Cập nhật thông tin tài khoản
            account.setUsername(username);
            account.setPassword(password);
            account.setEmail(email);
            account.setIsSell(isSell);
            account.setIsAdmin(isAdmin);

            // Xử lý file nếu có
            if (profileImage != null && !profileImage.isEmpty()) {
                String profileImageUrl = accountService.storeFile(profileImage);
                account.setProfileImage(profileImageUrl);
            }

            // Cập nhật tài khoản
            Account updatedAccount = accountService.updateAccount(account);

            return ResponseEntity.ok(updatedAccount);
        } catch (Exception e) {
            e.printStackTrace();  // In ra lỗi chi tiết để dễ dàng tìm kiếm vấn đề
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable Integer id) {
        accountService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAccounts(@RequestBody List<Integer> ids) {
        accountService.deleteAccounts(ids);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/id/{username}")
    public ResponseEntity<Integer> getAccountIdByUsername(@PathVariable String username) {
        Optional<Account> account = accountService.findByUsername(username);
        if (account.isPresent()) {
            return ResponseEntity.ok(account.get().getUId());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Account> createAccountWithFile(
            @RequestParam("username") String username,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("isSell") Boolean isSell,
            @RequestParam("isAdmin") Boolean isAdmin,
            @RequestParam(value = "profileImage", required = false) MultipartFile profileImage) {

        try {
            Account account = new Account();
            account.setUsername(username);
            account.setPassword(password);
            account.setEmail(email);
            account.setIsSell(isSell);
            account.setIsAdmin(isAdmin);

            // Tạo tài khoản mới với file nếu có
            Account savedAccount = accountService.createAccountWithFile(account, profileImage);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedAccount);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/profileImage/{fileName:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveProfileImage(@PathVariable String fileName) {
        try {
            Path file = Paths.get("uploads").resolve(fileName).normalize();
            Resource resource = new FileSystemResource(file.toFile());
            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok()
                        .contentType(getMediaTypeForFileName(fileName))
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private MediaType getMediaTypeForFileName(String fileName) {
        String extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
        switch (extension) {
            case "png": return MediaType.IMAGE_PNG;
            case "jpg": return MediaType.IMAGE_JPEG;
            case "jpeg": return MediaType.IMAGE_JPEG;
            default: return MediaType.APPLICATION_OCTET_STREAM;
        }
    }
}
