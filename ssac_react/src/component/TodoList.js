import todolist from '../css/todolist.module.css';
import todoItem from '../css/todoitem.module.css';
import axios from 'axios';

import { baseURL } from '../App';
import { useState, useRef, useEffect } from 'react';

function TodoItem({ todo, removeTodo, setTodoArray }) {
    const editInputRef = useRef(null);

    const [edited, setEdited] = useState(false);
    const [newText, setNewText] = useState(todo.todoContent);

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

    const onPressSubmit = (id) => {
        axios({
            method: 'PUT',
            url: `${baseURL}/todolists/${id}`,
            data: {
                id: id,
                todoContent: newText,
            },
        }).then((response) => {
            const result = response.data.data;
            setTodoArray(result);
            setEdited(false);
        });
    };

    return (
        <li className={todoItem['todo-item']}>
            <input type="checkbox" className={todoItem.check} />
            {edited ? (
                <input
                    ref={editInputRef}
                    value={newText}
                    className={todoItem.edit_input}
                    onChange={onChangeEditInput}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            onPressSubmit(todo.id);
                        }
                    }}
                />
            ) : (
                <mark className={todoItem.text} onClick={onClickEdit}>
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
