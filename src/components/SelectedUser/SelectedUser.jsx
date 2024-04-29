import React from 'react';
import * as S from './SelectedUser.styles'

export default function SelectedUser({user}) {
  if (!user)
  {
    return (<>Пользователь не выбран</>);
  }


  return (
    <S.SelectedUserContainer>
      {user.login}
      <img src={user.avatar_url} alt='аватар пользователя'/>
    </S.SelectedUserContainer>
  )
}
