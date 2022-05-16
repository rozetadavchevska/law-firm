// import logo from 'assets/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
//import Popper from '@popperjs/core';
//import $ from 'jquery';
import {Header, Footer, Hero, Expertice, Sectors} from './components/components';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Expertice />
      <Sectors />
      <Footer />
    </div>
  );
}

export default App;
