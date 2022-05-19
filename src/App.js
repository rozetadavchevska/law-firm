import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {Route, Routes} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Header} from './components/components';
import {Home} from './pages/pages';
import Icon from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Hetfield & Heiden | Law Firm</title>
        <meta name="keywords" content="international law firm, lawyer, risk management, legal advice, lawyers, law firm, 
        financial advice, financial advisors, tax lawyers, real estate lawyers, insurance lawyers, corporate lawyers, law firms,
        international lawyers, commercial lawyers, financial regulation, insurance advice, real estate advisors, legal advisors, 
        lawyer training, industrial lawyers, legal support, global law firm, finance lawyers, equity advice, legal insight, global lawyers, 
        legal expertise, trade lawyers, corporate advice, regulatory advice, public sector lawyers, acquisition advice international, international law firms"/>
        <meta name="description" content="Hetfield & Heiden is international law firm, with significant depth and range of 
        resources across five continents." />
        <link rel="icon" href={Icon}/>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;