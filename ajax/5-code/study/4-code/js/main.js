// 1.列表数据分页展示
// 1.1 页面加载完成之后 需要渲染第一页的数据
// 1.1.1 页码是1 条数是10 异步接口 传递给后台 ajax
// 1.1.2 成功了 拿到后台数据
// 1.1.3 列表渲染出来 list 
// 1.1.4 分页按钮 渲染 
$(function () {
    // 1.列表数据展示
    var render = function (pageNum) {
        $.ajax({
            type: 'get',
            url: './api/findUsers.php',
            data: {
                pageNum: pageNum || 1,
                pageSize: 10
            },
            beforeSend: function () {
                $('.loading').show();
            },
            success: function (data) {
               var html = template('list_template', { model: data });
                // 4.渲染页面
                $('tbody').html(html);
                // 分页按钮
                // 1.上一页 当页面大于1的时候
                // 2.下一页 小于当前的最大页码 根据每页显示条数和总条数
                var pageHtml = template('page_template', {
                    pageNum: data.pageNum,
                    pageCount: Math.ceil(data.total / data.pageSize)
                });
                // 4.渲染页面
                $('.pagination').html(pageHtml);
                $('.loading').hide();
                // 记录当前页
                window.pageNum = data.pageNum;

            }
        })
    }
    render();
    
})


