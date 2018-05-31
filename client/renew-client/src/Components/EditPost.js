import React, { Component } from 'react';
import axios from 'axios';
import TokenService from "../services/TokenService";


class EditPost extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getPostToEdit = this.getPostToEdit.bind(this);
  }

handleChange(e){
  const name = e.target.name;
    this.setState({[name]:e.target.value});
  }
handleSubmit(e){
  e.preventDefault();
  axios({
     headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
    url:`/posts/${this.props.postInfo.id}`,
    method:'PATCH',
    data : this.state
  })
  .then(resp=>{
    console.log('PUT RESP',resp);
    this.props.editForm(null);
    this.props.getAllUsersPost();
  })
  .catch(err => {
        console.log("there was an error @ EDIT", err);
      });
}

deletePost(e){
  e.preventDefault();
  axios({
     headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
    url:`/posts/${this.props.postInfo.id}`,
    method:'Delete',
    data : this.props.postInfo.id
  })
  .then(resp=>{
    console.log('PUT RESP',resp);
    this.props.editForm(null);
    this.props.getAllUsersPost();
  })
  .catch(err => {
        console.log("there was an error @ EDIT", err);
      });

}
getPostToEdit(){
  axios({
    url: `/posts/${this.props.postInfo.id}`
  })
  .then( resp => {
    console.log("SUCCESS AT getPostToEdit",  resp);
    const responceData = resp.data;

    this.setState({
      retailPrice: responceData.retailPrice,
      part: responceData.part,
      partAge:responceData.partAge
    }, console.log("Done"));

  })
  .catch(err=>{
    console.log("there was an error @ getPostToEdit", err);
  })
}
componentDidMount(){
  /*
  this.setState({
    retailPrice:this.props.postInfo.retail_price,
    part:this.props.postInfo.name,
    partAge:this.props.postInfo.age
    })
    */
    this.getPostToEdit();
}
render(){
  console.log("EDIT", this.props)
 
    return(
          <div className='editPlaque'>
          <div className='x' onClick={()=> this.props.editForm(null)} >X</div>
            <form  onClick={(e)=> e.stopPropagation()} onSubmit = {this.handleSubmit}
              className='editForm'>
                <label>
                Name:
                <input type='text'  name = 'part' value={this.state.part} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                Age:
                <input type='text' name = 'partAge' value={this.state.partAge} onChange={this.handleChange} />
                </label>  
                <br />
                <label>
                Price:
                <input type='text' name = 'retailPrice' value={this.state.retailPrice} onChange={this.handleChange} />
                </label>
                <div>
                  <input type= 'submit' value='Submit Edit' />
                  <input type= 'button' onClick={this.deletePost} value= 'Delete Post' />
                </div> 
            </form>
        </div>
 
    )
  }
}


export default EditPost;