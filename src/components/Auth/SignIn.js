import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postSignInAPI } from "../../api/api";
// import AuthTemplate from "./AuthTemplate";

const SignIn = () => {
    const navigate=useNavigate();

    const [inputValue, setInputValue] = useState({
        email:'',
        password:'',
    });

    const { email, password } = inputValue;

    const handleLoginInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    };

    const goSignIn = () => {
        if (email.length == 0 || email.valueOf === '') {
        alert('이메일이 비어있습니다.');
        } else if (!email.includes('@')) {
        alert('이메일 형식이 아닙니다.');
        } else if (password.length < 8) {
        alert('비밀번호는 8자리 이상 입력해주세요.');
        } else {
            postSignInAPI(inputValue)
            .then(res => {
                res.statusText === 'OK' &&
                localStorage.setItem('access_token', res.data.access_token);
                navigate('/todo');
            })
            .catch(err => {
                console.log(err);
            });
        }
    };

    return (
                <Container>
                    <h3>로그인</h3>
            <Form onChange={e => handleLoginInput(e)}>
            <Form.Group className="mb-3 mt-3">
                <label for="email">이메일 주소</label>
                <Form.Control  
                type="email" 
                name="email" 
                defaultValue={email}
                placeholder="이메일을 입력하세요"
                />
            </Form.Group>
            <Form.Group className="mb-4">
            <label for="password" >비밀번호</label>
            <Form.Control
            type="password" 
            name="password" 
            defaultValue={password}
            placeholder="8자 이상 비밀번호를 입력하세요"
            />
            </Form.Group>
            <br/>
            <Button
            className="d-flex mx-auto"
            variant="primary"
            onClick={() => {
                goSignIn();
            }}
            >
                로그인하기
            </Button>

        </Form>
        </Container>
    );
};

export default SignIn;

