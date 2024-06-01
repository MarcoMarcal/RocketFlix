const nextMovie = document.getElementById('nextMovie');
const movies = document.getElementById('movie');
nextMovie.addEventListener('click', findMovie);
let filmesExibidos = [];

function findMovie() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNjMDY4ZGY5NzZlMGE0NjE1YTZiMDcxNjlkNGM4ZSIsInN1YiI6IjY0ZTk3MjI3NTI1OGFlMDBlYWE0NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OjMwTv6VnEennnVGTDliCWifVqAq1GlOHPojTr0o5hU'
    }
  };
  const pmovie = Math.floor(Math.random() * 50)
  fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page='+ pmovie + '&region=br', options)
    .then(response => response.json())
    .then(data => {
      const filmesDisponiveis = data.results.filter(movie => !filmesExibidos.includes(movie.id));

      if (filmesDisponiveis.length === 0) {
        filmesExibidos = [];
      }
      const randomIndex = Math.floor(Math.random() * filmesDisponiveis.length);
      const movie = filmesDisponiveis[randomIndex];

      filmesExibidos.push(movie.id);

      movies.innerHTML = '';

      const li = document.createElement('li');
      li.innerHTML = `
          <p id="titulo">${movie.title}</p>
          <div id="divisao">
          <p id="descricao">${movie.overview}</p>
          <img id="foto" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"></img>
          </div>
      `;
      movies.appendChild(li);
      console.log(randomIndex)
    })
    .catch(err => console.error(err));
}

