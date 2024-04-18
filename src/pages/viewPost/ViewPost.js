/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import * as s from './ViewPostStyle';
import { useMutation, useQuery } from 'react-query';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { name } from './../userInfo/UserInfoStyle';

const ViewPost = () => {
    const {boardId} = useParams();
    const [ boardData, setBoardData ] = useState([])
    const [ boardRef, setBoardRef] = useState(true);
    const [ userCheckRef, setUserCheckRef ] = useState(true);
    const [ boardUserId, setBoardUserId ] = useState();
    const [ modifyFlag, SetModifyFlag ] = useState(false);
    const navigate = useNavigate();
    const [ commentData, setCommentData ] = useState({comment : ""})
    const [ commentErrorMessage, setCommentErrorMessage ] = useState("")
    const [ commentRef, setCommentRef ] = useState(true);
    const [ comment, SetComment ] = useState([]);

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
        if(boardDelete.isLoading){
            return <div>로딩중...</div>
        }
        return response
    });



    const listButtonOnClick = () => {
        navigate("/")
    }
    const modifyOnClick = () => {
        navigate(`/board/modify/${boardId}`)
    }

    const deleteOnClick = async() => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            try{
                await boardDelete.mutateAsync();
                navigate("/")
            }catch(error){
                console.error("게시물 삭제 중 오류 발생", error);
            }
        }
    };

    const registerComment = async() => {
        if(commentData.comment.length > 0){
            const option = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }

            const response = await axios.post(`http://localhost:8080/board/comment/${boardId}`, commentData ,option)
            
            if(response.status === 200){
                setCommentData({ comment: "" });
                setCommentErrorMessage("")
            }else{
                console.log("댓글등록중 오류발생" , response.data)
            }
        }
        else{
            setCommentErrorMessage("댓글 내용은 1글자 이상이어야 합니다.")
        }
    };

    useEffect(() => {
        if(commentData.comment === ""){
            document.getElementById("commentTextArea").value = "";
        }
    },[commentData]);


    const commentOnChnage = (e) => {
        const {name, value} = e.target;
        setCommentData({...commentData, [name] : value});
    };
    
    const getComment = useQuery(["getComment"], async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get(`http://localhost:8080/board/getComment/${boardId}`, option)
        SetComment(response.data);
        console.log(response.data)
    },{
        enabled: commentRef,
        onSuccess: () => {
            setCommentRef(false);
        }
    });

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
                    <div css={s.commentContainer}>
                        <div>
                            <textarea id="commentTextArea" css={s.comment} name="comment" onChange={commentOnChnage}/>
                        </div>
                            <button css={s.commentSendBtn} onClick={registerComment}>확인</button>
                    </div>
                    <div css={s.commentErrorMessage}>{commentErrorMessage}</div>
                    <div css={s.commentContentContainer}>
                        {comment.map(comment => (
                            <div key={comment.commentId} >

                                <div css={s.commentContent}>
                                    <div css={s.commentName}>{comment.name } : </div>
                                    <div css={s.commentcontentStyle}>{comment.commentContent}</div>
                                </div>
                                
                                
                            </div>
                        ))}
                    </div>
        </div>
    );
};

export default ViewPost;