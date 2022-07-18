<?php

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$page = 1;

// If the offset GET parameter is set, overwrite $page with its value
if (isset($_GET["offset"]))
    $page = $_GET["offset"];

// Initialise CURL
$ch = curl_init();

// Configure CURL URL
curl_setopt($ch, CURLOPT_URL, "https://api.github.com/users/barksploit/repos?sort=updated&per_page=3&page=" . $page);

// Return response as a string on execution
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Configure Basic Authentication for GitHub REST API
curl_setopt($ch, CURLOPT_USERPWD, $_ENV['GITHUB_API_USERNAME'] . ":" . $_ENV["GITHUB_API_TOKEN"]);

// Define HTTP request headers
$headers = [
    'Accept: application/vnd.github+json',
    'User-Agent: '.$_ENV['GITHUB_API_USERNAME']
];

// Assign $headers to the CURL request
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute HTTP request
$output = curl_exec($ch);

// Output HTTP request response
print_r($output);

curl_close($ch);
