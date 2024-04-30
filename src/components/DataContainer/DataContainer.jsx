import React, { useState } from 'react';
import * as S from './DataContainer.styles'
import SelectedUser from '../SelectedUser/SelectedUser';
import { useDispatch, useSelector } from 'react-redux';

export default function DataContainer({data, isLoading}) {
  const users = useSelector(()=>data?.items);

  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user) => {
    setSelectedUser(user);
  }

  return (
    <>
      {!isLoading && (<S.TotalUsersCount>Найдено: {data?.total_count ?? 0} пользователей.</S.TotalUsersCount>)}
      <S.ResultContainer > 
        {isLoading && (<div>ждити</div>)}
        {!isLoading && (<>
          
          <S.SelectedUsersList>
            {users && users.map((user)=>{
              if(selectedUser && user.id === selectedUser.id){
                return <S.SelectedUserListItemCurrent key={user.id}>
                  {user.login}
                </S.SelectedUserListItemCurrent>
              }
              else{
                return <S.SelectedUserListItem key={user.id} onClick={()=>{selectUser(user)}}>
                  {user.login}
                </S.SelectedUserListItem>
              }
            })} 
          </S.SelectedUsersList>
          <SelectedUser user={selectedUser}/>
        </>)}
      </S.ResultContainer>
    </>
    
  )
}
