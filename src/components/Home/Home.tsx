import * as React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';

import UserList from '../UserList/UserList';

export default class Home extends React.Component<{}, {}> {
    render() {
        return(
            <div>
                <body>
                    <Navbar></Navbar>
                    <UserList></UserList>
                </body>
            </div>
        );
    }
}