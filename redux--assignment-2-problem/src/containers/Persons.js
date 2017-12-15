// React
import React, { Component } from 'react';
// Components
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
// Redux
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={()=> this.props.removePerson(person.id)}
                    />
                ))}
            </div>
        );
    }
}



const mapStateToProps = (state) =>  {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}),
        removePerson: (personId) => dispatch({type: actionTypes.REMOVE_PERSON, id: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons); 