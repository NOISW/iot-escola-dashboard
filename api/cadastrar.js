let dados = global.dadosSensores || [];

export default function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Método não permitido" });
}

const body = req.body;

const registro = {
id: dados.length + 1,
temperatura: body.temperatura,
umidade: body.umidade,
ar: body.ar,
luz: body.luz,
data: new Date().toISOString()
};

dados.unshift(registro);

global.dadosSensores = dados;

res.status(200).json({ status: "ok", dados });

}