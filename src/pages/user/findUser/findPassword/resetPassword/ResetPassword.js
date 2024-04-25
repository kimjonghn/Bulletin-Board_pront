/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './ResetPasswordStyle';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const { userid } = useParams();
    const navigate = useNavigate();
    const [ passwordData, setPasswordData ] = useState({ password:"", checkPassword:"" })

    const loginButtonOnClick = () => {
        navigate("/auth/login")
    }
    const changOnclick = async() => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const data = {
            ...passwordData
        }
        try{
            const response = await axios.put(`http://localhost:8080/auth/updatepassword/${userid}`,data ,option)
            console.log(response);
        }catch(error){
            console.log(error)
        }
    }
    const onChangeInputHandle = (e) => {
        const {name, value} = e.target;
        setPasswordData({ ...passwordData, [name]:value });
    }

    return (
        <div css={s.container}>
            <div>
                <h1 css={s.logo}>
                    Health Community
                </h1>
            </div>
            <div css={s.contentTitle}>
                <p >비밀번호 재설정</p>
            </div>

            <div>
                <div css={s.mainContainer}>
                        <label css={s.inputLabel}>Password</label>
                        <input type='password' placeholder='비밀번호를 입력하시오'  name='password' onChange={onChangeInputHandle} css={s.inputBox}/>
                       
                        <label css={s.inputLabel}>CheckPassword</label>
                        <input type='password' placeholder='비밀번호를 입력하시오'  name='checkPassword' onChange={onChangeInputHandle} css={s.inputBox}/>
                    
                </div>
            </div>

            <div css={s.footer}>
                <button css={s.sendButton} onClick={changOnclick}>변경하기</button>
                <button css={s.sendButton} onClick={loginButtonOnClick}>로그인</button>
            </div>
        </div>
    );
};

export default ResetPassword;