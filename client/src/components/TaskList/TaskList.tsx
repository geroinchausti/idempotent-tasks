import React from 'react';

import './TaskList.scss'

const TaskList: React.FunctionComponent<{}> = (props) => {
    const { children } = props;
    return <div className="task-list">
         { children }
    </div>;
}

export default TaskList;

