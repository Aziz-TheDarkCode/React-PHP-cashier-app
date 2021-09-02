<?php

namespace DB;

use PDO;
use PDOException;

// require_once("../../../config/init.php");
    

class Database
    {
       private $user ="root";
       private $host ="localhost";
       private $password ="";
       private $database ="cashier";
       
       private $connection;

        public function get_connection()
        {
            try
            {
                $this->connection = new PDO("mysql:host=$this->host;dbname=$this->database",$this->user ,$this->password);
            }
            catch(PDOException $exception)
            {
                echo($exception->getMessage());
            }

            return $this->connection;
        }
    }
    

?>