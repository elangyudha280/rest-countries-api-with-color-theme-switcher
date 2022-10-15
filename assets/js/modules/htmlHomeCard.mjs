



function elementCardHome(data){
    let fragmentContainer = document.querySelector('.container-country-home')
    let fragment = ``
    data.forEach(el => {
        fragment += `
        <div class="card-item-country">
        <div class="card-header">
        <a href="#">  <img src="${el.flags.png}" class="img-card-header" alt=""></a>
        </div>
        <div class="card-body">
            <h6 class="title-card-country">${el.name.common}</h6>
            <p class="desc-population">Population: <span class="num-population">${el.population}</span></p>
            <p class="desc-region">Region: <span class="num-region">${el.region}</span></p>
            <p class="desc-capital">Capital: <span class="num-capital">${el.capital}</span></p>
        </div>
      </div>
        `
    });

    return fragmentContainer.innerHTML += fragment
}



export default elementCardHome;