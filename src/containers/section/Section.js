import React, {Component} from 'react';
import './Section.css';

class Section extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const {className, children} = this.props;

        return(
            <div className={className} id="Section">
                {children}
            </div>
        );
    }
}

export default Section;
