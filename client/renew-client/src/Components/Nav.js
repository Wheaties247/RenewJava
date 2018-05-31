import React, { Component } from 'react';
import { Link} from "react-router-dom";



class Nav extends Component{
  constructor(props) {
    super(props);
    this.state ={}
    this.renderLogout = this.renderLogout.bind(this);
  }

  renderLogout(props){
    if(this.props.isLoggedIn){
      return(
        <div className='nav' >
        <h1 onClick={(props)=>this.props.logout()}>Log Out</h1>
        
        <Link to='/profile'><h1>'s Profile</h1></Link>
        <Link to='/posts'><h1>See all Posts</h1></Link>
        </div>
        )
    }
    else{
      return (
        <div className='nav' >
          <h1 onClick={(props)=>this.props.toggleSignUp()}>Sign Up</h1>
          <h1 onClick={(props)=> this.props.toggleLogIn()}>Login</h1>
        </div>
          )
    }
  }
render(){
  return(
    <div>
    {this.renderLogout()}
    </div>
    )
}

}

export default Nav;