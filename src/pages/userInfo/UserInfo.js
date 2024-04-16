/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './UserInfoStyle';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/auth/AuthAtoms';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import axios from "axios";
import { userInfo } from './../main/MainStyle';
import { useParams } from 'react-router-dom';

const UserInfo = ({isOpen}) => {
const [ authState, setAuthState] = useRecoilState(authenticatedState);
const navigate = useNavigate();
const [ userInfoRef, setUserinfoRef] = useState(true);
const [ name, setname] = useState("");
const [ email, setEmail] = useState("");
const [ userId, setUserId] = useState("");

    const getUserInfo = useQuery(["getUserInfo"], async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get("http://localhost:8080/auth/userInfo", option);
        setname(response.data.name)
        setEmail(response.data.email)
        setUserId(response.data.userId)
        return response;
    },{
        enabled: userInfoRef,
        onSuccess: () => {
            setUserinfoRef(false);
        }
    });

    const userDelete = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.delete("http://localhost:8080/auth/delete", {data : {userId : userId}} ,option)
    });

    const logoutClickHandle = () => {
        if(window.confirm("로그아웃하시겠습니까?")){
            localStorage.removeItem("accessToken");
            setAuthState(false);
            navigate("/auth/login");
            
        }
    }

    const deleteOnClickHandel = () => {
        if(window.confirm("회원탈퇴하시겠습니까?")){
            userDelete.mutate();
            localStorage.removeItem("accessToken")
            setAuthState(false);
            navigate("auth/login");
        }
    }

    return (
        <div css={s.userInfoGroup(isOpen)}>
            <div css={s.container}>
                <div css={s.userInfo}>
                    <div css={s.email}>
                        email : {email} 
                    </div>
                    <div css={s.name}>
                        name : {name}
                    </div>
                </div>
                <div css={s.btnContainer}>
                    
                    <div>
                        <button onClick={logoutClickHandle} css={s.logoutBtn}>로그아웃</button>
                    </div>
                    <div>
                        <button onClick={deleteOnClickHandel} css={s.deleteBtn}>탈퇴하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;