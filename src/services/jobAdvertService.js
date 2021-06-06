import axios from "axios"

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }
    getOpenJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getAllOpenJobAdvertList")
    }
    getJobAdvertsOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobadvert/findAllByOrderByPublishedAt")
    }
}