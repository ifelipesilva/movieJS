import styled from '@emotion/styled'
import { rem } from 'polished'
import Navigation from './Navigation'
import Link from 'next/link'

function Header({isDark, navigation}) {
  return (
  <HeaderStyled isDark={isDark}>
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="logo">
        <Link href="/">
          <a>
          <img src="/images/logo.svg" alt="Sites logo" />
          <span className="logo-text">MovieJS</span>
          </a>       
        </Link>
     
        </div>
        <Navigation navigation={navigation} />
      </div>
    </div>
  </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: ${props => props.isDark ? '#1e172e' : '#0a070f'};
  padding: ${rem(20)};

  .logo {
    a{
      display: flex;
      align-items: center;
    }
    
    
    .logo-text{
      color: #F9F5F9;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`

export default Header
