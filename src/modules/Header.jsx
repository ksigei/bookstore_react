import React from 'react';
import {Link} from 'react-router-dom';
import './scss/Header.scss';

function Header() {
  return (
    <div>
        <nav>
            <Link className="title_link" to="/">Bookstore CMS</Link>
            <Link className="link" to="/books">BOOKS</Link>
            <Link className="link" to="/categories">CATEGORIES</Link>
            {/* <Link className="link" to="/account">ACCOUNT</Link> */}
        </nav>
    </div>
  )
}

export default Header