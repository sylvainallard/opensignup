/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.opensignup.bean;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.opensignup.SignupFactory;
import org.opensignup.pojo.EmailSignup;
/**
 *
 * @author sylvain
 */
@Path("/public/signup")
@Produces({"application/json"})
public class SignupResourceBean {
    
    @POST
    public Response register(EmailSignup email) {
        System.out.println("SignupResourceBean.register : IN");
        return Response.ok(SignupFactory.signup(email)).build();
    }
    
}
