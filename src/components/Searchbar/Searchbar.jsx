import React, { useState } from 'react';
import * as S from './Searchbar.styles'

export default function Searchbar({searchChangedCb, totalItems}) {
  const [value, setValue] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [customPageNumber, setCustomPageNumber] = useState('');
  
  if(totalItems> 1000)
  {
    totalItems = 1000;
  }

  const pageSizes = [10, 20, 30].filter((item)=>item <=(totalItems*2));

  const callUpdate= (pattern, pageSize, pageNumber)=>{
    if(value.length < 3){
      return;
    }
    searchChangedCb(pattern, pageSize, pageNumber);
  };

  const handleKeyUp = () => {
    setCustomPageNumber('');
    callUpdate(value, pageSize, pageNumber);
  };
  const handleChangePageSize = (size) => {
    setPageSize(size);
    setCustomPageNumber('');
    callUpdate(value, size, pageNumber);
  }
  const handleChangePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
    setCustomPageNumber('');
    callUpdate(value, pageSize, pageNumber);
  }

  let maximumPageNumber =0;
  let pageNumbers = [];
  const checkCurentAvailablePageNumber = () =>{
    if(totalItems<=0){
      return;
    }
    
    maximumPageNumber = Math.floor(totalItems / pageSize) + ((totalItems % pageSize) > 0 ? 1 : 0);
    if(maximumPageNumber < pageNumber){
      setPageNumber(1);
      callUpdate(value, pageSize, 1);
    }else{
      pageNumbers = Array.from({length: maximumPageNumber > 10 ? 10: maximumPageNumber}, (_,i) => i + 1);
    }
  }
  checkCurentAvailablePageNumber();

  const handleCustomPageNumberKeyUp = () => {
    if(customPageNumber > maximumPageNumber)
    {
      alert("Вы ввели слишком большой номер страницы. Мы сбросили до максимума: " + maximumPageNumber);
      setCustomPageNumber(maximumPageNumber);
      setPageNumber(maximumPageNumber);
      callUpdate(value, pageSize, maximumPageNumber);
      return;
    }
    setPageNumber(customPageNumber);
    callUpdate(value, pageSize, customPageNumber);
  };

  return (
    <S.SearchbarContainer>
      <S.SearhBar>
        <S.SearchbarInput 
          value={value} onInput={e => setValue(e.target.value)}
          onKeyUp={handleKeyUp} 
          type="search"
          placeholder="Поиск (от 3 символов)"
          name="search"/>
      </S.SearhBar>
      <S.PagerBar>
        <S.Pager>
          <S.PagerText>Размер страницы: </S.PagerText>
          {pageSizes.map((size)=>{
            if(size === pageSize){
              return <S.PageButtonSelected>{size}</S.PageButtonSelected>;
            }
            else{
              return <S.PageButton onClick={()=>handleChangePageSize(size)}>{size}</S.PageButton>;
            }
          })}
        </S.Pager>
      
      </S.PagerBar>
      <S.PageCounter>
        <S.PageCounterText>
          Номер страницы: 
        </S.PageCounterText>
        <S.PageCounterNumbers>
          {pageNumbers.map((page) => {
            if(page === pageNumber){
              return <S.PageButtonSelected key={"pagebutton"+page}>{page}</S.PageButtonSelected>
            }
            else{
              return <S.PageButton key={"pagebutton"+page} onClick={()=>{handleChangePageNumber(page)}}>{page}</S.PageButton>
            }
          })}
        </S.PageCounterNumbers>
      </S.PageCounter> 
      {maximumPageNumber > 10 && (
        <S.PageCounterNumbersExtra> 
          Слишком много страниц выберете вручную
          <input 
            value={customPageNumber} onInput={e => setCustomPageNumber(e.target.value)}
            onKeyUp={handleCustomPageNumberKeyUp}
            type="search"
            placeholder="Введите номер 0-100"
            name="customNumberSearch"/>
        </S.PageCounterNumbersExtra>
      )}
      <div>
        Всего страниц: {maximumPageNumber}
      </div>
    
      
    </S.SearchbarContainer>
  )
}
