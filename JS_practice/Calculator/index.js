const numberInput = document.querySelector('#input')
const clearBtn = document.querySelector('#clear')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const divideBtn = document.querySelector('#divide')
const muliplyBtn = document.querySelector('#multiply')
const calculateBtn = document.querySelector('#calculate')
const resultInput = document.querySelector('#result')

let temp //const는 바꿀수가 없기에
let operator

clearBtn.addEventListener('click', () =>{
    numberInput.value = null
    temp = null // 있었는데 없었습니다 할때 씀
    operator = null
    resultInput.value = null
})
plusBtn.addEventListener('click', () =>{
    if(temp) {
        operator = '+'
        numberInput.value = null
    } else{    
    if(numberInput.value){
        temp = Number(numberInput.value)
        operator = '+'
        numberInput.value = null
        resultInput.value = null
    } // 무시하는 경우 else 굳이 쓸필요 없음
}})
minusBtn.addEventListener('click', () =>{
    if(temp) {
        operator = '-'
        numberInput.value = null
    } else{      
    if(numberInput.value){
        temp = Number(numberInput.value)
        operator = '-'
        numberInput.value = null
        resultInput.value = null
    }
}})
divideBtn.addEventListener('click', () =>{
    if(temp) {
        operator = '/'
        numberInput.value = null
    } else{  
    if(numberInput.value){
        temp = Number(numberInput.value)
        operator = '/'
        numberInput.value = null  
        resultInput.value = null
    }  
}})
muliplyBtn.addEventListener('click', () =>{
    if(temp) {
        operator = '*'
        numberInput.value = null
    } else{      
    if(numberInput.value){
        temp = Number(numberInput.value)
        operator = '*'
        numberInput.value = null   
        resultInput.value = null 
    }
}})
calculateBtn.addEventListener('click', () =>{
    console.log(temp, operator, numberInput.value)
    if(operator) { 
        if(numberInput.value){
            if(operator === '+') {
                resultInput.value = temp + Number(numberInput.value)
            }else if(operator === '-') {
                resultInput.value = temp - Number(numberInput.value)
            }else if(operator === '/') {
                resultInput.value = temp / Number(numberInput.value)
            }else if(operator === '*'){
                resultInput.value = temp * Number(numberInput.value)
            }            
            temp = Number(resultInput.value)

        }
    } else {
        if(numberInput.value){
           resultInput.value = temp
        }
    }    
})