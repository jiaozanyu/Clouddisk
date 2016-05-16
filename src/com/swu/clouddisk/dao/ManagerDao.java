package com.swu.clouddisk.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.rowset.CachedRowSet;

import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;
import com.swu.clouddisk.tool.DbHelp;

public class ManagerDao {
	public Manager login(String loginName,String password){
		Manager manager = null;
		String sql = "select * from manager where name = ? and password = ?";
		Object[] arr = {loginName,password};
		CachedRowSet rs = DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
				manager = new Manager();
				manager.setId(rs.getString(1));
				manager.setLoginName(rs.getString(2));
				manager.setPassword(rs.getString(3));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return manager;
	}
	public List<Manager> list(String id){
		List<Manager> managerList = new ArrayList<Manager>();
		Manager manager = null;
		String sql = "select * from manager where id <> ?";
		Object[] arr = {id};
		CachedRowSet rs = DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
				manager = new Manager();
				manager.setId(rs.getString(1));
				manager.setLoginName(rs.getString(2));
				manager.setPassword(rs.getString(3));
				managerList.add(manager);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return managerList;
	}
	 public boolean addManager(Manager manager){
			boolean flag = false;
			String sql = "insert into manager(id,name,password) values(?,?,?)";
			Object[] arr = {manager.getId(),manager.getLoginName(),manager.getPassword()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
	 public boolean delUser(Manager manager){
			boolean flag = false;
			String sql = "delete from manager where id = ?";
			Object[] arr = {manager.getId()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
	public boolean pass(String password,String id){
		boolean flag = false;
		String sql ="update manager  set password = ? where id = ?";
		Object[] arr = {password,id};
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		return flag;
	}
}
