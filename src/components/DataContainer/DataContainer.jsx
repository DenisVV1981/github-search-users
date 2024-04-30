import React, { useState } from 'react';
import * as S from './DataContainer.styles'
import SelectedUser from '../SelectedUser/SelectedUser';
import { useSelector } from 'react-redux';

export default function DataContainer({data, isLoading}) {
  const users = useSelector(()=>data?.items);

  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user) => {
    setSelectedUser(user);
  }

  return (
    <S.ResultContainer > 
      {isLoading && (<div>ждити</div>)}
      {!isLoading && (<>
        <S.SelectedUsersList>
          {users && users.map((user)=>{
            return <S.SelectedUserListItem key={user.id} onClick={()=>{selectUser(user)}}>
              {user.login}
            </S.SelectedUserListItem>
          })} 
        </S.SelectedUsersList>
        <SelectedUser user={selectedUser}/>
      </>)}
    </S.ResultContainer>
  )
}
