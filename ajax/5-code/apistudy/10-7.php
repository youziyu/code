<?php
// 1.告诉浏览器将要以javascript的方式来解析我给你返回的内容
header('Content-Type:text/javascript;charset=UTF-8');
// 接收前端传过来的数据
$name='司音';
$callback=$_GET['callback'];// fn
echo $callback.'("'.$name.'");';//fn();  fn(司音);是错的 应该是 fn('司音');
?>