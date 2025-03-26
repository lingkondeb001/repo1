

async function api(){

let response =await fetch('GET https://skincare-api.herokuapp.com');
let data =await response.json();

console.log(data)


}

api();