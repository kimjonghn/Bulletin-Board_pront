import React from 'react';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../atoms/auth/AuthAtoms';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const AuthRoute = ({ path, element }) => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState)
    const authPaths = ["/auth" ];

    const {authenticate, isLoading }= useQuery(["authenticate"], async () => {
        const accessToken = `Bearer ${localStorage.getItem("accessToken")}`;
        const response = await axios.get("http://localhost:8080/auth/authenticate", 
        {headers: {Authorization: accessToken}});
        return response;
    },{
        onSuccess: (response) => {
            if(response.status === 200){
                if(response.data){
                    setAuthState(true)
                }
            }
        }
    });

    if(isLoading){
        return (<div>로딩중...</div>)
    }
    //주소가 auth로 시작하는지를 보는거 , 그리고 auth로 시작할 경우 배열 길이는 1이 되므로 0보다는 크다.
    if(authPaths.filter(authPath => path.startsWith(authPath)).length > 0){ 
        //authPaths는 배열이고, authPath는 배열을 쪼갠"auth",path는 현 주소
        if(authState){
            return <Navigate to="/"/>
        } else{
            return element; 
            // 로그인이 안됐을 시에는 상시 작동
        }
    }

    if(!authState){
        return <Navigate to="auth/login"/>
    }
    return element;
};

export default AuthRoute;