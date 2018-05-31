import React, {Component} from "react";

class Modal extends Component{
  constructor(props){
    super(props);
    this.state = {}
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const name = e.target.name;
    this.setState({[name]:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.submitPost(this.state);
  }

  render(){
        return(
          <div className = 'modal' onClick= {()=>this.props.toggleModal()}>
            
            <form className= 'postForm' 
            onSubmit={this.handleSubmit} onClick= {e=> e.stopPropagation()}>
            <h1>Post Part to Renew</h1>
            <label>
            Part Name :
            <input type='text' name= 'part' onChange={this.handleChange}/>
            </label>
            <br />
            <label>
            Part Age :
            <input type='text' name= 'partAge' onChange={this.handleChange}/>
            </label>
            <br />
            <label>
            Retail Price :
            <input type='text' name= 'retailPrice' onChange={this.handleChange}/>
            </label>
            <br />
            <input type='submit' value='submit' />
            </form>
          </div>
          )   
  }


}


export default Modal;