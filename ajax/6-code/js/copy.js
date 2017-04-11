$(function () {
  var getData = function (pageNum) {
    $.ajax({
      type: 'get',
      url: './api/findUsers.php',
      data: { pageNum: pageNum || 1, pageSize: 5 },
      beforeSend: function () {
        $('.loading').show();
      },
      success: function (result) {
        // console.log(result);
        // 绑定数据
        var list = template('list-template', result);
        // 把数据添加到
        $('tbody').html(list);

        // 分页
        var pagin = {
          pageNum: result.pageNum,
          pageCount: Math.ceil(result.total / 5)
        }
        var page = template('page-template', pagin);
        $('.pagination').html(page);
        window.pageNum = result.pageNum;
      },
      complete: function () {
        $('.loading').hide();
      }

    })
  }
  getData();
  // 点击分页
  $('.pagination').on('click', 'a', function () {
    if ($(this).hasClass('disabled') || $('loading:visible').length) return false;
    var pagenum = $(this).attr('data-pageNum');
    getData(pagenum);
  })

  // 添加用户

  $('#save').click(function () {
    $.ajax({
      type: 'post',
      url: './api/saveUser.php',
      data: $('#form').serialize(),
      dataType: 'json',
      success: function (result) {
        if (result.status == 'ok') {
          $('#edit').modal('hide');
          $('#edit input').val('');
          getData();
        }
      }
    })
  })

  // 删除用户
  $('tbody').on('click', '.delete', function () {
    var _this = $(this);
    // console.log(_this);
    if (confirm('你确定要删除这条数据吗？')) {
      
      $.ajax({
        type: 'post',
        url: './api/removeUser.php',
        data: { id:_this.attr('data-id') },
        dataType: 'json',
        success: function (result) {
          if (result.status == 'ok') {
            // getData(window.pageNum);
              alert('删除成功');
          }
        }
      })
    }

  })
})