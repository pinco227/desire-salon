<?php
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$services = $_POST['serv'];
	$date = $_POST['date'];

	$to = 'contact@desirebeautysalon.ie';
	$message = '
		Name: <strong>'.$_REQUEST['name'].'</strong><br />
		Phone: <strong>'.$_REQUEST['phone'].'</strong><br />
		Mail: <strong>'.$_REQUEST['mail'].'</strong><br />
		Services: '.$_REQUEST['serv'].'<br />
		Date: '.$_REQUEST['date'].'
	';
	$subject = '[BOOKING]New appointment mail';
	$header = "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$header .= "From: <".$mail.">" ."\r\n";

	if(mail($to, $subject, $message, $header)){
		$result=1;
		echo 'suc';
	}
	else{
		$result=2;
		echo 'fail';
	}
?>