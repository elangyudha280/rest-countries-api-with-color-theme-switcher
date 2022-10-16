// import module api
import api from '../modules/api.mjs'

// import module element html home card
import htmlHomeCard from '../modules/htmlHomeCard.mjs'




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


// FITUR GET ALL DATA API

api.getApi('https://restcountries.com/v3.1/all',htmlHomeCard)