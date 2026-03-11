
export default function handler(req,res){

const dados=global.iotDados||[]
res.status(200).json(dados)

}
