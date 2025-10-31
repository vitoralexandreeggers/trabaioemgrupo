

const sabores = [
  { id: "calabresa", nome: "Calabresa", preco: 20 },
  { id: "pepperoni", nome: "Pepperoni", preco: 20 },
  { id: "queijos", nome: "quatro queijos", preco: 20 }
];

const tamanho = [
  { id: "oitopedaço", nome: "8 pedaços", precoDiaria: 20 },
  { id: "quatorzepedaço", nome: "14 pedaços", precoDiaria: 30 },
  { id: "vintepedaço", nome: "20 pedaços", precoDiaria: 40 }
];

const bebidas = [
  { id: "coca", nome: "refri", precoDiario: 8 },
  { id: "brahma", nome: "cerveja", precoDiario: 5 },
  { id: "mineral", nome: "agua", precoDiario: 3 }
];

function preencherOpcoes() {
  
  const selectSabor = document.getElementById("sabor");
  for (let i = 0; i < sabores.length; i++) {
    const item = sabores[i];                 
    const option = document.createElement("option"); 
    option.value = item.id;                      
    option.textContent = item.nome;              
    selectSabor.appendChild(option);        
  }

  
  const selectTamanho = document.getElementById("tamanho");
  for (let i = 0; i < tamanho.length; i++) {
    const item = tamanho[i];
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectTamanho.appendChild(option);
  }

  
  const selectBebidas = document.getElementById("bebida");
  for (let i = 0; i < bebidas.length; i++) {
    const item = bebidas[i];
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nome;
    selectBebidas.appendChild(option);
  }
}

function procurarPorId(lista, idProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idProcurado) {
      return lista[i]; 
    }
  }
  return null; 
}
preencherOpcoes();


function procurarPorId(vetor, idProcurado){
  var i;
  for(i = 0; i < vetor.length; i++){
    if(vetor[i].id === idProcurado){
      return vetor[i];
    }
  }
  return null;
}


function gerarRelatorio() {
    const nome = document.getElementById("nome").value;
    const enderecodocliente = document.getElementById("endereco").value;
    const cepefe = document.getElementById("cepeefe").value;
    const pagamento = document.getElementById("pagamento").value;
    const saborId = document.getElementById("sabor").value;
    const tamanhoId = document.getElementById("tamanho").value;
    const bebidasId = document.getElementById("bebida").value;

    var saborr = procurarPorId(sabores, saborId);
    var tamanhoo = procurarPorId(tamanho, tamanhoId);
    var bebidaa = procurarPorId(bebidas, bebidasId);

    const custoSabor = saborr.preco 
    const custoTamanho = tamanhoo.precoDiaria 
    const custoBebidas = bebidaa.precoDiario 
    const total = custoSabor + custoTamanho + custoBebidas;

    const relatorioHTML = `
        <h2>Relatório da Viagem</h2>
        <p><strong>nome do cliente:</strong> ${nome}</p>
        <p><strong>endereço do cliente:</strong> ${enderecodocliente}</p>
        <p><strong>cpf do cliente:</strong> ${cepefe}</p>
        <p><strong>forma de pagamento:</strong> ${pagamento}</p>
        <p><strong>sabor:</strong> ${saborr.nome} - R$ ${custoSabor.toFixed(2)}</p>
        <p><strong>tamanho:</strong> ${tamanhoo.nome} - R$ ${custoTamanho.toFixed(2)}</p>
        <p><strong>bebida:</strong> ${bebidaa.nome} - R$ ${custoBebidas.toFixed(2)}</p>
        <h3>Total Estimado: R$ ${total.toFixed(2)}</h3>
        <p>Obrigado por pedir!</p>
    `;

    document.getElementById("relatorio").innerHTML = relatorioHTML;
}
