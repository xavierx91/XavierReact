// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './components/Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        // Set up the Router
        <Route exact path="/" component={Projects} />
        <Route path="/Projects" component={Projects} />
        <Route path="/About" component={About} />


        
      <Footer/>
  
        {/* <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div> */}
      </div>
    </BrowserRouter>
  );
}
 
export default App;