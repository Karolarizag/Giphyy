import React from 'react'
import './styles/App.css';
import {Link, Route} from 'wouter'
import SearchResults from './pages/searchResults/index'
import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>GIPHY_Y</h1>
        <Link to='/'>
          <img src="https://cdn-icons-png.flaticon.com/512/2065/2065137.png" alt='magnify icon' />
        </Link>
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/gif/:keyword' />
        <Route component={Detail} path='/gif/:id' />
      </section>
    </div>
  );
}

// Creando custon hooks y usando Context 1.10'

export default App;
