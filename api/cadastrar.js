
let dados=global.iotDados||[]

export default function handler(req,res){

if(req.method==='POST'){

const body=req.body

const registro={
id:dados.length+1,
temperatura:body.temperatura,
umidade:body.umidade,
ar:body.ar,
luz:body.luz,
data:new Date().toISOString()
}

dados.unshift(registro)
global.iotDados=dados

res.status(200).json({status:'ok'})
return
}

res.status(405).end()

}
