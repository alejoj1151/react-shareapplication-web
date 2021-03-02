import * as React from 'react';
import { User } from '../../models/user.model';
import store from '../../store';

import './UserList.css';

export default class UserList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: usuarios
        }
    }

    removeUser(user: User): void {
        store.dispatch({
            type: "REMOVE_USER",
            user
        })

        store.subscribe(() => {
            this.setState({
                users: store.getState()
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-head">
                        <h2 className="text-center">Users</h2>
                    </div>
                    <table className="table table-striped table-dark text-center">
                        <thead>
                            <tr>
                                <th>DOCUMENT</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th scope="col">VIEW USER</th>
                                <th scope="col">EDIT USER</th>
                                <th scope="col">DELETE USER</th>
                            </tr>
                        </thead>
                        
                            {
                                this.state.users.map((user: User) => {
                                    return (
                                        <tbody key={user.document}>
                                            <td>{user.document}</td>
                                            <td>{user.firstname.toUpperCase()} {user.lastname.toUpperCase()}</td>
                                            <td>{user.email.toUpperCase()}</td>
                                            <td>
                                                <button>View</button>
                                            </td>
                                            <td>
                                                <button>Edit</button>
                                            </td>
                                            <td>
                                                <button onClick={() => this.removeUser.bind(this)}>Delete</button>
                                            </td>
                                        </tbody>
                                    )
                                })
                            }
   
                    </table>
                </div>
            </div>
        );
    }
}

interface UserState {
    users: User[];
}

const usuarios = [
    {
        "document": 10205,
        "firstname": "andres",
        "lastname": "perez",
        "email": "perez@yyy.edu.com"
    },
    {
        "document": 45445,
        "firstname": "ortiz",
        "lastname": "henao",
        "email": "henao@yyy.edu.com"
    },
    {
        "document": 454545,
        "firstname": "daniela",
        "lastname": "gonzalez",
        "email": "gonzalez@yyy.edu.com"
    },
    {
        "document": 12345678,
        "firstname": "anderson",
        "lastname": "gil",
        "email": "gil@yyy.edu.com"
    },
    {
        "document": 123456738,
        "firstname": "ruiz",
        "lastname": "gonza",
        "email": "gonza@yyy.edu.com"
    },
    {
        "document": 44345,
        "firstname": "guti",
        "lastname": "paco",
        "email": "paco@yyy.edu.com"
    },
    {
        "document": 445,
        "firstname": "toro",
        "lastname": "gil",
        "email": "gil1@yyy.edu.com"
    },
    {
        "document": 9000,
        "firstname": "nulo",
        "lastname": "nulo",
        "email": "nulo@yyy.edu.com"
    },
    {
        "document": 1020473591,
        "firstname": "Alejo",
        "lastname": "Jara",
        "email": "alejo@yyy.edu.co"
    },
    {
        "document": 45455454,
        "firstname": "Alejandro",
        "lastname": "Jaramillo",
        "email": "jaramillo@@yyy.edu.com"
    },
    {
        "document": 1111111133,
        "firstname": "Andres",
        "lastname": "esteban",
        "email": "esteban@yyy.edu.com"
    },
    {
        "document": 99900099,
        "firstname": "paco",
        "lastname": "hernandez",
        "email": "hernandez@@yyy.edu.com"
    },
    {
        "document": 11055,
        "firstname": "perea",
        "lastname": "gonzalo",
        "email": "pereazq@yyy.edu.com"
    },
    {
        "document": 1050,
        "firstname": "rio",
        "lastname": "ferdinand",
        "email": "ferdinand@yyy.edu.com"
    },
    {
        "document": 12345600,
        "firstname": "franco",
        "lastname": "armani",
        "email": "armani@yyy.edu.com"
    },
    {
        "document": 1108741,
        "firstname": "diegito",
        "lastname": "maradona",
        "email": "maradona@yyy.edu.com"
    },
    {
        "document": 123445411,
        "firstname": "cristiano",
        "lastname": "ronaldo",
        "email": "ronaldo@yyy.edu.com"
    },
    {
        "document": 109442,
        "firstname": "leo",
        "lastname": "messi",
        "email": "leo@yyy.edu.com"
    },
    {
        "document": 993355,
        "firstname": "luchito",
        "lastname": "suarez",
        "email": "suarez@yyy.edu.com"
    }
]