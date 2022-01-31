
const validator = {    
  isValid(cardNumber) {                        //variáveis cardArray e soma declaradas vazias, uma pq será usada+tarde e a outra ainda n foi transformada
    let cardArray= []   
                                              

  for(let i=0; i<cardArray.length; i++) {     //o loop for vai iterar os caracteres até o comprimento
    let arrayNumbers=parseInt(cardNumber[i]); //do array (no caso 16) a variável arrayNumeros vai armazenar o resultado dos
    cardArray.push(arrayNumbers)              //caracteres do array transformados em numbers através do parseInt
  }
                                              //push manda para a variável cardArray seus caracteres já transformados em numbers 
                                              //em arraNumeros
  let reverseArray=arrayNumbers.reverse()     //a variável reverseArray armazena o resultado dos números do array
  let double=reverseArray[i]*2                //invertidos por meio do reverse()                                
  for(let i=0; i<reverseArray.length; i++){    //for p identificar as posições intercaladas dentro do array que serão *2
  if(i%2==0){
    return reverseArray[i]=double;
    }
    if(reverseArray[i]>=10){
        reverseArray[i] = reverseArray[i].split('');
        reverseArray[i] = reverseArray[i][0] + reverseArray[i][1];
        console.log(reverseArray);
    }
  }

    let validate= 0
    for(let i=0; i<reveseArray.length; i++) {
      validate += reverseArray[i];
    }
    if(validate %10==0){
      return true;
    }else{
      return false;
    }
     
  }
}
const maskify={                                       //var maskify armazena o processo de mascarar os dígitos a partir da função hideNumbers
  hideNumbers(cardNumber) {                           //
   let cat=[];
    for(let i=0; i<cardNumber.length; i++){
      if(i< cardNumber.length-4){
        cat.push('😺');
     }else{
        cat.push(cardNumber[i]);
    }
   }
    return cat.join('');
}
};
      export default validator;
     
    /*array feito a partir do número digitado

     const cardArray = numeroDigitado.split('');
     
     /*parseInt p transformar strings em números e assim conseguir fazer operações 

      cardArray[1] = parseInt(cardArray[1]) * 2;
      if(parseInt(cardArray[1])>=10){
        cardArray[1] = String(cardArray[1]).split('');
        /*split é uma expressão regular p  
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
    }*/