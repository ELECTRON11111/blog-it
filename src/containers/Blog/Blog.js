import React, { Component } from 'react';

import Posts from "../Posts/Posts";
import NewPost from '../NewPost/NewPost';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import './Blog.css';
class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            {/* NavLink is similar to the Link component but it adds an active class to whatever Link/path we're on. */}
                            {/* we add exact to make sure the active class is added to "/" exactly and not "/new-post" */}
                            {/* You can also change the className for the active link if you want to  Or better still write the styling as inline */}
                            <li><NavLink 
                                to='/posts/' 
                                exact
                                activeClassName='my-active'
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }} >NewPosts</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts/" component={Posts} />
                    <Redirect from='/' to="/posts/" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;