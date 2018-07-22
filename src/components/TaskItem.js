import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index';

class TaskItem extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span
                        className={this.props.task.status === true ?
                            'label label-success' :
                            'label label-danger'}
                        onClick={() => this.props.onChangeStatus(this.props.task)}
                    >
                        {this.props.task.status === true ? "Active" : "In-Active"}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => this.props.updateTaskInfo(this.props.task)}
                    >
                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger"
                        onClick={() => this.props.onDeleteItem(this.props.id)}
                    >
                        <span
                            className="fa fa-trash mr-5">
                        </span> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = taskEditing => {
    return {
        taskEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: (id) => {
            dispatch(actions.updatStateTask(id));
        },
        onDeleteItem: (key) => {
            console.log(key)
            dispatch(actions.deleteTask(key));
            dispatch(actions.closeForm());
        },
        // task nay duoc truyen vao thong qua  /* this.props.updateTaskInfo(this.props.task) */
        updateTaskInfo: (taskItem) => {
            dispatch(actions.openForm())
            dispatch(actions.updateTaskInfo(taskItem))
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
