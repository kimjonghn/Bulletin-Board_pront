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
export const contentTitle = css `
    font-size : 25px;
`;
export const mainContainer =css`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const inputLabel = css`
    margin-top: 20px;
    font-weight: 500;
`;
export const inputBox = css`
    width: 200px;
    border: 1px solid black;
    border-radius: 6px;
    font-size: 15px;
`;

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
export const registerBtn = css`
    margin-top: 2px;
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
export const infoFind = css`
    font-size: 13px;
    margin-left: 4px;
`

export const footer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
export const footerContainer = css`
    display: flex;
    align-items: center;
`