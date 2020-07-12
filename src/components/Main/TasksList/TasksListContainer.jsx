import React from 'react'; 
import TasksList from './TasksList';
import { connect } from 'react-redux';

class TasksListContainer extends React.Component {
    render() {
        return <TasksList {...this.props} />
    }
}

const mstp = (state) => {
    return ({
        tasks: state.tasksData.allTasks
    })
}

export default connect(mstp, {})(TasksListContainer);