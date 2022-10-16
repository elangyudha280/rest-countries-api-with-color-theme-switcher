

let api = {
    getApi(url,fragment){
        return fetch(url).then(response => response.json())
        .then(data => {
            fragment(data)
        })
        .catch(err => console.error(err))
        .finally(()=>{
            let spinner = document.querySelector('.spinner-loading')
            let main_home = document.querySelector('.template-home')
            spinner.style.display = 'none';
            main_home.classList.add('api-active')
        })
    }
}



export default api;