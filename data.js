

async function api(){

let url=fetch('https://skincare-api.herokuapp.com');

url.then((res)=>{
   return res.json();

}).then((data)=>{
console.log(data)
})

}

api();