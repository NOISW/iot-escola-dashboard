import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export default function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({error:"method not allowed"});
}

let dados = [];

if(fs.existsSync(filePath)){
dados = JSON.parse(fs.readFileSync(filePath));
}

const body = req.body;

const registro = {
id: dados.length + 1,
temperatura: body.temperatura,
umidade: body.umidade,
ar: body.ar,
luz: body.luz,
data: new Date()
};

dados.unshift(registro);

fs.writeFileSync(filePath, JSON.stringify(dados,null,2));

res.status(200).json({status:"ok"});

}