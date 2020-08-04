import React from 'react';

//pass in props
const EmployeeContainer = (props) => {
	const { employees } = props
	return (
		<div className="container">
			<table className="table table-striped">
				<thead className="thead-light">
					<tr>
						<th onClick={props.sorted}>Name</th>
						<th>Phone</th>
						<th>Email</th>

					</tr>
				</thead>
				<tbody>
                    {employees && employees.map((employee, index) => (
                    <tr key={index}>
                        <th>{employee.name.first} {employee.name.last}</th>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                    </tr>
                    ))}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeContainer;
