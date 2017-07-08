import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyD_EE8UO0GtaBjsXiANDabFq23rUAgc8mw';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container') );;
