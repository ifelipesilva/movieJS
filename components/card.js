import styled from '@emotion/styled'


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
      </div>
    </CardStyled>
  )
}


const CardStyled = styled.div`
 width: 400px;
 border: 1px solid #ccc;
 margin-top: 50px;
 border-radius: 4px;
 overflow: hidden;
 box-shadow: 0 0 10px rgba(0,0,0,0.2);


 .body {
   padding: 20px;


   h3 {
     margin-bottom: 20px;
   }


   p {
     color: #666;
     line-height: 1.5;
   }
 }




`


export default Card