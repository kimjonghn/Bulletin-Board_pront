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
export const emailResult = css`
    text-align: center;
    width: 210px;   
    color: blue;
    border: 1px solid black;
    border-radius: 6px;
`

export const sendButton = css`
    margin-top: 20px;
    width: 210px;
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
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const findPassword = css`
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
`