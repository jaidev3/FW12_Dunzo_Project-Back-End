document.getElementById("btn").addEventListener("click", geter);

const axios = require('axios');
function geter(){
    console.log("hello world");
    axios({
        method: 'GET',
        url: 'http://localhost:2345/item'
    }) 
    .then((res) => {
        console.log(res);
    })
}