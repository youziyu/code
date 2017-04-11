<?php
// 告诉浏览器  我要给你的数据格式是json 字符编码是utf-8
header('Content-Type:text/json,charset=UTF-8');
// 读取json文件 传值给$sjon
 $json=file_get_contents('stars.json');
//  把json内容响应给浏览器
 echo $json;
sleep(2);
?>