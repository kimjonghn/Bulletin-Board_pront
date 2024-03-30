import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 100vh;
    border: 1px solid;
    margin: auto;
`
export const mainContainer = css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const contentTitle = css `  
    font-size : 25px;
`;
export const inputBox = css`
    width: 200px;
    border: 1px solid black;
    border-radius: 6px;
    font-size: 15px;
`
export const errorMsg = css`
    margin-left: 3px;
    margin-top: 1px;
    font-size: 10px;
    zoom: 0.7;
    color: red;
`;

export const regosterBtn = css`
    width: 208px;
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    &:hover{
        background-color: black;
        color: white;
    }
    &:active{
        background-color: white;
        color: black;
    }
    
`
export const loginBtn = css`
    width: 208px;
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    &:hover{
        background-color: black;
        color: white;
    }
    &:active{
        background-color: white;
        color: black;
    }
    
`
export const footer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`