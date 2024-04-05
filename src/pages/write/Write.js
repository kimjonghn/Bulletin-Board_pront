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
    const [ errorMessage, setErrorMessage] = useState();
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
            if(response.data === 0 ){
                setErrorMessage("등록에 실패했습니다. 제목과 내용은 2글자 이상이어야 합니다.")
            }else{
                alert("등록이 성공적으로 되었습니다.")
                navigate("/")
            }
            console.log(response.data);
        }catch(error){

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
                <div css={s.errorMessage}>{errorMessage}</div>
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