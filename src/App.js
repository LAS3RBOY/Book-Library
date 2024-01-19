import './App.css';
import API from './Component/API';
import Navbar from './Component/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './component/Home/Home';
// import About from './component/About/About';

function App() {
  return (
    <>
    <Navbar/>
    <API/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='book' element={<BookList />} />
          <Route path='book/:id' element={<BookDetails />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
