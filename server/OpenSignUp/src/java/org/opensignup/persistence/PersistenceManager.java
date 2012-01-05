/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.opensignup.persistence;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.hibernate.ejb.HibernateEntityManager;

/**
 *
 */
public class PersistenceManager {

    public static final boolean DEBUG = true;
    private static String SIGNUP_PU = "signupPU";
    private static PersistenceManager instance;
    private EntityManagerFactory signupFactory;

    private PersistenceManager() {
    }

    public static PersistenceManager getInstance() {
        if (instance == null) {
            instance = new PersistenceManager();
        }
        return instance;
    }

    public HibernateEntityManager getSignupEntityManager() {
        if (signupFactory != null) {
            return (HibernateEntityManager) signupFactory.createEntityManager();
        } else {
            signupFactory = Persistence.createEntityManagerFactory(SIGNUP_PU);
            return (HibernateEntityManager) signupFactory.createEntityManager();
        }
    }


    public void closeEntityManagerFactories() {
        if (signupFactory != null) {
            signupFactory.close();
            signupFactory = null;
        }
    }

}