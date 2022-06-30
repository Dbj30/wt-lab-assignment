<?php 

require_once "../../utils/db.php";
// if (!isset($_GET['id'])) {
// 	header("location:../?error=invalid id");
// }
$id = $_POST['id'];

$sql = "DELETE FROM students WHERE id = $id;";
// die($sql);
if($conn->query($sql) == TRUE) {
	header("location:../?success=deleted successfully");
} else {
	header("location:../?error=error occured");
}