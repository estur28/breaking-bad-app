import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Nav = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledLink = styled(Link)`
    margin: 0 10px;
    padding: 5px;
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 20px;
    &.active {
        color: #A62A00;
    }
`

const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/episodes', text: 'Episodes'},
    {to: '/quotes', text: 'Quotes'}
];

const Navbar = () => {

    const location = useLocation();

    return (
        <div>
            <Nav>
            {LINKS.map(item => (<li key={item.to}>
                <StyledLink
               to={item.to}
               className={item.to === location.pathname ? 'active' : ''}>
                   {item.text}
                   </StyledLink>
                   </li>))}
            </Nav>
        </div>
    )
}

export default Navbar
