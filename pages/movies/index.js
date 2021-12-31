import fetch from 'isomorphic-unfetch';

function MoviesPage({ movies }) {
  <div className="container">
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.movie_title}</h3>
        </li>
      ))}
    </ul>
  </div>;
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

export default MoviesPage;
