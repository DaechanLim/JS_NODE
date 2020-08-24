const btn = document.querySelector('#button')
//document.querySelector(아이디)는 해당 아이디의 태그를 가져온다.
btn.addEventListener('click', ()=> {
    let wordTag = document.querySelector('#word')
    let inputTag = document.querySelector('#input')
    let errorTag = document.querySelector('#error')
    // .은 '~의'를 의미한다
    let word = wordTag.textContent;
    let input = inputTag.value 
    if(word[word.length - 1] === input[0]) {
        wordTag.textContent = input
        errorTag.textContent = ''
        inputTag.value = ''
        inputTag.focus()
    }   else {
        errorTag.textContent = '땡'
        inputTag.value = ''
        inputTag.focus()
    }
    /* input값의 첫번째 값을 가져온다
    ex)'hello'[0] = 'h' = input[0] */
})

