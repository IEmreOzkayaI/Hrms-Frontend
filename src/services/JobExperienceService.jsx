import axios from "axios";

export default class JobExperienceService{
    addJobExperience(jobExperience){
        let result = axios.post("http://localhost:8080/api/job_experience/add",jobExperience)
        return result
    }
    getByCvIdOrderByAsc(id){
        return axios.get("http://localhost:8080/api/job_experience/findByCvIdOrderByAsc?id="+id)
    }
    getByOrderByAsc(){
        return axios.get("http://localhost:8080/api/job_experience/findByOrderByAsc")
    }
}