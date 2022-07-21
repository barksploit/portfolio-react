<?php

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$page = 1;
$perpage = 3;

// If the offset GET parameter is set, overwrite $page with its value
if (isset($_GET["page"]) and isset($_GET["perpage"]))
    $page = $_GET["page"];
    $perpage = $_GET["perpage"];

// Initialise CURL
$ch = curl_init();

// Configure CURL URL
curl_setopt($ch, CURLOPT_URL, "https://api.github.com/users/barksploit/repos?sort=pushed&per_page=".$perpage."&page=" . $page);

// Return response as a string on execution
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Configure Basic Authentication for GitHub REST API
curl_setopt($ch, CURLOPT_USERPWD, $_ENV['GITHUB_API_USERNAME'] . ":" . $_ENV["GITHUB_API_TOKEN"]);

// Define HTTP request headers
$headers = [
    'Accept: application/vnd.github+json',
    'User-Agent: ' . $_ENV['GITHUB_API_USERNAME']
];

// Assign $headers to the CURL request
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Execute HTTP request
$output = curl_exec($ch);

header('Content-Type: application/json');

// Output HTTP request response
exit($output);

curl_close($ch);
