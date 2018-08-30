import React from "react";
import PropTypes from "prop-types";

const TaskItemComponent = ({
    user,
    status,
    description,
    userpath,
    taskpath,
    onUpdateUrl
}) => (
    <li className="task-detail">
        <span
            className="task-creator"
            onMouseOver={() => onUpdateUrl(`/users/${userpath}`)}
        >
            {user}
        </span>
        <span className="task-status">{status}</span>
        <span
            className="task-description"
            onMouseOver={() => onUpdateUrl(`/tasks/${taskpath}`)}
        >
            {description}
        </span>
    </li>
);

TaskItemComponent.propTypes = {
    user: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string,
    userpath: PropTypes.string.isRequired,
    taskpath: PropTypes.string,
    onUpdateUrl: PropTypes.func.isRequired
};

TaskItemComponent.defaultProps = {
    user: "",
    status: "",
    description: "",
    userpath: "",
    taskpath: "",
    onUpdateUrl: () => {}
};

export default TaskItemComponent;
