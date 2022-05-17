import React from 'react';

function NewBook() {
  return (
    <div>
      <div className="container">
        <h3>ADD NEW BOOK</h3>
        <form>
          <input placeholder="Book Title" />
          <input placeholder="Book Author" />
          <button type="button">Add book</button>
        </form>
      </div>
    </div>
  );
}

export default NewBook;
