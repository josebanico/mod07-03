<?php 
$uname=htmlspecialchars(trim(strtolower($_POST['uname'])));
$password = sha1($_POST['password']);
$pass=sha1("secret");
if (($uname="admin")&&($password==$pass)){
	echo "Login Successfully";
}else{
	echo "Wrong Password";
}
?>