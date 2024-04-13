import axios from "axios"

const url = "https://portfolio-js.b.goit.study/api/reviews"
let reviews;

export async function getReviwes () {  

    try {
        const response = await axios.get(url);
        return response
    }
    catch (error) {
        console.log (error)
    }
}