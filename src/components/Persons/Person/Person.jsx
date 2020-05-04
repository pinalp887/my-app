import React, { Component } from 'react';

class Person extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;