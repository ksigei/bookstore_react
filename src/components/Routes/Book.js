// import { checkPropTypes } from 'prop-types';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/Books/books';
// import { useDispatch } from 'react-redux';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [currBooks, setCurrBooks] = useState(books);
  // const category = useSelector((state) => state.categories);
  useEffect(() => {
    setCurrBooks([...books]);
  }, [books]);

  // console.log(books);
  // console.log(category);

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };
  return currBooks.map((book) => (
    <div key={book.id} className="book">
      <h1>
        Title:
        {book.title}
      </h1>
      <h2>
        Author:
        {book.author}
      </h2>
      <button type="button" onClick={() => deleteBook(book)}>
        Remove book
      </button>
    </div>
  ));
};

export default Book;
