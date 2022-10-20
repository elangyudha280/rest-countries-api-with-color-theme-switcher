

function getParams(parametersName){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parametersName)
}


export {getParams}