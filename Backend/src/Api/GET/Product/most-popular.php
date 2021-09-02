<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
use CRUD\Product;
use DB\Database;

require_once("../../../../vendor/autoload.php");

function SendResponse()
{
    $products_arr = array();

    $database = new Database;
    $db = $database->get_connection();

    $products = new Product($db);
    $result = $products->getProduct("SELECT * FROM product WHERE popularity <=4");
    // Category 1 equal to shoes 
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($datas);
}
SendResponse();
