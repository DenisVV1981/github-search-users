import { Fragment, useState } from 'react';
import './App.css';
import DataContainer from './components/DataContainer/DataContainer.jsx';
import GlobalStyle from './App.globalstyles.js';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import { useLazySearchUsersQuery } from './services/githubApi.js';

function App() {
  const [searchUsers, {data, isLoading, error}] = useLazySearchUsersQuery();

  const handleChangeSearch = (pattern, pageSize, pageNumber) => {
    searchUsers({pattern, per_page:pageSize, page: pageNumber});
  };

  return (
    <Fragment>
      <GlobalStyle/>
      <Searchbar searchChangedCb={handleChangeSearch}></Searchbar>
      <DataContainer data={data} isLoading={isLoading}/>
    </Fragment>
  );
}

export default App;
