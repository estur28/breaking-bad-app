import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
`;

const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/random', text: 'Random'},
    {to: '/episodes', text: 'Episodes'},
    {to: '/quotes', text: 'Quotes'}
];

const Navbar = () => {

    const location = useLocation();

    return (
        <div>
            <Nav>
            {LINKS.map(item => (<li key={item.to}>
                <Link
               to={item.to}
               className={item.to === location.pathname ? 'active' : ''}>
                   {item.text}
                   </Link>
                   </li>))}
            </Nav>
        </div>
    )
}

export default Navbar
