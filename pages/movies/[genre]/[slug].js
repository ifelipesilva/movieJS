import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

function Movie({ movie }) {
  return (
    <div className="container mx-auto px-4 text-white">
      <h2 className="mb-11 text-4xl leading-4 font-bold">{movie.title}</h2>

      <p
        className="max-w-xl text-base  font-normal leading-6"
        dangerouslySetInnerHTML={{ __html: movie.description }}
      ></p>
    </div>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`);
  const data = await res.json();
  return {
    props: {
      movie: data[0],
    },
  };
}

export default Movie;
