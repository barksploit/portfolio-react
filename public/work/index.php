<?php

$page = 1;

if (isset($_GET["offset"]))
    $page = $_GET["offset"];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.github.com/users/barksploit/repos?sort=updated&per_page=4&page=" . $page);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($ch, CURLOPT_USERPWD, "barksploit" . ":" . "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");

$headers = [
    'Accept: application/vnd.github+json',
    'User-Agent: barksploit'
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$output = curl_exec($ch);

print_r($output);

curl_close($ch);
