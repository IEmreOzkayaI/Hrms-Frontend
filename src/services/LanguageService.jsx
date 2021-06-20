import axios from "axios";

export default class LanguageService{
    addLanguage(language){
        let result = axios.post("http://localhost:8080/api/language/add",language)
        return result
    }
    getAllLanguages(){
        return axios.get("http://localhost:8080/api/language/getAll")
    }
    getByCvId(id){
        return axios.get("http://localhost:8080/api/language/findByCv_Id?id="+id)
    }
}