

// import fitur parse string to string 
import numberWithCommas from './ParseToString.mjs'



// ELEMENT CONTAINER IN HOME
let fragmentContainer = document.querySelector('.container-country-home')


// function page not found
function notFound(value = ""){
    return fragmentContainer.innerHTML = `
            <div class="not-found">
            <span class="text-not-found">No country matches "<span class="country-not-found">${value}</span>" </span>
          </div>
        `
}

// function page login
function loading( ){
  return fragmentContainer.innerHTML = `
  <div class="building-blocks">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>`
}

// function fragment element card in home
function elementCardHome(data){
    let fragmentContainer = document.querySelector('.container-country-home')
    let fragment = ``
    if(data === undefined){
      notFound()
      return;
    }
  else{
    data.forEach(el => {
      fragment += `
      <div class="card-item-country">
      <div class="card-header">
      <a href="otherPage/detail.html?name=${el.name.common}">  <img src="${el.flags.png}" loading="lazy" class="img-card-header" alt=""></a>
      </div>
      <div class="card-body">
          <h6 class="title-card-country">${el.name.common}</h6>
          <p class="desc-population">Population: <span class="num-population">${numberWithCommas(el.population)}</span></p>
          <p class="desc-region">Region: <span class="num-region">${el.region}</span></p>
          <p class="desc-capital">Capital: <span class="num-capital">${el.capital}</span></p>
      </div>
    </div>
      `
  });

    return fragmentContainer.innerHTML = fragment
  }
}

//  CODE FOR DETAIL PAGE


function loopingdataCurrencies(el_api,prop){
  for (const el in el_api) {
    return el_api[el][prop]
  }
}

function loopingdataLanguages(el_api){
  for (const el in el_api) {
    return el
  }
}

function loopingNativeName(el_api){
  for (const el in el_api) {
    return el_api[el].official
  }
}
let detail_container = document.querySelector('.container-country-detail');
function notFoundDetail(value = ""){
  return detail_container.innerHTML = `
          <div class="not-found">
          <span class="text-not-found">No country matches "<span class="country-not-found">${value}</span>" </span>
        </div>`
}
// FUNCTION FRAGMENT DETAIL
function fragmentDetail(data){

  let fragment = ``
  if(data === undefined){
    notFoundDetail()
    return
  }
  else{
    data.forEach(e => {
      fragment += `
      <div class="item-detail detail-img">
      <img src="${e.flags.png}" alt="">
  </div>
  <div class="item-detail detail-description">
      <h4 class="title-detail">${e.name.common}</h4>
      <div class="description">
          <div class="left">
              <p class="native-name">
                  native name: <span>${loopingNativeName(e.name.nativeName)}</span>
              </p>
              <p class="pupulation">
              Population: <span>${numberWithCommas(e.population)}</span>
              </p>
              <p class="region">
               region: <span>${e.region}</span>
              </p>
              <p class="sub-region">
              sub region: <span>${e.subregion}</span>
              </p>
              <p class="capital">
                  capital: <span>${e.capital[0]}</span>
              </p>
          </div>
          <div class="right">
              <p class="top-level-domain">
                  top level domain: <span>${e.tld[0]}</span>
              </p>
              <p class="currencies">
                  currencies: <span>${loopingdataCurrencies(e.currencies,'name')}</span>
              </p>
              <p class="language">
                  language: <span>${loopingdataLanguages(e.languages)}</span>
              </p>
          </div>
      </div>
      <div class="footer-description">
        <div class="footer-desc-item footer-text">
          Border Countries:
        </div>
        <div class="footer-desc-item footer-info-right">
          <button class="btn-footer">${e.borders[0]}</button>
          <button class="btn-footer">${e.borders[1]}</button>
          <button class="btn-footer">${e.borders[2]}</button>
        </div>
      </div>
  </div>
      `
    })
  }
  
  return detail_container.innerHTML = fragment;
}





export {elementCardHome,notFound,loading,fragmentDetail,notFoundDetail};