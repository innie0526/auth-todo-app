import { Button, Form, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { postSignUpAPI } from "../../api/api";

const SignUp = () => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    });

    const { email, password } = inputValue;

    const handleLoginInput = e => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const goSignUp = () => {
        if (email.length == 0 || email.valueOf === '') {
            alert('이메일이 비어있습니다.');
        } else if (!email.includes('@')) {
            alert('이메일 형식이 아닙니다.');
        } else if (password.length < 8) {
            alert('비밀번호는 8자리 이상 입력해주세요.');
        } else {
            postSignUpAPI(inputValue)
            .then(res => {
                res.statusCode === 201 &&
                localStorage.setItem('access_token', res.data.access_token);
                alert('회원가입 성공! \n로그인을 시도해주세요.');
            })
            .catch(err => {
                console.log(err);
            });
        }
    };

    return (
        <Container>
        <h3>회원가입</h3>
            <Form onChange={e => handleLoginInput(e)}>
            <Form.Group>
                <Form.Label>이메일 주소</Form.Label>
                <Form.Control
                type="email"
                name="email" 
                defaultValue={email}
                placeholder="이메일을 입력하세요"/>
            </Form.Group>
            <Form.Group>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
            type="password" 
            name="password"
            defaultValue={password} 
            placeholder="8자 이상 비밀번호를 입력하세요"/>
            </Form.Group>
            <br/>
            <Button
            className="d-flex mx-auto"
            variant="primary"
            onClick={()=> {
                goSignUp();
            }}>
                회원가입하기
            </Button>

        </Form>
        </Container>
    );
};

export default SignUp;