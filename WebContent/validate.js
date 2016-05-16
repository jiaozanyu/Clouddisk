var formValidate = {};

/**
 * [login 登录]
 * @return {[type]} [description]
 */
formValidate.login = function () {
    $('#login-form').validate({
        rules : {
            email : {
                required : true,
                email : true
            },
            password : "required"
        },
        messages : {
            email : {
                required : "请输入账号",
                email : "请输入正确的邮箱格式"
            },
            password : "请输入密码"
        }
    });
}

/**
 * [register 注册]
 * @return {[type]} [description]
 */
formValidate.register = function () {
    $('#register-form').validate({
        rules : {
            email : {
                required : true,
                email : true,
            },
            password : {
                required : true,
                rangelength : [6, 16]
            },
            repassword : {
                required : true,
                rangelength : [6, 16],
                equalTo : '#password'
            },
            name : "required",
            stu_num : {
                required : true,
                digits : true
            },
            username : {
                required : true
            }
        },
        messages : {
            email : {
                required : "请输入邮箱",
                email : "请输入格式正确的邮箱"
            },
            password : {
                required : "请输入密码",
                rangelength : "密码的长度为6~16位"
            },
            repassword : {
                required : "请再次输入密码",
                rangelength : "密码的长度为6~16位",
                equalTo : '两次输入的密码不一致'
            },
            name : "请输入姓名",
            stu_num : {
                required : "请输入学号",
                digits : "学号只能为数字"
            },
            username : {
                required : "请输入您的用户名，用户名可以包含字母数字-_.不能以-开头，不能以.结尾"
            }
        }
    });
}

/**
 * [teacherAdd 录入老师账号]
 * @return {[type]} [description]
 */
formValidate.teacherAdd = function () {
    $('#teacher-add-form').validate({
        rules : {
            email : {
                required : true,
                email : true,
            },
            password : {
                required : true,
                rangelength : [6, 16]
            },
            repassword : {
                required : true,
                rangelength : [6, 16],
                equalTo : '#password'
            },
            name : "required",
        },
        messages : {
            email : {
                required : "请输入邮箱",
                email : "请输入格式正确的邮箱"
            },
            password : {
                required : "请输入密码",
                rangelength : "密码的长度为6~16位"
            },
            repassword : {
                required : "请再次输入密码",
                rangelength : "密码的长度为6~16位",
                equalTo : '两次输入的密码不一致'
            },
            name : "请输入姓名",
        }
    });
}

/**
 * [changePassword 修改密码]
 * @return {[type]} [description]
 */
formValidate.changePassword = function () {
    $('#change-password-form').validate({
        rules : {
            origin_pwd : "required",
            new_pwd : {
                required : true,
                rangelength : [6, 16]
            },
            re_pwd : {
                required : true,
                rangelength : [6, 16],
                equalTo : "#new_pwd"
            }
        },
        messages : {
            origin_pwd : '请输入原密码',
            new_pwd : {
                required : '请输入新密码',
                rangelength : '新密码的长度为6~16位'
            },
            re_pwd : {
                required : '请再次输入新密码',
                rangelength : '新密码的长度为6~16位',
                equalTo : '两次输入的密码不一致'
            }
        }
    });
}

/**
 * [auth 验证忘记密码请求]
 * @return {[type]} [description]
 */
formValidate.auth = function () {
    $('#auth-form').validate({
        rules : {
            email : {
                required : true,
                email : true
            },
            code : {
                required : true,
                digits : true,
                maxlength : 6,
                minlength : 6
            }
        },
        messages : {
            email : {
                required : "请输入邮箱",
                email : '请输入格式正确的邮箱'
            },
            code : {
                required : '请输入验证码',
                digits : "请输入正确的6位验证码",
                maxlength : "请输入正确的6位验证码",
                minlength : "请输入正确的6位验证码"
            }
        }
    });
}

/**
 * [forgetPassword 忘记面]
 * @return {[type]} [description]
 */
formValidate.forgetPassword = function () {
    $('#orget-password-form').validate({
        rules : {
            new_pwd : {
                required : true,
                rangelength : [6, 16]
            },
            re_pwd : {
                required : true,
                rangelength : [6, 16],
                equalTo : "#new_pwd"
            }
        },
        messages : {
            new_pwd : {
                required : '请输入新密码',
                rangelength : '密码的长度为6~16位'
            },
            re_pwd : {
                required : '请再次输入新密码',
                rangelength : '密码的长度为6~16位',
                equalTo : '两次输入的密码不一致'
            }
        }
    });
}

/**
 * 添加课程表单验证
 * @return {[type]}
 */
formValidate.groupAdd = function () {
    $('#group-add-form').validate({
        rules : {
            name : "required"
        },
        messages : {
            name : "请输入课程名称"
        }
    });
}


/**
 * 修改课程表单验证
 * @return {[type]}
 */
