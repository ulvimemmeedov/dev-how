import React, { Component } from 'react'
import axios from 'axios';

export default class AddPost extends Component {
    state={
        input:[],
        img:null
    }
    onchangeFile = (e) => {
        this.setState({img:e.target.files[0], loaded: 0});
    }
    changeData = (e) => {
        const element = e.target;
        const name = element.name;
        const value = element.value;
        this.setState({
            input:{
            ...this.state.input,
            [name]: value
        }});
    }
    addPost = (e) => {
        e.preventDefault();
        const data = new FormData()
        if (this.state.img) {
            data.append('file', this.state.img)
        }
        data.append('title',this.state.input.title)
        data.append('des',this.state.input.des)
        axios.post('/api/posts/create',data)
    } 
    render() {
        return (
            <div>
            <form >
            <input onChange={this.changeData} type="text" name="title" placeholder="title" />
            <input onChange={this.changeData} type="text" name="des" placeholder="des" />
            <input onChange={this.onchangeFile} type="file" name="img" placeholder="file" />
            <button onClick={this.addPost} type="submit">submit</button>
            </form>
        </div>
        )
    }
}
