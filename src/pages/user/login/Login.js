/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from "./LoginStyle"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from './../../../atoms/auth/AuthAtoms';

const Login = () => {
    const navigate = useNavigate();
    const [ loginUser, setLoginUser] = useState({ email:"", password:""});
    const [ refresh, setRefresh ] = useRecoilState(authenticatedState)

    const onChangeInputHandle = (e) => {
        const {name , value} = e.target;
        setLoginUser({...loginUser, [name]: value})
    }
    const loginHandleSubmit = async() => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option)
            localStorage.setItem("accessToken", response.data);
            setRefresh(true);
        }catch(error){
            console.log(error)
            console.log(error.response.data);
        }
    };

    const loginButton = (e) => {
        if(e.keyCode === 13){
            loginHandleSubmit();
        }
    }

    const registerOnClick = () => {
        navigate("/auth/register");
    }

    return (
        <div css={s.container} onKeyUp={loginButton}>
            <div css={s.contentTitle}>
                <h1 >Login</h1>
            </div>
            <div>
                <div css={s.mainContainer}>
                    
                        <label css={s.inputLabel}>Eamil</label>
                        <input type='email' placeholder='아이디를 입력하시오'  name='email' onChange={onChangeInputHandle} css={s.inputBox}/>
                    
                        <label css={s.inputLabel}>Password</label>
                        <input type='password' placeholder='비밀번호를 입력하시오' name='password' onChange={onChangeInputHandle} css={s.inputBox}/>
                    
                </div>
            </div>
            <div css={s.footer}>
                <button onClick={loginHandleSubmit} css={s.loginBtn}>로그인</button>
                    <button onClick={registerOnClick} css={s.registerBtn}>회원가입</button>
                <div css={s.footerContainer}>
                        
                    <p css={s.infoFind}>비밀번호찾기</p>
                    <p css={s.infoFind}>/</p>
                    <p css={s.infoFind}>아이디찾기</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;