<?php 
    header('Content-Type:text/html;charset=utf-8');

    $con = mysql_connect("192.168.32.74","root","123456");

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db("itcast", $con);

    $sql="INSERT INTO teacher (username, password, name,school,age)
    VALUES
    ('$_POST[username]','$_POST[password]','$_POST[name]','$_POST[school]','$_POST[age]')";

    if (!mysql_query($sql,$con)){
      die('Error: ' . mysql_error());
    }

    echo '{"status":"ok"}';

    mysql_close($con)

?>