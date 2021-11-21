import styled from "@emotion/styled";
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation({navigation}){
  const router = useRouter()
  console.log(router)
  return (
    <NavigationStyled>
      <ul>
        {navigation.map(item => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : ''}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
    margin-left: 20px;
  }

  a{
    color: #fff;

    &:hover {
     color: #385db0;
     transition: .1s;
    }

    &.active {
      color: #385db0;
    }
  }


`


export default Navigation