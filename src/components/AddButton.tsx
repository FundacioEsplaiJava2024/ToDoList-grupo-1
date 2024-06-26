import { useState } from 'react';
import Modal from './Modal';
import { Task } from '../Task';

const AddButton= () => {
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    const handleAddTask = (data: Task) => {
        
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = [...tasks, data];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        hideModal();
    };

    return (
        <div>
            <button onClick={showModal}>Add +</button>
            <Modal show={show} hideModal={hideModal} onSubmit={handleAddTask} />
        </div>
    );
};

export default AddButton;