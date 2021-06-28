import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getJobAdvertisementIsActiveTrue")
    }

    closeJobAdvertisement(id){
        return axios.put("http://localhost:8080/api/jobAdvertisement/closeJobAdvertisement?id="+id)
    }

    getByEmployerId(id){
        return axios.get("http://localhost:8080/api/jobAdvertisement/findByEmployer_Id?id="+id)
    }
    getJobAdvertisementIsActiveTrueOrderByReleaseDate(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/findJobAdvertisementIsActiveTrueOrderByReleaseDate")
    }
    add(jobAdvertisementAdd){
        let result = axios.post("http://localhost:8080/api/jobAdvertisement/add",jobAdvertisementAdd)
        return result
    }

    getByIsConfirm(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/findByIsConfirm")
    }
    
    update(jobAdvertisementAdd){
        let result = axios.put("http://localhost:8080/api/jobAdvertisement/update",jobAdvertisementAdd)
        return result
    }

    confirm(jobAdvertisementId){
        return axios.put("http://localhost:8080/api/jobAdvertisement/confirmJobAdvertisement?id="+jobAdvertisementId)
    }

    delete(jobAdvertisementId){
        return axios.delete("http://localhost:8080/api/jobAdvertisement/delete?id="+jobAdvertisementId)
    }
}