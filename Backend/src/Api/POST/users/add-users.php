<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  
  
  require_once("../../../../vendor/autoload.php");
  
   use DB\Database;
   use USER\User;

  // Instantiate DB & connect
  $database = new Database;
    $db = $database->get_connection();
  // Instantiate blog post object
  $user= new User($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

$user->user = $data->name;
$user->password = $data->password;
$user->status = $data->status;


  // Create post
  if($user->createUser()) {
    echo json_encode(
      array('message' => 'Post Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
?>