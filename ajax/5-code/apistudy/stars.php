<?php

	// 指定文档类型
	 header('Content-Type:application/json; charset=utf-8');

	$result = file_get_contents('stars.json');
$callback=$_GET['callback'];
echo $callback.'('.$result.')';
// echo $result;
?>