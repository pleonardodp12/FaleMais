import styled  from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderNav = styled.div`
  background-color: #0E0B16;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 50px;
  align-items: center;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);
  margin-bottom: 50px;
  img {
    width: 95px;
    margin-left: 50px
  }

`
export const Items = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
`

export const Nav = styled.ul`
  display:flex;
  margin: 20px 50px;
  
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #D4C9C9;
  padding: 10px 15px;
	text-align: center;
	display: block;
  transition: 0.5s;
  font-size: 20px;

  &:hover {
    background: #ddd;
    color: #7E57C2;
  }
`