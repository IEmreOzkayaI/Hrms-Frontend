import axios from "axios"


export  default class EmployerService{
    addEmployer(employer){
        let result = axios.post("http://localhost:8080/api/employer/add",employer)
        return result
    }

    getAllEmployer(){
        return axios.get("http://localhost:8080/api/employer/getall")
    }
}