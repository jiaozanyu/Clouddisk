package com.swu.clouddisk.action;

import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.dao.ApplicantDao;
import com.swu.clouddisk.dao.FriendDao;
import com.swu.clouddisk.dao.ManagerDao;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Applicant;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class UseraddListAction implements Action{

	private List<Applicant> applicantList;

	public List<Applicant> getApplicantList() {
		return applicantList;
	}


	public void setApplicantList(List<Applicant> applicantList) {
		this.applicantList = applicantList;
	}


	public String execute() throws Exception {
		//查询其他用户
		Manager manager=new Manager();
		Map session = ActionContext.getContext().getSession();
		manager=(Manager) session.get("manager");
		this.setApplicantList(new ApplicantDao().list(manager.getId()));
		return SUCCESS;
	}
	
}
