package com.swu.clouddisk.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.Action;
import com.swu.clouddisk.dao.ResultDao;

public class ResultUploadAction implements Action {
	private String id;
	private String uid;
	private String name;
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	private String resultTime;
	private File resultFile;
	private String resultFileFileName;
	private String resultFileContentType;

	public String getResultFileFileName() {
		return resultFileFileName;
	}

	public void setResultFileFileName(String resultFileFileName) {
		this.resultFileFileName = resultFileFileName;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getResultFileContentType() {
		return resultFileContentType;
	}

	public void setResultFileContentType(String resultFileContentType) {
		this.resultFileContentType = resultFileContentType;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getResultTime() {
		return resultTime;
	}

	public void setResultTime(String resultTime) {
		this.resultTime = resultTime;
	}

	public File getResultFile() {
		return resultFile;
	}

	public void setResultFile(File resultFile) {
		this.resultFile = resultFile;
	}

	public String execute() throws Exception {
		//String upload = ServletActionContext.getServletContext().getRealPath("/WebContent/download");
		//String upload = ServletActionContext.getRequest().getContextPath()+"/WebContent/download";
		String upload="E:/hospital/WebContent/download";
	
	      System.out.println("realpath: "+upload);
		  if (resultFile != null) {
	            File savefile = new File(new File(upload), resultFileFileName);
	            if (!savefile.getParentFile().exists())
	                savefile.getParentFile().mkdirs();
	            FileUtils.copyFile(resultFile, savefile);

	/*	if(resultFile != null && resultTime != null && uid != null){
			//InputStream is = new FileInputStream(resultFile);
			String upload = ServletActionContext.getServletContext().getRealPath("/download");
		    System.out.println("realpath: "+upload);
			File toFile = new File(upload,resultFileFileName);
			if (toFile.getParentFile() != null && !toFile.getParentFile().exists()){
				toFile.getParentFile().mkdirs();
			}
			FileUtils.copyFile(resultFile, toFile);*/
			/*
			OutputStream os = new FileOutputStream(toFile);
			
			byte[] buffer = new byte[2048];
			int length = 0;
			while ((length = is.read(buffer)) > 0){
				os.write(buffer, 0, length); 
			}
			is.close();
			os.close();
	*/
			if(new ResultDao().add(id,uid,name,resultFileFileName , resultTime)){
				return SUCCESS;
			}
		}
		return null;
	}

}
