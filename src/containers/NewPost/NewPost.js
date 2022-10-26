import React, { Component } from 'react';

import axios from 'axios';
import { Redirect } from "react-router-dom";
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        // When we use react-router-dom Link component, It provides some props e.g location, path, history, key, etc
        // console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            tile: this.state.title,
            body: this.state.body,
            author: this.state.author
        }
        // a post request takes two arguments, the url and the data
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(response => {
                console.log(response);
                // Remember we can also redirect pages by using the push() method from our history prop
                // The push method places the posts page on the stack of pages while redirect component replaces the page in the stack
                // We could replicate the behavior of the Redirect component using the replate() method from the history prop.
                this.props.history.push("/posts");
                // this.setState({submitted: true});
            }); 
    }

    render () {
        // let redirect = null;
        // if (this.state.submitted) {
        //     redirect = <Redirect to="/" />
        // }
        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;