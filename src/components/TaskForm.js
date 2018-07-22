import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from './../actions/index'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            name: "",
            status: true,
            id: '',
        })
    }
    /*chỉ được gọi một lần => khi đang hiển thi taskform
    mà ấn vào sửa của các cell khác thì content ở filed
    tên và trạng thái ở taskform không được update*/
    componentWillMount() {
        // editing
        if (this.props.taskEditing && this.props.taskEditing.id !== null) {
            this.setState({
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status,
                id: this.props.taskEditing.id,
            })
        } else {
            this.props.onClearValue()
        }
    }


    componentWillReceiveProps(nextProps) {
        // nextProps o day la cac value duoc tra ve tu rootReducer
        //editing
        if (nextProps && nextProps.taskEditing) {
            this.setState({
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status,
                id: nextProps.taskEditing.id,
            })
        } else if (nextProps && nextProps.taskEditing === null) {
            this.props.onClearValue()
        }

    }

    onUpdate = (e) => {
        var target = e.target;
        var value = target.value === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        // Chú  ý ép kiểu target.value của prop status 
        // vì giá trị trả về là string chứ không phải boolean
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmitAt = (e) => {
        e.preventDefault();
        // console.log(this.state)
        // force to input name of task
        if (this.state.name) {
            this.props.onSaveTask(this.state)
        }
    }

    /* Close and clear form */
    onCloseFormAt = () => {
        this.props.onCloseForm();
        this.props.onClearValue();
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <div className="d-flex justify-content-lg-between">
                            <span>{this.state.id !== "" ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}</span>
                            <i className="fa fa-times" onClick={this.onCloseFormAt} ></i>
                        </div>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmitAt} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={this.onUpdate}
                                value={this.state.name}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            onChange={this.onUpdate}
                            className="form-control"
                            required="required"
                            name="status"
                            value={this.state.status}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <input
                                type="submit"
                                className="btn btn-warning"
                                defaultValue={this.state.id !== "" ? "Lưu Lại" : "Thêm"}
                            />
                            &nbsp;
                     <input
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onCloseFormAt}
                                defaultValue={this.state.id !== "" ? "Hủy Bỏ" : "Đóng"}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // state duoc tra ve sau khi chay xong reducer taskEditing
    // console.log(state.taskEditing)
    return {
        taskEditing: state.taskEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: task => {
            // console.log(task)
            // save Task bang ham saveTask
            dispatch(actions.saveTask(task));
            //then Clear the form by clearTaskForm fn
            dispatch(actions.clearTaskForm())
        },
        onClearValue: () => {
            dispatch(actions.clearTaskForm())
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
