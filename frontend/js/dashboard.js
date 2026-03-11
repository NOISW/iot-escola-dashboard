
let chart;

async function carregar(){

let res = await fetch("../../backend/api/listar.php");
let dados = await res.json();

if(!dados.length) return;

let ultimo = dados[0];

document.getElementById("temp").innerText = ultimo.temperatura + " °C";
document.getElementById("hum").innerText = ultimo.umidade + " %";
document.getElementById("air").innerText = ultimo.ar;
document.getElementById("light").innerText = ultimo.luz + " lux";

avaliarAlerta(ultimo);

let tabela = document.getElementById("dadosTabela");
tabela.innerHTML="";

dados.forEach(d=>{
tabela.innerHTML+=`
<tr>
<td>${d.id}</td>
<td>${d.temperatura}</td>
<td>${d.umidade}</td>
<td>${d.ar}</td>
<td>${d.luz}</td>
<td>${d.data}</td>
</tr>`
});

let temps=dados.map(d=>d.temperatura).reverse();
let labels=dados.map(d=>d.data).reverse();

if(chart) chart.destroy();

const ctx=document.getElementById("graficoTemp");

chart=new Chart(ctx,{
type:'line',
data:{
labels:labels,
datasets:[{
label:'Temperatura',
data:temps
}]
}
});

}

function avaliarAlerta(d){

let alerta=document.getElementById("alerta");

if(d.temperatura>30){

alerta.innerText="ALERTA: Temperatura muito alta!";

}else{

alerta.innerText="Condições normais.";

}

}

setInterval(carregar,5000);
carregar();
