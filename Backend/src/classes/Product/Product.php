<?php
//Important
namespace CRUD;
use PDO;

class Product
{
    private $conn;
    private $table ="product";

    public $id ;
    public $category;

    public function __construct($db)
    {
        $this->conn = $db;
        
    }
    
    public function getProduct($query)
    {
       
        // $query ="SELECT * FROM $this->table";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function getSingleProduct()
    {
        $query ="SELECT * FROM $this->table WHERE productID =:id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(":id",$this->id);
        $stmt->execute();
        
        return $stmt;
    }

    public function getProductByCategory()
    {
        $query ="SELECT * FROM $this->table WHERE category =:category";
        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(":category",$this->category);
        $stmt->execute();
        
        return $stmt;

    }


    }
