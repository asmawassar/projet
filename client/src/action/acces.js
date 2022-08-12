import axios from "axios";

export function getkey() {
  console.log(localStorage.getItem("key"));
  return localStorage.getItem("key");
}

export function logout() {
  localStorage.removeItem("key");
}

export function setkey(value) {
  const result = axios
    .get("http://localhost:5000/user/get", {})
    .then((res) => {
      console.log(res.data);
      console.log(result);
      localStorage.setItem("key", result.role);
    })
    .catch((error) => {
      console.log(error);
    });
}
