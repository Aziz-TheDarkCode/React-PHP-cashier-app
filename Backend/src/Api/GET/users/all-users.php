<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
use CRUD\Product;
use DB\Database;
use CRUD\Prod;

require_once("../../../../vendor/autoload.php");

function SendResponse()
{
    $products_arr = array();

    $database = new Database;
    $db = $database->get_connection();

    $products = new Product($db);
    $result = $products->getProduct("SELECT * FROM users");
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);   
    echo json_encode($datas);
}
SendResponse();
