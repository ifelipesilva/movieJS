import fetch from 'isomorphic-unfetch'
import Card from '../components/card';


export default function Home({movies}) {
  console.log(movies)
  return (
    <div className="container">
        {movies.map(movie => (
         <Card key={movie.id}  movie={movie} />         
       ))}
    </div>
  )
}





export async function getServerSideProps(){
  const API = process.env.API_KEY;

 
  const res = await fetch(`${API}/movies`)
  const data = await res.json()

  return {
    props: {
      movies: data
    }
  }
}
