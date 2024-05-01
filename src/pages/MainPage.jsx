import { useState } from 'react';
import DataContainer from "../components/DataContainer/DataContainer.jsx";
import Searchbar from "../components/Searchbar/Searchbar.jsx";

export const MainPage = ()=> {
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
      <h1 
      style={{ backgroundColor:"lightgray", padding: "15px"}}>
      Поиск пользователей GitHub.
      </h1>
      <Searchbar searchChangedCb={handleChangeSearch} totalItems={data?.total_count??-1}></Searchbar>
      <DataContainer data={data} isLoading={isLoading} startRowNumber={startRowNumber}/>
    </>
  );
};