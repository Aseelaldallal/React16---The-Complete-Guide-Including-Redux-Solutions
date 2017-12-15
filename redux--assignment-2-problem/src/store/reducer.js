import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), 
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return { persons: state.persons.concat(newPerson) };
        case actionTypes.REMOVE_PERSON:
            return;
        default:
            return state;
    }
}

export default reducer;




personAddedHandler = () => {

    this.setState( ( prevState ) => {
        return { persons: prevState.persons.concat(newPerson)}
    } );
}