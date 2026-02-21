import axios from "axios";


const BaseUrl =axios.create({
     baseURL: "http://localhost:5000",

})

//signup
export const signupapi=()=>{
     return BaseUrl.post("/auth/signup")
}

//login
export const loginapi=()=>{
     return BaseUrl.post("/login")
}