// 1.点击立即注册
// 2.判断用户名是否为空 如果为空  提示用户名为空
// 3.判断密码是否为空   如果为空  提示密码为空
// 4.判断确认密码是否和密码一致 如果不一致 提示密码不一致
// 5.判断手机号是否为空   如果为空 提示手机号为空
// 6.判断验证吗是否为空 如果为空 提示填写手机号 获取验证码
// 如果以上都验证通过了,点击完按钮 按钮应该变成灰色 且 文字变成 注册中...
// 7. 点击获取验证码  
// 8. 根据手机号 获取验证吗
// 9. 点击获取验证码的时候 让按钮变成 1.灰色 2.禁用 3.xxx秒后重新获取
// 10. 把获取到的验证码显示在页面上(淡入淡出) 



// 2.判断用户名是否为空 如果为空  提示用户名为空
$('.submit').click(function () {
    // 问题1 
    // 解决:1. 获取表单数据
    var form = $('#ajaxForm');
    formData = form.serialize();
    // console.log(formData);
    //  var obj={
    //    name:$('.name').val();
    //  }
    //2. 序列化表单数据(key=value&key=value)
    // 问题:重复提交
    // 解决:当按钮拥有disabled这个class的时候，代表表单提交中，
    // 判断 如果立即注册这个按钮只要含有disabled这个类，就代表提交中，阻止点击
    if ($(this).hasClass('disabled')) {
        return false;
    }
    $.ajax({
        type: 'post',
        url: '../2-jqueryCase/register.php',
        // 问题1:如何把数据提交到后台去
        data: formData,
        // 1. 校验数据的合法性
        beforeSend: function () {
            // 判断用户名是否为空 如果为空  提示用户名为空
            // 步骤:
            // 1.获取用户名的值
            // 2.判断是否为空
            if ($('.name').val() == '') {
                // 3.提示 .tips p
                $('.tips p').text("用户名不能为空").fadeIn(500).delay(1500).fadeOut(500);
                // 4.如果为空，应该让表单不提交
                return false;
            }
            // 判断密码是否为空 如果为空 提示 您输入的密码为空
            if ($('.pass').val() == '') {
                $('.tips p').text("您输入的密码不能为空").fadeIn(500).delay(1500).fadeOut(500);
                return false;
            }
            // 判断密码和确认密码是否一致
            if ($('.pass').val() != $('.repass').val()) {
                $('.tips p').text("两次密码不一致").fadeIn(500).delay(1500).fadeOut(500);
                return false;
            }
            // 判断短信验证码不能为空
            if ($('.code').val() == '') {
                $('.tips p').text("验证码不能为空").fadeIn(500).delay(1500).fadeOut(500);
                return false;
            }
            $('.submit').val('注册中...').addClass('disabled');
        },
        // 2. 获取成功时的数据
        success: function (result) {
            // console.log(result);
            // console.log(result.code);
            if (result.code == '10000') {
                $('.tips p').text("注册成功").fadeIn(500).delay(1500).fadeOut(500);
            }
            // 
            // location.href=result.result;
        },
        // 3. 如果出错 打印错误信息
        error: function (error) {
            console.log(error);
        },
        // 4. 不论成功与失败 都要报告 请求完成了
        complete: function () {
            $('.submit').val('立即注册').removeClass('disabled');
        }

    })
});
$('.verify').click(function () {
    // 1.获取手机号
    var mobileNum = $('.mobile').val();
    // 从1开头  +10个数字  一共11个数字
    var reg = /^1\d{10}$/;
    // 2.在发送请求之前判断手机号是否符合一个正则表达式
    var _this = $(this);
    // 整体的ajax请求
    $.ajax({
        type: 'post',
        url: '../2-jqueryCase/getCode.php',
        // 可以传入http协议规定的格式 也可以传入对象 jq都会识别
        data: { mobile: mobileNum },
        beforeSend: function () {
            // 1.判断手机号是否复合正则表达式的规则
            if (!reg.test(mobileNum)) {
                $('.tips p').text("手机号与所要求的格式不一致").fadeIn(500).delay(1500).fadeOut(500);
                return false;
            }
            // 获取验证码按钮的倒计时
            // 1.声明一个总时间
            var seconds = 10;
            // 2. 使用一个定时器 隔1秒执行一次 
            var timer = setInterval(function () {
                //    2.0  按钮中的世界隔1秒执行一次 颜色变成灰色 
                _this.val(--seconds + '秒后重新获取').addClass('disabled');
                //    2.1 判断 总时间 如果<0 重置 清除定时器
                if (seconds <= 0) {
                    _this.val('获取验证码').removeClass('disabled');
                    clearInterval(timer);
                }
            }, 1000)

        },
        success: function (result) {
            console.log(result);
         }
    })
})