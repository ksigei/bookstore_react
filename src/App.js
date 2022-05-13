import { Routes, Route } from 'react-router-dom';
import Header from './modules/Header';
import Home from './modules/Home';
import Books from './modules/Routes/Books';
import Categories from './modules/Routes/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
