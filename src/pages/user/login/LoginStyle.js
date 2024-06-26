import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 768px;
    margin: auto;
`
export const logo = css`
    font-size: 50px;
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
export const loginErrorMessage = css`
    font-size: 10px;
    color: red;
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
    margin-top: 10px;

`
export const findEmail = css`
    cursor: pointer;
    margin-right: 5px;
`
export const findPassword = css`
    cursor: pointer;
    margin-left: 5px;
`