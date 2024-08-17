package com.lab.DTO;

public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private boolean isSell;
    private boolean isAdmin;

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getIsSell() {
        return isSell;
    }

    public void setIsSell(boolean isSell) {
        this.isSell = isSell;
    }

    public boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }
}