formValidate.groupEdit = function () {
    $('#group-edit-form').validate({
        rules : {
            name : "required"
        },
        messages : {
            name : "请输入课程名称"
        }
    });
}

/**
 * 添加课题
 * @return {[type]}
 */
formValidate.projectAdd = function () {
    $('#project-add-form').validate({
        rules : {
            group_id : "required",
            name : "required",
            job : {
                required : true,
                minlength : 2
            },
            stu_count : {
                required : true,
                number : true
            },
            content : "required"
        },
        messages : {
            group_id : "请选择课程名称",
            name : "请输入课题名称",
            job : {
                required : "请选择职位",
                minlength : "至少选择2个职位"
            },
            stu_count : {
                required : "请输入所需人数",
                number : "所需人数必须是整数"
            },
            content : "请输入课题的详细信息"
        }
    });
}

/**
 * [projectEdit 添加课题]
 * @return {[type]} [description]
 */
formValidate.projectEdit = function () {
    $('#project-edit-form').validate({
        rules : {
            group_id : "required",
            name : "required",
            job : {
                required : true,
                minlength : 2
            },
            stu_count : {
                required : true,
                number : true
            },
            content : "required"
        },
        messages : {
            group_id : "请选择课程名称",
            name : "请输入课题名称",
            job : {
                required : "请选择职位",
                minlength : "至少选择2个职位"
            },
            stu_count : {
                required : "请输入所需人数",
                number : "所需人数必须是整数"
            },
            content : "请输入课题的详细信息"
        }
    });
}

/**
 * [projectChoose 选择课题]
 * @return {[type]} [description]
 */
formValidate.projectChoose = function () {
    $('#project-choose-form').validate({
        rules : {
            job : "required"
        },
        messages : {
            job : {
                required : "请选择职位"
            }
        }
    });
}

/**
 * [processAdd 添加时间节点]
 * @return {[type]} [description]
 */
formValidate.processAdd = function () {
    $('#process-add-form').validate({
        rules : {
            begin_time : "required",
            end_time : "required"
        },
        messages : {
            begin_time : "请选择开始时间",
            end_time : "请选择结束时间"
        }
    });
}

/**
 * [processEdit 修改时间节点]
 * @return {[type]} [description]
 */
formValidate.processEdit = function () {
    $('#process-edit-form').validate({
        rules : {
            begin_time : "required",
            end_time : "required"
        },
        messages : {
            begin_time : "请输入开始时间",
            end_time : "请输入结束时间"
        }
    });
}

/**
 * [jobAdd 添加职位]
 * @return {[type]} [description]
 */
formValidate.jobAdd = function () {
    $('#job-add-form').validate({
        rules : {
            name : "required"
        },
        messages : {
            name : "请输入职位名称"
        }
    });
}

/**
 * [jobEdit 修改职位]
 * @return {[type]} [description]
 */
formValidate.jobEdit = function () {
    $('#job-edit-form').validate({
        rules : {
            name : "required"
        },
        messages : {
            name : "请输入职位名称"
        }
    });
}

formValidate.nodeAdd = function(){
    $('#node-add-form').validate({
        rules : {
            name : "required",
            title : "required"
        },
        messages : {
            name : "请输入名称",
            title : "请输入备注信息"
        }
    });
}

formValidate.nodeEdit = function(){
    $('#node-edit-form').validate({
        rules : {
            name : "required",
            title : "required"
        },
        messages : {
            name : "请输入名称",
            title : "请输入备注信息"
        }
    });
}

formValidate.TeamAdd = function(){
    $('#team-add-form').validate({
        rules : {
            groups : "required",
            project : "required",
            member : "required"
        },
        messages : {
            groups : "请选择课程",
            project : "请选择课题",
            member : "请选择组成员"
        }
    });
}

formValidate.ReportAdd = function(){
    $('#report-add-form').validate({
        rules : {
            name : "required",
            author : "required",
            content : "required"
        },
        messages : {
            name : "请输入报告名称",
            author : "请选择报告人",
            content : "请输入报告内容"
        }
    });
}

formValidate.ReportEdit = function(){
    $('#report-edit-form').validate({
        rules : {
            name : "required",
            content : "required"
        },
        messages : {
            name : "请输入报告名称",
            content : "请输入报告内容"
        }
    });
}

$(function () {
    formValidate.login();
    formValidate.register();
    formValidate.changePassword();
    formValidate.teacherAdd();
    formValidate.auth();
    formValidate.forgetPassword();

    formValidate.groupAdd();
    formValidate.groupEdit();

    formValidate.projectAdd();
    formValidate.projectEdit();
    formValidate.projectChoose();

    formValidate.processAdd();
    formValidate.processEdit();

    formValidate.jobAdd();
    formValidate.jobEdit();

    formValidate.nodeAdd();
    formValidate.nodeEdit();
    formValidate.TeamAdd();

    formValidate.ReportAdd();
    formValidate.ReportEdit();
});
