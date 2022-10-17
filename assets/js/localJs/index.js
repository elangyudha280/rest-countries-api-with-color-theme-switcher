
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


// api.allDataCountry('https://restcountries.com/v3.1/all')



// api for get data by region

    
    //     let nav_country = document.querySelector('.dropdown-option')
    //     let dropdown_item = [...document.querySelectorAll('.dropdown-item')]

    // nav_country.addEventListener('click',(e)=>{
    //     loading()
    
    //     let targetText = e.target.textContent;
    //     dropdown_item.forEach(el => {
    //         if(el.classList.contains('active-dropdown-item')){
    //             el.classList.remove('active-dropdown-item')
    //         }
    //     });
    
    //     e.target.classList.add('active-dropdown-item')
    
    //         if(targetText === 'All'){
    //             api.allDataCountry('https://restcountries.com/v3.1/all')
            
    //         }
    //         else{
    //             api.getDataByRegion(`https://restcountries.com/v3.1/region/${targetText}`)
    //         }
    // })
