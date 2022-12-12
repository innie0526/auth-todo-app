import React, { useState, useCallback } from 'react';
import { Stack, Form, Button } from 'react-bootstrap';
import { createTodoAPI } from '../../api/api';
// import { MdAddBox } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";

const CreateTodo = ({ setListData }) => {
  const [value, setValue] = useState('');

  const onChangeInput = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const AddItem = () => {
    createTodoAPI(value).then(res => {
      setListData(res.data);
      setValue('');
    });
  };

  return (
    <Stack direction="horizontal" gap={3} className="mb-4">
      <Form.Control
        className="me-auto"
        placeholder="할 일을 추가하세요."
        value={value}
        onChange={e => {
        onChangeInput(e);
        }}
    />
    <button>
    <RiAddBoxFill
    size="2rem"
    onClick={() => AddItem()}/>
    </button>
    </Stack>
);
};

export default CreateTodo;
