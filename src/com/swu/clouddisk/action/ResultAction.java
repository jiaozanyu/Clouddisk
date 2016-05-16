package com.swu.clouddisk.action;

import java.io.File;

import com.opensymphony.xwork2.Action;
import com.swu.clouddisk.dao.ResultDao;

public class ResultAction implements Action {

	private String url;
	


	public String getUrl() {
		return url;
	}



	public void setUrl(String url) {
		this.url = url;
	}



	public String execute() throws Exception {
		String upload="E:/hospital/WebContent/download/"+url;
		File f = new File(upload); // 输入要删除的文件位置
		if(f.exists())
		f.delete(); 
		if(new ResultDao().del(url)){
			return SUCCESS;
		}
		return ERROR;
	}

}
