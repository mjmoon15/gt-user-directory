import React, { Component } from 'react';
import EmployeeContainer from './components/EmployeeContainer';
import Header from './components/Header';
import API from './utils/API';
import Search from './components/Search';
// import Search from './components/Search'

class App extends Component {
	//set state to empty array of users and filtered array of users
	state = {
		employees: [],
		filteredEmployees: [],
		search: '',
	};
	//set users array to pull from api on page load
	componentDidMount() {
		this.createEmployees();
		// this.sortEmployees()
	}
	//function to generate employees w/ api call and then update the state of the user array with results
	createEmployees = () => {
		API.getEmployees()
			.then((response) =>
				this.setState({ 
					employees: response.data.results,
					filteredEmployees: response.data.results
				})
			)
			.catch((err) => console.log(err));
	};

	sortEmployees = () => {
		function compare(a, b) {
			if (a.name.first > b.name.first) return 1;
			if (b.name.first > a.name.first) return -1;

			return 0;
		}

		const sortedEmployees = this.state.employees.sort(compare);
		this.setState({ employees: sortedEmployees });
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
			
		});
	
		this.filterEmployees();
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.filterEmployees();
	};

	filterEmployees = () => {
		const searchTerm = this.state.search.toLowerCase();
		let wholeEmployeeList= this.state.employees
		this.setState({
			filteredEmployees: wholeEmployeeList.filter((employee) =>
				employee.name.first.toLowerCase().includes(searchTerm)
			),
		});
	};

	//render EmployeeContainer and components to page on load
	render() {
		return (
			<div className="App">
				<Header />
				<Search
					search={this.state.search}
					inputChange={this.handleInputChange}
					filterEmployees={this.handleSubmit}
				/>
				<EmployeeContainer
					employees={this.state.filteredEmployees}
					sorted={this.sortEmployees}
				/>
			</div>
		);
	}
}

export default App;
