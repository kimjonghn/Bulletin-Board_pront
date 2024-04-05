/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './MainStyle';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

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

            </div>
            <div css={s.writeContainer}>
                <button onClick={clickHandle} css={s.writeButtonStyle}>글쓰기</button>
            </div>
        </div>
    );
};

export default Main;