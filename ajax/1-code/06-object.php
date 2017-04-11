<?php
// php中的对象 
// js  var odj={name:'tom'}
// php中的对象声明有三个步骤
// 画图纸
class Car{
 public  $color;//颜色
 public  $brand;//牌子
}
// 制造  实例化
$car=new Car();
// 喷漆 挂牌子
echo $car->color='red'.'<br>';
echo $car->brand="aodi";

var_dump($car);

?>