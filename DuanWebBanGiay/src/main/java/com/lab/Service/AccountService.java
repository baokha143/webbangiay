package com.lab.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lab.DAO.AccountDAO;
import com.lab.Entity.Account;

import jakarta.transaction.Transactional;

@Service
public class AccountService {
	 @Value("${file.upload-dir}")
	    private String uploadDir;
    @Autowired
    private AccountDAO accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Account registerNewAccount(Account account) {
        account.setPassword(passwordEncoder.encode(account.getPassword()));
        return accountRepository.save(account);
    }

    public Optional<Account> findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }
    public Account findByUsername1(String username) {
        return accountRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }
    public void deleteById(Integer id) {
        accountRepository.deleteById(id);
    }
    public Account save(Account account) {
        return accountRepository.save(account);
    }

    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }
    public Optional<Account> findById(Integer id) {
        return accountRepository.findById(id); 
    }
    public List<Account> findAll() {
        return accountRepository.findAll();
    }
    public void deleteAccounts(List<Integer> ids) {
        accountRepository.deleteAllById(ids);
    }
    public Account getAccountById(Integer uId) {
        return accountRepository.findById(uId).orElse(null);
    }
    
    public String storeFile(MultipartFile file) {
        // Đặt đường dẫn để lưu file
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path path = Paths.get("D:/java6/DuanWebBanGiay/src/main/resources/static/files" + fileName);

        try {
            // Tạo thư mục nếu chưa tồn tại
            Files.createDirectories(path.getParent());
            // Lưu file
            Files.write(path, file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to store file.");
        }

        // Trả về URL của file đã lưu
        return "/files/" + fileName;
    }
    

@Transactional
public Account createAccountWithFile(Account account, MultipartFile profileImage) {
    // Mã hóa mật khẩu
    account.setPassword(passwordEncoder.encode(account.getPassword()));

    // Xử lý file ảnh đại diện nếu có
    if (profileImage != null && !profileImage.isEmpty()) {
        String profileImageUrl = storeFile(profileImage);
        account.setProfileImage(profileImageUrl);
    }

    // Lưu tài khoản vào cơ sở dữ liệu
    return accountRepository.save(account);
}

}