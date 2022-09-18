import React from 'react'
import Detail from './pages/detail/index'
import Home from './pages/home/index'
import SearchResults from './pages/searchResults/index'
import {Link, Route} from 'wouter'

let theme = 'pastel'

function App() {
  return (
    <div className="App md:py-10 sm:px-20 sm:px-10 sm:py-5" data-theme={`${theme}`}>
      <section className="App-content">
        
        <Link to='/'>
          <h1>Giphyy</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/2065/2065137.png" alt='magnify icon' className='w-20 m-auto -mt-7' />
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