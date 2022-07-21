<?php
require '../vendor/autoload.php';
use \GuzzleHttp\Client;

$client = new Client();
$headers = [
    'Content-Type' => 'application/x-www-form-urlencoded',
];

$time = time();

//force my db datetime into unix timestamp
// $ad = strtotime($d);
// echo $ad;

$options = [
    'form_params' => [
        'version' => '0.5',
        'cardNo' => '/AT2LIU2',
        'invNum' => 'DH18901765',
        'action' => 'carrierInvDetail',
        'invDate' => '2022/07/17',
        'uuid' => '0000011',
        'appID' => 'EINV9201901086064',
        'cardType' => '3J0002',
        'cardEncrypt' => 'wodemima745',
        'expTimeStamp' => $time + 180,
        'timeStamp' => $time + 180,
    ]];

$response = $client->request('POST', 'https://api.einvoice.nat.gov.tw/PB2CAPIVAN/invServ/InvServ', $options);

echo $response->getBody();
