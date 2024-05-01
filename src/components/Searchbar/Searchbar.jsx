import React, { useEffect, useState, useCallback } from 'react';
import * as S from './Searchbar.styles'
import SortOrder from '../SortOrder/SortOrder';
import { useDispatch } from 'react-redux';
import { useLazySearchUsersQuery } from '../../services/githubApi';

export default function Searchbar({searchChangedCb, }) {
  const [searchUsers, {data, isLoading, error}] = useLazySearchUsersQuery();
  const [pattern, setPattern] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [customPageNumber, setCustomPageNumber] = useState('');
  const [order, setOrder] = useState('desc');
  const [pageSizes, setPageSizes] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(()=>{
      if(pattern.length < 3){
        return;
      }
      searchUsers({pattern: pattern, per_page:pageSize, page: pageNumber, order: order});
    });
  }, [pattern, pageSize, pageNumber, customPageNumber, order]);

  useEffect(() => {
    searchChangedCb(data, isLoading, (pageNumber-1)*pageSize + 1);

    if(data === undefined){
      return;
    }

    if(data != null && data.total_count > 0){
      let itemsCount = data.total_count > 1000 ? 1000: data.total_count;
      setPageSizes([10, 20, 30].filter((item)=>item <=(itemsCount*2)));
      setTotalItems(itemsCount);
    }else{
      setPageSizes([]);
      setTotalItems(0);
    }
  }, [data, isLoading]);

  const handlePatternKeyUp = () => {
    setCustomPageNumber('');
  };
  const handleChangePageSize = (size) => {
    setPageSize(size);
    setCustomPageNumber('');
  }
  const handleChangePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
    setCustomPageNumber('');
  }

  const handleOrderChange = (newOrder)=>{
    setOrder(newOrder);
  }

  let maximumPageNumber = 0;
  let pageNumbers = [];
  const checkCurentAvailablePageNumber = () =>{
    if(!totalItems || totalItems<=0){
      return;
    }

    maximumPageNumber = Math.floor(totalItems / pageSize) + ((totalItems % pageSize) > 0 ? 1 : 0);
    if(maximumPageNumber < pageNumber){
      setPageNumber(1);
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
      return;
    }
    setPageNumber(customPageNumber);
    //callUpdate(value, pageSize, customPageNumber);
  };

  return (
    <S.SearchbarContainer>
      <S.SearhBar>
        <S.SearchbarInput 
          value={pattern} onInput={e => setPattern(e.target.value)}
          onKeyUp={handlePatternKeyUp} 
          type="search"
          placeholder="Поиск (от 3 символов)"
          name="search"/>
      </S.SearhBar>
      {(pattern?.length??0)>3 && (<><SortOrder 
          currentOrder={order}
          changeOrderCb={handleOrderChange}
          description="Сортировка репозиториев"
        />
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
      </>)}
      
    </S.SearchbarContainer>
  )
}
