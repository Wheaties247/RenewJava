import React, {Component} from 'react';

class LogIn extends Component{
constructor(props) {
    super(props);
    this.state ={}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.login(this.state);
    console.log(this.state);
  }

  render(){

    return(
      <div className='logInComponent' >
      
      <form onSubmit={this.handleSubmit}>
      <h1>Log In</h1>
      <label>
      Enter Username: (Between 5-25 characters)
      <input type= 'text' placeHolder='Between 5-25 characters' name= 'username' onChange={this.handleChange}/>
      </label>

      <label>
      Enter Password: (Between 6-25 characters)
      <input type= 'password' placeHolder='Between 5-25 characters' name= 'password' onChange={this.handleChange}/>
      </label>
      <input type= 'submit' value='Submit' />
      <h2 className='memberQuery' 
      onClick={()=> this.props.toggleBoth()}>Not a member? <br /> Sign Up here</h2>
      </form>
      </div>
      )
  }
}

export default LogIn;