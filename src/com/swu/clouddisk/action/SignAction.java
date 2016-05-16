package com.swu.clouddisk.action;

import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.dao.ManagerDao;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class SignAction implements Action { 
	     private Manager manager;
	   
	     

	public Manager getManager() {
			return manager;
		}



		public void setManager(Manager manager) {
			this.manager = manager;
		}



	public String execute() throws Exception {
		boolean flag = false;
		
		flag=new ManagerDao().addManager(manager);
		if(flag){
		return SUCCESS;
		}
		else
		{
			return ERROR;
		}
	}
	public String add() throws Exception{
		return null;

	}

}
