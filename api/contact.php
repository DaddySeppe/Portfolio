<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$respond = static function (int $code, array $payload): void {
    http_response_code($code);
    echo json_encode($payload);
    exit;
};

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $respond(405, ['success' => false, 'error' => 'Method not allowed']);
}

$payload = [];
$contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';

if (stripos($contentType, 'application/json') !== false) {
    $rawInput = file_get_contents('php://input');
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $payload = $decoded;
    }
} else {
    $payload = $_POST;
}

$clean = static function ($value): string {
    $value = (string) $value;
    $value = strip_tags($value);
    $value = preg_replace('/[\r\n]+/', ' ', $value);
    return trim($value);
};

$name = $clean($payload['name'] ?? '');
$email = $clean($payload['email'] ?? '');
$subject = $clean($payload['subject'] ?? '');
$message = trim((string) ($payload['message'] ?? ''));
$website = $clean($payload['website'] ?? '');

if ($website !== '') {
    $respond(200, ['success' => true]);
}

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    $respond(400, ['success' => false, 'error' => 'All fields are required']);
}

if (strlen($name) < 2 || strlen($subject) < 3 || strlen($message) < 10) {
    $respond(400, ['success' => false, 'error' => 'Message is too short']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $respond(400, ['success' => false, 'error' => 'Invalid email address']);
}

if (strlen($message) > 4000) {
    $respond(400, ['success' => false, 'error' => 'Message is too long']);
}

$recipient = getenv('CONTACT_TO') ?: 'seppe.vanroy@telenet.be';
$mailSubject = 'Portfolio contact: ' . $subject;
$mailBody = "New message from the portfolio contact form\n\n";
$mailBody .= "Name: {$name}\n";
$mailBody .= "Email: {$email}\n";
$mailBody .= "Subject: {$subject}\n";
$mailBody .= "Sent: " . date('c') . "\n\n";
$mailBody .= "Message:\n{$message}\n";

$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$host = preg_replace('/:\\d+$/', '', $host);
$fromAddress = getenv('CONTACT_FROM') ?: ('no-reply@' . $host);
if (!filter_var($fromAddress, FILTER_VALIDATE_EMAIL)) {
    $fromAddress = $recipient;
}

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Seppe Portfolio <' . $fromAddress . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$success = @mail($recipient, $mailSubject, $mailBody, implode("\r\n", $headers));

if (!$success) {
    $respond(500, [
        'success' => false,
        'error' => 'Mail delivery is not configured on this server.',
        'fallback' => 'mailto:' . $recipient . '?subject=' . rawurlencode($mailSubject) . '&body=' . rawurlencode($mailBody)
    ]);
}

$respond(200, ['success' => true]);
