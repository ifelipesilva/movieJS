import styled from '@emotion/styled'
import Link from 'next/link'


function Card ({movie}){
  const API = process.env.API_KEY
  return (
    <CardStyled>
      <div className="poster">
        <img src={API + movie.poster.url} alt="" />
      </div>
      <div className="body">
         <h3>{movie.title}</h3>

         <p dangerouslySetInnerHTML={{__html: movie.description}}/>

         <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
            <a> More about this movie</a>
         </Link>
      </div>
    </CardStyled>
  )
}


const CardStyled = styled.div`
 width: 100%;
 margin-top: 50px;
 border-radius: 4px;
 overflow: hidden;
 box-shadow: 0 0 10px rgba(0,0,0,0.2);


 .body {
   padding: 20px;
   background: #1F1A36;

   h3 {
     margin-bottom: 20px;
     color: #fff;
   }

 

   p {
     color: #7D7885;
     line-height: 1.5;
   }

   a {
     display: inline-block;
     margin: 20px 0;
     background: #385db0;
     padding: 1rem 2rem;
     color: #fff;
     font-weight: normal;
     border-radius: 4px;

     &:hover{
       background-color: #f9bd44;
       color: #1F1A36;
     }
   }

 }




`


export default Card