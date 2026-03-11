export default function handler(req, res) {

const dados = global.dadosSensores || [];

res.status(200).json(dados);

}