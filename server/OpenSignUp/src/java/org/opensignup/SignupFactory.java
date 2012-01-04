/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.opensignup;

/**
 *
 * @author sylvain
 */
public class SignupFactory {
    
    public static SimpleMessage signup(String email){
        String msg=email +" is now Registered.";
        
        //TODO: validate if email already registered...
        
        //TODO: register email in DB.
        
        return new SimpleMessage(msg);
        
    }
    
}
