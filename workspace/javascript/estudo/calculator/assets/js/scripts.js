 // criando uma calculadora

function calculadora() {
   
  // definindo as operações e pegando valor de entrada do usuário
  
   
  const operacao = prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)');
  
  if (!operacao || operacao > 7) {
      alert ('Erro - operação inesistente!');
      calculadora();
  } else {
            // definindo variáveis
            // todas as entradas devem ser do tipo number
              let n1 = Number(prompt('Insira o primeiro valor:'));
              let n2 = Number(prompt('Insira o segundo valor:'));
              let resultado;

              if (n1 || n2 ) {
              alert('erro - parãmetros invalidos');
              calculadora();  
              } else {        
              
                      function soma() {
                      resultado = n1 + n2;
                      alert(`${n1} + ${n2} = ${resultado}`)
                      novaOperacao()
                      }
  
                      function subtracao() {
                      resultado = n1 - n2;
                      alert(`${n1} - ${n2} = ${resultado}`)
                      novaOperacao()
                      }
  
                      function multiplicacao() {
                      resultado = n1 * n2;
                      alert(`${n1} * ${n2} = ${resultado}`)
                      novaOperacao()
                      }
  
                      function divisaoReal() {
                      resultado = n1 / n2;
                      alert(`${n1} / ${n2} = ${resultado}`)
                      novaOperacao()
                      }
  
                      function divisaoInteira() {
                      resultado = n1 % n2;
                      alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                      novaOperacao()
                      }
                      function potenciacao() {
                      resultado = n1 ** n2;
                      alert(`${n1} elevado à ${n2}ª potência é ${resultado}`)
                      novaOperacao()
                      }
  
                      function novaOperacao() {
                         let opcao = prompt('Você deseja fazer outra conta?\n 1 - Sim\n 2 - Não');
    
                         if (opcao == 1) {
                             calculadora();
                         } else if (opcao == 2) {
                             alert('Até logo!');
                         } else {
                         alert('Digite uma opção dentre as disponivéis!')
                         novaOperacao();
                }
  
          }
      }
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
  } else if (operacao == 6){
      potenciacao();
  }

  }
calculadora();
