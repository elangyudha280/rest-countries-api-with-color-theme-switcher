
// import module api
import {api} from '../modules/api.js'
// import module element html home card
import {elementCardHome,notFound,loading} from '../modules/htmlHomeCard.js'




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


api.allDataCountry('https://restcountries.com/v3.1/all')




let select_region = document.querySelector('#select-region')
    select_region.addEventListener('input',(e)=>{
        let value = select_region.value;
        select_region.setAttribute('disabled','')
            loading()
            if(value === 'All'){
                api.allDataCountry('https://restcountries.com/v3.1/all')
            
            }
            else{
                api.getDataByRegion(`https://restcountries.com/v3.1/region/${value}`)
            }
    })



    // fiutr get data by input value


    window.addEventListener('load',()=>{
        select_region.value = 'All';
        select_region.setAttribute('disabled','')
    })


    export {select_region}