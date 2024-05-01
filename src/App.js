import { Fragment, useState } from 'react';
import './App.css';
import DataContainer from './components/DataContainer/DataContainer.jsx';
import GlobalStyle from './App.globalstyles.js';
import Searchbar from './components/Searchbar/Searchbar.jsx';

function App() {
  const [startRowNumber, setStartRowNumber] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);


  const handleChangeSearch = (newData, newIsLoading, newStartRowNumber) => {
    setData(newData);
    setIsLoading(newIsLoading);
    setStartRowNumber( newStartRowNumber);
  };

  return (
    <>
      <GlobalStyle/>
      <h1>Поиск пользователей GitHub.</h1>
      <Searchbar searchChangedCb={handleChangeSearch} totalItems={data?.total_count??-1}></Searchbar>
      <DataContainer data={data} isLoading={isLoading} startRowNumber={startRowNumber}/>
    </>
  );
}

export default App;
