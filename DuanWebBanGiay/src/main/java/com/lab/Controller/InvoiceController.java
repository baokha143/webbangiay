package com.lab.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lab.Entity.Invoice;
import com.lab.Entity.InvoiceStatus;
import com.lab.Service.InvoiceService;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    // Lấy tất cả hóa đơn
    @GetMapping
    public ResponseEntity<List<Invoice>> getAllInvoices() {
        List<Invoice> invoices = invoiceService.getAllInvoices();
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }

    // Lấy hóa đơn theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getInvoiceById(@PathVariable("id") Integer id) {
        Invoice invoice = invoiceService.getInvoiceById(id);
        if (invoice != null) {
            return new ResponseEntity<>(invoice, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Tạo hóa đơn mới
    @PostMapping
    public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice) {
        Invoice createdInvoice = invoiceService.createInvoice(invoice);
        return new ResponseEntity<>(createdInvoice, HttpStatus.CREATED);
    }

    // Cập nhật hóa đơn
    @PutMapping("/{id}")
    public ResponseEntity<Invoice> updateInvoice(@PathVariable("id") Integer id, @RequestBody Invoice invoice) {
        Invoice updatedInvoice = invoiceService.updateInvoice(id, invoice);
        if (updatedInvoice != null) {
            return new ResponseEntity<>(updatedInvoice, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Xóa hóa đơn
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvoice(@PathVariable("id") Integer id) {
        boolean isRemoved = invoiceService.deleteInvoice(id);
        if (isRemoved) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Lấy hóa đơn theo ID của tài khoản
    @GetMapping("/account/{accountId}")
    public ResponseEntity<List<Invoice>> getInvoicesByAccountId(@PathVariable("accountId") Integer accountId) {
        List<Invoice> invoices = invoiceService.getInvoicesByAccountId(accountId);
        if (invoices != null && !invoices.isEmpty()) {
            return new ResponseEntity<>(invoices, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Invoice> updateInvoiceStatus(
            @PathVariable("id") Integer id,
            @RequestParam InvoiceStatus status) {
        Invoice updatedInvoice = invoiceService.updateInvoiceStatus(id, status);
        if (updatedInvoice != null) {
            return new ResponseEntity<>(updatedInvoice, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Tính tổng tiền của hóa đơn theo ID tài khoản
    @GetMapping("/total-amount/{accountId}")
    public ResponseEntity<Float> getTotalAmountByAccountId(@PathVariable("accountId") Integer accountId) {
        Float totalAmount = invoiceService.getTotalAmountByAccountId(accountId);
        if (totalAmount != null) {
            return new ResponseEntity<>(totalAmount, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }}