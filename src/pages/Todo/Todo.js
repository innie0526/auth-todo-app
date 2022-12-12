import React,{useState, useEffect} from "react";
import TodoList from "../../components/Todo/TodoList";
import { useNavigate } from "react-router-dom";
import UpdateTodo from "../../components/Todo/UpdateTodo";
import styled from "styled-components";
import { Stack, Container, Button } from 'react-bootstrap';
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
        <Stack direction="horizontal" gap={2} className="mb-5">
            
        <h3>To do list</h3>
        <Button
          className="ms-auto"
          variant="outline-dark"
          size="sm"
          onClick={() => Logout()}
          >
          로그아웃
        </Button>
        <Container>
            <CreateTodo TodoListData={TodoListData} setTodoListData={setTodoListData}/>
            <TodoList TodoListData={TodoListData} setTodoListData={setTodoListData}/>
        </Container>
        </Stack>
            </TodoWrap>
    );
};

export default Todo;

const TodoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;