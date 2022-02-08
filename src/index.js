import validator from './validator.js';

const button = document.getElementById('cardButton');      //a variável 'button' se refere ao botão Validar
const cardNumber =document.getElementById('cardNumber');  //a variável 'cardNumber' e refere ao número digitado
const digitsValue= cardNumber.value;                     //'digitsValue' pega o valor do número digitado no input 'cardNumber'
button.addEventListener('click', cardValidation);      //o escutador de eventos "ouve" o click de button(var de 'cardButton') e desencadeia a ação                                                    

function cardValidation() { 
   
  const mask= validator.maskify(digitsValue);
  document.getElementById('cardNumber',).value=mask;
  document.addEventListener('keyup', mask);                      


  const finalValidation = validator.isValid(digitsValue);     

      if (digitsValue.length===0 || digitsValue===''); {    
         alert('Por favor, digite um número de cartão válido')
      }
  
      if (finalValidation === true) {                         
        alert("Cartão válido! Bem vinda, usuária Prèmiere");
      }
      if(finalValidation===false) {
        alert("Número de cartão inválido");
      }   
}
  