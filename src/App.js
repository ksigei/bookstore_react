import { Routes, Route } from 'react-router-dom';
import Header from './modules/Header';
import BookList from './modules/Routes/BookList';
import Categories from './modules/Routes/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
