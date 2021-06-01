<?php
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$message = $_POST['mess'];

	$to = 'contact@desirebeautysalon.ie';
	$message = '
		Name: <strong>'.$_REQUEST['name'].'</strong><br />
		Phone: <strong>'.$_REQUEST['phone'].'</strong><br />
		Mail: <strong>'.$_REQUEST['mail'].'</strong><br />
		Message:<br />
			'.$_REQUEST['mess'].'
	';
	$subject = '[DESIRE]New contact mail';
	$header = "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$header .= "From: <".$mail.">" ."\r\n";

	if(mail($to, $subject, $message, $header)){
		echo 'suc';
	}
	else{
		echo 'fail';
	}
?>