<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = 'productionsbymultidexters@gmail.com';
    $subject = 'New Contact Form Submission';
    $message_content = "
    Name: $name\n
    Email: $email\n
    Phone Number: $phone\n
    Message:\n\n$message
    ";
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $message_content, $headers)) {
        echo "<p>Thank you for your message. We will contact you shortly.</p>";
    } else {
        echo "<p>Oops! Something went wrong. Please try again later.</p>";
    }
} else {
    // Redirect back to the contact form if accessed directly
    header("Location: contact.html");
    exit;
}