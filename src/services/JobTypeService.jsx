import axios from "axios"

export default class JobTypeService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobTypes/getAll");
    }
    getAllIn(){
        return axios.get("http://localhost:8080/api/jobTypes/getAllIn");
    }
    getAllRemote(){
        return axios.get("http://localhost:8080/api/jobTypes/getAllRemote");
    }
}