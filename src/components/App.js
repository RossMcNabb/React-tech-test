
import './App.css';
import Searchbar from './search';
import React from 'react';

function App() {
  const [searchText, setSearchText] = useState("");
  const handleImageSearch = () => {
    getImageSearch[searchText,setSearchText]
  }
  return (
    <div className="App">
    <p>Hello World</p>
    <Searchbar />
    </div>
  );
}

export default App;
