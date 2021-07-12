import React from 'react';
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResult';

export default function HomePage() {
  return (
  <>
    <div className="container">
    <SearchBar/>
    <SearchResult/>
    </div>
  </>
    )
}

