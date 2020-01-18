import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Dahsboard Link...*/ 
class Dashboard extends Component {
    render() {
        return (
            <Link to="/dashboard">Dashboard</Link>
        )
    }
};

/* Users Link...*/
class Users extends Component {
    render() {
        return (
            <Link to="/dashboard/users">Uesrs</Link>
        )
    }
};
export { Dashboard, Users };