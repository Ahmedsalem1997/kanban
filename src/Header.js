import React, { useContext } from 'react';

import TasksContext from "./context/TasksContext";


const Header = () => {
    const { exportData } = useContext(TasksContext)
    return (
        <div>
            <h1 className="logo">Kanban Board</h1>
            <div className="buttons-container">
                <button className="btn" type="button">
                    Import Data
                </button>
                <button className="btn" type="button" onClick={exportData}>
                    Export Data
                </button>
            </div>

        </div>
    );
}

export default Header;