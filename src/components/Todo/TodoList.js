import React, { useState, useEffect } from 'react';
import { getTodoAPI, updateTodoAPI, deleteTodoAPI } from '../../api/api';
import UpdateTodo from './UpdateTodo';
import styled from 'styled-components';
import {
Container,
ListGroup,
Row,
Col,
ListGroupItem
} from 'react-bootstrap';
import { 
    MdCheckBoxOutlineBlank,
    MdBorderColor,
    MdDelete
} from "react-icons/md";
import { RiCheckFill } from 'react-icons/ri';

const Todolist = ({TodoListData, setTodoListData}) => {
    const[TodoValue, setTodoValue] = useState(null);
    const [show, setShow] = useState(false);
    const handleShow= () => setShow(true);

    const fetchData = () => {
        getTodoAPI().then(res => {
            setTodoListData(res.data);
        });
    };

    const isChecked = (id, todo, isCompleted) => {
        updateTodoAPI(id, todo, isCompleted).then(res => {
            setTodoListData(res.data);
        });
    };

    const DeleteTodo = id => {
        deleteTodoAPI(id).then(res=> {
            setTodoListData(res.data);
        });
    };

    useEffect(()=> {
        fetchData();
    }, []);


    return(
    <Container>
        <ListGroup as="ul">
        {TodoListData.map(item => {
        const { id, isCompleted, todo } = item;
        return (
            <ListGroupItem as="li" key={id}>
            <ListWrap>
                <Col>
                <button
                    id="toggle-check"
                    type="checkbox"
                    checked={isCompleted}
                    onClick={() => {
                    !isCompleted
                        ? isChecked(id, todo, true)
                        : isChecked(id, todo, false);
                    }}
                >
                    {isCompleted ? (
                        <RiCheckFill 
                        size="1rem"
                        />
                        ) : (
                        <MdCheckBoxOutlineBlank/>
                    )}
                </button>
                </Col>
                {isCompleted ? (
                <CompleteTodo xs={7}>{todo}</CompleteTodo>
                ) : (
                <Col xs={7}>{todo}</Col>
                )}
                <ButtonWrap>
                <button
                >
                <MdBorderColor
                onClick={() => {
                handleShow();
                setTodoValue(id);
                }} />

                </button>
                    <button>
                    <MdDelete 
                    onClick={() => {
                    DeleteTodo(id);
                    }}/>
                    </button>
                </ButtonWrap>
            </ListWrap>
            </ListGroupItem>
        );
        })}
    </ListGroup>
    <UpdateTodo
        show={show}
        setShow={setShow}
        TodoValue={TodoValue}
        setTodoListData={setTodoListData}
    />
    </Container>
);
};



const ListWrap = styled(Row)`
    align-items: center;
`;

const CompleteTodo = styled(Col)`
    text-decoration: line-through;
`;

const ButtonWrap = styled(Col)`
    text-align: center;
`;

export default Todolist;