/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from "./ModifyStyle";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Modify = () => {
    const {boardId} = useParams();
    const [getBoardRef, setBoardRef] = useState(true);
    const [getBoardData, setBoardData] = useState({title:" ", content:" "});
    const [ errorMessage ,setErrorMessage] = useState("")
    const navigate = useNavigate();
    const [ imageData, setImageData ] = useState([]);
    const [ imagePreviews, setImagePreviews ] = useState([]);
    const [ existingImage, setexistingImage ] = useState([])

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get(`http://localhost:8080/board/view/${boardId}`, option)
        setBoardData(response.data)
        if (response.data.images) {
            if (typeof response.data.images === "string") {
                setexistingImage(response.data.images.split(','));
            } else {
                setexistingImage([]);
            }
        }
    },{
        enabled: getBoardRef,
        onSuccess: () => {
            setBoardRef(false)
        }
    });

    const registerBoard = useMutation(async() => {
        const option = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        try{

            const formData = new FormData();
            formData.append("title", getBoardData.title);
            formData.append("content", getBoardData.content);
        if(imageData.length > 0){
            for (let i = 0; i < imageData.length; i++) {
                formData.append("images", imageData[i]);
            }
        }
        if(existingImage.length > 0){
            for (let i = 0; i < existingImage.length; i++) {
                formData.append("existingImages", existingImage[i]);
            }
        }
        
            const response = await axios.post(`http://localhost:8080/board/modify/${boardId}`, formData ,option);
            if(response.data === 0 ){
                setErrorMessage("등록에 실패했습니다. 제목과 내용은 2글자 이상이어야 합니다.")
            }else{
                alert("등록이 성공적으로 되었습니다.")
                navigate("/")
            }
        }catch(error){
            console.log(error.response.data)
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
    const handleImageOnchange = (e) => {
        const newImageFiles = Array.from(e.target.files);
        const maxImages = 3;

        const totalimages = existingImage.length + newImageFiles.length + imagePreviews.length ;

        if(totalimages > maxImages){
            alert(`최대 ${maxImages}장의 이미지만 선택할 수 있습니다.`)
            return;
        }
        
        const updatedImageFiles = [...imageData, ...newImageFiles];
        const previews = updatedImageFiles.map(file => URL.createObjectURL(file));
        setImageData(updatedImageFiles);
        setImagePreviews(previews);
    }
    useEffect(() => {
        // 메모리 누수를 방지하기 위해 객체 URL 정리
        return () => {
            imagePreviews.forEach(url => URL.revokeObjectURL(url));
        }
    }, [imagePreviews]);

    const existingImageDeleteOnClick = (index) => {
        
        const updatedImageExistingImage  = existingImage.filter((iamge, i) => i !== index);
        setexistingImage(updatedImageExistingImage)
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
                    <input type='file' multiple accept='image/*' onChange={handleImageOnchange} css={s.imageInput} />
                </label>
            </div>
                <div css={s.imagePreviewContainer}>
                    {imagePreviews.map((image, index) => (
                        <div key={index} css={s.imageWrapper}>
                            <img key={index} src={image} alt={`Image ${index}`} css={s.imagePreview}/>
                            <FontAwesomeIcon icon={faXmark} css={s.deleteImage} onClick={() => imageDeleteOnClick(index)}/>
                        </div>
                        ))}
                        {existingImage.map((image, index) => (
                            <div key={index} css={s.imageWrapper}>
                                <img src={`http://localhost:8080/images/${image}`} alt={`Existing Image ${index}`} css={s.imagePreview} />
                                <FontAwesomeIcon icon={faXmark} css={s.deleteImage} onClick={() => existingImageDeleteOnClick(index)}/>
                            </div>
                    ))}
                </div>
            <div css={s.titleBox}>
                <form>
                    <input placeholder="제목을 입력하시오" css={s.titleBoxInput} onChange={writeHandle} name='title' 
                    value={getBoardData.title}/>
                    <div css={s.errorMessage}>{errorMessage}</div>
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