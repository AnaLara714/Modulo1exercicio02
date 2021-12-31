import './Welcome.css';
import React, { Component } from 'react';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/Footer';
import Input from '../components/input/Input';
import List from '../components/list/List';
import Section from '../containers/section/Section';
import api from '../_config/api';



class Welcome extends Component {

  constructor(props){
    super(props);
    this.state = {sectionData:props.sectionData}
    this.filterList = this.filterList.bind(this);
    this.fetchData = this.fetchData.bind(this);
}

filterList(value){
    this.fetchData(value);
}

async fetchData(value){
    const response = await api.get('/v1/search?query='+value)
    this.setState({sectionData:response?.data})
}

async componentDidMount(){
    this.fetchData('');
}

  render(){

    const {title, footer_desc} = this.props;

    const {sectionData} = this.state;

    const sectionClassSearch = 'SectionSearch';

    const sectionClassData = 'SectionData';
    
    const inputLabel = '';

    return(
      <div className='welcome'>
        <Header title={title}></Header>
        <br/><br/>
        <Section className={sectionClassSearch} ><Input label={inputLabel} callback={this.filterList} /></Section>
        <Section className={sectionClassData}><List data={sectionData} /></Section>
        <Footer description={footer_desc}></Footer>
      </div>
    );

  }

}

export default Welcome;
