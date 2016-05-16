package com.swu.clouddisk.action;

import com.opensymphony.xwork2.Action;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class UserAction implements Action{
	private Manager manager;
	private String uid;
	
	
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String execute() throws Exception {
		return null;
	}

	public String Del() throws Exception{
		User u = new User();
		u.setId(uid);
		if(new Userdao().delUser(u)){
			return SUCCESS;
		}
		return null;
	}

}
