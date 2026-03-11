export default function handler(req, res) {

const dados = [

{
id: 1,
temperatura: 24.5,
umidade: 58,
ar: 320,
luz: 450,
data: "2026-03-10 08:00"
},

{
id: 2,
temperatura: 25.2,
umidade: 60,
ar: 310,
luz: 470,
data: "2026-03-10 08:10"
},

{
id: 3,
temperatura: 26.1,
umidade: 62,
ar: 305,
luz: 480,
data: "2026-03-10 08:20"
},

{
id: 4,
temperatura: 27.4,
umidade: 65,
ar: 295,
luz: 500,
data: "2026-03-10 08:30"
},

{
id: 5,
temperatura: 28.3,
umidade: 67,
ar: 290,
luz: 520,
data: "2026-03-10 08:40"
},

{
id: 6,
temperatura: 29.1,
umidade: 70,
ar: 280,
luz: 540,
data: "2026-03-10 08:50"
},

{
id: 7,
temperatura: 28.7,
umidade: 68,
ar: 285,
luz: 530,
data: "2026-03-10 09:00"
},

{
id: 8,
temperatura: 27.9,
umidade: 66,
ar: 295,
luz: 510,
data: "2026-03-10 09:10"
}

];

res.status(200).json(dados);

}