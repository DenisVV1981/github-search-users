import React from 'react';
import * as S from './Searchbar.styles'
import { useLazySearchUsersQuery } from '../../services/githubApi';

export default function Searchbar() {
  const [searchUsers] = useLazySearchUsersQuery();

  return (
    <S.SearchbarContainer>
      <S.SearchbarInput placeholder='Поиск' onClick={()=>searchUsers()}/>
    </S.SearchbarContainer>
  )
}
