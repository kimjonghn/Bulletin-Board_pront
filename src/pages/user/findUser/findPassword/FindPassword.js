/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './FindPasswordStyle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FindPassword = () => {
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState({ email:"", phone:"" })


    const onChangeInputHandle = (e) => {
        const {name , value} = e.target;
        setUserData({...userData ,[name]: value})
    }
    const sendButtonOnClick = async() => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            },
            params: userData
        }
        try{
            const response = await axios.get("http://localhost:8080/auth/findpassword",option)
            navigate(`/auth/resetpassword/${response.data}`)
        }catch(error){
            alert("사용자 정보가 존재하지 않습니다.")
        }

    }
    const findEmailOnclick = () => {
        navigate("/auth/findemail")
    }
    const loginButtonOnClick = () => {
        navigate("/auth/login")
    }
    return (
        <div css={s.container}>   

            <div>
                <h1 css={s.logo}>
                    Health Community
                </h1>
            </div>

            <div css={s.contentTitle}>
                <p >비밀번호 찾기</p>
            </div>

            <div>
                <div css={s.mainContainer}>
                    
                        <label css={s.inputLabel}>Email</label>
                        <input type='email' placeholder='이메일을 입력하시오'  name='email' onChange={onChangeInputHandle} css={s.inputBox}/>
                       
                        <label css={s.inputLabel}>Phone</label>
                        <input type='tel' placeholder='전화번호를 입력하시오'  name='phone' onChange={onChangeInputHandle} css={s.inputBox}/>
                </div>
            </div>
            <div css={s.footer}>
                <button css={s.sendButton} onClick={sendButtonOnClick}>확인</button>
                <button css={s.sendButton} onClick={loginButtonOnClick}>로그인</button>
                <div css={s.findPassword} onClick={findEmailOnclick}>이메일찾기</div>
            </div>
        </div>
    );
};

export default FindPassword;