package com.swu.clouddisk.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.rowset.CachedRowSet;

import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.Result;
import com.swu.clouddisk.entity.User;
import com.swu.clouddisk.tool.DbHelp;

public class ResultDao {
	public List<Result> getListByUser(Manager manager){
		List<Result> results = new ArrayList<Result>();
		Result result;
		String sql = "select * from result where uid = ?";
		Object[] arr = {manager.getId()};
		CachedRowSet rs = DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
				result = new Result();
				result.setId(rs.getString(1));
				result.setUid(rs.getString(2));
				result.setName(rs.getString(3));
				result.setUrl(rs.getString(4));
				result.setTime(rs.getString(5));
				results.add(result);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return results;
	}
	public List<Result> getListByManager(Manager manager){
		List<Result> results = new ArrayList<Result>();
		Result result;
		String sql = "select * from result where id = ?";
		Object[] arr = {manager.getId()};
		CachedRowSet rs = DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
				result = new Result();
				result.setId(rs.getString(1));
				result.setUid(rs.getString(2));
				result.setName(rs.getString(3));
				result.setUrl(rs.getString(4));
				result.setTime(rs.getString(5));
				results.add(result);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return results;
	}
	public List<Result> getAllList(){
		List<Result> results = new ArrayList<Result>();
		Result result;
		String sql = "select * from result order by id desc";
		CachedRowSet rs = DbHelp.executeQuery(sql);
		try {
			while (rs.next()){
				result = new Result();
				result.setId(rs.getString(1));
				result.setUid(rs.getString(2));
				result.setName(rs.getString(3));
				result.setUrl(rs.getString(4));
				result.setTime(rs.getString(5));
				results.add(result);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return results;
	}
	
	public boolean add(String id,String uid,String name,String url,String time){
		boolean flag = false;
		String sql = "insert into result(id,uid,name,url,time) values(?,?,?,?,?)";
		Object[] arr = {id,uid,name,url,time};
		
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		
		
		
		return flag;
		
	}
	public boolean del(String url){
		boolean flag = false;
		String sql = "delete from result where url = ?";
		Object[] arr={url};
		if(DbHelp.executeUpdata(sql, arr)>0){
			flag = true;
		}
		return flag;
	}
}
