import axios from "axios";

export default class ProgrammingLanguageService{
    addToCvProgrammingLanguage(id,programmingLanguage){
        let result = axios.post("http://localhost:8080/api/programming_langugage/addToCv?cvId="+id,programmingLanguage)
        return result
    }
    addToDbProgrammingLanguage(programmingLanguage){
        let result = axios.post("http://localhost:8080/api/programming_langugage/add",programmingLanguage)
        return result
    }
    deleteProgrammingLanguage(id){
        let result = axios.delete("http://localhost:8080/api/programming_langugage/delete?id="+id)
        return result
    }
    getAllProgrammingLanguages(){
        return axios.get("http://localhost:8080/api/programming_langugage/getAll")
    }
    getByCvId(id){
        return axios.get("http://localhost:8080/api/programming_langugage/findByCv_Id?id="+id)
    }

    update(id,programmingLanguage){
        return axios.update("http://localhost:8080/api/programming_langugage/update?cvId="+id,programmingLanguage)
    }
}