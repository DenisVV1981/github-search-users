import React, { useEffect } from 'react';
import * as S from './SelectedUser.styles'
import { useLazySearchUserFollowersQuery, useLazySearchUserSubscriptionsQuery, useLazySearchUserRepositoriesQuery } from '../../services/githubApi';
import { useDispatch } from 'react-redux';

export default function SelectedUser({user}) {
  const [getRepositoriesList,{data:repositoriesList, isLoading:repositoriesIsLoading}] = useLazySearchUserRepositoriesQuery();
  const [getUserFollowers,{data:followersList, isLoading:followersIsLoading}] = useLazySearchUserFollowersQuery();
  const [getUserSubscriptions,{data:subscriptionsList, isLoading:subscriptionsIsLoading}] = useLazySearchUserSubscriptionsQuery();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(()=>{
      if(user !==null)  
      {
        getRepositoriesList({login: user.login});
        getUserFollowers({login: user.login});
        getUserSubscriptions({login: user.login});
      }
    });
    console.log(user);
  }, [dispatch, getRepositoriesList, getUserFollowers, getUserSubscriptions, user]);

  
  if (!user)
  {
    return (<>Пользователь не выбран</>);
  }
  
  return (
    <S.SelectedUserContainer>
      <S.SelectedUserHeader>
        <S.SelectedUserImage src={user.avatar_url} alt='аватар пользователя'/>
        <S.SelectedUserName href={user.html_url} target="_blank"> 
          {user.login} 
        </S.SelectedUserName>
      </S.SelectedUserHeader>
      <S.SelectedUserInfo>
        <S.SelectedUserInfoHeader>
          Информация о пользователe:
        </S.SelectedUserInfoHeader>
        {(repositoriesIsLoading || followersIsLoading || subscriptionsIsLoading) && (<>Загружаем данные</>)}
        {!repositoriesIsLoading && !followersIsLoading && !subscriptionsIsLoading && (<>
          <div>
            Количество репозиториев: {repositoriesList?.length?? "-"}
          </div>
          <div>
            Количество подписок: {subscriptionsList?.length?? "-"}
          </div>
          <div>
            Количество подписчиков: {followersList?.length?? "-"}
          </div>
        </>)}
      </S.SelectedUserInfo>
    </S.SelectedUserContainer>
  )
}
