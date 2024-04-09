/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import * as s from './ViewPostStyle';
import { useQuery } from 'react-query';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewPost = () => {
    const {boardId} = useParams();
    const [ boardData, setBoardData ] = useState([])
    const [ boardRef, setBoardRef] = useState(true);
    const navigate = useNavigate();

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get(`http://localhost:8080/board/view/${boardId}`, option);
        setBoardData(response.data)
        console.log(response)
    },{
        enabled: boardRef,
        onSuccess: () => {
            setBoardRef(false);
        }
    });

    const listButtonOnClick = () => {
        navigate("/")
    }
    return (
        <div css={s.container}>
            <div css={s.writer}>
                작성자: {boardData.name}
            </div>

            <div css={s.titleBox}>
                {boardData.title}
            </div>
            <div css={s.content}>
                {boardData.content}
                
            </div>
            <div css={s.buttonContainer}>
                    <button css={s.buttonStyle} onClick={listButtonOnClick}>목록으로</button>
                <div css={s.modifyContainer}>
                    <button css={s.buttonStyle}>수정하기</button>
                    <button css={s.buttonStyle}>삭제하기</button>
                </div>
                
            </div>
        </div>
    );
};

export default ViewPost;