import { useState } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer/SearchContainer.jsx';
import SelectedUser from './components/SelectedUser/SelectedUser.jsx';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <SearchContainer
        selectUserCb={setSelectedUser}/>
      <SelectedUser 
        user={selectedUser}/>
    </div>
  );
}

export default App;
