<?php
// 1.告诉浏览器将要以css的方式来解析我给你返回的内容
header('Content-Type:text/css;charset=UTF-8');
// 2.如何接受前端传过来的pink这个数据
$color=$_GET['color'];// 从前端获取的color pink
echo 'body{background-color:'.$color.';}';
// body{background-color:pink;}
?>