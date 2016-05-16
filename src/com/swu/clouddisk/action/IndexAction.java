package com.swu.clouddisk.action;

import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.dao.ResultDao;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.Result;
import com.swu.clouddisk.entity.User;

public class IndexAction implements Action {

	private Manager manager;
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	//资源管理
	private List<Result> resultList1;
	//可下载页面
	private List<Result> resultList2;

	public List<Result> getResultList1() {
		return resultList1;
	}
	public void setResultList1(List<Result> resultList1) {
		this.resultList1 = resultList1;
	}
	public List<Result> getResultList2() {
		return resultList2;
	}
	public void setResultList2(List<Result> resultList2) {
		this.resultList2 = resultList2;
	}
	public String execute() throws Exception {
		Map session = ActionContext.getContext().getSession();
		if(session.get("manager") != null){
			this.setManager((Manager)session.get("manager"));
		     this.setResultList1(new ResultDao().getListByManager(manager));
		     
		}
		return SUCCESS;
	}
	}


