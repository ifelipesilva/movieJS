import styled from "@emotion/styled";

function Navigation(){
  return (
    <NavigationStyled>
      nav
    </NavigationStyled>
  )
}


const NavigationStyled = styled.div`

  ul {
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin-left: 10px;
  }



`


export default Navigation