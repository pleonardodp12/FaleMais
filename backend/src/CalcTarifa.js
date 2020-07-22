const Ligacao = require('./Ligacao');
const Plano = require('./Plano');

class CalculadoraTarifaLigacao {

  static calcular(ligacao) {

    const duracaoSemTarifa = ligacao.duracao - ligacao.plano.minuto; 

    let valor = 0;
    
    if(ligacao.origem === "011" && ligacao.destino === "016") {
      valor = 1.90 
    }
    if(ligacao.origem === "016" && ligacao.destino === "011") {
      valor = 2.90
    }
    if(ligacao.origem === "011" && ligacao.destino === "017") {
      valor = 1.70
    }
    if(ligacao.origem === "017" &&  ligacao.destino === "011") {
      valor = 2.70
    }
    if(ligacao.origem === "011" &&  ligacao.destino === "018") {
      valor = 0.90
    }
    if(ligacao.origem === "018" &&  ligacao.destino === "011") {
      valor = 1.90;
    }

    return (valor * duracaoSemTarifa * 1.1).toFixed(2);
  }
}

function main() {
  const plano = new Plano('FaleMais 60', 60);
  const origem = '011';
  const destino = '017';
  const duracao = 80;
  
  ligacao = new Ligacao(origem, destino, duracao, plano);

  console.log(CalculadoraTarifaLigacao.calcular(ligacao));
}

main()

// module.exports = new CalculadoraTarifa();