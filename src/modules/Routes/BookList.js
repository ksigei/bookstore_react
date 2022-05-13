import React from 'react';
import Book from './Book';
import NewBook from './NewBook';

function BookList() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <NewBook />
    </div>
  );
}

export default BookList;
