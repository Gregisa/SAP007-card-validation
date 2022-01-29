import validator from './validator.js';
//const validator: {
//  isValid(cardNumber)number;
//}

const inputCard =document.getElementById('cardButton');  //a variável 'inputCard' se refere ao botão de validar
inputCard.addEventListener('click', function(e){        //e o escutador de eventos "ouve" o click desse botão pra desencadear uma ação
  e.preventDefault();
});
const cardNumber=document.getElementById('cardNumber').value; //a variável 'cardNumber' armazena o valor do número digitado
 console.log(cardNumber);
const inputDigitos =document.getElementById('cardNumber');
const regExp = /[a-zA-Z]/i;/                                 //expregular- identifica ;padrões ;de; caracteres, podendo ;validar; dar ;replace, mascarar
    inputDigitos.addEventListener('keypress', function(){    //o 'i' depois da barra é um modificador, ele localiza o caracter independente se for maiúsculo ou minúsculo
        if(regExp.test(cardNumber)){                         //test é uma expressão reg que testa a const regExp, se os padrões forem encontrados, aparece um alert
         alert('Somente Números');
        };
    })

    // let maskify={
    //   hideNumbers(cardNumber) {
    //     let cat=[];
    //     for(let i=0; i<cardNumber.length; i++){
    //       if(i< cardNumber.length-4){
    //         cat.push("😺");
    //       }
    //     }
    //   }
    // }

    /*const uhsuha=
    let message='';
    if (birobiro (uhsuha.value) )
     message= "Este cartão é válido";
    else 
     message="Este não é um cartão válido"; */

    /*function maskify(cardNumber){
      if(cardNumber.length<4){
        return cardNumber
      } else {
        let lastFour=''
        for(let i=cardNumber.length -4; i< cardNumber.length; i++){
          lastFour += cardNumber[i]
        }
        let mask=''
        for(let cat=0; cat<cardNumber.cardNumber.length -4; cat ++){
        mask += "😺"
        }
        return mask + lastFour
      }
        
      /*let maskDigits= Array.from(cardNumber);
    
        for (let i = 0; i < maskDigits.length - 4; i++) {
          maskDigits[i] = "😺";
        }
        let join = maskDigits.join("");
    
        return join;
      }; */