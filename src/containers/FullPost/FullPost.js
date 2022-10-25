import React, { Component } from 'react';

import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        // Get the id from the params props gotton from react-router
        if (this.props.match.params.id) {
            // the id could change depending on what post is clicked, so componentDidUpdate runs multiple times

            // So to make http requests with componentDidUpdate
            //Before we do this we make sure that there is a loaded post and its ID is different from that of the props or there is no loadedPost at all
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        console.log(response.data);
                    this.setState({loadedPost: response.data});
                    });        
            }
        }
    }

    deletePostHandler = () => {
        // The delete method takes a url to the specific item to be deleted 
        // Just like we did when getting a specific post
        axios.delete("/posts/" + this.props.match.params.id)
            .then(response => console.log(response));
    }

    render () {
        let post = <p style={{"textAlign": "center"}}>Please select a Post!</p>;
        
        if (this.props.id) {
            post = <p style={{"textAlign": "center"}}>Loading....!</p>;
        }
        
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;