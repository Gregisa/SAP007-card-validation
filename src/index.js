import validator from './validator.js';

console.log(validator);

/*a variável 'inputCard' seleciona o input q está dentro do html a partir do seu Id
   o escutador ouve a ação do click e começa função validar*/
  
let inputCard = window.document.getElementById('cardButton');
inputCard.addEventListener('click', validator('cardNumber'));{
    
    /*a função aqui pega o valor do número digitado */
     
let numeroDigitado = window.document.getElementById('cardNumber').value;

let inputDigitos = window.document.getElementById('cardNumber');
let regExp = /[a-zA-Z]/i;/*regExp- identificar e testar padrões de caracteres dentro de uma string, 
    podendo validar, dar replace, mascarar /o 'i' depois da barra é um modificador, ele localiza independente 
    se o carcater for maiúsculo ou minúsculo*/
let cartaoFinal = window.document.getElementById('cardNumber').value;
    inputDigitos.addEventListener('keypress', function(){
        if(regExp.test(cartaoFinal)){ /*.test é uma expressão regular que testa a let regExp, se os padrões
          forem true, aparece o alert */
            alert('Somente Números');   