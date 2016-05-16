package com.swu.clouddisk.action;

import com.opensymphony.xwork2.Action;
import com.swu.clouddisk.dao.ApplicantDao;
import com.swu.clouddisk.dao.FriendDao;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Friend;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class appuserAction implements Action{
	private Friend friend;
	private String username;
	
	

	public Friend getFriend() {
		return friend;
	}

	public void setFriend(Friend friend) {
		this.friend = friend;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String execute() throws Exception {
		return null;
	}
	public String Add() throws Exception{
		FriendDao FD =new FriendDao();
		if(FD.addApplicant(friend) &&FD.addApplicant2(friend)  ){

			if(new ApplicantDao().delUser(username)){
				return SUCCESS;
			}
		}
		return null;
	}
	public String Del() throws Exception{
		
		if(new ApplicantDao().delUser(username)){
			return SUCCESS;
		}
		return null;
	}

}
