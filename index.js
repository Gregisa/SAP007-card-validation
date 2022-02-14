import validator from './validator.js';

const button = document.getElementById('cardButton');      
const cardNumber =document.getElementById('cardNumber');
const onlyNum = /[^0-9]/g;
button.addEventListener('click', cardValidation);
cardNumber.addEventListener('keyup', cloneCardN);

cardNumber.addEventListener('input', function() {
cardNumber.value = cardNumber.value.replace(onlyNum, '');
}); 

function cloneCardN(e) {
  e.preventDefault();
  let cardValue=document.getElementById('cardNumber').value;
  let mask = validator.maskify(cardValue);
  
  document.getElementById('cardClone').value = mask;
}                                                 

function cardValidation(e) {  
  e.preventDefault();
  const digitsValue= cardNumber.value;
    const finalValidation = validator.isValid(digitsValue);     
  
        if (digitsValue.length===0 || digitsValue==='') { 
           console.log(digitsValue.length);   
            return alert('Por favor, digite um número de cartão válido');
        }
         if (finalValidation === true) {                         
           return alert('Cartão válido! Bem vinda, usuária Prèmiere');
        }
        if(finalValidation===false) {
          return alert('Número de cartão inválido');
        }   
    }