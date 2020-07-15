import React from 'react';
import { connect } from 'react-redux';
import styles from './ImportantTasks.module.css'

class ImportantTasks extends React.Component {
    render() {
        return <div className={ styles.importantTasksBlock }>
            { this.props.importantTasks.map(t => (
                <div className={ styles.task } key={ t.id }>
                    <p className={ styles.task__descr }>{ t.descr }</p>
                </div>
            )) }
        </div>
    }
}

let mstp = (state) => ({
    tasks: state.tasksData.tasks
})

export default connect(mstp, {})(ImportantTasks);