<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="sidebar-nav">
        <a href="#dashboard-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>菜单</a>
        <ul id="dashboard-menu" class="nav nav-list collapse in">
            <li><a href="index">资源管理</a></li>
              <li><a href="<%=request.getContextPath()%>/manager/download.jsp">我的下载列表</a></li>
            <li><a href="<%=request.getContextPath()%>/manager/upload.jsp">按学号分享</a></li>
            <li><a href="Userlist">我的好友列表</a></li>
            <li><a href="<%=request.getContextPath()%>/manager/useradd.jsp">添加好友</a></li>
            <li><a href="<%=request.getContextPath()%>/manager/adduser.jsp">好友申请列表</a></li>
        </ul>
    </div>