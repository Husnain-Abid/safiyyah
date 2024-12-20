import './App.css';
import Home from './page/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
import Work from './page/Work/Work';
import LandingPage from './page/LandingPage/LandingPage';



function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />}> </Route>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/contact' element={<Work />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          {/* <Route path='/work' element={<Contact />}> </Route> */}

        </Routes>

      </Router>
    </>
  );
}

export default App;
