import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 100vh;
    margin: auto; 

    border: 1px solid;`

export const writer = css`
    width: 700px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
   
`
export const titleBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 700px;
    height: 80px;
    font-size: 40px;
    border: 1px solid black;
`;

export const content = css`
    display: flex;
    margin-top: 20px;
    width: 700px;
    height: 470px;
    border: 1px solid black;
    font-size: 15px;
    `
export const buttonContainer = css`
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin-top: 5px;
`
export const modifyContainer = css`
`

export const buttonStyle = css`
    width: 70px;
    height: 25px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
    }
    &:active{
        background-color: white;
        color: black;
    }
`
