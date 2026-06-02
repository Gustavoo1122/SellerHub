import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/estoque">Estoque</Link></li>
        <li><Link to="/financeiro">Financeiro</Link></li>
    </ul>
  )
}
