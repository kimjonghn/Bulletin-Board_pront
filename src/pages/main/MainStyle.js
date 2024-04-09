import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 100vh;
    border: 1px solid;
    border-radius: 6px;
    margin: auto;
`

export const contentHeader = css`
    display: flex;
    width: 700px;
    height: 40px;
`;

export const contentNum = css`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
`;

export const contentTitle = css`
    width: 550px;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-left: 35px;
`;

export const contentBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 600px;
    border: 1px solid black;
    border-radius: 6px;
`;
export const writeContainer = css`
    width: 700px;
    display: flex;
    justify-content: flex-end;
`;
export const writeButtonStyle = css`
    width: 54px;
    margin-top: 10px;
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
`;
export const content = css`
    display: flex;
    justify-content: center;
    width: 700px;
    height: 50px;
    border-bottom: 1px solid black;
`;
export const boardId = css`
    margin-left: 10px;
`;
export const boardTitleContainer = css`
    flex-grow: 1;
    text-align: center;
`;

export const boardTitle = css`
    border: none;
    background-color: white;
    &:hover{
        font-size: 15px;
    }
    &:active{
        font-size: 15px;
        font-weight: 700;
    }
`;