import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';


class App extends Component {

      onSearch = (e) => {
            this.setState({ keyword: e })
      }

      render() {
            var { isDisplayForm } = this.props
            var elTaskForm = isDisplayForm ? <TaskForm /> : "";
            return (
                  <div className="container">
                        <div className="text-center">
                              <h1>Quản Lý Công Việc</h1>
                              <hr />
                        </div>
                        <div className="row">
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    {elTaskForm}
                              </div>
                              <div className={isDisplayForm ?
                                    "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
                                    "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                                    <button
                                          type="button"
                                          className="btn btn-primary"
                                          onClick={() => this.props.onOpenForm()}>
                                          <span className="fa fa-plus mr-5">
                                          </span>
                                          <span> Thêm Công Việc</span>
                                    </button>

                                    <TaskControl
                                          onSearch={this.onSearch}
                                    />
                                    <TaskList
                                    //keyword={this.state.keyword}
                                    />
                              </div>
                        </div>
                  </div>
            );
      }
}

const mapStateToProps = state => {
      return {
            isDisplayForm: state.isDisplayForm,
      }
}
const mapDispatchToProps = (dispatch, props) => {
      return {
            onToggleForm: () => {
                  dispatch(actions.toggleForm());
            },
            onCloseForm: () => {
                  dispatch(actions.closeForm())
            },
            onOpenForm: () => {
                  dispatch(actions.openForm());
            }
      }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
