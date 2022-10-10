import axios from "axios";

// Create an instance of the axios object with a base URL. i.e a copy of it
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN";

// you can set up this instance's interceptors

export default instance; 