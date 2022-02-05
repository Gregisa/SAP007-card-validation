import validator from './validator.js';

const button = document.getElementById('cardButton');      //a variável 'button' se refere ao botão Validar
const cardNumber =document.getElementById('cardNumber');  //a variável 'cardNumber' e refere ao número digitado
const digitsValue= cardNumber.value;                     //'digitsValue' pega o valor do número digitado no input 'cardNumber'

button.addEventListener('click', cardValidation);      //o escutador de eventos "ouve" o click de button(var de 'cardButton') e desencadeia a ação
                                                    
function cardValidation() {                           //no caso, a função 'cardValidation'

  if (isNaN(digitsValue)) {                        //checar se preencheu com um caractere que não é um número
    alert("Somente números");
  }
  if (digitsValue.length<16) { //checar se o campo está vazio ou se tem menos de 16 dígitos
    alert("Seu cartão deve conter no mínimo 13 dígitos");
  }
  if(digitsValue==null){
    alert("Por favor, digite um número de cartão");
      }

      const finalValidation = validator.isValid(digitsValue); //veredicto da validação, onde 'finalValidation' checa se a var 'validator' aplicada à
                                                              //função 'isValid' será true or false
      if (finalValidation === true) {
        alert("Número de cartão inválido");
      } else {
        alert("Cartão válido! Bem vinda, usuária Prèmiere");
      }
   }