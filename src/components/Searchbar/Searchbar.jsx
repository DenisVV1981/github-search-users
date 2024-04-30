import React, { useState } from 'react';
import * as S from './Searchbar.styles'

export default function Searchbar({searchChangedCb, totalItems}) {
  const [value, setValue] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  
  const pageSizes = [1, 2, 5, 10, 20, 30].filter((item)=>totalItems<0 || item <=(totalItems*2));

  const callUpdate= (pattern, pageSize, pageNumber)=>{
    if(value.length < 2){
      return;
    }
    searchChangedCb(pattern, pageSize, pageNumber);
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      callUpdate(value, pageSize, pageNumber);
    }
  };
  const handleChangePageSize = (size) => {
    setPageSize(size);
    callUpdate(value, size, pageNumber);
  }

  return (
    <S.SearchbarContainer>
      <S.SearhBar>
        <S.SearchbarInput 
          value={value} onInput={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown} 
          type="search"
          placeholder="Поиск + Enter"
          name="search"/>
      </S.SearhBar>
      <S.PagerBar>
        <S.Pager>
          <S.PagerText>Размер страницы: </S.PagerText>
          {pageSizes.map((size)=>{
            if(size === pageSize){
              return <S.PageNumbersSelected onClick={()=>handleChangePageSize(size)}>{size}</S.PageNumbersSelected>;
            }
            else{
              return <S.PageNumbers onClick={()=>handleChangePageSize(size)}>{size}</S.PageNumbers>;
            }
          })}
        </S.Pager>
      
      </S.PagerBar>
      
    </S.SearchbarContainer>
  )
}
