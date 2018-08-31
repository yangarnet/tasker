import React from "react";
import PropTypes from "prop-types";
import TaskItemComponent from "./TaskItemComponent";
import { isEmpty } from '../../utils/Common';

const TaskItemContainer = ({ feeds, onUpdateUrl }) => {
    return (<ul>
    {
        isEmpty(feeds) ? null : feeds.map(task => (
            <TaskItemComponent key={task.id} {...task} onUpdateUrl={onUpdateUrl} />
        ))
    }</ul>);
};

TaskItemContainer.propTypes = {
    onUpdateUrl: PropTypes.func.isRequired
};

TaskItemContainer.defaultProps = {
    onUpdateUrl: () => {}
};
export default TaskItemContainer;
