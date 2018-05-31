import React, { Component } from 'react';
import axios from 'axios';
import TokenService from "../services/TokenService";
import UsersPosts from "./UsersPosts";


class Profile extends Component{
  constructor(props) {
    super(props);
    this.state ={ 
      userPosts: null
     }
  
  }

  
  

  

  componentDidMount(){
    this.props.getUsersPosts();
  }
  
  render(){
    console.log(this.state)
    return(
      <div className= 'profile'>
      
      
     
        
        <h1>Profile Page</h1>
       
       
     
          <h2 onClick={ (props) => this.props.toggleModal()} className='createPost' > Click Here To Post an item to renew </h2> 
          
        { this.props.postLoaded ? 
          <UsersPosts 
          toggleModal={this.props.toggleModal}
          userPosts={this.props.userPosts}
          getAllUsersPost={this.props.getUsersPosts} /> : null}

        </div>

      )
  }

}

export default Profile;