package com.swu.clouddisk.action;

import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.dao.FriendDao;
import com.swu.clouddisk.dao.ManagerDao;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class UserListAction implements Action{

	private List<Manager> managerList;
	




	public List<Manager> getManagerList() {
		return managerList;
	}





	public void setManagerList(List<Manager> managerList) {
		this.managerList = managerList;
	}





	public String execute() throws Exception {
		//查询其他用户
		Manager manager=new Manager();
		Map session = ActionContext.getContext().getSession();
		manager=(Manager) session.get("manager");
		this.setManagerList(new FriendDao().list(manager.getId()));
		return SUCCESS;
	}
	
}
