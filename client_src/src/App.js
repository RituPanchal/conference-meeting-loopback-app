import React from 'react';
import './App.scss';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Members from './components/Members';

const App = () => (
  <div>
    <Navbar />
      <div className="container">
        <Main />
      </div>

      <div className="fixed-action-btn">
        <Link to="/members/add" className="btn-floating btn-large red"><i className="material-icons small">person_add</i></Link>
      </div>
      </div>
)

export default App;
