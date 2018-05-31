import React, { Component } from "react";
import axios from "axios";
import TokenService from "../services/TokenService";
import RenderPosts from "./AllPostsRender";

class AllPosts extends Component{
  constructor(props){
      super(props);
      this.state = {}
      this.getAllPosts = this.getAllPosts.bind(this);
  }

  getAllPosts(){
    axios({
      url:'http://localhost:3000/allPosts',
      headers: {
      Authorization: `Bearer ${TokenService.read()}`
          }
    })
    .then(resp => {
      console.log(resp);
      this.setState({allPosts:resp.data});

    })
    .catch(err => console.log(`err: ${err}`));
  }
  componentDidMount(){
    this.getAllPosts();
  }

  render(){

    return (
      <div className='allPosts' >
     <h1> AllPosts</h1>
     {this.state.allPosts? <RenderPosts allPosts= {this.state.allPosts} />: null}
      </div>
      )
  }

}

export default AllPosts;