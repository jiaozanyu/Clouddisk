<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="sidebar-nav">
        <a href="#dashboard-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>菜单</a>
        <ul id="dashboard-menu" class="nav nav-list collapse in">
            <li><a href="index">上传记录</a></li>
              <li><a href="index2">下载列表</a></li>
               <li><a href="<%=request.getContextPath()%>/upload1.jsp">上传文件</a></li>
            <li><a href="<%=request.getContextPath()%>/upload.jsp">学号分享</a></li>
            <li><a href="userlist">好友列表</a></li>
            <li><a href="<%=request.getContextPath()%>/useradd.jsp">添加好友</a></li>
            <li><a href="ifuseradd">申请列表</a></li>
        </ul>
    </div>