import axios from "axios"

export  default class CvService{
    getCvById(id){
        return axios.get("http://localhost:8080/api/cv/getAllCv?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/cv/getAll")
    }
}