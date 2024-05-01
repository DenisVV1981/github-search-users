import React from 'react';
import * as S from './SortOrder.styles'

export default function SortOrder({currentOrder, description, ascValue="asc", descValue="desc", changeOrderCb}) {
  
  return (
  <S.OrderFrame>
    <div>{description}: </div>
    {currentOrder===ascValue && (<S.PageButtonSelected onClick={()=>{changeOrderCb(ascValue)}}>по возрастанию</S.PageButtonSelected>)}
    {currentOrder!==ascValue && (<S.PageButton onClick={()=>{changeOrderCb(ascValue)}}>по возрастанию</S.PageButton>)}
    
    {currentOrder===descValue && (<S.PageButtonSelected onClick={()=>{changeOrderCb(descValue)}}>по убыванию</S.PageButtonSelected>)}
    {currentOrder!==descValue && (<S.PageButton onClick={()=>{changeOrderCb(descValue)}}>по убыванию</S.PageButton>)}
  </S.OrderFrame>
  );
}