/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import * as s from './ViewPostStyle';
import { useMutation, useQuery } from 'react-query';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewPost = () => {
    const {boardId} = useParams();
    const [ boardData, setBoardData ] = useState([])
    const [ boardRef, setBoardRef] = useState(true);
    const [ userCheckRef, setUserCheckRef ] = useState(true);
    const [ boardUserId, setBoardUserId ] = useState();
    const [ modifyFlag, SetModifyFlag ] = useState(false);
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
        setBoardUserId(response.data.userId)
    },{
        enabled: boardRef,
        onSuccess: () => {
            setBoardRef(false);
        }
    });

    const userCheck = useQuery(["userCheck"], async() => {
        const option = {
            headers : {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                boardId : boardId
            }
        }
        const response = await axios.get("http://localhost:8080/auth/userCheck" ,option)
        SetModifyFlag(response.data)
    },{
        enabled: userCheckRef,
        onSuccess: () => {
            setUserCheckRef(false);
            
        }
    });

    const boardDelete = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.delete(`http://localhost:8080/board/delete/${boardId}` , option)
        return response
    })

    const listButtonOnClick = () => {
        navigate("/")
    }
    const modifyOnClick = () => {
        navigate(`/board/modify/${boardId}`)
    }

    const deleteOnClick = () => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            boardDelete.mutate();
            navigate("/")
        }
        
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
                    {modifyFlag ? (
                        <>
                            <button onClick={modifyOnClick} css={s.buttonStyle}>수정하기</button>
                            <button onClick={deleteOnClick} css={s.buttonStyle}>삭제하기</button>
                        </>

                    ) : (
                        <>
                            
                        </>
                    )

                    }
                </div>
                
            </div>
        </div>
    );
};

export default ViewPost;