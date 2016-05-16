<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	if (request.getSession().getAttribute("manager") == null) {
		response.sendRedirect(request.getContextPath()
				+ "/login.html");
	}
%>
<div class="navbar">
        <div class="navbar-inner">
                <ul class="nav pull-right">
                    
                    <li id="fat-menu" class="dropdown">
                        <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-user"></i> ${manager.loginName}
                            <i class="icon-caret-down"></i>
                        </a>

                        <ul class="dropdown-menu">
                            <li><a tabindex="-1" href="<%=request.getContextPath()%>/password.jsp">更改密码</a></li>
                            <li><a tabindex="-1" href="loginout">注销</a></li>
                        </ul>
                    </li>
                    
                </ul>
                <a class="brand" href="index.html"><span class="first">西南大学</span> <span class="second">CloudDisk</span></a>
        </div>
    </div>