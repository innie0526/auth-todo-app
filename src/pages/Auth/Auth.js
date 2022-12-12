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
        <Container>
            {isLoggedin ? <SignIn/> : <SignUp/>}
            <Button
            className="d-flex mx-auto mt-3"
            variant="outline-info"
            size="sm"
            onClick={changePage}
        >
          {isLoggedin ? '회원가입 하러가기' : '로그인으로 돌아가기'}
        </Button>
        </Container>

    );
};

export default Auth;

