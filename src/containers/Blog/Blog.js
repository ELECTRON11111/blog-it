import React, { Component } from 'react';

import Posts from "../Posts/Posts";
import NewPost from '../NewPost/NewPost';
import { Route, Switch, Link } from "react-router-dom";
import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            {/* If you wanted to append the path to the current url, to make it relative instead of absolute, get the current url from the match prop */}
                            <li><Link to={{
                                // pathname: this.props.match + "/new-post",
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }} >NewPosts</Link></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                </Switch>
                {/* <section>
                    <FullPost id = {this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;