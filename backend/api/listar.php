
<?php

include "../config/conexao.php";

$result=$conn->query("SELECT * FROM sensores ORDER BY id DESC LIMIT 100");

$dados=[];

while($row=$result->fetch_assoc()){

$dados[]=$row;

}

echo json_encode($dados);

?>
