import React from "react";

import Post from "../../components/Post/Post";
import axios from "../../axios";
import "./Posts.css";

class Posts extends React.Component {
    state = {
        posts: [],
        postSelectedId: null
    }

    postSelectedHandler = (id) => {
        this.setState({postSelectedId: id})
    }

    componentDidMount() {
        // When we use react-router-dom Link component, It provides some props e.g location, path, history, key, match, etc
        console.log(this.props);

        axios.get("/posts")
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
                console.log(error);
                // this.setState({error: true});
            });
        
        // DON'T -  call setState here because it causes re-renders 
    }

    render() {
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
            <section className="Posts">
                {posts}
            </section>
        )
        
    }
}

export default Posts;