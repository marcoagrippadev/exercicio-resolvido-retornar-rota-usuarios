const express = require("express");

const app = express();

const retornarUsuarios = [
  { id: 11, nome: "joao", idade: 23 },
  { id: 2, nome: "maria", idade: 18 },
  { id: 4, nome: "ana", idade: 30 },
  { id: 1, nome: "rodrigo", idade: 17 },
  { id: 123, nome: "rodrigo", idade: 17 },
];

function avisarInicializacaoDoServidor() {
  console.log("Sevidor Inicializado Na Porta 3000");
}

app.get("/usuarios", function (requisicao, resposta) {
  resposta.send(retornarUsuarios);
});

app.listen(3000, avisarInicializacaoDoServidor);
