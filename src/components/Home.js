import React from "react";

export default class Home extends React.Component{
    render(){
        return(
            <h2>Welcome to {this.props.bootcamp}</h2>
        );
    }
}