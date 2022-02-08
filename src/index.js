import validator from './validator.js';

const button = document.getElementById('cardButton');      //a variável 'button' se refere ao botão Validar
const cardNumber =document.getElementById('cardNumber');  //a variável 'cardNumber' e refere ao número digitado
const digitsValue= cardNumber.value;                     //'digitsValue' pega o valor do número digitado no input 'cardNumber'
button.addEventListener('click', cardValidation);      //o escutador de eventos "ouve" o click de button(var de 'cardButton') e desencadeia a ação                                                    

function cardValidation() {                            //no caso, a função 'cardValidation'

  const finalValidation = validator.isValid(digitsValue);     //veredicto da validação, onde 'finalValidation' checa se a var 'validator' aplicada à
       
      if (digitsValue.length===0 || digitsValue===''); {    //caso o valor digitado em 'cardNumber seja zero ou uma string, disparar alert
         alert('Por favor, digite um número de cartão válido')
      }
  
      if (finalValidation === true) {                         //função 'isValid' será true or false
        alert("Cartão válido! Bem vinda, usuária Prèmiere");
      }
      if(finalValidation===false) {
        alert("Número de cartão inválido");
      }   
      const mask= validator.maskify(digitsValue);
  document.getElementById('cardNumber',).value=mask;
  document.addEventListener('keypress', mask); 
}
  