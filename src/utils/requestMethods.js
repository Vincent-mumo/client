import axios from "axios"

const BASE_URL = "http://localhost:8800/api/"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user
const currentUser = user && JSON.parse(user).currentUser
const Token =  currentUser?.access_token

export const publicRequest = axios.create({
    baseURL:BASE_URL,withCredentials:true
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{Token}
})



