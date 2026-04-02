<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
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
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'All fields are required']);
    exit;
}

if (strlen($name) < 2 || strlen($subject) < 3 || strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Message is too short']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

if (strlen($message) > 4000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Message is too long']);
    exit;
}

$recipient = 'seppe.vanroy@telenet.be';
$mailSubject = 'Portfolio contact: ' . $subject;
$mailBody = "New message from the portfolio contact form\n\n";
$mailBody .= "Name: {$name}\n";
$mailBody .= "Email: {$email}\n";
$mailBody .= "Subject: {$subject}\n";
$mailBody .= "Sent: " . date('c') . "\n\n";
$mailBody .= "Message:\n{$message}\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Seppe Portfolio <no-reply@seppe-portfolio.local>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$success = @mail($recipient, $mailSubject, $mailBody, implode("\r\n", $headers));

if (!$success) {
    echo json_encode([
        'success' => false,
        'error' => 'Mail delivery is not configured on this server yet.',
        'fallback' => 'mailto:' . rawurlencode($recipient) . '?subject=' . rawurlencode($mailSubject) . '&body=' . rawurlencode($mailBody)
    ]);
    exit;
}

echo json_encode(['success' => true]);
