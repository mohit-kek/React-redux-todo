import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../../slices/todoSlice';
import Button, { SelectButton } from '../Button/Button';
import TodoModal from '../TodoModal/TodoModal';
import "./AppHeader.css";

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const filterStatus = useSelector((state) => state.todo.filterStatus);

    const dispatch = useDispatch();

    const updateFilter = (e) => {
        dispatch(updateFilterStatus(e.target.value))
    }

    return (
        <div className='app-header'>
            <Button children={"Add Task"} variant="primary" onClick={() => setModalOpen(true)} />
            <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incolmplete</option>
            </SelectButton>
            <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default AppHeader