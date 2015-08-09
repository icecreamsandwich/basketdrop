<?php

$con = mysql_connect("localhost", "root", "");
$db = mysql_select_db("basketdrop", $con);
if ($db)
    echo ""; //connected to db !
else
    echo mysql_error();
?>