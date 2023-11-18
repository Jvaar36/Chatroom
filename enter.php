<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);

  $uname = $_POST['uname'];
  $message = $_POST['msg'];

$sql = "INSERT INTO messages (username, msg) VALUES ('$uname', '$message')";

$query = mysqli_query($conn, $sql);

$conn->close();

?>