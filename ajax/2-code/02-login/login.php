<?php
// 模拟用户登录  (增 删  改  查)
// 步骤:1.在登陆界面输入用户信息
//      2.点击登陆 表单会把用户信息提交到服务器中
//      3.把用户提交过来数据拿到去数据库中查找是否有该数据(用户名)
//      4.把用户名对应的密码做一个对比
//      5.返回结果

print_r($_POST);
// 1.模拟一个数据库信息
$users=array('qiaofeng'=>'123456','xuzhu'=>'654321');
// $users['qiaofeng'] ==123456

// 后台工作
// 1.获取前端传递的用户名和密码
// f:前端 
// Array ( [username] => wanlum [password] => 123456 ) 
// $fUsername=$_POST['username'];
// $fPassword=$_POST['password'];
// echo $fPassword.'-----'.$fUsername;


// 2.判断用户名是否在$users这个数组中
        // array_key_exists() php的常用函数
        // 数组的键是否存在于该数组中
        // array_key_exists(你要查找的键,哪个数组)
       // $flag=array_key_exists('qiaofeng1',$users);
       // echo $flag;
// 3.判断用户名对应的密码是否和数组中的用户名对应密码一致
$Bpassword=$users[$fUsername];   
// $users['qiaofeng']
// echo $Bpassword;
if(array_key_exists($fUsername,$users)){
    if($fPassword==$Bpassword){
        // 4.返回结果
         echo "欢迎回家,".$fUsername;
    }else{
        // 4.返回结果
        echo "密码错误";
    }
}else{
    // 4.返回结果
   echo "登陆失败,快去注册";
}



?>