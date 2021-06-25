import axios from "axios"

export default class JobTimeService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobTimes/getAll");
    }
    getAllFullTime(){
        return axios.get("http://localhost:8080/api/jobTimes/getAllFullTime");
    }
    getAllPartTime(){
        return axios.get("http://localhost:8080/api/jobTimes/getAllPartTime");
    }
}