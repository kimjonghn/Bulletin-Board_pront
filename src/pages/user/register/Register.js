/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from "./RegisterStyle"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from 'react-query';

const Register = () => {
    const navigate = useNavigate();
    const [ registerUser, setRegisterUser ] = useState({name:"",email:"",password:"",checkPassword:""});
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "",checkPassword:"", name: ""});

    const userRegister = useMutation(async() => {
        const data = {
            ...registerUser
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try{ 
            const response = await axios.post("http://localhost:8080/auth/signup", data, option);
            console.log(response)
            alert("등록완료");
            navigate("/auth/login");
        }catch (error) {
            console.log(error.response.data);
            setErrorMessages({email: "", password: "", name: "", ...error.response.data.errorData})

        }
    });

    const onClickLoginButton = () => {
        navigate("/auth/login");
    }
    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value})
    }
    const registerHandle = () => {
        userRegister.mutate();
    }
    return (
        <div css={s.container}>
            <div css={s.contentTitle}>
                <h1>회원가입</h1>
            </div>
            <div>
                <div css={s.mainContainer}>
                        <label>Name</label>
                        <input type='text' placeholder='이름을 입력하시오'  name='name' onChange={onChangeInputHandle} css={s.inputBox}/>
                        <div css={s.errorMsg}>{errorMessages.name}</div>
                    
                        <label>Email</label>
                        <input type='email' placeholder='아이디를 입력하시오'  name='email' onChange={onChangeInputHandle} css={s.inputBox}/>
                        <div css={s.errorMsg}>{errorMessages.email}</div> 
                    
                        <label>Password</label>
                        <input type='password' placeholder='비밀번호를 입력하시오' name='password' onChange={onChangeInputHandle} css={s.inputBox}/>
                        <div css={s.errorMsg}>{errorMessages.password}</div>
                    
                        <label>CheckPassword</label>
                        <input type='password' placeholder='비밀번호를 입력하시오' name='checkPassword' onChange={onChangeInputHandle} css={s.inputBox}/>
                    
                    <div>

                    </div>
                </div>
            </div>
            <div css={s.footer}>
                <div>
                    <button css={s.regosterBtn} onClick={registerHandle}>회원가입</button>
                </div>
                <div>
                    <button css={s.loginBtn} onClick={onClickLoginButton}>로그인</button>
                </div>
                <div>
                    아이디/비번 찾기
                </div>
            </div>
        </div>
    );
};

export default Register;