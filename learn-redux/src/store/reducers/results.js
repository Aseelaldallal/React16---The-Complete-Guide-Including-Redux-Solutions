import * as actionTypes from '../action';

const initialState = {
    results: [],
    id: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            const newId = state.id + 1;
            return { ...state, id: newId,  results: state.results.concat({id: newId, result: action.result})}; // concat returns new array (deep copy)            
        case actionTypes.REMOVE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.id);
            return { ...state,  results: updatedResults};
        default:
            return state;
    }
}

export default reducer;