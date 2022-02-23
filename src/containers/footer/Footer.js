import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const {description} = this.props;

        return(
            <footer className="footer">
                 <span>{description}</span>
            </footer>
        );
    }
}

export default Footer;