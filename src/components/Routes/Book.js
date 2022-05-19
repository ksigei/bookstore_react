import { checkPropTypes } from 'prop-types';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/Books/books';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [currBooks, setCurrBooks] = useState(books);
  useEffect(() => {
    setCurrBooks([...books]);
  }, [books]);

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
Book.propTypes = {
  title: checkPropTypes.isRequired,
  author: checkPropTypes.isRequired,
};
export default Book;
