import styled from '@emotion/styled'
import { rem } from 'polished'
import Navigation from './Navigation'


function Header({isDark}) {
  return (
  <HeaderStyled isDark={isDark}>
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src="/images/logo.svg" alt="Sites logo" />
          <span className="logo-text">MovieJS</span>
        </div>
        <Navigation/>
      </div>
    </div>
  </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: ${props => props.isDark ? '#0a070f' : '#1e172e'};
  padding: ${rem(20)};

  .logo {
    display: flex;
    align-items: center;
    

    .logo-text{
      color: #F9F5F9;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`

export default Header
