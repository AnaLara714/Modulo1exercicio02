import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {title} = this.props;
        return(
            <header className="header">
                <span>{title}</span>
            </header>
        );
    }
}

export default Header;