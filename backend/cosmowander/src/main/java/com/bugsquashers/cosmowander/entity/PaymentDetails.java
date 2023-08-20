package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "payment_details")
public class PaymentDetails {
    @Id
    private String paymentId;
    private String paymentMethod;
}
