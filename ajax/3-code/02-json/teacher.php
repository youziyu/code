<?php
// 告诉浏览器 服务器给浏览器传输的是什么样类型的文件 编码格式是什么
header('Content-Type:text/json;charset=UTF-8');
// 读取json文件
$json=file_get_contents('./teacher.json');

echo $json;

?>