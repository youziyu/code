<?php
// 如何获取上传的文件
// sleep(5); //停下来5s
var_dump($_FILES);
// $_FILES=Array ( 
//     [file] => Array ( 
//     [name] => rgb-color-wheel-lg.jpg //文件名称 
//     [type] => image/jpeg   //文件类型
//     [tmp_name] => E:\wamp\tmp\php5FE1.tmp  //文件存储在该地址下 //临时文件  
//     [error] => 0 [size] => 78066 )  //文件的大小
// 
  // )


// 把临时文件夹中的内容 移动到永久文件夹中
// move_uploaded_file() 把上传完的文件移动到什么地方
// move_uploaded_file(临时文件夹的路径,目标文件夹的路径)
move_uploaded_file($_FILES['file']['tmp_name'],'./'.$_FILES['file']['name']);
?>