
// import function get params
import {getParams} from '../modules/getParams.js'

// import fragment html
import {fragmentDetail,notFound} from '../modules/htmlHomeCard.js'

// fiturt light and dark mode

let btn_mode = document.querySelector('.btn-mode')
let html_element = document.querySelector('html')
btn_mode.addEventListener('click',function(){
    console.log('ok')
    if(html_element.dataset.colorMode === 'light'){
        html_element.dataset.colorMode = 'dark';
    }
    else{
        html_element.dataset.colorMode = 'light'
    }
})

let detail_container = document.querySelector('.container-country-detail');


fetch(`https://restcountries.com/v3.1/name/${getParams('name')}`).then(Response => {
    if(!Response.ok){
        notFound(detail_container)
        return 'error'
    }
    return Response.json()
})
.then(data =>{
    fragmentDetail(data)
})
.catch(err => {return err})