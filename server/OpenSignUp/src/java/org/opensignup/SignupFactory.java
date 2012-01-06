/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.opensignup;


import java.util.List;
import java.sql.Timestamp;
import java.util.Calendar;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.opensignup.persistence.PersistenceManager;
import org.opensignup.pojo.EmailSignup;
import org.opensignup.store.EmailSignupDbEntity;
/**
 *
 * @author sylvain
 */
public class SignupFactory {
    
    public static SimpleMessage signup(EmailSignup su){
        SimpleMessage msg=new SimpleMessage("");
        //TODO: validate if email already registered...
        if (su.email == null || su.email.length() == 0) {       
            msg.content = "_Empty";           
        }else if (!su.email.contains("@")) {
            msg.content = "_invalid";
        } else if (!SignupFactory.isUnique(su.email)) {
            msg.content = "_InUse";
        }else{
            msg.content = "_Success";
            //TODO: register email in DB.
                EntityManager em = PersistenceManager.getInstance().getSignupEntityManager();
                em.getTransaction().begin();
                EmailSignupDbEntity entity = new EmailSignupDbEntity();
                entity.setEmail(su.email);
                entity.setDateCreate(new Timestamp(Calendar.getInstance().getTimeInMillis()));
                em.persist(entity);
                em.getTransaction().commit();
                em.close();
        }
        
        
        return msg;
        
    }
    
    
    public static boolean isUnique(String email){
        //check if email is unique
        EntityManager em = PersistenceManager.getInstance().getSignupEntityManager();
        Query query = em.createQuery("from EmailSignupDbEntity where email=:em", EmailSignupDbEntity.class);
        query.setParameter("em", email);
        List<EmailSignupDbEntity> lstU = query.getResultList();
        em.close();
        return lstU.isEmpty();
    }
    
    
}
