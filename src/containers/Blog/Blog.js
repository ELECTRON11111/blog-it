import React, { Component } from 'react';

import Posts from "../Posts/Posts";
import NewPost from '../NewPost/NewPost';
import { Route, Routes, Link } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: "./new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }} >NewPosts</Link></li>
                        </ul>
                    </nav>
                </header>
                
                <Routes>
                    {/* <Route path="/" exact element={<h1>OPE</h1>} /> */}
                    {/* <Route path="/" element={<h1>TY</h1>} /> */}
                    <Route path="/" exact element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                </Routes>
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