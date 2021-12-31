import React, { Component } from 'react';
import './Input.css';

class Input extends Component  {

    constructor(props){
        super(props);
        this.state = {term:''};
    }


    Pesquisar = (event) =>{
        const {callback} = this.props;
        this.setState({term:event.target.value});
        callback(event.target.value);

        event.preventDefault();
    }

    render(){

        const {label} = this.props;

        return(
            <div>
                <form onSubmit={this.Pesquisar}>
                <label>{label}</label>
                <input type='text' className="input" value={this.state.term}></input>
                <input type="submit" className="button" value="🔍" />
                </form>
            </div>
        );
    }
}

export default Input;