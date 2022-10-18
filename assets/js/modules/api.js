import {select_region,search_input} from '../localJs/index.js'
import {elementCardHome,notFound} from './htmlHomeCard.js'

let api = {
    allDataCountry(url){
        return fetch(url)
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
        .catch(err => {return err})
        .finally(()=>{
            select_region.removeAttribute('disabled')
            search_input.removeAttribute('disabled')
        })
    },
    getDataByRegion(url){
        return  fetch(url)
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
    .catch(err => {return err})
    .finally(()=>{
        select_region.removeAttribute('disabled')
        search_input.removeAttribute('disabled')
    })
    },
    getCountryByInput(url,value_input){
        return fetch(url).then(Response =>{
            if(!Response.ok){
                notFound(value_input)
                // throw new Error('Country Not Found')
            }
            return Response.json();
        })
        .then(data =>{
                elementCardHome(data)
        })
        .catch(err => {return err})
        .finally(
            ()=>{search_input.removeAttribute('disabled')}
            )
    }
}



export  {api};