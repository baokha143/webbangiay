package com.lab.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lab.DAO.InvoiceDAO;
import com.lab.Entity.Invoice;
import com.lab.Entity.InvoiceStatus;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceDAO invoiceDAO;

    public List<Invoice> getAllInvoices() {
        return invoiceDAO.findAll();
    }

    public Invoice getInvoiceById(Integer id) {
        Optional<Invoice> invoice = invoiceDAO.findById(id);
        return invoice.orElse(null);
    }

    public Invoice createInvoice(Invoice invoice) {
        return invoiceDAO.save(invoice);
    }

    public Invoice updateInvoice(Integer id, Invoice invoice) {
        if (invoiceDAO.existsById(id)) {
            invoice.setMaHD(id);
            return invoiceDAO.save(invoice);
        } else {
            return null;
        }
    }

    public boolean deleteInvoice(Integer id) {
        if (invoiceDAO.existsById(id)) {
            invoiceDAO.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public List<Invoice> getInvoicesByAccountId(Integer accountId) {
        return invoiceDAO.findByAccount_uId(accountId);
    }

    public Float getTotalAmountByAccountId(Integer accountId) {
        List<Invoice> invoices = invoiceDAO.findByAccount_uId(accountId);
        return invoices.stream()
                       .map(Invoice::getTongGia)
                       .reduce(0f, Float::sum);
    }

    public Invoice updateInvoiceStatus(Integer invoiceId, InvoiceStatus status) {
        Optional<Invoice> optionalInvoice = invoiceDAO.findById(invoiceId);
        if (optionalInvoice.isPresent()) {
            Invoice invoice = optionalInvoice.get();
            invoice.setStatus(status);
            return invoiceDAO.save(invoice);
        }
        return null;
    }
    
}