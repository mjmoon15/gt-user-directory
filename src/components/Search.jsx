import React from 'react';

const Search = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<form>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
                                placeholder='Search by first name:'
                                name='search'
                                value={props.search}
                                onChange={props.inputChange}	
							/>
                        <button onClick={props.filterEmployees} type="submit" className="btn btn-primary">
							Search
						</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Search;
