
 const validator = {                            //validator armazena as função de validação principal 'isValid' e as operações que serão feitas p descobrir
   isValid(cardNumber) {                     
    const cardArray= [];                          //variável cardArray é declarada vazia porque ainda não foi transformada
     for(let i=0; i<cardNumber.length; i++) {     //o loop for itera os caracteres até o comprimento
      const digit=parseInt(cardNumber[i]);       //do array(=16). A variável 'arrayNumbers' armazena o resultado dos
       cardArray.push(digit);                    //caracteres do array transformados em numbers através do parseInt
       console.log(cardNumber);
      }                                         //'push' manda para a variável 'cardArray' seus caracteres já transformados em numbers                                   //em 'arrayNumbers'
     
     const reverseArray=cardArray.reverse();    //'reverseArray' armazena o resultado dos números do array invertidos por meio do reverse()
     const masked= maskNumber.join(''); 
                                                                 
     for(let i=0; i<reverseArray.length; i++){   //for identfica as posições intercaladas dentro do array que serão *2
       if((i+1)%2===0){                            //se a posição dentro do array for par, multiplicar por 2
         reverseArray[i]=reverseArray[i]*2       //então o número identificado em reverse array[i] agr se torna ele mesmo dobrado
       }
       if(reverseArray[i]>=10){                  //se o número dobrado for>=10
         reverseArray[i] = reverseArray[i]-9     //deverá ser subtraído por 9
           console.log(reverseArray);
       }
     }
     let finalSum= 0;                            //soma final dos números do array
     for(let i=0; i<reverseArray.length; i++) {  //loop p iterar todos os caracteres
       finalSum= finalSum+ reverseArray[i];      //somano todos os caracteres
        }
        
     if(finalSum %10===0){                       //se o resultado da soma for múltiplo de 10
      return true;                               //retorna verdadeiro
     }else{
       return false;                             //se não, falso
     }
    },
    maskify(cardNumber) {                         
      let maskNumber = [];
  
      for (let i = 0; i < cardNumber.length; i++) {   //loop p/ iterar todos os carcateres do array
        if (i < cardNumber.length - 4) {             // se 
          maskNumber.push("#");                      //
        } else {                                   
          maskNumber.push(cardNumber[i]);            //
        }
      }
      const masked= maskNumber.join('');    
      return masked;   //juntar tudo
    },
     
  };

  export default validator;