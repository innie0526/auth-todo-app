import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from '../../components/Auth/SignIn';
import SignUp from '../../components/Auth/SignUp';
import { Container, Button } from 'react-bootstrap';

const Auth = () => {
    const [isLoggedin, setIsLoggedin] = useState(true);
    const navigate = useNavigate();

    const changePage = () => {
        setIsLoggedin(prev => !prev);
    };

    
useEffect(() => {
    localStorage.getItem('access_token') && navigate('/todo');
}, []);


    return (
        <AuthBox>

        <Container>
            {isLoggedin ? <SignIn/> : <SignUp/>}
            <Button
            className="d-flex mx-auto mt-3"
            variant="outline-danger"
            size="sm"
            onClick={changePage}
            >
        {isLoggedin ? '회원가입 하러가기' : '로그인으로 돌아가기'}
        </Button>
        </Container>
            </AuthBox>
    );
};

export default Auth;

const AuthBox = styled.div`
position: absolute;
background: #ffff89;
border:1px solid #000000;
top:50%;
left:50%;
transform: translate(-50%, -50%);
width: 500px;
margin:0 auto;
padding: 40px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`