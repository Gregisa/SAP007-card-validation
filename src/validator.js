/*const validator = {
  // ...
};

export default validator;*/


  
  /*a variável 'inputCard' seleciona o input q está dentro do html a partir do seu Id
   o escutador ouve a ação do click e começa função validar*/
  
   let inputCard = window.document.getElementById('cardButton');
  inputCard.addEventListener('click', function(validar){
    /*a função aqui pega o valor do número digitado */
     
    let numeroDigitado = window.document.getElementById('cardNumber').value;
      /*array feito a partir do número digitado*/
     const cardArray = numeroDigitado.split('');
     /*parseInt p transformar strings em números e assim conseguir fazer operações */
      cardArray[1] = parseInt(cardArray[1]) * 2;
      if(parseInt(cardArray[1])>=10){
        cardArray[1] = String(cardArray[1]).split('');
        /*split é uma expressão regular p  */
        cardArray[1] = parseInt(cardArray[1][0]) + parseInt(cardArray[1][1]);
    }
      cardArray[3] = parseInt(cardArray[3]) * 2;
      if(parseInt(cardArray[13])>=10){
        cardArray[3] = String(cardArray[3]).split('');
        cardArray[3] = parseInt(cardArray[3][0]) + parseInt(cardArray[3][1]);
    }
      cardArray[5] = parseInt(cardArray[5]) * 2;
        if(parseInt(cardArray[5])>=10){
          cardArray[5] = String(cardArray[5]).split('');
          cardArray[5] = parseInt(cardArray[5][0]) + parseInt(cardArray[5][1]);
      }
      cardArray[7] = parseInt(cardArray[7]) * 2;
      if(parseInt(cardArray[7])>=10){
        cardArray[7] = String(cardArray[7]).split('');
        cardArray[7] = parseInt(cardArray[7][0]) + parseInt(cardArray[7][1]);
    }
      cardArray[9] = parseInt(cardArray[9]) * 2;
      if(parseInt(cardArray[9])>=10){
        cardArray[9] = String(cardArray[9]).split('');
        cardArray[9] = parseInt(cardArray[9][0]) + parseInt(cardArray[9][1]);
    }
      cardArray[11] = parseInt(cardArray[11]) * 2;
      if(parseInt(cardArray[11])>=10){
        cardArray[11] = String(cardArray[11]).split('');
        cardArray[11] = parseInt(cardArray[11][0]) + parseInt(cardArray[11][1]);
    }
      cardArray[13] = parseInt(cardArray[13]) * 2;
      if(parseInt(cardArray[13])>=10){
        cardArray[13] = String(cardArray[13]).split('');
        cardArray[13] = parseInt(cardArray[13][0]) + parseInt(cardArray[13][1]);
    }
      cardArray[15] = parseInt(cardArray[15]) * 2;
      if(parseInt(cardArray[15])>=10){
        cardArray[15] = String(cardArray[15]).split('');
        cardArray[15] = parseInt(cardArray[15][0]) + parseInt(cardArray[15][1]);
    }
      console.log(cardArray);
  });
  let inputDigitos = window.document.getElementById('cardNumber');
  let regExp = /[a-zA-Z]/i;/*regExp- identificar e testar padrões de caracteres dentro de uma string, 
  podendo validar, dar replace, mascarar /o 'i' depois da barra é um modificador, ele localiza independente 
  se o carcater for maiúsculo ou minúsculo*/
  let cartaoFinal = window.document.getElementById('cardNumber').value;
  inputDigitos.addEventListener('keypress', function(){
      if(regExp.test(cartaoFinal)){ /*.test é uma expressão regular que testa a let regExp, se os padrões
        forem true, aparece o alert */
          alert('Somente Números');
  })
})
 
/* const arrayDigits = [cardDigits];
console.log(arrayDigits)

const multiplicaIndicesPares = arr.map((numero, indice) => {
  if (indice % 2 === 0) {
    return numero * 2
  }
  return numero
})

console.log(multiplicaIndicesPares)
  
   function validate(){
    if(finalResult%10==0){
      alert('Cartão válido. Bem-vinda, usuária Première!);
      }else if(finalResult%10!=0){
        alert('Cartão inválido, tente novamente');
      }else if(cardNumber.length<16){
        alert('O cartão deve conter 16 dígitos');
      }else(cardNumber=!''){
        alert('Por favor, apenas números');
      }
  } */
