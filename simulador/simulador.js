
async function enviar(){

let dados={

temperatura:(20+Math.random()*15).toFixed(1),
umidade:(40+Math.random()*40).toFixed(1),
ar:(200+Math.random()*200).toFixed(0),
luz:(300+Math.random()*700).toFixed(0)

};

await fetch("../backend/api/cadastrar.php",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(dados)

});

console.log("dados simulados enviados");

}

setInterval(enviar,5000);
