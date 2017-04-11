$(function () {
  // 把用户的数据显示到页面上
  // 查的过程
  // 步骤:
  // 1.封装一个方法 getData
  function getData(pageNum) {
    // 2.发起ajax请求
    $.ajax({
      // 3.确定请求方式 get 
      type: 'get',
      // 4.确定请求地址 ../api/findUsers.php
      url: './api/findUsers.php',
      // 5.确定请求的参数 pageNum第几页 pageSize 5
      data: { pageNum: pageNum || 1, pageSize: 5 },
      // 6.设置loading的显示
      beforeSend: function () {
        $('.loading').show();
      },
      // 7.获取成功时的数据
      success: function (result) {
        // console.log(result);
        // Object(result) {
        //   list: Array[5], //数据库中的用户数据
        //   pageSize: 5, 显示的条数
        //   pageNum: 1, 当前的页码
        //   total: 14数据库中的数据的总条数
        // }
        // 7.1 写模板

        // 7.2 把数据和模板绑定起来
        var list = template('list-templ', result);
        // 7.3 把绑定好的数据插入到页面中
        $('tbody').html(list);
        // 7.4 分页
        // 7.4.1 准备数据
        // var pagin={
        //   pageNum:result.pageNum,
        //   // 总共有几页数据
        //   pageCount:Math.ceil(result.total/result.pageSize)
        // }
        var pageResult = template('pagin-templ', {
          pageNum: result.pageNum,
          pageCount: Math.ceil(result.total / result.pageSize)
        });
        $('.pagination').html(pageResult);
// 把页码缓存给window的一个属性
        window.pageNum=result.pageNum;
      },
      // 8.设置loading隐藏
      complete: function () {
        $('.loading').hide();
      }
    })

  }
  getData();

  // 分页的事件
  $('.pagination').on('click', 'a', function () {
    // 如果该标签上含有disabled这个类名代表数据已经到最后了 不能再点击了
    if ($(this).hasClass('disabled') || $('.loading:visible').length) return false;
    // 获取到的是页码
    var page = $(this).attr('data-pageNum');
    // 根据页码查找数据
    getData(page);
  })



  // 添加用户
  $('#save').click(function () {
    $.ajax({
      type: 'post',
      url: './api/saveUser.php',
      data: $('#form').serialize(),
      dataType: 'json',
      success: function (result) {
        // console.log(result);
        $('#edit').modal('hide');
        getData();
      }
    })
  })




  // delete users
  // 1. 获取点击按钮添加点击事件
  $('tbody').on('click', '.delete', function () {
    var _this = $(this);
    // 2. 询问用户是否真的要删除
    if (confirm('你确定要删除此条数据吗？')) {
      // 3. 找到对应的用户 通过data-id找到对应的用户传入后台
      $.ajax({
        type: 'post',
        url: './api/removeUser.php',
        data: { id: _this.attr('data-id') },
        dataType:'json',
        success: function (result) {
            if(result.status=='ok'){
              alert('删除成功');
              getData(window.pageNum);
            }
        }
      })
    } else {
      return false;
    }

  })






})

