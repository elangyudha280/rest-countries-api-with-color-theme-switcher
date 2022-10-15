

let api = {
    getApi(url,fragment){
        return fetch(url).then(response => response.json())
        .then(data => {
            fragment(data)
        })
        .catch(err => console.error(err))
    }
}



export default api;