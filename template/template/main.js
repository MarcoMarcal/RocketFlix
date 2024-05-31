const nextMovie = document.getElementById('nextMovie')
const movies = document.getElementById('movie');
nextMovie.addEventListener('click', findmovie);
function findmovie(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNjMDY4ZGY5NzZlMGE0NjE1YTZiMDcxNjlkNGM4ZSIsInN1YiI6IjY0ZTk3MjI3NTI1OGFlMDBlYWE0NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OjMwTv6VnEennnVGTDliCWifVqAq1GlOHPojTr0o5hU'
    }
  };
  

  const li = document.createElement('li');
  movies.appendChild(li);

  fetch('https://api.themoviedb.org/3/search/movie?query=Velozes%20e%20furiosos&adult=false&language=pt-BR', options)
    .then(response => response.json())
    .then(data => {
      
      for(let pfilme = 0; pfilme < data.results.length; pfilme++) {
        const movie = data.results[pfilme];
        li.innerHTML = `
            <p id="titulo">${movie.title}</p>
            <p id="descricao">${movie.overview}</p>
            <img id="foto" src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
        `;
          console.log(pfilme)
      }
      
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  }
    