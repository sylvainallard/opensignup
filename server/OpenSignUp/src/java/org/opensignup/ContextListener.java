package org.opensignup;



import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 *
 * @author sylvain
 */
public final class ContextListener implements ServletContextListener {


    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("ContextListener.contextInitialized : IN");
        OpensignupConfig.parse(sce.getServletContext());
    }

    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("ContextListener.contextDestroyed: IN");
    }
}

