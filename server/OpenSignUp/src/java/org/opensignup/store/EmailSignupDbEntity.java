/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.opensignup.store;


import java.io.Serializable;
import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import org.hibernate.annotations.Index;
/**
 *
 * @author sylvain
 */

@Entity
@Table(name = "signup")
public class EmailSignupDbEntity implements Serializable{
    
    @SequenceGenerator(name = "user_seq_gen", sequenceName = "user_seq")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "user_seq_gen")
    private Long id;
    @Index(name = "email_index")
    @Column(length = 100)
    private String email;
    @Column
    private Timestamp date_create;
    
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setDateCreate(Timestamp timestamp) {
        this.date_create = timestamp;
    }
    
}
