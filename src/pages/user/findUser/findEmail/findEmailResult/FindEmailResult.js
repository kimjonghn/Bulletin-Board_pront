/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './FindEmailResultStyle';
import { useNavigate, useParams } from 'react-router-dom';

const FindEmailResult = () => {
    const navigate = useNavigate();
    const { email } = useParams();

    const loginButtonOnClick = () => {
        navigate("/auth/login")
    }
    const findPasswordOnclick = () => {
        navigate("auth/findPassword")
    }
    return (
        <div css={s.container}>
            <div>
                <h1 css={s.logo}>
                    Health Community
                </h1>
            </div>
            <div css={s.contentTitle}>
                <p >검색 결과</p>
            </div>

            <div>
                <div css={s.mainContainer}>
                    <div css={s.emailResult}>
                        {email}
                    </div>
                </div>
            </div>

            <div css={s.footer}>
                <button css={s.sendButton} onClick={loginButtonOnClick}>로그인</button>
                <div css={s.findPassword} onClick={findPasswordOnclick}>비밀번호 찾기</div>
            </div>
        </div>
    );
};

export default FindEmailResult;