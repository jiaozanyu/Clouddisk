package com.swu.clouddisk.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.rowset.CachedRowSet;

import com.swu.clouddisk.entity.User;
import com.swu.clouddisk.tool.DbHelp;

public class Userdao {
	public User login(String name,String password){
		User user = null;
		String sql = "select * from user where id = ? and password = ?";
		Object[] arr = {name,password};
		CachedRowSet rs =  DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
				user = new User();
				user.setId(rs.getString(1));
				user.setName(rs.getString(2));
				user.setPassword(rs.getString(3));
				user.setType(rs.getString(4));
				user.setMz(rs.getString(5));
				user.setSex(rs.getString(6));
				user.setSid(rs.getString(7));
				user.setBirth(rs.getString(8));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return user;
	}
	public List<User> list(){
		List<User> userList = new ArrayList<User>();
		User user;
		String sql = "select * from user order by id";
		CachedRowSet rs = DbHelp.executeQuery(sql);
		try {
			while (rs.next()){
				user = new User();
				user.setId(rs.getString(1));
				user.setName(rs.getString(2));
				user.setPassword(rs.getString(3));
				user.setType(rs.getString(4));
				user.setMz(rs.getString(5));
				user.setSex(rs.getString(6));
				user.setSid(rs.getString(7));
				user.setBirth(rs.getString(8));
				userList.add(user);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return userList;
	}
	public boolean changePassword(String id,String password){
		boolean flag = false;
		String sql = "update user set password=? where id = ?";
		Object[] arr = {password,id};
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		return flag;
	}
	public boolean addUser(User user){
		boolean flag = false;
		String sql = "insert into user(id,password,name,type,mz,sex,sid,birth) values(?,?,?,?,?,?,?,?)";
		Object[] arr = {user.getId(),user.getPassword(),user.getName(),user.getType(),user.getMz(),user.getSex(),user.getSid(),user.getBirth()};
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		return flag;
	}
	public boolean delUser(User user){
		boolean flag = false;
		String sql = "delete from user where id = ?";
		Object[] arr = {user.getId()};
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		return flag;
	}
	public boolean pass(String password,String id){
		boolean flag = false;
		String sql ="update user  set password = ? where id = ?";
		Object[] arr = {password,id};
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		return flag;
	}
}
