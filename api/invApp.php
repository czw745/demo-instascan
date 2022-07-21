<?php
require '../vendor/autoload.php';
use GuzzleHttp\Client;

$invNum = $_REQUEST['invNum'];
$randomNumber = $_REQUEST['randomNumber'];
$invDate = $_REQUEST['invDate'];
$invTerm = $_REQUEST['invTerm'];

$client = new Client();
$headers = [
    'Content-Type' => 'application/x-www-form-urlencoded',
];
$options = [
    'form_params' => [
        'version' => '0.5',
        'type' => 'Barcode',
        'invNum' => $invNum,
        'action' => 'qryInvDetail',
        'generation' => 'V2',
        'invDate' => $invDate,
        'UUID' => '00000001',
        'appID' => 'EINV9201901086064',
        'randomNumber' => $randomNumber,
        'invTerm' => $invTerm,
    ]];

try {
    $response = $client->request('POST', 'https://api.einvoice.nat.gov.tw/PB2CAPIVAN/invapp/InvApp', $options);
    echo $response->getBody();
} catch (\Throwable $th) {
    throw $th;
}
