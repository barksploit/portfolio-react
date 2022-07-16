<?php

$page = 1;

if (isset($_GET["offset"]))
    $page = $_GET["offset"];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.github.com/users/barksploit/repos?sort=updated&per_page=5&page=" . $page);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$headers = [
    'Accept: application/vnd.github+json',
    'Authorization: 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',
    'User-Agent: barksploit'
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$output = curl_exec($ch);

var_dump($output);

curl_close($ch);
