import axios from "axios";

async function fetchLinks(){
    const response = await axios.get('/api/links');
    return response.data;
}

export default fetchLinks;