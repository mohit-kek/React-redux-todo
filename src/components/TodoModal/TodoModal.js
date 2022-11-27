import React, { useState, useEffect } from 'react'
import "./TodoModal.css";
import { MdOutlineClose } from "react-icons/md";
import Button from '../Button/Button';
import { addTodo, updateTodo } from '../../slices/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import toast from 'react-hot-toast';

const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (type === 'update' && todo) {
            setTitle(todo.title);
            setStatus(todo.status);
        } else {
            setTitle('');
            setStatus('incomplete');
        }
    }, [type, todo, modalOpen]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '') {
            toast.error('Please enter a title');
            return;
        }

        if (title && status) {
            if (type === 'add') {
                dispatch(addTodo({
                    id: uuid(),
                    title,
                    status,
                    time: new Date().toLocaleString(),
                }));
                toast.success('Task added Successfully');
                setModalOpen(false);
            }
            if (type === "update") {
                if (todo.title !== title || todo.status !== status) {
                    dispatch(
                        updateTodo({
                            ...todo,
                            title,
                            status,
                        })
                    )
                } else {
                    toast.error("No Changes Made");
                 
                }
            }
            setModalOpen(false);
        }
    }

    return (
        // <div>
        modalOpen && (
            <div className='wrapper'>
                <div className="container">
                    <div className="close-button" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button" >
                        <MdOutlineClose />
                    </div>
                    <form className='form' onSubmit={(e) => handleSubmit(e)}>
                        <h1 className="formTitle">{type === 'update' ? "Update " : "Add "}Task</h1>
                        <label htmlFor="title">Title
                            <input type="text" id='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label htmlFor="status">Status
                            <select name='status' id='status'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option value="incomplete">Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className="button-container">
                            <Button type="submit" variant="primary" >{type === 'update' ? "Update " : "Add "}Task</Button>
                            <Button children={"Cancel"} type="button" variant="secondary" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} />
                        </div>
                    </form>
                </div>
            </div>
        )
        // </div>
    )
}

export default TodoModal