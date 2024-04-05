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
`;

export const contentBox = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
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