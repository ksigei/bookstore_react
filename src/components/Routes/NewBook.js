import React from 'react';
// import { useDispatch } from 'react-redux';

function NewBook() {
  return (
    <div>
      <div className="container">
        <h3>ADD NEW BOOK</h3>
        <form>
          <input type="text" name="title" placeholder="Book Title" />
          <input type="text" name="author" placeholder="Book Author" />
          <button type="button">Add book</button>
        </form>
      </div>
    </div>
  );
}

export default NewBook;
