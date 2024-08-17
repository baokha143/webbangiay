package com.lab.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${vnpay.tmn-code}")
    private String vnp_TmnCode;

    @Value("${vnpay.hash-secret}")
    private String vnp_HashSecret;

    @Value("${vnpay.url}")
    private String vnp_Url;

    @Value("${vnpay.return-url}")
    private String vnp_ReturnUrl;

    @GetMapping("/create-payment-url")
    public Map<String, String> createPaymentUrl(@RequestParam("amount") int amount,
                                                @RequestParam("orderDescription") String orderDescription,
                                                @RequestParam("orderType") String orderType,
                                                @RequestParam("language") String language,
                                                @RequestParam(value = "bankCode", required = false) String bankCode,
                                                HttpServletRequest request) {
        String ipAddr = request.getRemoteAddr();
        String amountInCents = String.valueOf(amount * 100);

        Map<String, String> vnp_Params = new LinkedHashMap<>();
        vnp_Params.put("vnp_Version", "2.1.0");
        vnp_Params.put("vnp_Command", "pay");
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", amountInCents);
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_TxnRef", String.valueOf(System.currentTimeMillis())); // Mã tham chiếu giao dịch
        vnp_Params.put("vnp_OrderInfo", orderDescription);
        vnp_Params.put("vnp_OrderType", orderType);
        vnp_Params.put("vnp_Locale", language != null && !language.isEmpty() ? language : "vn");
        vnp_Params.put("vnp_ReturnUrl", vnp_ReturnUrl);
        vnp_Params.put("vnp_IpAddr", ipAddr);
        vnp_Params.put("vnp_CreateDate", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
        vnp_Params.put("vnp_ExpireDate", getExpireDate());

        if (bankCode != null && !bankCode.isEmpty()) {
            vnp_Params.put("vnp_BankCode", bankCode);
        }

        // Sắp xếp các tham số theo khóa và thứ tự mong muốn
        List<String> paramOrder = Arrays.asList(
            "vnp_Amount", "vnp_Command", "vnp_CreateDate", "vnp_CurrCode",
            "vnp_IpAddr", "vnp_Locale", "vnp_OrderInfo", "vnp_OrderType",
            "vnp_ReturnUrl", "vnp_TmnCode", "vnp_TxnRef", "vnp_Version"
        );

        if (vnp_Params.containsKey("vnp_BankCode")) {
            paramOrder.add("vnp_BankCode");
        }

        // Tạo chuỗi dữ liệu để hash
        StringBuilder hashData = new StringBuilder();
        for (String param : paramOrder) {
            if (vnp_Params.containsKey(param)) {
                hashData.append(param).append('=').append(vnp_Params.get(param)).append('&');
            }
        }
        if (hashData.length() > 0) {
            hashData.deleteCharAt(hashData.length() - 1);  // Loại bỏ dấu '&' cuối cùng
        }

        // Tính toán mã hash
        String secureHash = hmacSHA512(vnp_HashSecret, hashData.toString());

        // Tạo URL thanh toán
        String paymentUrl = vnp_Url + "?" + vnp_Params.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(entry -> entry.getKey() + "=" + encodeURIComponent(entry.getValue()))
                .collect(Collectors.joining("&"));

        // Thêm mã hash vào cuối URL
        paymentUrl += "&vnp_SecureHash=" + secureHash;

        Map<String, String> response = new HashMap<>();
        response.put("paymentUrl", paymentUrl);
        System.out.println(paymentUrl); // Sử dụng System.out.println() để kiểm tra URL
        return response;
    }


    private String hmacSHA512(String key, String data) {
        try {
            Mac hmacSHA512 = Mac.getInstance("HmacSHA512");
            SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA512");
            hmacSHA512.init(secretKeySpec);
            byte[] bytes = hmacSHA512.doFinal(data.getBytes(StandardCharsets.UTF_8));
            StringBuilder hash = new StringBuilder();
            for (byte b : bytes) {
                hash.append(String.format("%02x", b));
            }
            return hash.toString();
        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate HMAC SHA512", e);
        }
    }


    private String getExpireDate() {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MINUTE, 15); // Đặt thời gian hết hạn là 15 phút sau
        return new SimpleDateFormat("yyyyMMddHHmmss").format(cal.getTime());
    }

    private String encodeURIComponent(String value) {
        try {
            return URLEncoder.encode(value, StandardCharsets.UTF_8.toString())
                    .replace("+", "%20")
                    .replace("*", "%2A")
                    .replace("%7E", "~");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("Failed to encode URL component", e);
        }
    }
}
