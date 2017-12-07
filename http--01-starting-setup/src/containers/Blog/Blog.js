import React, { Component } from 'react';
import axios from '../../axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Route, Link} from 'react-router-dom';

class Blog extends Component {


   
    render () {
      
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new'
                            }}>New</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;