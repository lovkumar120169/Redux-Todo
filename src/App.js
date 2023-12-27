import logo from './logo.svg';
import './App.css';
import { FirstRedux } from './Components/FirstRedux';
import { Notes } from './Components/Notes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navbar } from './Components/Navbar';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <FirstRedux />
      <Notes />
    </div>
  );
}

export default App;
