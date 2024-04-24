/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './FindEmailStyle';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FindEmail = () => {
    const navigate = useNavigate();
    const [ findEmail, setFindEmail ] = useState("")

    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setFindEmail({ ...findEmail, [name]: value });
    }

    const sendButtonOnClick = async() => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            },
            params : findEmail
        }
        try{
                const response = await axios.get("http://localhost:8080/auth/findemail",option)
                navigate(`/auth/findemail/result/${response.data}`)
            
        }catch(error){
            alert("사용자 정보가 존재하지 않습니다.")
        }
    }
    const findPasswordOnclick = () => {

    }

    return (
        <div css={s.container}>   

            <div>
                <h1 css={s.logo}>
                    Health Community
                </h1>
            </div>

            <div css={s.contentTitle}>
                <p >이메일 찾기</p>
            </div>

            <div>
                <div css={s.mainContainer}>
                    
                        <label css={s.inputLabel}>Phone</label>
                        <input type='tel' placeholder='전화번호를 입력하시오'  name='phone' onChange={onChangeInputHandle} css={s.inputBox}/>
                </div>
            </div>
            <div css={s.footer}>
                <button css={s.sendButton} onClick={sendButtonOnClick}>확인</button>
                <div css={s.findPassword} onClick={findPasswordOnclick}>비밀번호 찾기</div>
            </div>
        </div>
    );
};

export default FindEmail;