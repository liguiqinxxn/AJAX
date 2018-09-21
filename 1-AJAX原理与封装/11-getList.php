<?php
/**
 * Created by PhpStorm.
 * User: liguiqin
 * Date: 2018/7/31
 * Time: 17:53
 */
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$arr1 = array('leo','momo','zhangsen');
$arr2 = array('username'=>'leo','age'=>32);

echo  json_encode($arr1);