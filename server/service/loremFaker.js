const axios = require("axios");

exports.get = async (quantity) => {
    try {
        const response = await axios.get("https://lorem-faker.vercel.app/api/", { params: { quantity } });
        return response.data;
    } catch (e){
       throw e;
    }
}




