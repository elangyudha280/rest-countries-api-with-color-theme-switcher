import {elementCardHome,notFound} from '../modules/htmlHomeCard.js'
console.log(elementCardHome,notFound)

// fitur dark and light mode
let btn_mode = document.querySelector('.btn-mode')
let html_element = document.querySelector('html')
btn_mode.addEventListener('click',function(){
    if(html_element.dataset.colorMode === 'light'){
        html_element.dataset.colorMode = 'dark';
    }
    else{
        html_element.dataset.colorMode = 'light'
    }
})


fetch('https://restcountries.com/v3.1/allasdasd')
.then(Response => {
    if(!Response.ok){
        notFound()
        throw new Error('bad server')
    }
    return Response.json();
})
.then(data=>{
    elementCardHome(data)
})
.catch(err => {console.error(err)})

