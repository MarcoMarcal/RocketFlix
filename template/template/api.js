import { API_KEY, BASE_URL, IMG_URL, language } from "./main";

 function findmove(){
    API_KEY, BASE_URL, IMG_URL, language
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNjMDY4ZGY5NzZlMGE0NjE1YTZiMDcxNjlkNGM4ZSIsInN1YiI6IjY0ZTk3MjI3NTI1OGFlMDBlYWE0NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OjMwTv6VnEennnVGTDliCWifVqAq1GlOHPojTr0o5hU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
 }