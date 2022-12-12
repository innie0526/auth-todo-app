import axios from "axios";

const baseURL = 'https://pre-onboarding-selection-task.shop/';
const config = {
    Headers: {
        'Content-Type': 'application/json',
    },
    Body: {
        'email':'string',
        'password':'string',
    }
};

const todoConfig = {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
    },
};

export function postSignUpAPI(data) {
    return axios.post(baseURL + 'auth/signup', { ...data }, config);
}

export function postSignInAPI(data) {
    return axios.post(baseURL + 'auth/signin', { ...data }, config);
}


export function createTodoAPI(data) {
    return axios
    .post(baseURL + 'todos', { todo: data }, todoConfig)
    .then(getTodoAPI);
}

export function getTodoAPI() {
    return axios.get(baseURL + 'todos', todoConfig);
}

export function updateTodoAPI(id, todos, boolean) {
    return axios
    .put(
        baseURL + `todos/${id}`,
        { todo: todos, isCompleted: boolean },
        todoConfig
    )
    .then(getTodoAPI);
}

export function deleteTodoAPI(id) {
    return axios.delete(baseURL + `todos/${id}`, todoConfig).then(getTodoAPI);
}
