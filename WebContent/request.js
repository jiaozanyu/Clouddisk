var request = {};
var serverEntry = $('#server_entry').val();

/**
 * [login 登录]
 * @return {[type]} [description]
 */
request.login = function () {
    $('#login-commit').click(function () {
        var email = $('#email').val();
        var password = $('#password').val();
        var remember = $('#remember').prop('checked') ? 'remember' : undefined;

        if($('#login-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/User/login',
                type : 'POST',
                dataType : 'json',
                data : {
                    email : email,
                    password : password,
                    remember : remember
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        window.location.href = serverEntry + '/Home/User';
                    } else {
                        common.publicModalShow(data.desc);
                    }
                }
            });
        }
    });
}

/**
 * [register 学生注册]
 * @return {[type]} [description]
 */
request.register = function () {
    $('#register-commit').click(function () {
        var email = $('#email').val();
        var password = $('#password').val();
        var repassword = $('#repassword').val();
        var name = $('#name').val();
        var username = $('#username').val();
        var stu_num = $('#stu_num').val();
        var button = $(this);

        if($('#register-form').valid()) {
            button.attr('disabled', 'disabled');
            $.ajax({
                url : serverEntry + '/Home/User/register',
                type : 'POST',
                dataType : 'json',
                data : {
                    email : email,
                    password : password,
                    repassword : repassword,
                    name : name,
                    stu_num : stu_num,
                    username : username
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        window.location.href = serverEntry + '/Home/User';
                    } else {
                        common.publicModalShow(data.desc);
                    }
                    button.removeAttr('disabled');
                }
            });
        }
    });
}

/**
 * [teacherAdd 录入老师账号]
 * @return {[type]} [description]
 */
request.teacherAdd = function () {
    $('#teacher-add-commit').click(function () {
        var email = $('#email').val();
        var password = $('#password').val();
        var repassword = $('#repassword').val();
        var name = $('#name').val();

        if($('#teacher-add-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/Teacher/add',
                type : 'POST',
                dataType : 'json',
                data : {
                    email : email,
                    password : password,
                    repassword : repassword,
                    name : name,
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        window.location.href = serverEntry + '/Home/User';
                    } else {
                        common.publicModalShow(data.desc);
                    }
                }
            });
        }
    });
}

/**
 * [changePassword 修改密码]
 * @return {[type]} [description]
 */
