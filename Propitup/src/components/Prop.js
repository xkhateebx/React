import React, { Component } from 'react'

export class Prop extends Component {
    constructor(props){
        super(props);
        this.state={
            age:this.props.age,

        }
    }
    changeAge = () => {
        this.setState({age:this.state.age+=1});

    }
    render() {
        return (
            <div>

                <h1> {this.props.lastName} , {this.props.firstName} </h1>
                <p>age : {this.state.age} </p>
                <p>Hair Color : {this.props.hairColor} </p>
                <button onClick = {this.changeAge} > Birthday Button for {this.props.firstName} {this.props.lastName} </button>
                
            </div>
        )
    }
}

export default Prop
