let result=document.querySelector('.result')
let input=document.querySelector('.input')
let button=document.querySelector('.button')
let error=document.querySelector('.error')

button.addEventListener('click' , () =>{
      if(input.value==''){
          error.innerHTML="Plese enter a number"
      }else{
        error.innerHTML=''
        result.innerHTML=''
        for(let i=1 ; i<11 ; i++){
                result.innerHTML += input.value + 'x' + i + '=' + (input.value*i)+ '<br>'
        }
        input.value=''
      }
})