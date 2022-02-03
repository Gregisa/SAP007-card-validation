
const validator = {                            //validator armazena as função de validação principal 'isValid' e as operações que serão feitas p descobrir
  isValid(cardNumber) {                        //variável cardArray é declarada vazia porque ainda não foi transformada
    const cardArray= [];   
    for(let i=0; i<cardNumber.length; i++) {     //o loop for itera os caracteres até o comprimento
      const digit=parseInt(cardNumber[i]); //do array(=16). A variável 'arrayNumbers' armazena o resultado dos
      cardArray.push(digit)              //caracteres do array transformados em numbers através do parseInt
    }                                       //'push' manda para a variável 'cardArray' seus caracteres já transformados em numbers                                   //em 'arrayNumbers'
  
    let reverseArray=cardArray.reverse() 
     //'reverseArray' armazena o resultado dos números do array invertidos por meio do reverse()                                           
    for(let i=0; i<reverseArray.length; i++){   //for identfica as posições intercaladas dentro do array que serão *2
      if(i%2===0){
        reverseArray[i]=reverseArray[i]*2
      }
      if(reverseArray[i]>=10){
        reverseArray[i] = reverseArray[i]-9
          console.log(reverseArray);
      }
    }
    let validate= 0
    for(let i=0; i<reverseArray.length; i++) {
      validate += reverseArray[i];
    }
    if(validate %10==0){
      return true;
    }else{
      return false;
    }
     
  },
                                       //'maskify' armazena o processo de mascarar os dígitos a partir da função hideNumbers
  maskify(cardNumber) {                           
   let mask=[];
    for(let i=0; i<cardNumber.length; i++){
      if(i< cardNumber.length-4){
        mask.push('#');
      }else{
        mask.push(cardNumber[i]);
    }
   }
    return mask.join('');
  },
};

export default validator;