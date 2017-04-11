<?php
// 服务器告诉浏览器我将要给你传的数据是什么样的类型
header('Content-Type:application/json;charset=utf-8');
//  php从json文件中读取json的内容
$data=file_get_contents('./data.json');
//  把json变成php数组
$data=json_decode($data,true);
// print_r($data); $data已经是一个php数组了


// 接收前端传过来的页码 1
 $page=$_POST['page'];//1
// 计算数组开始的位置
$offset=($page-1)*10;
// 切割数组    array_slice(数组名称,切割开始的位置,切割多少个出来)
 $result=array_slice($data,$offset,10);//$result 切割好的新的php数组
// 第一次的时候 是1  递增 变成2 
$page++;//2
// 把切割好的新的php数组变成json 和页码一起返回给前端
 echo json_encode(array('page'=>$page,'items'=>$result));
//  让程序停1s再执行
sleep(1)
?>