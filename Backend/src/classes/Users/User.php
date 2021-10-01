<?php
namespace USER;
use PDO;
    class User 
    {
        private $conn;
        private $table ="users";
    
        public $user;
        public $password;
        public $status;

        public function __construct($db)
        {
            $this->conn = $db;
            
        }
        public function getUsers($query)
        {
           
            $stmt = $this->conn->prepare($query);
    
            $stmt->execute();
    
            return $stmt;
        }
        public function createUser()
        {
            $query = 'INSERT INTO ' . $this->table . ' SET users = :user, password = :password, status = :status';
            
            $stmt = $this->conn->prepare($query);
    
            $this->user = htmlspecialchars(strip_tags($this->user));
            $this->password = htmlspecialchars(strip_tags($this->password));
            $this->status = htmlspecialchars(strip_tags($this->status));
           
            
            $stmt->bindParam(':user' , $this->user);
            $stmt->bindParam(':password' , $this->password);
            $stmt->bindParam(':status' , $this->status);
            
            if($stmt->execute()) {
                return true;
            }
        
            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);
        
            return false;       
        }
    }

?>