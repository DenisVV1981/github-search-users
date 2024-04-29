import React from 'react';
import * as S from './SearchContainer.styles'
import Searchbar from '../Searchbar/Searchbar';

export default function SearchContainer({selectUserCb}) {
  const searchResult = [
    {
      "login": "Denisvvht",
      "id": 168023561,
      "node_id": "U_kgDOCgPWCQ",
      "avatar_url": "https://avatars.githubusercontent.com/u/168023561?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Denisvvht",
      "html_url": "https://github.com/Denisvvht",
      "followers_url": "https://api.github.com/users/Denisvvht/followers",
      "following_url": "https://api.github.com/users/Denisvvht/following{/other_user}",
      "gists_url": "https://api.github.com/users/Denisvvht/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Denisvvht/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Denisvvht/subscriptions",
      "organizations_url": "https://api.github.com/users/Denisvvht/orgs",
      "repos_url": "https://api.github.com/users/Denisvvht/repos",
      "events_url": "https://api.github.com/users/Denisvvht/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Denisvvht/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "denisvvf",
      "id": 77418157,
      "node_id": "MDQ6VXNlcjc3NDE4MTU3",
      "avatar_url": "https://avatars.githubusercontent.com/u/77418157?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/denisvvf",
      "html_url": "https://github.com/denisvvf",
      "followers_url": "https://api.github.com/users/denisvvf/followers",
      "following_url": "https://api.github.com/users/denisvvf/following{/other_user}",
      "gists_url": "https://api.github.com/users/denisvvf/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/denisvvf/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/denisvvf/subscriptions",
      "organizations_url": "https://api.github.com/users/denisvvf/orgs",
      "repos_url": "https://api.github.com/users/denisvvf/repos",
      "events_url": "https://api.github.com/users/denisvvf/events{/privacy}",
      "received_events_url": "https://api.github.com/users/denisvvf/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
  ];

  const selectUser = (user) => {
    selectUserCb(user);
  }

  return (
    <S.SearchBlock>
      <Searchbar></Searchbar>
      {searchResult.map((user)=>{
        return <div key={user.id} onClick={()=>{selectUser(user)}}>
          {user.login}
        </div>
      })}
    </S.SearchBlock>
  )
}
