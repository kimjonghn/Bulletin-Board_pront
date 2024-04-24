/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from './MainStyle';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios  from 'axios';
import { boardId } from './MainStyle';
import { FaUserCircle } from "react-icons/fa";
import UserInfo from '../userInfo/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
    const navigate = useNavigate();
    const [ boardData, setBoardData ] = useState([]);
    // const [ boardState, setBoardState ] = useState(true);
    const [filteredBoardData, setFilteredBoardData] = useState([]);
    const [ isOpen, setIsOpen] = useState(false);
    const [ search, setSearch] = useState({ search: "" })

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios.get("http://localhost:8080/board", option);
        setBoardData(response.data)
    }
);
    useEffect(() => {
        setFilteredBoardData(boardData);
    },[boardData]); 

    const userInfoOnClick = () => {
        setIsOpen(!isOpen);
    }

    const contentBtn = (boardId) => {
        navigate(`board/view/${boardId}`)
    }

    const clickHandle = () => {
        navigate("/board/write")
    }
    
    
    const findOnChange = (e) => {
        const { value } = e.target;
        setSearch(value);
        const filteredData = boardData.filter((board) =>
            board.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredBoardData(filteredData);
    }

    return (
        <div css={s.container}>
            <div css={s.headerContainer}>
                <div css={s.userInfoContainer}>
                    <FaUserCircle css={s.settingButton} onClick={userInfoOnClick}/>
                    <UserInfo css={s.userInfo} isOpen={isOpen}/>
                </div>
            </div>
            <div>
                <h1 css={s.logo}>
                    Health Community
                </h1>
            </div>
            <div css={s.findContainer}>
                <div>
                    <input css={s.findInput} name="search"  onChange={findOnChange} type='search'/>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
            <div css={s.contentHeader}>
                <p css={s.contentNum}>No</p>
                <p css={s.contentTitle}>제목</p>
            </div>
            <div css={s.contentBox}>
                {filteredBoardData.map((board, index) => (
                    <div key={board.boardId} onClick={()=> contentBtn(board.boardId)} css={s.content}>
                        <p css={s.boardId}>{index + 1}</p>
                        <div css={s.boardTitleContainer}>
                            <p css={s.boardTitle}>{board.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div css={s.writeContainer}>
                <button onClick={clickHandle} css={s.writeButtonStyle}>글쓰기</button>
            </div>
        </div>
    );
};

export default Main;