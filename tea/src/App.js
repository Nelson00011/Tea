import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="App">
        <div id="page-body">
          <header className="App-header">
            General Header Here
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
