<?php 
	// 直接返回一个随机的 数字
	$codNum = array('9999','9998','1024','1111');

	// 随机获取一个key
	$randomKey = array_rand($codNum,1);

	// 随机的验证
	echo $codNum[$randomKey];
 ?>