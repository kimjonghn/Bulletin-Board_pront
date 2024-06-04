/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from './WriteStyle';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/auth/AuthAtoms';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Write = () => {
    const [ data, setData ] = useState({ title:"", content:"" });
    const [ errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const [ imageData, setImageData ] = useState([]);
    const [ imagePreviews, setImagePreviews ] = useState([]);
    
    const listButtonOnClick = () => {
        navigate("/")
    }
    const writeHandle = (e) => {
        const { name, value } = e.target;
        setData({...data, [name] : value});
    }
    //서버로 전송
    const sendButton = async() => {
        const formData = new FormData();
        
        for (let i = 0; i < imageData.length; i++) {
            formData.append("images", imageData[i]);
        }
        formData.append("title", data.title);
        formData.append("content", data.content);
    
        try {
            const response = await axios.post("http://localhost:8080/board/write", formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });

            if (response.data === 0) {
                setErrorMessage("등록에 실패했습니다. 제목과 내용은 2글자 이상이어야 합니다.");
            } else {
                alert("등록이 성공적으로 되었습니다.");
                navigate("/")
            }
        } catch (error) {
            console.error("Error uploading images", error);
        }
    }
    //이미지
    const handleImageOnchange = (e) => {
        const newImageFiles = Array.from(e.target.files); // 새 이미지 파일들
        const maxImages = 3;
        const totalimages = newImageFiles.length + imagePreviews.length;
        if(totalimages > maxImages){
            alert(`최대 ${maxImages}장의 이미지만 선택할 수 있습니다.`)
            return;
        }
        const updatedImageFiles = [...imageData, ...newImageFiles]; // 기존 이미지 파일들과 새 이미지 파일들 병합
        const previews = updatedImageFiles.map(file => URL.createObjectURL(file));
        setImageData(updatedImageFiles);
        setImagePreviews(previews);
    }
    const imageDeleteOnClick = (index) => {
        const updatedImagePreviews  = imagePreviews.filter((iamge, i) => i !== index);
        const updatedImageData  = imageData.filter((iamge, i) => i !== index);
        setImagePreviews(updatedImagePreviews)
        setImageData(updatedImageData);

    }
    return (
        <div css={s.container}>
            <div css={s.imageContainer}>
                <label css={s.imageInputBox}>
                    사진선택
                    <input type='file' multiple="multiple" id='imageFile' accept='image/*' onChange={handleImageOnchange} css={s.imageInput}/>
                </label>
            </div>
            <div css={s.imagePreviewContainer}>
                    {imagePreviews.map((image, index) => (
                        <div key={index} css={s.imageWrapper}>
                            <img key={index} src={image} alt={`Image ${index}`} css={s.imagePreview}/>
                            <FontAwesomeIcon icon={faXmark} css={s.deleteImage} onClick={() => imageDeleteOnClick(index)}/>
                        </div>
                        ))}
            </div>
            <div css={s.titleBox}>
                <input placeholder='제목을 입력하시오' css={s.titleBoxInput} onChange={writeHandle}  name='title'/>
                <div css={s.errorMessage}>{errorMessage}</div>
            </div>
            <div css={s.content}>
                <textarea placeholder='내용을 적으세요' css={s.contentInput} onChange={writeHandle}  name='content'/>
            </div>
            <div css={s.sendBox}>
            <button css={s.buttonStyle} onClick={listButtonOnClick}>목록으로</button>
                <button css={s.send} onClick={sendButton}>
                    작성완료
                </button>
            </div>
        </div>
    );
};

export default Write;