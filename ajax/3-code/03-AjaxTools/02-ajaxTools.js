/**
 * name: ajax
 * @param {} option(对象) 
 * 改进 传参的灵活性  把参数从字符串变成了对象
 */
function ajax(option){
  // 1. 请求方式
  var type=option.type;
  // 2. 请求地址
  var url=option.url;
  // 3. 请求数据
  var data=option.data;
  // 4. 成功时回调(请求数据是异步的,不能保证方法调用了立马返回数据)
  var success=option.success;
  // var obj={
  //   success:function(result){
  //   }
  // }
  // 封装步骤
  var xhr=new XMLHttpRequest();
  // 设置请求行
  if(type=='get'){
    url=url+'?'+data;
    data=null;
  }
  xhr.open(type,url);
  // 设置请求头
  if(type=='post'){
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  //请求正文
  xhr.send(data);
  // 监听并处理响应
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        success(xhr.responseText);
    }
  }
}