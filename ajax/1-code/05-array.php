<?php
    // php中的数组
    // 如下所示的数组称之为索引数组
    // $arr=array(1,2,3,'a','b','c');
    // 如何遍历php中的数组
    // $count=count($arr); count()获取数组长度的方法 参数传入数组名称
    // echo $count;
    // 索引数组遍历的方法
    // for($i=0;$i<count($arr);$i++){
    //     echo $arr[$i];
    // }
    $arr2=array(
        array(1,2,3),
        array('a','b','c')
    );
    for($i=0;$i<count($arr2);$i++){
        // echo $arr2[$i];
        for($j=0;$j<count($arr2[$i]);$j++){
            echo $arr2[$i][$j];
        }
    }

    // 关联数组
    // $arrlink=array('tongliya'=>'12434532','age'=>13);

    // 关联数组的遍历方法
    // 方法 foreach (数组的名称 as )
    // foreach($arrlink as $key=>$val){
    //     echo $key.'======'.$val.'<br>';
    // }
?>