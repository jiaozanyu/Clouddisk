package com.swu.clouddisk.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.rowset.CachedRowSet;

import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.entity.Applicant;
import com.swu.clouddisk.entity.Friend;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;
import com.swu.clouddisk.tool.DbHelp;

public class FriendDao {
	public List<Manager> list(String username){
		List<Manager> managerList = new ArrayList<Manager>();
		Manager manager = null;
		String sql = "select * from friend where username = ?";
		Object[] arr = {username};
		CachedRowSet rs = DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
			String sql2 = "select * from manager where id = ?";
			Object[] arr2 = {rs.getString(3)};
			CachedRowSet rs2 = DbHelp.executeQuery(sql2, arr2);
			try {
				while (rs2.next()){
					manager = new Manager();
					manager.setId(rs2.getString(1));
					manager.setLoginName(rs2.getString(2));
					manager.setPassword(rs2.getString(3));
					managerList.add(manager);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return managerList;
	}
	 public boolean addApplicant(Friend friend){
			boolean flag = false;
			String sql = "insert into friend(username,friendname) values(?,?)";
			Object[] arr = {friend.getUsername(),friend.getFriendname()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
	 public boolean addApplicant2(Friend friend){
			boolean flag = false;
			String sql = "insert into friend(username,friendname) values(?,?)";
			Object[] arr = {friend.getFriendname(),friend.getUsername()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
	 public boolean delUser(Friend friend){
	
			
			boolean flag = false;
			String sql = "delete from friend where friendname= ?";
			Object[] arr = {friend.getFriendname()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
}
