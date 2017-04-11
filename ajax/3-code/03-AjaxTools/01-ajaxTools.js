// 1.请求方式
// 2.请求地址
// 3.请求正文
// 4.响应结果

// 封装一个函数
/**
 * 名称: ajax
 * 功能: 封装一个ajax工具函数
 * 参数:
 *  1.请求方式  type
 *  2.请求地址  url
 *  3.请求正文  data
 *  4.成功回调  success
 */
function ajax(type, url, data, success) {
  var xhr = new XMLHttpRequest();
  // 1.请求行
  // 请求行 因为get方式和post方式的不同 get方式 请求正文在地址后面跟着因此做判断
  if (type == 'get') {
    url = url + '?' + data;
    data = null;
  }
  xhr.open(type, url);

  // 2.请求头
  // 因为post方式必须写，get方式可以不写  判断一下
  if (type == 'post') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  // 3. 请求正文 
  xhr.send(data);
  // 4.监听并处理响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      success(xhr.responseText);
      // success();
    }
  }

}