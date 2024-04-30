import React, { useState } from 'react';
import * as S from './DataContainer.styles'
import SelectedUser from '../SelectedUser/SelectedUser';
import { useSearchUsersQuery } from '../../services/githubApi';

export default function DataContainer({}) {
  const {data, isLoading, error} = useSearchUsersQuery();
  console.log(data);

  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user) => {
    setSelectedUser(user);
  }

  return (
    <S.ResultContainer > 
      <S.SelectedUsersList>
        {data?.items && data.items.map((user)=>{
          return <S.SelectedUserListItem key={user.id} onClick={()=>{selectUser(user)}}>
            {user.login}
          </S.SelectedUserListItem>
        })} 
      </S.SelectedUsersList>
      <SelectedUser user={selectedUser}/>
    </S.ResultContainer>
  )
}
