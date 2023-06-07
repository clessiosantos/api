//Tratando Route Params
const express = require('express');

const server = express();

server.use(express.json())
//localhost:3000/pedido/2 //Lista um unico peixe
//localhost:3000/pedido //Listatodos os peixes

const peixesArray=['Coliza','Betta','Cori dora','kinguio','Molinésia','Tetra neon','Peixe arco-iris']

//Rota para listar um único peixe
server.get('/pedido/:indiceInput', (req, res) => {
    const {indiceInput} = req.params
    return res.json({ peixe: `O  peixe pedido foi...
${peixesArray[indiceInput]}` })
})
//Rota para listar TODOS os peixes
    server.get('/pedido', (req, res) => {
    return res.json(peixesArray);
})
//Rota para criar novo peixe - POST - utilizar REQUST BODY
server.post('/pedido', (req, res) => {
    const { nomePeixe } = req.body;
    peixesArray.push(nomePeixe);
    return res.json(peixesArray);
})
//Rota para alterar peixe - PUT - será utilizado BODY
server.put('/pedido/:indice', (req, res) => {
    const { indice } = req.params;
    const { nomePeixe } = req.body;
    peixesArray[indice]=nomePeixe;
    return res.json(peixesArray);
})
//Rota para deletar peixe - DELETE -
server.delete('/pedido/:indice', (req, res) => {
    const { indice } = req.params;
    peixesArray.splice(indice,1);
    return res.json(peixesArray);
})
server.listen(3333);