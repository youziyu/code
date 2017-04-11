<?php
 $jsonStr='[{"name":"zhangfei","age":35},{"name":"guanyu","age":36}]';

//  把json字符串转换为php数组
$phpobj=json_decode($jsonStr,true);
// var_dump($phpobj);

//  把php数组变成jsonStr
$arr=array("name"=>"zhangfei","age"=>35);

$arrStr=json_encode($arr);
echo $arrStr;

?>