import styled from 'styled-components';

export const SearchbarContainer= styled.div`
display: flex;
flex-direction: column;
gap: 21px;
background: light-grey;
padding: 30px;
background-color: cornsilk;
border-bottom: 1px solid black;
margin-top: 20px;
`

export const SearhBar= styled.div`
display: flex;
justify-content: center;
`
export const SearchbarInput= styled.input`
background: light-grey;
width: 300px;
border-radius: 15px;
height: 35px;
padding: 10px 0 10px 10px;
border: 2px solid black
`
export const PagerBar= styled.div`

`
export const Pager= styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 15px;
`
export const PagerText= styled.div`

`
export const PageButton= styled.div`
border-radius: 12px;
border: 0.5px solid gray;
width: 30px;
text-align: center;
background-color: white;
`

export const PageButtonSelected= styled.div`
border-radius: 12px;
border: 0.5px solid black;
width: 30px;
text-align: center;
background-color: black;
color: white;
`
export const PageCounter= styled.div`
display: flex;
justify-content: flex-start;
gap: 10px;
`
export const PageCounterText= styled.div`

`
export const PageCounterNumbers= styled.div`
display: flex;
justify-content: flex-start;
gap: 15px;
`
export const PageCounterNumbersExtra= styled.div`
display: flex;
justify-content: flex-start;
gap: 15px;
`