request.changePassword = function () {
    $('#change-password-commit').click(function () {
        var origin_pwd = $('#origin_pwd').val();
        var new_pwd = $('#new_pwd').val();
        var re_pwd = $('#re_pwd').val();

        if($('#change-password-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/User/change_password',
                type : 'POST',
                dataType : 'json',
                data : {
                    origin_pwd : origin_pwd,
                    new_pwd : new_pwd,
                    re_pwd : re_pwd
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

/**
 * [countDown 倒计时函数]
 * @param  {[type]}   element  [显示倒计时的标签]
 * @param  {[type]}   count    [从哪个数开始倒计时]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
request.countDown = function (element, count, callback) {
    var element = $(element);
    var time = setInterval(function () {
        element.html(count + '秒');
        count -= 1;
        if(count == 0) {
            setTimeout(function () {
                if(typeof callback == 'function' && callback) {
                    callback();
                }
            }, 1000);
            clearInterval(time);
        }
    }, 1000);
}

/**
 * [authEmail 向邮箱发送验证码]
 * @return {[type]} [description]
 */
request.authEmail = function () {
    var sendAuthCode = $('#send-auth-code');
    sendAuthCode.click(function () {
        var email = $('#email').val();
        var auth = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
        var labelEmail = $('label[for="email"]');
        $('#email').focusin(function() {
            labelEmail.html('');
        });

        if(!auth.test(email)) {
            labelEmail.html('请输入格式正确的邮箱');
        } else {
            $.ajax({
                url : serverEntry + '/Home/User/forget_password',
                type : 'POST',
                dataType : 'json',
                data : {
                    email : email,
                    request : 'code'
                },
                success : function (data) {
                    if(parseInt(data.error) == 0){
                        sendAuthCode.attr('disabled', 'disabled');
                        request.countDown(sendAuthCode, parseInt(data.desc.time), function () {
                            sendAuthCode.removeAttr('disabled').html('发送验证码');
                        });
                    } else {
                        common.publicModalShow(data.desc);
                    }
                }
            });
        }
    });
}

/**
 * [auth 发送忘记密码请求]
 * @return {[type]} [description]
 */
request.auth = function () {
    $('#auth-commit').click(function () {
        var email = $('#email').val();
        var code = $('#code').val();

        if($('#auth-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/User/forget_password',
                type : 'POST',
                dataType : 'json',
                data : {
                    email : email,
                    code : code,
                    request : 'verify'
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        window.location.href = data.desc.url;
                    } else {
                        common.publicModalShow(data.desc);
                    }
                }
            });
        }
    })
}

/**
 * [forgetPassword 重置密码]
 * @return {[type]} [description]
 */
request.forgetPassword = function () {
    $('#forget-password-commit').click(function () {
        var new_pwd = $('#new_pwd').val();
        var re_pwd = $('#re_pwd').val();
        $.ajax({
            url : serverEntry + '/Home/User/forget_password',
            type : 'POST',
            dataType : 'json',
            data : {
                new_pwd : new_pwd,
                re_pwd : re_pwd,
                request : 'update'
            },
            success : function (data) {
                console.log(data);
                if(parseInt(data.error) == 0) {
                    window.location.href = data.desc.url;
                } else {
                    common.publicModalShow(data.desc);
                }
            }
        });
    });
}

/**
 * [groupInsert 添加课程的ajax请求]
 * @return {[type]} [description]
 */
request.groupAdd = function () {
    $('#commit-add').click(function () {
        var name = $('#name').val();
        var button = $(this);
        button.attr('disabled', 'disabled');
        if($('#group-add-form').valid()) {
            //添加课程的ajax请求
            $.ajax({
                url : serverEntry + '/Home/Group/add',
                type : 'POST',
                dataType : 'json',
                data : { 'name' : name },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        $('input').val('');

                    } else {

                    }
                    button.removeAttr('disabled');
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

/**
 * [groupEdit 修改课程]
 * @return {[type]} [description]
 */
request.groupEdit = function () {
    $('#edit').click(function () {
        var name = $('#name').val();
        var id = $(this).attr('data-group-id');

         if($('#group-edit-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/Group/edit/id/' + id,
                type : 'POST',
                dataType : 'json',
                data : { 'name' : name },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            })
         }
    });
}


/**
 * [groupDel 删除课程]
 * @return {[type]} [description]
 */
request.groupDel = function () {
    $('.del').click(function () {
        var delElment = $(this);
        var id = delElment.attr('data-group-id');

        common.chooseModalShow('确定删除该课程？', function() {
            common.chooseModalCon(function() {
                $.ajax({
                    url : serverEntry + '/Home/Group/del',
                    type : 'POST',
                    dataType : 'json',
                    data : { 'id' : id },
                    success : function (data) {
                        if(parseInt(data.error) == 0) {
                            delElment.parents('tr').remove();
                            // window.location.href = window.location.href;
                        } else {

                        }
                        common.chooseModalClose(function () {
                            common.publicModalShow(data.desc);
                        });
                    },
                    error : function () {
                        common.chooseModalClose(function () {
                            common.publicModalShow('请求错误，请检查网络');
                        });
                    }
                });
            });
        });
    });
}

/**
 * [projectAdd 添加课题]
 * @return {[type]} [description]
 */
request.projectAdd = function () {
    $('#add-project-commit').click(function () {
        var button = $(this);
        var group_id = $('#group_id').val();
        var name = $('#name').val();

        var jobs = [];
        $('input[name="job"]:checked').each(function (index, element) {
            jobs.push($(element).val());
        });
        // jobs = jobs.join(',');
        var stu_count = $('#stu_count').val();

        var editor = CKEDITOR.instances.editor;
        editor.updateElement();

        var content = editor.getData();

        if($('#project-add-form').valid()) {
            button.attr('disabled', 'disabled');
            $.ajax({
               url : serverEntry + '/Home/Project/add',
               type : 'POST',
               dataType : 'json',
               data : {
                   'group_id' : group_id,
                   'name' : name,
                   'job' : jobs,
                   'stu_count' : stu_count,
                   'content' : content
               },
               success : function (data) {
                   if(parseInt(data.error) == 0) {
                       $('input').val('');
                       CKEDITOR.instances.editor.setData('');
                   } else {

                   }
                   button.removeAttr('disabled');
                   common.publicModalShow(data.desc);
               }
           });
        }
    });
}

/**
 * [projectEdit 修改课题]
 * @return {[type]} [description]
 */
request.projectEdit = function () {
    $('#edit-project').click(function () {
        var id = $(this).attr('data-project-id');
        var group_id = $('#group_id').val();
        var name = $('#name').val();

        var jobs = [];
        $('input[name="job"]:checked').each(function (index, element) {
            jobs.push($(element).val());
        });
        // jobs = jobs.join(',');

        var stu_count = $('#stu_count').val();

        var editor = CKEDITOR.instances.editor;
        editor.updateElement();

        var content = editor.getData();

         if($('#project-edit-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/Project/edit/id/' + id,
                type : 'POST',
                dataType : 'json',
                data : {
                    'group_id' : group_id,
                    'name' : name,
                    'job' : jobs,
                    'stu_count' : stu_count,
                    'content' : content
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            })
         }
    });
}

/**
 * [projectDel 删除课题]
 * @return {[type]} [description]
 */
request.projectDel = function () {
    $('.del-project').click(function () {
        var delElment = $(this);
        var id = delElment.attr('data-project-id');

        common.chooseModalShow('确定删除该课题？', function() {
            common.chooseModalCon(function() {
                $.ajax({
                    url : serverEntry + '/Home/Project/del',
                    type : 'POST',
                    dataType : 'json',
                    data : { 'id' : id },
                    success : function (data) {
                        if(parseInt(data.error) == 0) {
                            delElment.parents('tr').remove();
                            // window.location.href = window.location.href;
                        } else {

                        }
                        common.chooseModalClose(function () {
                            common.publicModalShow(data.desc);
                        });
                    },
                    error : function () {
                        common.chooseModalClose(function () {
                            common.publicModalShow('请求错误，请检查网络');
                        });
                    }
                });
            });
        });
    });
}

/**
 * [projectPublish 发布课题]
 * @return {[type]} [description]
 */
request.projectPublish = function () {
    $('.project-publish').click(function () {
        var projectId = $(this).attr('data-project-id');
        var button = $(this);
        if(projectId){
            $.ajax({
                url : serverEntry + '/Home/Project/publish',
                type : 'POST',
                dataType : 'json',
                data : { 'id' : projectId },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        button.parent().html('<button class="btn btn-success" disabled="disabled"> <i class="fa fa-fw fa-check-circle"></i>已发布</button>')
                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        } else {
            common.publicModalShow('发布失败');
        }
    });
}

/**
 * [projectChoose 选择课题]
 * @return {[type]} [description]
 */
request.projectChoose = function () {
    $('.project-choose').click(function () {
        if($('#project-choose-form').valid()) {
            var job_ids = [];
            var project_id = $(this).attr('data-project-id');
            $('input[name=job]:checked').each(function(){
                job_ids.push($(this).val());
            });
            var button = $(this);
            button.attr('disabled', 'disabled');
            $.ajax({
                url : serverEntry + '/Home/ProjectJob/select',
                type : 'POST',
                dataType : 'json',
                data : {
                    job_ids : job_ids,
                    project_id : project_id
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        // button.parent().html('<button class="btn btn-success" disabled="disabled"> <i class="fa fa-fw fa-check-circle"></i>已发布</button>')
                    } else {

                    }
                    common.publicModalShow(data.desc || data.info);
                }
            });
        }
    });
}

/**
 * [processAdd 添加时间节点]
 * @return {[type]} [description]
 */
request.processAdd = function () {
    $('#add-process-commit').click(function () {
        var process_name = $('#process_name').val();
        var begin_time = $('#begin_time').val();
        var end_time = $('#end_time').val();
        var rules = [];
        $('input[name=rules]:checked').each(function(){
            rules.push($(this).val());
        });
        if($('#process-add-form').valid()){
            $.ajax({
                url : serverEntry + '/Home/Process/add',
                type : 'POST',
                dataType : 'json',
                data : {
                    process_name : process_name,
                    begin_time : begin_time,
                    end_time : end_time,
                    rules : rules
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

request.processEdit = function () {
    $('#edit-process-commit').click(function () {
        var process_id = $('#process_id').val();
        var process_name = $('#process_name').val();
        var begin_time = $('#begin_time').val();
        var end_time = $('#end_time').val();
        var rules = [];
        $('input[name=rules]:checked').each(function(){
            rules.push($(this).val());
        });
        if($('#process-edit-form').valid()){
            $.ajax({
                url : serverEntry + '/Home/Process/edit',
                type : 'POST',
                dataType : 'json',
                data : {
                    id : process_id,
                    process_name : process_name,
                    begin_time : begin_time,
                    end_time : end_time,
                    rules : rules
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

/**
 * [processDel 删除时间节点]
 * @return {[type]} [description]
 */
request.processDel = function () {
    $('.del-process').click(function () {
        var delElment = $(this);
        var id = delElment.attr('data-process-id');

        common.chooseModalShow('确定删除该流程？', function() {
            common.chooseModalCon(function() {
                $.ajax({
                    url : serverEntry +  '/Home/Process/del',
                    type : 'POST',
                    dataType : 'json',
                    data : { 'id' : id },
                    success : function (data) {
                        if(parseInt(data.error) == 0) {
                            delElment.parents('tr').remove();
                            // window.location.href = window.location.href;
                        } else {

                        }
                        common.chooseModalClose(function () {
                            common.publicModalShow(data.desc);
                        });
                    },
                    error : function () {
                        common.chooseModalClose(function () {
                            common.publicModalShow('请求错误，请检查网络');
                        });
                    }
                });
            });
        });
    });
}

/**
 * [jobAdd 添加职位]
 * @return {[type]} [description]
 */
request.jobAdd = function () {
    $('#add-job-commit').click(function () {
        var name = $('#name').val();

        if($('#job-add-form').valid()) {
            //添加课程的ajax请求
            $.ajax({
                url : serverEntry + '/Home/Job/add',
                type : 'POST',
                dataType : 'json',
                data : { 'name' : name },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        $('input').val('');
                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

request.jobEdit = function () {
    $('#job-edit-commit').click(function () {
        var name = $('#name').val();
        var id = $(this).attr('data-job-id');

         if($('#job-edit-form').valid()) {
            $.ajax({
                url : serverEntry + '/Home/Job/edit/id/' + id,
                type : 'POST',
                dataType : 'json',
                data : { 'name' : name },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            })
         }
    });
}

request.jobDel = function () {
    $('.del-job').click(function () {
        var delElment = $(this);
        var id = delElment.attr('data-job-id');

        common.chooseModalShow('确定删除该职位？', function() {
            common.chooseModalCon(function() {
                $.ajax({
                    url : serverEntry + '/Home/Job/del/' + id,
                    type : 'POST',
                    dataType : 'json',
                    data : { 'id' : id },
                    success : function (data) {
                        if(parseInt(data.error) == 0) {
                            delElment.parents('tr').remove();
                            // window.location.href = window.location.href;
                        } else {

                        }
                        common.chooseModalClose(function () {
                            common.publicModalShow(data.desc);
                        });
                    },
                    error : function () {
                        common.chooseModalClose(function () {
                            common.publicModalShow('请求错误，请检查网络');
                        });
                    }
                });
            });
        });
    });
}

request.verifyPass = function(){
    $('.verify-pass').click(function(){
        var project_id = $(this).attr('data-project-id');
        var button = $(this);
        var click_func = this;
        $.ajax({
            url : serverEntry + '/Home/Verify/verify/pass/1/id/' + project_id,
            type : 'POST',
            dataType : 'json',
            data : {},
            success : function (data) {
                if(parseInt(data.error) == 0) {
                    button.parent().html('<span class="text-success"><i class="fa fa-fw fa-check"></i> 已通过</span><a href="#" class="verify-undo" data-project-id=' + project_id + '><i class="glyphicon glyphicon-repeat"></i> 撤销</a>');
                    // $('.verify-pass').bind('click', this);
                    location.reload(true);
                } else {

                }
                common.publicModalShow(data.desc);
            },
            error : function (){
                common.chooseModalClose(function () {
                    common.publicModalShow('请求错误，请检查网络');
                });
            }
        });

    });
}

request.verifyNotPass = function(){
    $('.verify-not-pass').click(function(){
        var project_id = $(this).attr('data-project-id');
        $.ajax({
            url : serverEntry + '/Home/Verify/verify/pass/0/id/' + project_id,
            type : 'POST',
            dataType : 'json',
            data : {},
            success : function (data) {
                if(parseInt(data.error) == 0) {
                    location.reload(true);
                } else {

                }
                common.publicModalShow(data.desc);
            }
        });

    });
}

request.verifyUndo = function(){
    $('.verify-undo').click(function(){
        var project_id = $(this).attr('data-project-id');
        $.ajax({
            url : serverEntry + '/Home/Verify/verify/pass/2/id/' + project_id,
            type : 'POST',
            dataType : 'json',
            data : {},
            success : function (data) {
                if(parseInt(data.error) == 0) {
                    location.reload(true);
                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    })
}

request.chooseGroup = function(){
    $('.choose-group').click(function(){
        var group_id = $(this).attr('data-group-id');
        var chooseBtn = $(this);
        chooseBtn.attr('disabled', 'disabled');
        $.ajax({
            url : serverEntry + '/Home/Group/select/id/' + group_id,
            type : 'POST',
            dataType : 'json',
            data : {},
            success : function (data) {
                if(parseInt(data.error) == 0) {
                    chooseBtn.parent().html('<span>已选课</span>');
                } else {
                    chooseBtn.removeAttr('disabled');
                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

request.editUserinfo = function(){
    $('.edit-user-info').click(function(){
        var uid = $(this).attr('data-uid');
        var name = $('#username').val();
        var email = $('#email').val();
        var stu_num = $('#stu_num').val();
        $.ajax({
            url : serverEntry + '/Home/User/edit_info',
            type : 'POST',
            dataType : 'json',
            data : {
                uid : uid,
                name : name,
                email : email,
                stu_num : stu_num
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {

                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    })
}

request.addNode = function(){
    $('#add-node-commit').click(function(){
        if($('#node-add-form').valid()){
            var name = $('#name').val();
            var title = $('#title').val();
            var pid = $('#pid').val();
            $.ajax({
                url : serverEntry + '/Home/Node/add',
                type : 'POST',
                dataType : 'json',
                data : {
                    name : name,
                    title : title,
                    pid : pid
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {
                        $('input').val('');
                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

request.editNode = function(){
    $('#edit-node-commit').click(function(){
        if($('#node-edit-form').valid()){
            var name = $('#name').val();
            var title = $('#title').val();
            var pid = $('#pid').val();
            var id = $('#id').val();
            $.ajax({
                url : serverEntry + '/Home/Node/edit',
                type : 'POST',
                dataType : 'json',
                data : {
                    id : id,
                    name : name,
                    title : title,
                    pid : pid
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

request.delNode = function (){
    $('.del-node').click(function(){
        var id = $(this).attr('data-node-id');
        var delElment = $(this);

        common.chooseModalShow('确定删除该节点？', function() {
            common.chooseModalCon(function() {
                $.ajax({
                    url : serverEntry + '/Home/Node/del/' + id,
                    type : 'POST',
                    dataType : 'json',
                    data : { 'id' : id },
                    success : function (data) {
                        if(parseInt(data.error) == 0) {
                            delElment.parents('tr').remove();
                            // window.location.href = window.location.href;
                        } else {

                        }
                        common.chooseModalClose(function () {
                            common.publicModalShow(data.desc);
                        });
                    },
                    error : function () {
                        common.chooseModalClose(function () {
                            common.publicModalShow('请求错误，请检查网络');
                        });
                    }
                });
            });
        });
    });
}

request.editTeam = function(){
    $('#team-edit-commit').click(function(){
        var team_id = $(this).attr('data-team-id');
        var name = $('#name').val();
        $.ajax({
            url : serverEntry + '/Home/Team/edit',
            type : 'POST',
            dataType : 'json',
            data : {
                id : team_id,
                name : name
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {

                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

request.editTeamLeader = function(){
    $('.btn-as-leader').click(function(){
        var team_id = $(this).attr('data-team-id');
        var student_id = $(this).attr('data-student-id');
        $.ajax({
            url : serverEntry + '/Home/Team/changeLeader',
            type : 'POST',
            dataType : 'json',
            data : {
                team_id : team_id,
                student_id : student_id
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {

                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

request.delTeamMember = function(){
    $('.btn-team-member-delete').click(function(){
        var team_id = $(this).attr('data-team-id');
        var student_id = $(this).attr('data-student-id');
        var button = $(this);
        $.ajax({
            url : serverEntry + '/Home/Team/delTeamMember',
            type : 'POST',
            dataType : 'json',
            data : {
                team_id : team_id,
                student_id : student_id
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {
                    button.parent().parent().remove();
                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

request.delTeam = function(){
    $('.del-team').click(function(){
        var team_id = $(this).attr('data-team-id');
        var button = $(this);
        common.chooseModalShow('确定删除该课题？', function(){
            common.chooseModalCon(function() {
                $('#choose-modal-con').attr('disabled', 'disabled');
                $.ajax({
                    url : serverEntry + '/Home/Team/delTeam',
                    type : 'POST',
                    dataType : 'json',
                    data : {
                        team_id : team_id
                    },
                    success : function (data) {
                        if(parseInt(data.error) == 0) {
                            button.parent().parent().remove();
                        } else {

                        }
                        common.chooseModalClose(function () {
                            common.publicModalShow(data.desc);
                        });
                    }
                });
            });

        });
    });
}

request.changeJob = function(){
    $('#team-change-job-commit').click(function(){
        var team_id = $(this).attr('data-team-id');
        var job_id = $(this).attr('data-job-id');
        var selected_member = $('#member').val();
        $.ajax({
            url : serverEntry + '/Home/Team/changeJob',
            type : 'POST',
            dataType : 'json',
            data : {
                team_id : team_id,
                student_id : selected_member,
                job_id : job_id
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {

                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

request.addMember = function(){
    $('#team-add-member-commit').click(function(){
        var team_id = $(this).attr('data-team-id');
        var job_id = $(this).attr('data-job-id');
        var selected_member = $('#member').val();
        $.ajax({
            url : serverEntry + '/Home/Team/addMember',
            type : 'POST',
            dataType : 'json',
            data : {
                team_id : team_id,
                student_id : selected_member,
                job_id : job_id
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {

                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

request.addTeamSelectGroup = function(){
    $('.groups').click(function(){
        var group_id = $(this).val();
        $.ajax({
            url : serverEntry + '/Home/Team/getProjectAndMember',
            type : 'GET',
            dataType : 'json',
            data : {
                group_id : group_id,
            },
            success : function (data) {
                $('#projects').empty();
                data.projects.forEach(function(e){
                    $('#project').append('<option value="' + e.id + '">' + e.name + '</option>');
                });
                $('#member').empty();
                data.students.forEach(function(e){
                    $('#member').append('<label class="checkbox-inline"><input type="checkbox" name="member" value="' + e.student_id + '"> ' + e.user_name + '</label>');
                });

            }
        });
    });
}

request.addTeam = function(){
    $('#team-add-commit').click(function(){
        var group_id = $('input[name=groups]:checked').val();
        var project_id = $('#project').val();
        var members = [];
        $('input[name=member]:checked').each(function(){
            members.push($(this).val());
        });
        if($('#team-add-form').valid()){
            $.ajax({
                url : serverEntry + '/Home/Team/add',
                type : 'POST',
                dataType : 'json',
                data : {
                    group_id : group_id,
                    project_id : project_id,
                    members : members
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }

    });
}

request.addReport = function(){
    $('#add-report-commit').click(function(){
        var name = $('#name').val();
        var author = $('input[name=author]:checked').val();
        var editor = CKEDITOR.instances.editor;
        editor.updateElement();

        var content = editor.getData();
        if($('#report-add-form').valid()){
            $.ajax({
                url : serverEntry + '/Home/Report/add',
                type : 'POST',
                dataType : 'json',
                data : {
                    name : name,
                    author : author,
                    content : content
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

request.editReport = function(){
    $('#edit-report-commit').click(function(){
        var name = $('#name').val();
        var editor = CKEDITOR.instances.editor;
        editor.updateElement();
        var content = editor.getData();
        var id = $(this).attr('data-report-id');

        if($('#report-edit-form').valid()){
            $.ajax({
                url : serverEntry + '/Home/Report/edit',
                type : 'POST',
                dataType : 'json',
                data : {
                    name : name,
                    content : content,
                    id : id
                },
                success : function (data) {
                    if(parseInt(data.error) == 0) {

                    } else {

                    }
                    common.publicModalShow(data.desc);
                }
            });
        }
    });
}

request.closeReport = function(){
    $('.close-report').click(function(){
        var id = $(this).attr('data-report-id');
        $.ajax({
            url : serverEntry + '/Home/Report/close',
            type : 'POST',
            dataType : 'json',
            data : {
                id : id
            },
            success : function (data) {
                if(parseInt(data.error) == 0) {

                } else {

                }
                common.publicModalShow(data.desc);
            }
        });
    });
}

$(function () {
    request.login();
    request.register();
    request.teacherAdd();
    request.changePassword();
    request.authEmail();
    request.auth();
    request.forgetPassword();

    request.groupAdd();
    request.groupDel();
    request.groupEdit();

    request.projectAdd();
    request.projectEdit();
    request.projectDel();
    request.projectPublish();
    request.projectChoose();

    request.processAdd();
    request.processEdit()
    request.processDel();

    request.jobAdd();
    request.jobEdit();
    request.jobDel();

    request.verifyPass();
    request.verifyNotPass();
    request.verifyUndo();

    request.chooseGroup();
    request.editUserinfo();

    request.addNode();
    request.editNode();
    request.delNode();

    request.editTeam();
    request.editTeamLeader();

    request.changeJob();
    request.addMember();
    request.delTeamMember();
    request.addTeamSelectGroup();
    request.addTeam();
    request.delTeam();

    request.addReport();
    request.editReport();
    request.closeReport();

});
