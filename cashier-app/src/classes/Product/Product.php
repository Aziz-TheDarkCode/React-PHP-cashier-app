<?php
//Important
namespace CRUD;
use PDO;

class Product
{
    private $conn;
    private $table ="product";

    public $productName;
    public $category;
    public $price;
    public $quantity;
    public $img;

    public function __construct($db)
    {
        $this->conn = $db;
        
    }
    
    public function getProduct($query)
    {
       
        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
    public function createProduct()
    {
        $query = 'INSERT INTO ' . $this->table . ' SET productName = :productname, category = :category, price = :price, img = :img, quantity=:quantity';
        
        $stmt = $this->conn->prepare($query);

        $this->productName = htmlspecialchars(strip_tags($this->productName));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->img = htmlspecialchars(strip_tags($this->img));
        $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        
        $stmt->bindParam(':productname' , $this->productName);
	    $stmt->bindParam(':category' , $this->category);
	    $stmt->bindParam(':price' , $this->price);
	    $stmt->bindParam(':img' , $this->img);
	    $stmt->bindParam(':quantity' , $this->quantity);
        
        if($stmt->execute()) {
            return true;
        }
    
        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);
    
        return false;       
    }
    }

