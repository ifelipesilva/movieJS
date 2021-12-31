import fetch from 'isomorphic-unfetch';
import Card from '../components/card';

export default function Home({ movies }) {
  return (
    <div className="container">
      <h2 className="text-white text-4xl font-bold mt-4">Latest Movies</h2>
      <div className="grid  md:grid-cols-3 gap-4 col-span-full mb-64">
        {movies.map((movie) => (
          <div key={movie.id} className="w-full md:w-auto">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
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
