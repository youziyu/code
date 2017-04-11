<?php
header('Content-Type:application/json;charset=utf-8');

$data=file_get_contents('./data.json');

$data=json_decode($data,true);

// 根据页码计算offset
$page=$_POST['page'];

$offset=($page-1)*10;

$result=array_slice($data,$offset,10);
$page++;

echo json_encode(array('page'=>$page,'items'=>result));
sleep(1)
?>