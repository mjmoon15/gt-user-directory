import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                    <h1 className='display-3'>User Directory</h1>
                    <p className='lead'>
                        Click Name to sort the list alphabetically, or enter a name in the search box to narrow results
                    </p>
                </div>
            </div>
        )
    }
}

export default Header