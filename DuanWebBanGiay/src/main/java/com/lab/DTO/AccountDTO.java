package com.lab.DTO;

import lombok.Data;

@Data
public class AccountDTO {
    private Integer accountID;
    private String username;

    // Getters và Setters
    public Integer getAccountID() { return accountID; }
    public void setAccountID(Integer accountID) { this.accountID = accountID; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}