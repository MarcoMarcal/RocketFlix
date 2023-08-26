import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from "./api.js"

const url = BASE_URL;

function ryder(){
  axios.get(url)
  .then(response => {
    console.log("ola")
  })
  .catch(error => console.log(error))
}
findmovie();