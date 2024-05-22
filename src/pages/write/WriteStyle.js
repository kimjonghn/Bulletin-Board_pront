import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    `
export const imageContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 80px;
    height: 25px;
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
export const imageInputBox = css`
    cursor: pointer;
    
`
export const imageInput = css`
    display: none;
`
export const imagePreviewContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border: 2px solid #dedede;
    border-radius: 6px;
    
`
export const imageWrapper = css`
    display: 0 0 auto;
    width: 100px;
    height: 100px;
    margin: 10px;
    overflow: hidden;
`
export const imagePreview = css`
    width: 100%;
    height: 100%;
`   

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
    width: 695px;
    height: 80px;
    border: 1px solid black;
    border-radius: 6px;
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
    border-radius: 6px;
    resize: none;
    font-size: 15px;
`
export const sendBox = css`
    display: flex;
    justify-content: space-between;
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
    export const buttonStyle = css`
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