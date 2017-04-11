<?php
header('Content-Type:application/json;charset=UTF-8');
// 服务器端验证
// echo '注册成功'


$result=array(
    'code'=>10000,
    'msg'=>'注册成功',
    'result'=>'http://www.wanlum.com'
);
echo json_encode(result);
sleep(3);
?>