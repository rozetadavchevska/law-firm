<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (empty($_POST['email'])) {
        $errors[] = 'Email is empty';
    } else {
        $email = $_POST['email'];
        $fName = $_POST['fname'];
        $lName = $_POST['lname'];

        // validating the email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Invalid email';
        }
    }
    if (empty($_POST['message'])) {
        $errors[] = 'Message is empty';
    } else {
        $message = $_POST['message'];
    }
    if (empty($errors)) {
        $date = date('j, F Y h:i A');

        $emailBody = "
            Email from: $email 
            Date: $date
            Meassage: $message
            First name: $fname
            Last name: $lname
        ";

        $headers =     'From: Contact Form <contact@mydomain.com>' . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "MIME-Version: 1.0\r\n" .
            "Content-type: text/plain; charset=utf-8";

        $to = 'rozetadavcevska@gmail.com';
        $subject = 'Contacting you';

        if (mail($to, $subject, $emailBody, $headers)) {
            $sent = true;
        }
    }
}
?>

<?php if (!empty($errors)) : ?>

{
"status": "fail",
"error": <?php echo json_encode($errors) ?>
}
<?php endif; ?>


<?php if (isset($sent) && $sent === true) : ?>

{
"status": "success",
"message": "Your data was successfully submitted"
}

<?php endif; ?>