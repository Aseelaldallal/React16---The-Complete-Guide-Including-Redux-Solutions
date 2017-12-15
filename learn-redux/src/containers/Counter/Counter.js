import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/action';

class Counter extends Component {

    render () {
        const results = this.props.results.map(result => {
            return (<li  style={{textAlign: 'left'}} key={result.id} onClick={() => this.props.removeResult(result.id)}> {result.result} </li>);
        })
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter }  />
                <hr/>
                <button onClick={() => this.props.storeResult(this.props.ctr)}> Store Result </button>
                <ul>
                    {results}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) =>  {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5 }),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        storeResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        removeResult: (resultId) => dispatch({type: actionTypes.REMOVE_RESULT, id: resultId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);