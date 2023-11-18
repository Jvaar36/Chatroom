<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);

$sql = "SELECT * FROM messages";

$query = mysqli_query($conn, $sql);

if ($query->num_rows > 0) {

            while ($row = $query->fetch_assoc()) {

			     $rows[] = $row;

            }
          } 

          foreach ($rows as $i => $r) {

            $array[$i] = array("uname"=>$rows[$i]['username'], "msg"=>$rows[$i]['msg']);

          }

          echo json_encode($array);

$conn->close();



?>