package com.swu.clouddisk.action;

import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.dao.ManagerDao;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class LoginAction implements Action{

	private String username;
	private String password;

	
	
	
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







	public String execute() throws Exception {
		boolean flag = false;
			flag = managerLogin();
		if(flag) return SUCCESS;
		return ERROR;
	}
	/*
	private boolean userLogin(){
		User user = new Userdao().login(username, password);
		if (user != null){
			 Map session = ActionContext.getContext().getSession();
			 session.put("user", user);
			 ActionContext.getContext().setSession(session);
			 return true;
		}
		return false;
		
	}*/
	private boolean managerLogin(){
		System.out.println("login");
		Manager manager = new ManagerDao().login(username, password);
		if(manager != null){
			 Map session = ActionContext.getContext().getSession();
			 session.put("manager", manager);
			 ActionContext.getContext().setSession(session);
			 return true;
		}
		return false;
		
	}
	public String out(){
		System.out.println("out");
		 Map session = ActionContext.getContext().getSession();
		 session.put("manager", null);
		 ActionContext.getContext().setSession(session);
		return SUCCESS;
	}

}
