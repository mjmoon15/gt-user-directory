import React from 'react';

//pass in props
const EmployeeContainer = (props) => {
	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">ID Picture</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img src={props.src} alt={props.firstName}></img>
						</td>
						<td>
							{props.firstName} {props.lastName}
						</td>
						<td>{props.email}</td>
						<td>{props.phone}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeContainer;
