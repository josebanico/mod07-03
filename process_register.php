<?php 

$noofUname = strlen($_GET['uname']);
// echo $noofUname; 
if ($noofUname < 8 )
 {
     echo("username must be 8 characters or more! Try again. ");
 }
 elseif ($noofUname >= 8){
 	echo ("information is saved");
 }
elseif ($_GET['password']!= $_GET['cpassword'])
 {
     echo("Oops! Password did not match! Try again. ");
 }
 elseif ($_GET['password']= $_GET['cpassword'])
 {
    echo ("information is saved");
 }
 else{

 }
 ?>

)