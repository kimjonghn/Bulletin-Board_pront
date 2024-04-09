/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './MainStyle';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios  from 'axios';
import { boardId } from './MainStyle';

const Main = () => {
    const navigate = useNavigate();
    const [ boardState, setBoardState ] = useState(true);
    const [ boardData, setBoardData ] = useState([]);

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios.get("http://localhost:8080/board", option);
        setBoardData(response.data)
    },{
        enabled: boardState,
        onSuccess: () => {
            setBoardState(false)
        }
    });
    const contentBtn = (boardId) => {
        navigate(`board/view/${boardId}`)
    }

    const clickHandle = () => {
        navigate("/board/write")
    }

    return (
        <div css={s.container}>
            <div css={s.contentHeader}>
                <p css={s.contentNum}>No</p>
                <p css={s.contentTitle}>제목</p>
            </div>
            <div css={s.contentBox}>
                {boardData.map(board => (
                    <div key={board.boardId} onClick={()=> contentBtn(board.boardId)} css={s.content}>
                        <p css={s.boardId}>{board.boardId}</p>
                        <div css={s.boardTitleContainer}>
                            <p css={s.boardTitle}>{board.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div css={s.writeContainer}>
                <button onClick={clickHandle} css={s.writeButtonStyle}>글쓰기</button>
            </div>
        </div>
    );
};

export default Main;