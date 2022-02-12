import validator from './validator.js';

const button = document.getElementById('cardButton');      
const cardNumber =document.getElementById('cardNumber');
const onlyNum = /[^0-9]/g;
let digitsValue= '';  
button.addEventListener('click', cardValidation);

cardNumber.addEventListener('input', function() {
  cardNumber.value = cardNumber.value.replace(onlyNum, '');
});                                                   

function cardValidation(e) {  
e.preventDefault();
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
    function maskedNumbers(e){
    console.log(e);
    digitsValue= digitsValue+e.key;    
    const mask= validator.maskify(digitsValue);
    cardNumber.value=mask;
    }
    cardNumber.addEventListener('keypress', maskedNumbers); 