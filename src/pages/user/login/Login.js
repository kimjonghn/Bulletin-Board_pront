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
    const [ loginErrorMessage, setLoginErrorMessage] = useState("");

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
            const response = await axios.post("htp://localhost:8080/auth/login", JSON.stringify(loginUser), option)
            localStorage.setItem("accessToken", response.data);
            setRefresh(true);
        }catch(error){
            setLoginErrorMessage(error.response.data.errorData.email);
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
    const findEmailOnClick = () => {
        navigate("/auth/findEmail")
    }
    return (
        <div css={s.container} onKeyUp={loginButton}>
            <div>
                <h1 css={s.logo}>
                    Health Community
                </h1>
            </div>
            <div css={s.contentTitle}>
                <p >로그인</p>
            </div>
            <div>
                <div css={s.mainContainer}>
                    
                        <label css={s.inputLabel}>Eamil</label>
                        <input type='email' placeholder='아이디를 입력하시오'  name='email' onChange={onChangeInputHandle} css={s.inputBox}/>
                        <div css={s.loginErrorMessage}>{loginErrorMessage}</div>
                        <label css={s.inputLabel}>Password</label>
                        <input type='password' placeholder='비밀번호를 입력하시오' name='password' onChange={onChangeInputHandle} css={s.inputBox}/>
                    
                </div>
            </div>
            <div css={s.footer}>
                <button onClick={loginHandleSubmit} css={s.loginBtn}>로그인</button>
                    <button onClick={registerOnClick} css={s.registerBtn}>회원가입</button>
                <div css={s.footerContainer}>
                        
                    <div css={s.findEmail} onClick={findEmailOnClick}>아이디찾기</div>/
                    <div css={s.findPassword}>비번찾기</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;