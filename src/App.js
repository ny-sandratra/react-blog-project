
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './navbar/Navbar'
import Accueil from './accueil/Accueil'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Footer from './footer/Footer'


function App() {
  return (
    <Router>
         <Navbar/>
        <Route path="/" exact> <Accueil/> </Route>
        <Route path="/Profil"><Contact/> </Route>
       
      <Footer/>
    </Router>

  );
}

export default App
