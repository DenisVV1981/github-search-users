import { Fragment, useState } from 'react';
import './App.css';
import DataContainer from './components/DataContainer/DataContainer.jsx';
import GlobalStyle from './App.globalstyles.js';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import { useLazySearchUsersQuery } from './services/githubApi.js';

function App() {
  const [searchUsers, {data, isLoading, error}] = useLazySearchUsersQuery();
  const [startRowNumber, setStartRowNumber] = useState(null);

  const handleChangeSearch = (pattern, pageSize, pageNumber) => {
    searchUsers({pattern, per_page:pageSize, page: pageNumber});
    setStartRowNumber( (pageNumber-1)*pageSize + 1);
  };

  return (
    <Fragment>
      <GlobalStyle/>
      <Searchbar searchChangedCb={handleChangeSearch} totalItems={data?.total_count??-1}></Searchbar>
      <DataContainer data={data} isLoading={isLoading} startRowNumber={startRowNumber}/>
    </Fragment>
  );
}

export default App;
