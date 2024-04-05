/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './WriteStyle';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/auth/AuthAtoms';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Write = () => {
    const [ data, setData ] = useState({ title:"", content:"" });
    const navigate = useNavigate();
    
    const registerBoard = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        try{
            const response = await axios.post("http://localhost:8080/board/write", data ,option);
            alert("등록이 성공적으로 되었습니다.")
            navigate("/")
            console.log(response);
        }catch(error){
            console.log("틀림")
        }
    });

    const writeHandle = (e) => {
        const { name, value } = e.target;
        setData({...data, [name] : value});
    }

    const sendButton = () => {
        registerBoard.mutate();
    }
    return (
        <div css={s.container}>
            <div css={s.titleBox}>
                <input placeholder='제목을 입력하시오' css={s.titleBoxInput} onChange={writeHandle}  name='title'/>
            </div>
            <div css={s.content}>
                <textarea placeholder='내용을 적으세요' css={s.contentInput} onChange={writeHandle}  name='content'/>
            </div>
            <div css={s.sendBox}>
                <button css={s.send} onClick={sendButton}>
                    작성완료
                </button>
            </div>
        </div>
    );
};

export default Write;