import todolist from '../css/todolist.module.css';
import todoItem from '../css/todoitem.module.css';
import axios from 'axios';

import { baseURL, getAllData } from '../App';
import { useState, useRef, useEffect } from 'react';

function TodoItem({ todo, removeTodo, setTodoArray }) {
    const editInputRef = useRef(null);

    const [edited, setEdited] = useState(false);
    const [newText, setNewText] = useState(todo.todoContent);

    // const [check, setCheck] = useState(false)

    useEffect(() => {
        if (edited) {
            editInputRef.current.focus();
        }
    }, [edited]);

    const onClickEdit = () => {
        setEdited(true);
    };

    const onChangeEditInput = (event) => {
        const { name, value } = event.target;
        setNewText(value);
    };

    const onPressSubmit = async (id) => {
        try {
            const newTodo = {
                todoContent: newText,
            };
            const response = await axios({
                method: 'PUT',
                url: `${baseURL}/todos/${id}`,
                data: newTodo,
            });
            if (response.status === 200) {
                const result = await getAllData();
                setTodoArray(result);
                setEdited(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeChecked = async (id, checked) => {
        const response = await axios({
            method: 'PUT',
            url: `${baseURL}/todos/${id}`,
            data: {
                todoContent: todo.todoContent, //수정은 안하는 상태!
                checked: !checked,
            },
        });
        if (response.status === 200) {
            const result = await getAllData();
            setTodoArray(result);
        }
    };

    return (
        <li className={todoItem['todo-item']}>
            <input
                type="checkbox"
                className={todoItem.check}
                checked={todo.checked}
                onChange={() => {
                    onChangeChecked(todo.id, todo.checked);
                }}
            />
            {edited ? (
                <input
                    ref={editInputRef}
                    value={newText}
                    className={todoItem.edit_input}
                    onChange={onChangeEditInput}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            console.log(todo.id);
                            onPressSubmit(todo.id);
                        }
                    }}
                />
            ) : (
                //체크가 되어있는 경우
                <mark
                    className={
                        todo.checked === 1
                            ? todoItem.text_checked
                            : todoItem.text
                    }
                    onClick={onClickEdit}
                >
                    {todo.todoContent}
                </mark>
            )}
            <button
                type="button"
                className={todoItem.del}
                onClick={function () {
                    return removeTodo(todo.id);
                }}
            >
                <img src="add_button.svg" alt="" className={todoItem.img} />
            </button>
        </li>
    );
}

function TodoList({ todoArray, removeTodo, setTodoArray }) {
    return (
        <section className={todolist.section}>
            <ul className="todo-list">
                {todoArray.map(function (todo) {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            removeTodo={removeTodo}
                            setTodoArray={setTodoArray}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default TodoList;
