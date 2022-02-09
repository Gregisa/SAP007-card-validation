import validator from './validator.js';

const button = document.getElementById('cardButton');      //a variável 'button' se refere ao botão Validar
const cardNumber =document.getElementById('cardNumber');  //a variável 'cardNumber' e refere ao número digitado
button.addEventListener('click', cardValidation);      //o escutador de eventos "ouve" o click de button(var de 'cardButton') e desencadeia a ação                                                    

function cardValidation() { 
  const digitsValue= cardNumber.value; 
   
  /*const mask= validator.maskify(digitsValue);
  document.getElementById('cardNumber').value=mask;
 document.addEventListener('keyup', mask); criar função mascarar em outro escopo*/                 


  const finalValidation = validator.isValid(digitsValue);     

      if (digitsValue.length===0 || digitsValue==='') { 
         console.log(digitsValue.length);   
          return alert('Por favor, digite um número de cartão válido');
         
      }
  
      if (finalValidation === true) {                         
         return alert("Cartão válido! Bem vinda, usuária Prèmiere");
      }
      if(finalValidation===false) {
        return alert("Número de cartão inválido");
      }   
}
  