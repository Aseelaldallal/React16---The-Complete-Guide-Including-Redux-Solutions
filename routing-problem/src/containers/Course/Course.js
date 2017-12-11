import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import './Course.css';

class Course extends Component {

    state = {
        title: null,
        id: null
    }

    componentDidMount() {
        this.loadData(); 
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData = () => {
        if(this.props.match.params.id != this.state.id) {
            const query = new URLSearchParams(this.props.location.search);
            this.setState({
                title: query.get('title'),
                id: this.props.match.params.id
            });
        }
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <h1 className="title">{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id} </p>
            </div>
        );
    }
}

export default withRouter(Course);