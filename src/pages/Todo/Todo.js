import React,{useState, useEffect} from "react";
import TodoList from "../../components/Todo/TodoList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, 
    Button, 
    ModalFooter
} from 'react-bootstrap';
import CreateTodo from "../../components/Todo/CreateTodo";


const Todo = () => {
    const [TodoListData, setTodoListData] = useState([]);
    const navigate= useNavigate();

    const Logout = () => {
        localStorage.removeItem('access_token');
        navigate('/');
    };

    useEffect(() => {
        !localStorage.getItem('access_token') && navigate('/');
    }, []);


    return (
        <TodoWrap>
            <Container>
        <h3>To do list</h3>
        <Container>
            <CreateTodo TodoListData={TodoListData} setTodoListData={setTodoListData}/>
            <TodoList TodoListData={TodoListData} setTodoListData={setTodoListData}/>
        </Container>
        <br/>
        <ModalFooter>
        <Button
        className="ms-auto"
        variant="warning"
        size="m"
        onClick={() => Logout()}
        >
        로그아웃
        </Button>
            </ModalFooter>
            
            </Container>
            </TodoWrap>
    );
};

export default Todo;

const TodoWrap = styled.div`
position: absolute;
border:1px solid #000000;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 500px;
margin: 0 auto;
padding: 40px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

`;