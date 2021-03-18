const axios = require("axios");

(async function () {
    try {
        const response = await axios.get("./base_config.js")
        const data = response.data;
    }
    catch (e) {
        console.log(e);
    }
})();