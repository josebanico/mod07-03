<?php 
	$temp_name=$_FILES["image_upload"]["tmp_name"];
	$name = $_FILES['image_upload']["name"];
	$size = $_FILES['image_upload']["size"];
	$file_extension = strtolower(pathinfo($name,PATHINFO_EXTENSION));
	echo $temp_name . "<br>";
	echo $name . "<br>";
	echo $size . "<br>";
	echo $file_extension;

$no_error_flag = true;
if (($file_extension !="jpg")&& ($file_extension !="jpeg")&&($file_extension !="png")&&($file_extension !="gif")&&($file_extension !="bmp")){
	$no_error_flag = false;
	echo "File is not an image";
}

	if($size > 500000){
		echo "File is too large";
		$no_error_flag = false;
	}
	if ($no_error_flag){
		move_uploaded_file($temp_name, "./assets/image/".$name);
		echo "File uploaded successfully";
	}else{
		echo "Can't upload file.";
	}
?>