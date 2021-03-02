import * as React from 'react'
import './Navbar.css';

export default class Navbar extends React.Component<any, any> {
    constructor(props: NavbarProps) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            status: true
        };
    }

    private toggleNavbar(): void {
        this.setState({
            status: !this.state.status
        });
    }

    render() {
        const navbarOpen: boolean = this.state.status;
        const classOne: string = navbarOpen ? 'collapse navbar-collapse': 'collapse navbar-collapse show';
        const classTwo: string = navbarOpen ? 'navbar-toggler colapsed': 'navbar-toggler';
        return (
            <body>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Share a Sit</h1>
                        <p className="lead">System of movility in UN</p>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="mr-1">
                            <img alt="icon app" src="/images/iconapp.png" height="60" width="60" />
                        </div>
                        <a className="navbar-brand" href="/">Share a Sit App</a>
                        <button className={classTwo} type="button" onClick = {this.toggleNavbar}>
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={classOne} id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sign in</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </body>
        );
    }
}

interface NavbarProps {
    status: boolean;
}