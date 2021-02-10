<?php

// mb_internal_encoding("UTF-8");
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

	use PHPMailer\PHPMailer\PHPMailer;
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/phpmailer.php');
		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/php/config.php');
		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/php/valid.php');

		if(defined('HOST') && HOST != '') {
			$mail = new PHPMailer;
			$mail->isSMTP();
			$mail->Host = HOST;
			$mail->SMTPAuth = true;
			$mail->Username = LOGIN;
			$mail->Password = PASS;
			$mail->SMTPSecure = 'ssl';
			$mail->Port = PORT;
			$mail->AddReplyTo(SENDER);
		} else {
			$mail = new PHPMailer;
		}

		for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['files']['name'][$ct]));
        $filename = $_FILES['files']['name'][$ct];
            if (move_uploaded_file($_FILES['files']['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
            } else {
                $msg .= 'failfile';
            }
    } 

		$mail->setFrom(SENDER);
    $mail->addAddress(CATCHER);
    $mail->CharSet = CHARSET;
    $mail->isHTML(true);
		$mail->Subject = SUBJECT;
		$mail->Body = "$name $tel $email $text $agreement"; 
		if(!$mail->send()) {
    } else {
      echo json_encode($msgs);
    }
	
	} else{
    header ("Location: /");
	}