import { css } from "@emotion/react";

export const container = css`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
export const headerContainer = css`
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const userInfoContainer = css`
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    
`
export const categoryContainer = css`
    display: flex;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
`
export const categoryDaily = css`
    font-size: 19px;
    padding: 5px;
    height: 30px;
    cursor: pointer;
    background-color: #eeeeee;
    border-radius: 8px 0 0 8px;
    border-right:  1px solid #aaaaaa;
    /* background-color: #aaaaaa; */
    &:hover{
        background-color: #aaaaaa;
        color: white;
    }
    &:active{
        background-color: #eeeeee;
        color: black;
    }
    `
export const categoryGame = css`
    font-size: 19px;
    padding: 5px;
    height: 30px;
    cursor: pointer;
    background-color: #eeeeee;
    /* background-color: #aaaaaa; */
    &:hover{
        background-color: #aaaaaa;
        color: white;
    }
    &:active{
        background-color: #eeeeee;
        color: black;
    }
    `
export const categoryCooking = css`
    font-size: 19px;
    padding: 5px;
    height: 30px;
    cursor: pointer;
    background-color: #eeeeee;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid #aaaaaa;
    &:hover{
        background-color: #aaaaaa;
        color: white;
    }
    &:active{
        background-color: #eeeeee;
        color: black;
    }
    `
export const settingButton = css`
    cursor: pointer;
    font-size: 25px;
`;
export const userInfo = (isOpen) => css`
    display: ${isOpen ? "flex" : "none"};
`
export const logo = css`
    font-size: 50px;
`
export const findContainer = css`
    display: flex;
    justify-content: flex-end;
    width: 1000px;
`
export const findInput = css`
    border: none;
    border-bottom: 2px solid black;
    border-left: 1px solid #dedede;
    border-top: 1px solid #dedede;
    border-right: 1px solid #dedede;
`
export const contentHeader = css`
    margin-top: 20px;
    display: flex;
    width: 1000px;
    /* height: 40px; */
    border-top: 1px solid black;
`;

export const contentNum = css`
    width: 70px;
    display: flex;
    justify-content: center;
`;

export const contentTitle = css`
    width: 800px;
    display: flex;
    justify-content: center;
    margin-left: 35px;
`;

export const contentBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    border: 1px solid black;
    border-radius: 6px;
    overflow-y: auto;
    max-height: 600px;
    ::-webkit-scrollbar{
        width: 15px;
        background-color: white;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #eeee;
    }
    ::-webkit-scrollbar-track{
        background-color: grey;
    }
`;


export const writeContainer = css`
    width: 1000px;
    display: flex;
    justify-content: flex-end;

`;
export const writeButtonStyle = css`
    width: 80px;
    font-size: 18px;
    margin-top: 20px;
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
    width: 950px;
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