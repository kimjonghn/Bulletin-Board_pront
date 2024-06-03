import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin: auto; `

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
    border-radius: 6px;
`;

export const content = css`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 700px;
    height: 470px;
    border: 1px solid black;
    border-radius: 6px;
    font-size: 15px;
    overflow-x: auto;
    max-width: 700px;
    `
export const imgStyle = css`
     width: 200px;
     height: 200px;
     overflow: hidden;
`;
export const contentBox = css`
    display: flex;
`
export const commentContainer = css`
    display: flex;
`

export const comment = css`
    margin-top: 10px;
    width: 600px;
    height: 40px;
    resize: none;
    border: 1px solid black;
    border-radius: 6px;
`;
export const commentSendBtn = css`
    margin-top: 10px;
    width: 40px;
    height: 47px;
    border: 1px solid black;
    border-radius: 6px;
    background-color: white;
    &:hover{
        background-color: black;
        color: white;
    }
    &:active{
        background-color: white;
        color: black;
    }
`;
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
export const commentErrorMessage = css`
    color: red;
    font-size: 10px;
`;
export const commentContentContainer = css`
    margin-top: 10px;
    width: 700px;
    height: 300px;
    border: 1px solid black;
    border-radius: 6px;
    overflow: auto;
`
export const commentContent = css`
    display: flex;
    border-bottom: 1px solid #999;
    justify-content: space-between;
`   
export const commentBox = css`
    display: flex;
    justify-content: center;
`
export const commentName = css`
    margin-left: 5px;
`
export const commentcontentStyle = css`
    margin-left: 5px;

`
export const commentDeleteStyleContainer = css `
    margin-right: 5px;
`;
export const commentDeleteStyle = css `
    cursor: pointer;
    color: red;
`;