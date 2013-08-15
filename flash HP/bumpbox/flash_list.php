<?php
$link = mysql_connect('mysql441.db.sakura.ne.jp', 'abouthiroppy', 'about19920429');
$result = mysql_select_db('abouthiroppy_flash', $link);

/* if(!$link){ */
/* 		die('non connect: '.mysql_errno().'<br>'); */
/* 	} */

$query = mysql_query("set names utf8",$result);

/* $result = mysql_query($query); */

var_dump($query);
?>