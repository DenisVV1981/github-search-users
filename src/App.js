import { Fragment } from 'react';
import './App.css';
import DataContainer from './components/DataContainer/DataContainer.jsx';
import GlobalStyle from './App.globalstyles.js';
import Searchbar from './components/Searchbar/Searchbar.jsx';

function App() {

  return (
    <Fragment>
      <GlobalStyle/>
      <Searchbar></Searchbar>
      <DataContainer/>
    </Fragment>
  );
}

export default App;
