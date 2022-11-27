import autoAnimate from '@formkit/auto-animate';
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import "./AppContent.css";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const AppContent = () => {
    const todoList = useSelector((state) => state.todo.todoList);
    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    const [animation] = useAutoAnimate();

    const filteredTodoList = sortedTodoList.filter((item) => {
        if (filterStatus === 'all') {
            return true;
        }
        return item.status === filterStatus;
    })



    return (
        <div className='content-wrapper' ref={animation}>
            {
                filteredTodoList && filteredTodoList.length > 0 ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />) : 'no todo found'
            }
        </div>
    )
}

export default AppContent