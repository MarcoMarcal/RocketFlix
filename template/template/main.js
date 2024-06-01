const nextMovie = document.getElementById('nextMovie');
const movies = document.getElementById('movie');

nextMovie.addEventListener('click', findMovie);

function findMovie() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNjMDY4ZGY5NzZlMGE0NjE1YTZiMDcxNjlkNGM4ZSIsInN1YiI6IjY0ZTk3MjI3NTI1OGFlMDBlYWE0NGVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OjMwTv6VnEennnVGTDliCWifVqAq1GlOHPojTr0o5hU'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR', options)
    .then(response => response.json())
    .then(data => {
      movies.innerHTML = ''
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const movie = data.results[randomIndex];
      const li = document.createElement('li');
      li.innerHTML = `
          <p id="titulo">${movie.title}</p>
          <p id="descricao">${movie.overview}</p>
          <img id="foto" src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
      `;
      movies.appendChild(li);
      console.log(randomIndex)
    })
    .catch(err => console.error(err));
}
