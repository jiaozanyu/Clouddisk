<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
	if (request.getSession().getAttribute("manager") == null) {
		response.sendRedirect(request.getContextPath()
				+ "/login.html");
	}
%>
                    <footer>
                        <hr>

                        <!-- Purchase a site license to remove this link from the footer: http://www.portnine.com/bootstrap-themes -->
                     
                       
                    </footer>