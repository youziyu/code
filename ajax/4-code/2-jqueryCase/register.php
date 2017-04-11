<?php
	
	header('Content-Type: application/json; charset=utf-8');
	// 服务端验证
	// echo '注册成功';

	// 真正的逻辑里要将数据插入到数据库
	// echo json_encode($_GET);

	// if() 服务端也验证

	$result = array(
		'code'=>10000,
		'msg'=>'注册成功',
		'result'=>'http://www.baidu.com'
	);
// 把php数组变成json
 $result=json_encode($result); 
	//{
	// 	"code":10000, 
	// 	"msg":"\u6ce8\u518c\u6210\u529f", //\u6ce8(unicode编码 字体图标)
	// 	"result":"http:\/\/www.baidu.com" //网址
	// 	}
	echo $result;

	sleep(3);
?>