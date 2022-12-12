import React, {useState} from "react";
import { getTodoAPI, updateTodoAPI, deleteTodoAPI } from "../../api/api";
import styled from "styled-components";
import UpdateTodo from "./UpdateTodo";
import { Container, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import {ModalHeader} from "react-bootstrap";

const TodoList = () => {
    return(
    <Container>
        <ModalHeader>TODO LIST</ModalHeader>
    <ListGroup as="ul">
        <ListGroupItem as="li" class="list-group-item-success"
        > Dapibus ac facilisis in
        </ListGroupItem>
        <li class="list-group-item list-group-item-success"
        > Dapibus ac facilisis in
        </li>
    </ListGroup>
    todoList입니다.
        <Button>버튼</Button>
    <UpdateTodo/>
    </Container>
    );
};

export default TodoList;