import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { addBook } from '../../redux/Books/books';

function NewBook() {
  const dispatch = useDispatch();
  const AddBook = (book) => {
    dispatch(addBook(book));
  };
  // let newID = generate();
  // function newID() {
  //   location.reload(generate())

  //   return generate()
  // }
  // const newID = location.reload(generate());
  const inputState = {
    id: '',
    title: '',
    author: '',
  };

  const [state, setState] = useState(inputState);
  const onchange = (e) => {
    setState((state) => ({
      ...state,
      id: generate(),
      [e.target.name]: e.target.value,
    }));
  };
  // const submitForm = (event) => {
  //   event.preventDefault();
  //   // document.querySelector('form').reset();
  //   const updatedState = {title: state.title, author: state.author, id: generate(),
  //   }
  //   return updatedState
  // }
  // const updatedState = {title: state.title, author: state.author, id: generate(),
  // }

  return (
    <div>
      <div className="container">
        <h3>ADD NEEEEEEW BOOK</h3>
        <form>
          <input
            type="text"
            value={state.title}
            onChange={onchange}
            name="title"
            placeholder="Book Title"
          />
          <input
            type="text"
            value={state.author}
            onChange={onchange}
            name="author"
            placeholder="Book Author"
          />
          <button type="button" onClick={() => AddBook(state)}>
            Add book
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBook;
