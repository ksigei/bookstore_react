import React from 'react';
import Book from './Book';
import NewBook from './NewBook';
import './scss/Style.scss';

function BookList() {
  return (
    <div>
      <Book />
      <Book />
      <NewBook />
    </div>
  );
}

export default BookList;
