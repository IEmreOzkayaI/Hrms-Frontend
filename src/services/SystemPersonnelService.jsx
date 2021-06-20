import axios from "axios"

export  default class SystemPersonnelService{
    getAllSystemPersonnel(){
        return axios.get("http://localhost:8080/api/system-personnel/getall")
    }
}
