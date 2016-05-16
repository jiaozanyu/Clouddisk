<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="utf-8">
    <title>资源分享</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.css">
    
    <link rel="stylesheet" type="text/css" href="stylesheets/theme.css">
    <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.css">

    <script src="lib/jquery-1.7.2.min.js" type="text/javascript"></script>
 <script src="lib/bootstrap-datepicker.js" type="text/javascript"></script>
    <!-- Demo page code -->

    <style type="text/css">
        #line-chart {
            height:300px;
            width:800px;
            margin: 0px auto;
            margin-top: 1em;
        }
        .brand { font-family: georgia, serif; }
        .brand .first {
            color: #ccc;
            font-style: italic;
        }
        .brand .second {
            color: #fff;
            font-weight: bold;
        }
    </style>

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <!--[if lt IE 7 ]> <body class="ie ie6"> <![endif]-->
  <!--[if IE 7 ]> <body class="ie ie7 "> <![endif]-->
  <!--[if IE 8 ]> <body class="ie ie8 "> <![endif]-->
  <!--[if IE 9 ]> <body class="ie ie9 "> <![endif]-->
  <!--[if (gt IE 9)|!(IE)]><!--> 
  <body class=""> 
  <!--<![endif]-->
    
   <%@ include  file="head.jsp"%>
   <%@ include  file="menu.jsp"%> 


    
    
    

    
    <div class="content">
        
        <div class="header">
            
            <h1 class="page-title">资源分享</h1>
        </div>
        
                <ul class="breadcrumb">
            <li><a href="index">主页</a> <span class="divider">/</span></li>
            <li><a>资源分享</a> <span class="divider">/</span></li>
            
        </ul>

        <div class="container-fluid">
            <div class="row-fluid">
                    

<div class="well">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#home" data-toggle="tab">上传资源到网盘</a></li>
     
    </ul>
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane active in" id="home">
    <form id="tab" action="upload" enctype="multipart/form-data" method="post">
       
        <input type="text" value="${manager.id}" style="display:none" class="input-xlarge" name="id">
      
        <input type="text" value="${manager.id }" style="display:none" class="input-xlarge" name="uid">
         <label>资源名字</label>
        <input type="text" class="input-xlarge" name="name">
        <label>上传时间</label>
        <input type="text"  class="input-xlarge" name="resultTime" id="datepicker1">
        <label>选择文件：</label>
        <input type="file"  class="input-xlarge" name="resultFile">
		<label></label>
		<input type="submit" value="上传">
    </form>
      </div>

</div>

                    
<%@ include  file="footer.jsp"%>
                    
            </div>
        </div>
    </div>
    
</div>

    <script src="lib/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript">
        $("[rel=tooltip]").tooltip();
        $(function() {
            $('.demo-cancel-click').click(function(){return false;});
            $("#datepicker1").datepicker();
        });
    </script>
    
  </body>
</html>