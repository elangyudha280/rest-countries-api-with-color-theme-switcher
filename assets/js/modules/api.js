import {select_region} from '../localJs/index.js'
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
        .catch(err => {console.error(err)})
        .finally(()=>{
            select_region.removeAttribute('disabled')
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
    .catch(err => {console.error(err)})
    .finally(()=>{
        select_region.removeAttribute('disabled')
    })
    }
}



export  {api};