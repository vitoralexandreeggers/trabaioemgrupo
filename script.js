



const hospedes = [

{ id: "umhospede", nome: "um", preco_diário: 200},
{ id: "treshospedes", nome: "tres", preco_diário: 400},    
{ id: "seishospedes", nome: "seis", preco_diário: 600}                                        

]

const quartos = [

{ id: "quartoluxo", nome: "luxo", preco_diário: 1500},
{ id: "quartomedio", nome: "medio", preco_diário: 550},
{ id: "quartobarato", nome: "barato", preco_diário: 300}


 ]

const refeicoes = [

{ id: "feieicaogrande", nome: "grande", preco_diário: 200},
{ id: "refeicaomedia", nome: "média", preco_diário: 150},
{ id: "refeicaopequena", nome: "pequena", preco_diário: 100},

]

function preencherOpcoes(){

const selectHospedes = document.getElementById("numero_hospedes");
for (let i = 0; i < hospedes.lenght; i++) {
   const item = hospedes[i];
   const option = document.createElement("option");
   option.value = item.id;
   option.textContent = item.nome;
   selectHospedes.apprendChild(option);
}

const selectQuartos = document.getElementById("quartos");
for (let i = 0; i < quartos.lenght; i++) {
   const item = quartos[i];
   const option = document.createElement("option");
   option.value = item.id;
   option.textContent = item.nome;
   selectQuartos.apprendChild(option);
}

const selectRefeicoes = document.getElementById("refeicao");
for (let i = 0; i < refeicoes.lenght; i++) {
   const item = quartos[i];
   const option = document.createElement("option");
   option.value = item.id;
   option.textContent = item.nome;
   selectRefeicoes.apprendChild(option);
}



}

