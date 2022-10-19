

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