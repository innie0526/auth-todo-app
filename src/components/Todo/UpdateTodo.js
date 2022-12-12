import React, { useState } from "react";
import { Form,
    Button,
    ModalHeader,
    Modal,
    ModalTitle,
    ModalBody
    } from "react-bootstrap";
import { updateTodoAPI } from "../../api/api";

const UpdateTodo = ({show, setShow, setTodoList, TodoValue}) => {
    const [updateValue, setUpdateValue] = useState('');
    const handleEditValue = e => {
        setUpdateValue(e.target.value);
    };

    const EditTodo = () => {
        updateTodoAPI(TodoValue, updateValue, false).then(res => {
            setTodoList(res.data);
            setShow(prev => !prev);
        });
    };

    return(
        <Modal show={show} centered>
        <ModalHeader
        closeButton
        onClick={()=> {
            setShow(prev => !prev);
        }}
        >
<ModalTitle>할 일 수정하기</ModalTitle>
        </ModalHeader>
<ModalBody>
    <Form.Control
    className="me-auto"
    placeholder="할 일을 수정하세요"
    onChange={e => {
            handleEditValue(e);
        }
    }
    />
</ModalBody>
<Button onClick={()=> {
    EditTodo();
}}>
수정하기
</Button>
        </Modal>
    );
};

export default UpdateTodo;