import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSortControl extends Component {

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
    }

    onClick = (sortBy, sortrValue) => {
        this.props.onSortTask(sortBy, sortrValue);
    }
    

    render() {

        /* Change name of button sort on banner nua */
    //    if (this.props.sortby !== null){
    //    var sortBtnName  = (this.props.sortby, this.props.sortValue) => {
    //     return this.props.sortBy === 'name' ? 
    //     (this.props.sortValue  === 1 ? `Sắp Xếp Từ A => Z` : `Sắp Xếp Từ Z => A` ) : 
    //     (this.props.sortValue  === 1 ? `Sắp Xếp Theo Kích Hoạt` : `Sắp Xếp Theo Ẩn` )
    //    } 
    // }
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a
                                role="button"
                                className={
                                    this.props.sortBy === 'name' && this.props.sortValue === 1 ?
                                        'sort_selected' : ""
                                }
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                     </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)} >
                            <a role="button"
                                className={
                                    this.props.sortBy === 'name' && this.props.sortValue === -1 ?
                                        'sort_selected' : ""}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                     </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}><a
                            role="button"
                            className={
                                this.props.sortBy === 'status' && this.props.sortValue === 1 ?
                                    'sort_selected' : ""
                            }
                        >Trạng Thái Kích Hoạt</a></li>
                        <li onClick={() => this.onClick('status', -1)}><a
                            role="button"
                            className={
                                this.props.sortBy === 'status' && this.props.sortValue === -1 ?
                                    'sort_selected' : ""
                            }
                        >Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sortBy: state.sortTaskReducer.sortBy,
        sortValue: state.sortTaskReducer.sortValue
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTask: (sortBy, sortValue) => {
            dispatch(actions.sortTask(sortBy, sortValue));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);
