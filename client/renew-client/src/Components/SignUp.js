import React, {Component} from 'react';

class SignUp extends Component{
constructor(props) {
    super(props);
    this.state ={}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.userSignUp(this.state);
    console.log(this.state);
  }
  renderErrorMessage(){
    return(
      <h5>Please enter a valid username (Between five and twenty - five characters) and password (Between six and twenty - five characters) </h5>
      )
  }
  render(){

    return(
      <div className='signUpComponent' >
      
      <form onSubmit={this.handleSubmit}>
      <h1>Sign Up</h1>
      <label>
      Enter Username: (Between 5-25 characters)
      <input type= 'text' placeholder='Between 5-25 characters' name= 'username' onChange={this.handleChange}/>
      </label>

      <label>
      Enter Password (Between 6-25 characters)
      <input type= 'password'  placeholder = 'Between 6-25 characters' name= 'password' onChange={this.handleChange}/>
      </label>
      <input type= 'submit' value='Submit' />
      <h2 className='memberQuery' 
      onClick={()=> this.props.toggleBoth()}>Already a member? <br /> Log In here</h2>
      {this.props.errorQuery ?  this.renderErrorMessage() : null}
      </form>

      </div>
      )
  }
}

export default SignUp;