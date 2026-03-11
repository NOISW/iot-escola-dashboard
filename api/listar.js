import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export default function handler(req,res){

if(!fs.existsSync(filePath)){
return res.status(200).json([]);
}

const dados = JSON.parse(fs.readFileSync(filePath));

res.status(200).json(dados);

}
