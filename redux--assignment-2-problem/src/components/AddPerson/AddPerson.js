import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    ageChangedHandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div className="AddPerson">
                <input value={this.state.name} type="text" placeholder="name" onChange={this.nameChangedHandler}/>
                <input value={this.state.age} type="number" placeholder="age" onChange={this.ageChangedHandler}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
} 

export default AddPerson;