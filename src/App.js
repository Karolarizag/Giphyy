import React from 'react'
import {Link, Route} from 'wouter'
import './App.css';
import Home from './pages/home/index'
import SearchResults from './pages/searchResults/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphyy
        </h1>
        <Link to='/'>
          <img src="https://cdn-icons-png.flaticon.com/512/2065/2065137.png" alt='magnify icon' />
        </Link>
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route component={Detail} path='/gif/:id' />
      </section>
    </div>
  );
}

export default App;

// Creando custom hooks y usando context 50min