package com.swu.clouddisk.action;
//好友添加申请
import com.opensymphony.xwork2.Action;
import com.swu.clouddisk.dao.ApplicantDao;
import com.swu.clouddisk.dao.Userdao;
import com.swu.clouddisk.entity.Applicant;
import com.swu.clouddisk.entity.Manager;
import com.swu.clouddisk.entity.User;

public class appAction implements Action{
	private Applicant  applicant;

	
	public Applicant getApplicant() {
		return applicant;
	}

	public void setApplicant(Applicant applicant) {
		this.applicant = applicant;
	}

	public String execute() throws Exception {
		  boolean flag=new ApplicantDao().addApplicant(applicant);
		   
    	  if(flag  )
    		  return SUCCESS;
    	  
    	  return null;
	}
  
      /*
	public String Del() throws Exception{
		User u = new User();
		u.setId(uid);
		if(new Userdao().delUser(u)){
			return SUCCESS;
		}
		return null;
	}*/
}
