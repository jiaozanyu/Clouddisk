/**
 * ajax全局配置
 */
$.ajaxSetup({
    error : function () {
        common.publicModalShow('请求失败，请检查网络');
    }
})

var common = {};

/**
 * [publicModalShow 通用modal弹出框]
 * @param  {[type]}   content  [弹出框中要显示的内容]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
common.publicModalShow = function (content, callback) {
    var publicModal = $('#public-modal');
    $('#public-modal-content').html(content);
    publicModal.modal('show');
    if(typeof callback == "function" && callback){
        //当弹出框的效果完成之后触发
        publicModal.on('shown.bs.modal', function () {
            callback();
        });
    }
}

/**
 * [chooseModalShow 显示带有选择功能的modal弹出框]
 * @param  {[type]}   content  [内容]
 * @param  {Function}   con      [点击确定按钮触发的功能函数]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
common.chooseModalShow = function (content, callback) {
    var chooseModal = $('#choose-modal');
    $('#choose-modal-content').html(content);
    chooseModal.modal('show');

    if(typeof callback == "function" && callback){
        //当弹出框的效果完成之后触发
        chooseModal.on('shown.bs.modal', function () {
            callback();
        });
    }
}

common.chooseModalCon = function (con) {
    $('#choose-modal-con').off('click').click(function () {
        con();    
    });
}

/**
 * [chooseModalClose 关闭带有选择功能的modal弹出框]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
common.chooseModalClose = function (callback) {
    var chooseModal = $('#choose-modal');
    chooseModal.modal('hide');
    
    if(typeof callback == 'function' && callback) {
        chooseModal.on('hidden.bs.modal', function () {
            callback();
        });
    }
}