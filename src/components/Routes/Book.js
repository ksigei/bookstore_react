import { checkPropTypes } from 'prop-types';
import React from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

const Book = ({ book }) => {
  // const dispatch = useDispatch();
  const { title, author } = book;
  // const deleteBook = (book) => {
  //   dispatch(removeBook(book));
  // };
  return (
    <div className="book">
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  );
};

Book.propTypes = {
  book: checkPropTypes.isRequired,
};

export default Book;
