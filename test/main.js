// const fetch = require("isomorphic-fetch");
const axios = require("axios");
const workDir = process.cwd() || process.env.pwd;

(async function () {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')    
    console.log(data.data);
})();

