import axios from "axios"

export default class JobSeekerService{
    getJobSeeker(){
        return axios.get("http://localhost:8080/api/job-seeker/getall")
    }
    addJobSeeker(jobSeeker){
        let result = axios.post("http://localhost:8080/api/job-seeker/add",jobSeeker)
        return result;
    }
}