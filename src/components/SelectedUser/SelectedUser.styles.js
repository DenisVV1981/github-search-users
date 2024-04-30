import styled from 'styled-components';

export const SelectedUserContainer= styled.div`
display: flex;
flex-direction: column;
border: 1px solid blue;
height: 250px;
width: 250px;
`
export const SelectedUserHeader= styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 15px;
gap: 15px;
background-color: aliceblue;
`
export const SelectedUserImage= styled.img`
height: 50px;
width: 50px;
border-radius: 25px;
border: 2px solid black
`
export const SelectedUserName= styled.h3`
font-size: 20px;
font-family: Roboto;
`
export const SelectedUserInfo= styled.div`
flex-grow: 1;
background-color: cornsilk;
padding: 15px;
`