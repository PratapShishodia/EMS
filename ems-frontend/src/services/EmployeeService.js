import axios from "axios";
import { renderToReadableStream } from "react-dom/server";

const restapiurl = "http://localhost:8080/employee";

export const listofemp = () => {
    return axios.get(restapiurl);
}

export const addemp = (employee) => {
    return axios.post(restapiurl,employee);
}

export const getemp = (id) => {
    return axios.get(restapiurl+"/"+id);
}

export const updateemp = (id,employee) => {
    return axios.put(restapiurl+"/"+id,employee);
}

export const delemp = (id) => {
    return axios.delete(restapiurl+"/"+id);
}