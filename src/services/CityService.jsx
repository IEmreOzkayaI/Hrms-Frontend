import axios from "axios"

export default class CityService{
    addCity(city){
        let result = axios.post("http://localhost:8080/api/city/add",city)
        return result
    }
    getAllCity(){
        return axios.get("http://localhost:8080/api/city/getAll")
    }
}