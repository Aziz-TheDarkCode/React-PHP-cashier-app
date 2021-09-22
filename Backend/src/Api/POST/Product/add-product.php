<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  use CRUD\Product;
  use DB\Database;
  require_once("../../../../vendor/autoload.php");
  // Instantiate DB & connect
  $database = new Database;
    $db = $database->get_connection();
  // Instantiate blog post object
  $product= new Product($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

$product->productName= $data->productName;
$product->price = $data->price;
$product->category= $data->category;
$product->quantity = $data->quantity;
$product->img= $data->img;


  // Create post
  if($product->createProduct()) {
    echo json_encode(
      array('message' => 'Post Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
?>