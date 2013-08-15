<?php
$dbsetver = "mysql441.db.sakura.ne.jp";
$dbuser = "abouthiroppy";
$dbpass = "about19920429";
$dbname = "abouthiroppy_flash";

$link = mysql_connect($dbsetver, $dbuser, $dbpass);

if(!$link)
    die("no");

$table = mysql_select_db($dbname, $link);
if(!$table) die("no");

$sql = "show columns from $dbname;";
$query = mysql_query($sql, $link);
var_dump($query);
?>