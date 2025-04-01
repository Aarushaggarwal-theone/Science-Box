import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const strapihosturl = process.env.STRAPI_HOST_URL;
console.log(strapihosturl);
async function fetchArticles(){
    try {
        const response = await axios.get(`${strapihosturl}/api/articles?populate=*`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];


    }

}

let data = await fetchArticles().then(result => {return result});
console.log(data);
export default data;
