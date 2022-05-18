import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/components';
import {Home} from './pages/pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
