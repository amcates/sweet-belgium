<?php

require_once("./mysql-config.php");

// Connecting, selecting database
$link = mysql_connect($host, $user, $password)
    or die('Could not connect: ' . mysql_error());

mysql_select_db($db) or die('Could not select database');

// Performing SQL query
$query = "SELECT * FROM $table order by date_of_release DESC limit 6 ";
$result = mysql_query($query) or die('Query failed: ' . mysql_error());

// Return json results
$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}

print json_encode($rows);

?>
