<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

if ($data !== null) {
    if(empty($data['name']) || empty($data['projectEmail']) || empty($data['country']) || empty($data['services'])) {
        http_response_code(400); // Bad Request
        echo "Invalid JSON data";
    } else {
        $firstName = $data['name'];
        $projectEmail = $data['projectEmail'];
        $country = $data['country'];
        $services = $data['services'];
        $projectTelegram = $data['projectTelegram'];
        $projectName = $data['projectName'];
        $twitterOrTelegram = $data['twitterOrTelegram'];
        $projectWebsite= $data['projectWebsite'];
        $additionalInformation = $data['additionalInformation'];

        $mail = new PHPMailer(true);

        try {
            //Server settings
//            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'blocklabchain.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'admin@blocklabchain.com';                     //SMTP username
            $mail->Password   = '$lK6Z8HC2oYHgSjr';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('admin@blocklabchain.com', 'Blocklabchain');

            $mail->addAddress('alekseyideas@gmail.com');     //Add a recipient

            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Blocklabchain - Ask for a quote';
            $mail->Body    = "
                <b>Your Name:</b> $firstName<br>
                <b>Your Twitter or Telegram:</b> $twitterOrTelegram<br>
                <b>Project Name:</b> $projectEmail<br>
                <b>Project Telegram:</b> $projectTelegram<br>
                <b>Project Email:</b> $projectEmail<br>
                <b>Project website:</b> $projectWebsite<br>
                <b>Selected Services:</b> $services <br>
                <b>Additional information:</b> $additionalInformation <br>
    ";
//    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}else{
    http_response_code(400); // Bad Request
    echo "Invalid JSON data";
}

