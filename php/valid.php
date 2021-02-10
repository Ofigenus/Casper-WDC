<?php
    $msgs = [];
	if (isset($_POST['name']) ) {
        if(empty($_POST['name']) && NAMEISREQUIRED) {
            $msgs['name'] = MSGSNAMEERROR;
        } else {
            if (!empty($_POST['name'])) {
                $name = "<b>Имя: </b>" . trim(strip_tags($_POST['name'])) . "<br>";
            }
            
        }
    }

    if (isset($_POST['tel']) ) {
        if(empty($_POST['tel']) && TELISREQUIRED) {
            $msgs['tel'] = MSGSTELERROR;
        } else {
            if (!empty($_POST['tel'])) {
                $tel = "<b>Телефон: </b> " . trim(strip_tags($_POST['tel'])) . "<br>";
            }
        }
    }

    if (isset($_POST['email']) ) {
        if(empty($_POST['email']) && EMAILISREQUIRED) {
            $msgs['email'] = MSGSEMAILERROR;
        } else {
            if(!empty($_POST['email'])) {
                if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                    $email = "<b>Почта: </b> " . trim(strip_tags($_POST['email'])) . "<br>";
                } else {
                    $msgs['email'] = MSGSEMAILINCORRECT;
                }
            }
        } 
    }

    if (isset($_POST['text']) ) {
        if(empty($_POST['text']) && TEXTISREQUIRED) {
            $msgs['text'] = MSGSTEXTERROR;
        } else {
            if (!empty($_POST['text'])) {
                $text = "<b>Сообщение: </b> " . trim(strip_tags($_POST['text'])) . "<br>";
            }
        }
    }

    foreach ($_FILES["files"]["error"] as $key => $error) {
        if (!$error == UPLOAD_ERR_OK  && FILEISREQUIRED) {
             $msgs['file'] = MSGSFILEERROR;
        }
    }

    if(empty($_POST['agreement']) && AGGREMENTISREQUIRED) {
        $msgs['agreement'] = MSGSAGGREMENTERROR;
    } else {
        if (!empty($_POST['agreement'])) {
            $agreement = "<b>Соглашение: </b> пользовательское соглашение принято " . "<br>";
        }
    }

    
     if((empty($_POST['email']) && empty($_POST['tel'])) && (!EMAILISREQUIRED && !TELISREQUIRED)) {
         $msgs['attantion'] = 'Заполните хотя бы одно контактное поле для связии с вами';
     }

	if ($msgs) {
	    echo json_encode($msgs);
		die;
	} else {
        $msgs['success'] = MSGSSUCCESS;
    }