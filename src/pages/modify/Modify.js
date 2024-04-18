/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from "./ModifyStyle";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import axios from "axios";
const Modify = () => {
    const {boardId} = useParams();
    const [getBoardRef, setBoardRef] = useState(true);
    const [getBoardData, setBoardData] = useState({title:" ", content:" "});
    const [ errorMessage ,setErrorMessage] = useState("")
    const navigate = useNavigate();

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get(`http://localhost:8080/board/view/${boardId}`, option)
        setBoardData(response.data)
    },{
        enabled: getBoardRef,
        onSuccess: () => {
            setBoardRef(false)
        }
    });

    const registerBoard = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        try{
            const response = await axios.post(`http://localhost:8080/board/modify/${boardId}`, JSON.stringify(getBoardData) ,option);
            if(response.data === 0 ){
                setErrorMessage("등록에 실패했습니다. 제목과 내용은 2글자 이상이어야 합니다.")
            }else{
                alert("등록이 성공적으로 되었습니다.")
                navigate("/")
            }
        }catch(error){

        }
    });


    const writeHandle = (e) => {
        const { name, value } = e.target;
        setBoardData({...getBoardData, [name] : value});
    }

    const listButtonOnClick = () => {
        navigate("/")
    }

    const sendButton = () => {
        registerBoard.mutate();
    }

    return (
        <div css={s.container}>
            <div css={s.titleBox}>
            <form>
                <input placeholder="제목을 입력하시오" css={s.titleBoxInput} onChange={writeHandle} name='title' 
                value={getBoardData.title}/>
            </form>
            </div>
            <div css={s.content}>
                <textarea placeholder='내용을 적으세요' css={s.contentInput}  onChange={writeHandle} name='content' 
                value={getBoardData.content}/>
            </div>
            <div css={s.sendBox}>
                <button css={s.buttonStyle} onClick={listButtonOnClick}>
                    목록으로
                </button>
                <button css={s.send} onClick={sendButton}>
                    수정완료
                </button>
            </div>
        </div>
    );
};

export default Modify;