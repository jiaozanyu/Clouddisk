package com.swu.clouddisk.action;

import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.dao.ManagerDao;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class PasswordAction implements Action{
	private String password;
	

	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String execute() throws Exception {
		Map session = ActionContext.getContext().getSession();
		if (session.get("user")!=null){
			User u = (User)session.get("user");
			if(new Userdao().pass(password, u.getId())){
				return SUCCESS;
			}
		}else{
			Manager m = (Manager)session.get("manager");
			if(new ManagerDao().pass(password, m.getId())){
				return SUCCESS;
			}
		}
		return ERROR;
	}
	
}
