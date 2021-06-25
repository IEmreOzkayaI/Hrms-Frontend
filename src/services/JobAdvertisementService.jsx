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
    add(id,id2,jobAdvertisement,id3,id4,id5){
        let result = axios.post("http://localhost:8080/api/jobAdvertisement/add?cityId=&employerId=&jobPositionId=&jobTimeId=&jobTypeId="+id,+id2,+jobAdvertisement,+id3,+id4,+id5);
        return result
    }
    
}