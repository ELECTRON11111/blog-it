import React from "react";

import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";
import axios from "../../axios";
import "./Posts.css";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postSelectedId: null,
            error: null,
            loading: true
        }
    }

    postSelectedHandler = (id) => {
        this.setState({postSelectedId: id});
    }

    componentDidMount() {
        // When we use react-router-dom Link component, It provides some props e.g location, path, history, key, match, etc
        console.log(this.props);
        // this.setState({loading: true});
        
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
                this.setState({posts: updatedPosts, loading: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({error: error.message, loading: false});
            });
        
        // DON'T -  call setState here because it causes re-renders 
    }

    render() {
        // let posts = <h1 style={{textAlign: "center"}}>Something went wrong!</h1>
        let posts =  <Spinner />;
        
        if(!this.state.loading) {
            if(!this.state.error) {
                posts = this.state.posts.map(post => {
                    // We could pass the React-router props into this child using the spread operator. Or if you're targeting something specific just pass directly.
                    return <Post 
                        // {...this.props}
                        // match={this.props.match}
                        key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                });
            } else {
                posts = <h1>{this.state.error}</h1>;
            }
        }

        
        
        return (
            <section className="Posts">
                {posts}
            </section>
        )
        
    }
}

export default Posts;