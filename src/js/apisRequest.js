import axios from "axios"
import MockAdapter from 'axios-mock-adapter';

const url = "https://portfolio-js.b.goit.study/api/reviews"
const wrongUrl = "https://portfolio-js.b.goit.study/api/";
let reviews;

export async function getReviwes () {  

    try {
        const response = await axios.get(url);
        
        return response
    }
    catch (error) {
        
        throw error;
    }
}

