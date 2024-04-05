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

export const titleBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 700px;
    height: 100px;
    
`
export const errorMessage =css`
    display: flex;
    justify-content: flex-start;
    color: red;
    font-size: 10px;
`
export const titleBoxInput = css`
    width: 700px;
    height: 80px;
    border: 1px solid black;
    align-items: center;
    font-size: 40px;
`

export const content = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 500px;
    `

export const contentInput = css`
    width: 700px;
    height: 470px;
    border: 1px solid black;
    resize: none;
    font-size: 15px;
`
export const sendBox = css`
    display: flex;
    justify-content: flex-end;
    width: 700px;

`
export const send = css`
    width: 70px;
    height: 30px;
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