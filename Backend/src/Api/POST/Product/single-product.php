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
    
     $data = json_decode(file_get_contents("php://input"));
 
     $products->id = $data->id;
     
     //GET one
     $result = $products->getSingleProduct();
 
     $data = $result->fetch(PDO::FETCH_ASSOC);
         if($data)
         {
             echo(json_encode($data));
         }else{
             echo(json_encode("No product found"));
         }
}
SendResponse();
