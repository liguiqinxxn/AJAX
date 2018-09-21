<?php
/**
 * Created by PhpStorm.
 * User: liguiqin
 * Date: 2018/8/2
 * Time: 11:58
 */
header('Content-type:text/html;charset="utf-8"');

/*
 * API:
 *  getPics.php
 *      参数
 *      cpage：获取数据的页数
 */
$cpage = isset($_GET['cpage']) ? $_GET['cpage']:1;  //isset()检测变量是否设置

$url = 'http://www.wookmark.com/api/json/popular?page='.$cpage;

$content = file_get_contents($url);
$content = iconv('gbk','utf-8',$content); //iconv — 字符串按要求的字符编码来转换

echo $content;