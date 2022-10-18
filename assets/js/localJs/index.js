
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


    // fiutr get data by input value

let search_input = document.querySelector('.input-search')

let select_region = document.querySelector('#select-region')

    search_input.addEventListener('input',(e)=>{
        loading()
        let value_name = search_input.value;
        if(value_name === ''){
            api.allDataCountry('https://restcountries.com/v3.1/all')
        }
        else{
            api.getCountryByInput(`https://restcountries.com/v3.1/name/${value_name}`,value_name)
        }
    })

// fitur get data by region
    select_region.addEventListener('input',(e)=>{
        let value = select_region.value;
        search_input.value = ''
        select_region.setAttribute('disabled','')
        search_input.setAttribute('disabled','')
            loading()
            if(value === 'All'){
                api.allDataCountry('https://restcountries.com/v3.1/all')
            
            }
            else{
                api.getDataByRegion(`https://restcountries.com/v3.1/region/${value}`)
            }
    })




    window.addEventListener('load',()=>{
        search_input.value = '';
        select_region.value = 'All';

        search_input.setAttribute('disabled','')
        select_region.setAttribute('disabled','')
    })


    export {select_region,search_input}