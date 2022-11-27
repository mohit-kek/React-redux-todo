import { format, set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../slices/todoSlice';
import Checkbox from '../Checkbox/Checkbox';
import TodoModal from '../TodoModal/TodoModal';
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if (todo.status === 'complete') {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [todo.status]);


    const handleUpdate = () => {
        setUpdateModalOpen(true);
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success('Todo Deleted Successfully');
    };

    const handleCheck = () => {
        setChecked(!checked);
        dispatch(
            updateTodo({
                ...todo,
                status: checked ? 'incomplete' : 'complete',
            })
        )
    }

    return (
        <>
            <div className="item">
                <div className="todo-details">
                    <Checkbox checked={checked} setChecked={setChecked} handleCheck={handleCheck} />
                    <div className="texts">
                        <p className={`todo-text ${todo.status === 'complete' && 'todo-text-completed'}`}>
                            {todo.title}
                        </p>
                        <p className="time">
                            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
                        </p>
                    </div>
                </div>
                <div className="todo-actions">
                    <div className="icon">
                        <MdDelete
                            onClick={handleDelete}
                            onKeyDown={handleDelete}
                            role="button"
                            tabIndex={0}
                        />
                    </div>
                    <div className="icon"
                        onClick={handleUpdate}
                        onKeyDown={handleUpdate}
                        role="button"
                        tabIndex={0}
                    >
                        <MdEdit />
                    </div>
                </div>
            </div>
            <TodoModal todo={todo} type="update" modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} />
        </>
    )
}

export default TodoItem