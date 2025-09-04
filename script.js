


const quartos = [

{ id: "quartoluxo", nome: "luxo", preco_diario: 1500},
{ id: "quartomedio", nome: "medio", preco_diario: 550},
{ id: "quartobarato", nome: "barato", preco_diario: 300}
];

const refeicoes = [

{ id: "feieicaogrande", nome: "grande", preco_diario: 200},
{ id: "refeicaomedia", nome: "média", preco_diario: 150},
{ id: "refeicaopequena", nome: "pequena", preco_diario: 100}
];

function preencherOpcoes(){

   const selectQuartos = document.getElementById("quartos");
   for (let i = 0; i < quartos.length; i++) {
      const item = quartos[i];
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.nome;
      selectQuartos.appendChild(option);
   }

   const selectRefeicoes = document.getElementById("refeicao");
   for (let i = 0; i < refeicoes.length; i++) {
      const item = refeicoes[i];
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.nome;
      selectRefeicoes.appendChild(option);
   }


}

function procurarporid(lista, idprocurado) {
  for (let i = 0; i < lista.length; i++) {ome:
   if (lista[i].id === idprocurado) {
      return lista[i];
   }
  }
  return null;

}
preencherOpcoes();

function gerarRelatorio() { 
   const nomedocliente = document.getElementById("nome_cliente").value;
   const pessoas = parseInt(document.getElementById("hospede").value);
   const dias = parseInt(document.getElementById("dia").value);
   const quartosid = (document.getElementById("quartos").value);
   const refeicoesid = (document.getElementById("refeicao").value);

   var quartoss = procurarporid(quartos, quartosid);
   var refeicoess = procurarporid(refeicoes, refeicoesid);
   
   const custoQuartos = quartoss.preco_diario * dias * pessoas;
   const custoRefeicoes = refeicoess.preco_diario * dias * pessoas;
   const total = custoQuartos + custoRefeicoes;

   const relatorioHTML = `
      <h2>Relatório do hotel</h2>
      <p><strong>nome do cliente:</strong> ${nomedocliente}</p>
      <p><strong>dias de hospedagem:</strong> ${dias}</p>
      <p><strong>numero de hospedes:</strong> ${pessoas}</p>
      <p><strong>quartos:</strong> ${quartos.nome} - R$ ${custoQuartos.toFixed(2)}</p>
      <p><strong>refeicao:</strong> ${refeicoes.nome} - R$ ${custoRefeicoes.toFixed(2)}</p>
      <h3>Total Estimado: R$ ${total.toFixed(2)}</h3>
      <p>Obrigado por usar a nossa ficha de hotel!</p>
   `;  

document.getElementById("relatorio").innerHTML = relatorioHTML;

}










