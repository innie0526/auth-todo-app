import React, { useState, useEffect } from 'react';
import { getTodoAPI, updateTodoAPI, deleteTodoAPI } from '../../api/api';
import UpdateTodo from './UpdateTodo';
import styled from 'styled-components';
import {
  Container,
  ListGroup,
  Row,
  Col,
  Button,
  ToggleButton,
  ModalHeader,
  ListGroupItem
} from 'react-bootstrap';

import { MdCheckBoxOutlineBlank,MdCheckBox, MdBorderColor ,MdDelete} from "react-icons/md";


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
        <ModalHeader>TODO LIST</ModalHeader>
        <ListGroup as="ul">
        {TodoListData.map(item => {
        const { id, isCompleted, todo } = item;
        return (
            <ListGroupItem as="li" key={id}>
            <ListWrap>
                <Col>
                <ToggleButton
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
                        <MdCheckBox />
                        ) : (
                        <MdCheckBoxOutlineBlank />
                    )}
                </ToggleButton>
                </Col>
                {isCompleted ? (
                <CompleteTodo xs={7}>{todo}</CompleteTodo>
                ) : (
                <Col xs={7}>{todo}</Col>
                )}

                <ButtonWrap>
                <Button
                    variant="success"
                    onClick={() => {
                    handleShow();
                    setTodoValue(id);
                    }}
                >
                    <MdBorderColor />
                </Button>{' '}
                <Button
                    variant="danger"
                    onClick={() => {
                    DeleteTodo(id);
                    }}
                >
                    <MdDelete />
                </Button>
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
  color: #999;
  text-decoration: line-through;
  `;

const ButtonWrap = styled(Col)`
  text-align: center;
  `;

  export default Todolist;