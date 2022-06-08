import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL; 
const BASE_URL = 'https://api.khaber.sa/api/'



export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint;
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        delete: (id) => axios.delete(url + id),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    }
}