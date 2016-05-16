package com.swu.clouddisk.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.rowset.CachedRowSet;

import com.opensymphony.xwork2.ActionContext;
import com.swu.clouddisk.entity.Applicant;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;
import com.swu.clouddisk.tool.DbHelp;

public class ApplicantDao {
	public List<Applicant> list(String beapplicant){
		List<Applicant> applicantList = new ArrayList<Applicant>();
		Applicant applicant = null;
		String sql = "select * from applicant where beapplicant = ?";
		Object[] arr = {beapplicant};
		CachedRowSet rs = DbHelp.executeQuery(sql, arr);
		try {
			while (rs.next()){
				applicant = new Applicant();
				applicant.setApplicant(rs.getString(2));
				applicant.setBeapplicant(rs.getString(3));
				applicantList.add(applicant);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return applicantList;
	}
	 public boolean addApplicant(Applicant applicant){
			boolean flag = false;
			String sql = "insert into applicant(applicant,beapplicant) values(?,?)";
			Object[] arr = {applicant.getApplicant(),applicant.getBeapplicant()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
	 public boolean addApplicant2(Applicant applicant){
			boolean flag = false;
			String sql = "insert into applicant(applicant,beapplicant) values(?,?)";
			Object[] arr = {applicant.getBeapplicant(),applicant.getApplicant()};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
	 public boolean delUser(String username){
	
			
			boolean flag = false;
			String sql = "delete from applicant where applicant= ?";
			Object[] arr = {username};
			if(DbHelp.executeUpdata(sql, arr)>0){
				flag = true;
			}
			return flag;
		}
}
