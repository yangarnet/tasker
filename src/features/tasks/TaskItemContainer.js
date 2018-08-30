import React from "react";
import PropTypes from "prop-types";
import TaskItemComponent from "./TaskItemComponent";

const TaskItemContainer = ({ feeds, onUpdateUrl }) => {
    const taskItemList = feeds.map(task => (
        <TaskItemComponent key={task.id} {...task} onUpdateUrl={onUpdateUrl} />
    ));
    return <ul>{taskItemList}</ul>;
};

TaskItemContainer.propTypes = {
    onUpdateUrl: PropTypes.func.isRequired
};

TaskItemContainer.defaultProps = {
    onUpdateUrl: () => {}
};
export default TaskItemContainer;
