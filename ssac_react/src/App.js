// ../ : 상위폴더
// ./ : 현재폴더
import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoMain from './component/TodoMain';
import TodoList from './component/TodoList';
// import TodoItem from './component/TodoItem';
import TodoStatus from './component/TodoStatus';
import TodoFooter from './component/TodoFooter';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

export const baseURL = 'http://localhost:3000';

function App() {
    // 기본 데이터(객체) 배열
    const [todoArray, setTodoArray] = useState([]);

    // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
    const [todoInput, setTodoInput] = useState({
        todoContent: '',
    });

    useEffect(() => {
        console.log('최초 1회 실행');
        // url: todolists
        // method: GET

        axios({
            method: 'GET',
            url: `${baseURL}/todolists`,
        })
            .then((response) => {
                const result = response.data.data;
                setTodoArray(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // 페이지를 처음 렌더링 할 때, 서버에 전체 리스트 정보를 요철해서, 전체 데이터를 가져온다음,

    // 구조 분해 할당
    const { todoContent } = todoInput;

    // input에 텍스트 입력시 carInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
    const changeTodo = (e) => {
        const { name, value } = e.target;

        setTodoInput({
            ...todoInput,
            [name]: value,
        });
    };

    const nextId = useRef(todoArray.length + 1);

    // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
    const addTodo = async () => {
        const newTodo = {
            id: nextId.current,
            todoContent: todoContent,
        };

        // method : post
        // url : /todolists
        // body: {id, todoContent}
        const response = await axios({
            method: 'POST',
            url: `${baseURL}/todolists`,
            data: newTodo,
        });

        const result = response.data.data; // 전체 데이터(새로 추가한 데이터)

        setTodoArray(result);

        setTodoInput({
            todoContent: '',
        });

        nextId.current++;
    };

    const removeTodo = async (id) => {
        // method : DELETE
        // url : /todolists/:id
        const response = await axios({
            method: 'DELETE',
            url: `${baseURL}/todolists/${id}`,
        });

        const result = response.data.data;

        // filter 내장 함수 : 조건에 맞는 데이터만 추출해서 새로운 데이터(배열) 생성
        setTodoArray(result);
    };

    return (
        <>
            <TodoHeader
                todoContent={todoContent}
                changeTodo={changeTodo}
                addTodo={addTodo}
            />
            <TodoMain>
                <TodoList
                    todoArray={todoArray}
                    removeTodo={removeTodo}
                    setTodoArray={setTodoArray}
                />
                <TodoStatus todoArray={todoArray} />
            </TodoMain>
            <TodoFooter />
        </>
    );
}

export default App;
