import { css } from "@emotion/react";
export const userInfoGroup = (isOpen) => css`
    position: absolute;
    top: 35px;
    display: ${isOpen ? "flex" : "none"};
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    width: 230px;
    height: 150px;
    background-color: white;
    overflow-y: auto;
`;
export const container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const userInfo = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: 500;
    margin-top: 10px;
`;
export const email = css`
    border: 1px solid black;
    border-radius: 6px;
`
export const name = css`
margin-top: 5px;
    border: 1px solid black;
    border-radius: 6px;
`
export const btnContainer = css`
    margin-top: 30px;
`

export const logoutBtn = css`
    width: 210px;
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
export const deleteBtn = css`
    width: 210px;
    margin-top: 3px;
    background-color: red;
    color: white;
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