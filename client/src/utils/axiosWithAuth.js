
import axios from "axios";

//this returns the token from the localStorage i.e. server
export function getToken() {
  return localStorage.getItem("token");
}

//this creates the authorization for this url
export default function() {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: getToken()
    }
  });
} 