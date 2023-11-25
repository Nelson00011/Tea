import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import NavBar from './components/NavBar';
import HomePage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  //COMMENTS: Routes
  let routes;
  routes = <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/home" element={<HomePage />} />
  <Route path="*" element={<NotFoundPage/>} />
  </Routes>


  return (
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <div id="page-body">
        {routes}
        </div>
      </BrowserRouter>
    </div>
    );

    
}

export default App;
