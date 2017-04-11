/**
 * name: ajax
 * @param {} option(对象) 
 * 改进 传入的正文自己拼接比较麻烦  在同一个公司里边因为不同的分工  有可能会产生多个ajax封装函数 因此要声明一个对象
 */
// 命名空间
var $ = {
  // 为了处理用户输入的对象
  param:function(obj){
    var html="";
    for(var k in obj){
      // name=itcast&age=10
      html+=k+'='+obj[k]+'&';
    }
    // name=itcast&age=1&  slice(0,1)
    html=html.slice(0,-1);
    // return html;
    return html;
  },
  ajax: function (option) {
    // 1.请求方式
    var type = option.type || 'get';
    // 2.请求地址
    var url = option.url || '';
    // 3.请求数据
    var data = this.param(option.data || {});
    // 4.成功时的回调
    var success = option.success;

    // 封装 
    var xhr = new XMLHttpRequest();
    // 请求行
    if (type == 'get') {
      url = url + '?' + data;
      data = null;
    }
    xhr.open(type, url);
    // 请求头
    if (type == "post") {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    //请求正文
    xhr.send(data);
    // 监听
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        success(xhr.responseText);
      }
    }
  }
}
