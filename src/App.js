import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import EmployeeContainer from './components/EmployeeContainer';
import API from './utils/API';

class App extends Component {
	//set state to empty array of users
	state = {
		users: [],
	};
	//set users array to pull from api on page load
	componentDidMount() {
		this.createEmployees();
	}
	//function to generate employees w/ api call and then update the state of the user array with results
	createEmployees = () => {
		API.getEmployees()
			.then((response) => this.setState({ users: response.data.results }))
			.catch((err) => console.log(err));
	};
	//render EmployeeContainer and components to page on load
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        {this.state.users.map((employee) => (
          <EmployeeContainer
            firstName={employee.name.first}
            lastName={employee.name.last}
            email={employee.email}
            phone={employee.phone}
            src={employee.picture.large}
          />
        ))}
      </div>
    );
  }
}

export default App;
