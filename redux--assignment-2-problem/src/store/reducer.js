import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            console.log("IN HERE");
            const newPerson = {
                id: Math.random(), 
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return { persons: state.persons.concat(newPerson) };
        case actionTypes.REMOVE_PERSON:
            const updatedPersons = state.persons.filter(person => person.id !== action.id);
            return { persons: updatedPersons};
        default:
            return state;
    }
}

export default reducer;

