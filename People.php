<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 *
 */

class Person {
  public $name = "";
  public $age = 0;
  public $gender = "";
  function __construct($name, $age, $gender) {
       $this->name = $name;
       $this->age = $age;
       $this->gender = $gender;
   }
}

$p1 = new Person("paul1", 12, "m");
$p2 = new Person("paul2", 65, "m");
$p3 = new Person("thomas", 25, "f");

$People = array($p1, $p2, $p3);

echo json_encode($People);


?>
