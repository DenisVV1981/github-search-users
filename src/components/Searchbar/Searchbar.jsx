import React, { useState } from 'react';
import * as S from './Searchbar.styles'

export default function Searchbar({searchChangedCb, totalItems}) {
  const [value, setValue] = useState('');
  const [pageSize, setPageSize] = useState(5);
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
              return <S.PageNumbersSelected onClick={()=>handleChangePageSize(size)}>{size}</S.PageNumbersSelected>;
            }
            else{
              return <S.PageNumbers onClick={()=>handleChangePageSize(size)}>{size}</S.PageNumbers>;
            }
          })}
        </S.Pager>
      
      </S.PagerBar>
      <div>
        <div>
          Номер страницы: 
          {pageNumbers.map((page) => {
            if(page === pageNumber){
              return <span key={"pagebutton"+page}>{page}</span>
            }
            else{
              return <button key={"pagebutton"+page} onClick={()=>{handleChangePageNumber(page)}}>{page}</button>
            }
          })} 
          {maximumPageNumber > 10 && (
            <div>
              Слишком много страниц выберете вручную
              <input 
                value={customPageNumber} onInput={e => setCustomPageNumber(e.target.value)}
                onKeyUp={handleCustomPageNumberKeyUp}
                type="search"
                placeholder="Введите номер нужной страницы"
                name="customNumberSearch"/>
            </div>
          )}
        </div>
        <div>
          Всего страниц: {maximumPageNumber}
        </div>
      </div>
      
    </S.SearchbarContainer>
  )
}
