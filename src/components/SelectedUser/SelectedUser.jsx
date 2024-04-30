import React from 'react';
import * as S from './SelectedUser.styles'

export default function SelectedUser({user}) {
  if (!user)
  {
    return (<>Пользователь не выбран</>);
  }


  return (
    <S.SelectedUserContainer>
      <S.SelectedUserHeader>
        <S.SelectedUserImage src={user.avatar_url} alt='аватар пользователя'/>
        <S.SelectedUserName>
          {user.login}
        </S.SelectedUserName>
      </S.SelectedUserHeader>
      <S.SelectedUserInfo>
        информация пользователя
      </S.SelectedUserInfo>
    </S.SelectedUserContainer>
  )
}
