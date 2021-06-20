import axios from "axios"

export  default class JobPositionService{
    addJobPosition(jobPosition){
        let result = axios.post("http://localhost:8080/api/job-positions/add",jobPosition)
        return result
    }

    getAllJobPositions(){
        return axios.get("http://localhost:8080/api/job-positions/getall")
    }
}