
<?php

include "../config/conexao.php";

$data = json_decode(file_get_contents("php://input"), true);

$temp=$data['temperatura'];
$umi=$data['umidade'];
$ar=$data['ar'];
$luz=$data['luz'];

$sql="INSERT INTO sensores(temperatura,umidade,ar,luz)
VALUES('$temp','$umi','$ar','$luz')";

$conn->query($sql);

echo json_encode(["status"=>"ok"]);

?>
