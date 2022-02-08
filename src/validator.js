
 const validator = {                            
   isValid(cardNumber) {           
    const cardArray= [];                        
     for(let i=0; i<cardNumber.length; i++) {     
      const digit=parseInt(cardNumber[i]);       
       cardArray.push(digit);                    
       console.log(cardNumber);
      }                                         
     
     const reverseArray=cardArray.reverse(); 
     console.log(reverseArray);   

     for(let i=0; i<reverseArray.length; i++){   
       if((i+1)%2===0){                            
         reverseArray[i]=reverseArray[i]*2       
       }
       if(reverseArray[i]>=10){                  
         reverseArray[i] = reverseArray[i]-9     
           console.log(reverseArray);
       }
     }
     let finalSum= 0;                            
     for(let i=0; i<reverseArray.length; i++) {  
       finalSum= finalSum+ reverseArray[i];      
        }
        
     if(finalSum %10===0){                       
      return true;                               
     }else{
       return false;                             
     }
    },
    maskify(cardNumber) {                         
      let maskNumber = [];
  
      for (let i = 0; i < cardNumber.length; i++) {   
        if (i < cardNumber.length - 4) {             
          maskNumber.push("#");                      
        } else {                                   
          maskNumber.push(cardNumber[i]);            
        }
      }
      const masked= maskNumber.join('');    
      return masked;
    },
     
  };

  export default validator;