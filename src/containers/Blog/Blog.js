import React, { Component } from 'react';

import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        postSelectedId: null,
        error: false
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                // We can transform the data we get from the backend
                const updatedPosts = posts.map(post => {
                    // return a new javascript object where we distribute the properties of the posts and other properties
                    return {
                        ...post,
                        author: "Max"
                    }
                });
                // We can call setState here and won't cause unnecessary re-renders
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
        
        // DON'T -  call setState here because it causes re-renders 
    }

    postSelectedHandler = (id) => {
        this.setState({postSelectedId: id})
    }

    render () {
        let posts = <p style={{textAlign: "center"}}>Something went wrong</p>

        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            });
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id = {this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;