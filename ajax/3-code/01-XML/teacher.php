<?php
  //  如何用php语言读取xml的内容
  // file_get_contents(文件的路径) 用来读取文件的内容  返回值内容


  // 设置服务器给前端返回数据的格式
  header('Content-Type:text/xml;charset=UTF-8');
  $xml=file_get_contents('./teacher.xml');
  echo $xml;
?>