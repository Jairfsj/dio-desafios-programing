 // criando uma calculadora

function calculadora() {
   
  // definindo as operações e pegando valor de entrada do usuário
  
  // usamos "\n" para fazer uma quebra de linha
   
  const operacao = prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)');
  
        // definindo variáveis
        // todas as entradas devem ser do tipo number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
  function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
  }
  function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
  }
  function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`
  }
  function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
  }
  function soma() {
    resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
  }
  function soma() {
    resultado = n1 ** n2;
    alert(`${n1} * ${n2} = ${resultado}`);
  }
  if (operacao == 1) {
      soma();
  } else if (operacao == 2) {
      subtracao();
  } else if (operacao == 3) {
      multiplicacao();
  } else if (operacao == 4) {
      divisaoInteira();
  } else if (operacao == 5) {
      divisaoReal();
  } else if (operacao == potenciacao){
      potenciacao();
  }

  }
calculadora();
