import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterName: '',
			filterStatus: -1, // all: -1, avive: 1, deactive: 0
		}
	}
	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		var filter = {
			name: name === 'filterName' ? value : this.state.filterName,
			status: name === 'filterStatus' ? value : this.state.filterStatus
		};
		this.props.onFilterTable(filter)
		this.setState({
			[name]: value,
		});
	}

	render() {
		var { tasks, keyword, sortBanner } = this.props;
		// Search on table
		var { filterName } = this.state;
		if (filterName) {
			tasks = tasks.filter((task) => {
				return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
			})
		} else {
			tasks = this.props.tasks
		}
		// sort on table
		tasks = tasks.filter((task) => {
			// return all
			if (this.props.filterResult.filterTable.status === -1) {
				return task;
			} else {
				// 0 return deactive, 1 active
				return task.status === (this.props.filterResult.filterTable.status === 1 ? true : false)
			}
		})
		// sort on banner
		if (sortBanner.sortBy === 'name') {
			tasks.sort((a, b) => {
				if (a.name > b.name) return sortBanner.sortValue;
				else if (a.name < b.name) return -sortBanner.sortValue;
				else return 0;
			});
		} else if (sortBanner.sortBy === 'status') {
			tasks.sort((a, b) => {
				if (a.status > b.status) return -sortBanner.sortValue;
				else if (a.status < b.status) return sortBanner.sortValue;
				else return 0;
			});
		}

		// search on banner
		if (keyword !== "") {

			tasks = tasks.filter((task) => {
				console.log(keyword)
				console.log(keyword.toLowerCase())
				return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
			});
		}

		var elTasks = tasks.map((task, index) => {
			return <TaskItem
				key={task.id}
				index={index + 1}
				task={task}
				id={task.id}
			/>
		})
		return (
			<div className="row mt-15">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<table className="table table-bordered table-hover">
						<thead>
							<tr>
								<th className="text-center">STT</th>
								<th className="text-center">Tên</th>
								<th className="text-center">Trạng Thái</th>
								<th className="text-center">Hành Động</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td>
									<input
										type="text"
										className="form-control"
										name="filterName"
										value={filterName}
										onChange={this.onChange}
									/>
								</td>
								<td>
									<select
										className="form-control"
										name="filterStatus"
										value={this.state.filterStatus}
										onChange={this.onChange}
									>
										<option value="-1">Tất Cả</option>
										<option value="0">Ẩn</option>
										<option value="1">Kích Hoạt</option>
									</select>
								</td>
								<td></td>
							</tr>
							{elTasks}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
		filterResult: state.filterResult,
		sortBanner: state.sortTaskReducer,
		keyword: state.searchTaskReducer
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		onFilterTable: (filter) => {
			dispatch(actions.filterTask(filter))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
