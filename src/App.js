import React, {Component} from 'react';
import PrimaryLayout from './layouts/primaryLayout.js';
import {LoaderStyled} from './App.style';


export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render(){
        const { loading } = this.state;
        let mainComponent=null;
        if(typeof loading===undefined) { 
            mainComponent=<LoaderStyled />; 
        }
        else{
            mainComponent= <PrimaryLayout  /> ;
        }
        return (<div>{mainComponent}</div>)
    }
}



      