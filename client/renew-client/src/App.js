import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
//import TokenService from "./services/TokenService";
import bikes from "./images/bikes.jpg"

import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import Modal from "./Components/Modal";
import AllPosts from "./Components/AllPosts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
      showLogIn: false,
      isLoggedIn: false,
      modalActive:false,
      errorMessage:false
    };

    this.getUsersPosts = this.getUsersPosts.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.createPost = this.createPost.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.toggleLogIn = this.toggleLogIn.bind(this);
    this.conditionalAtRoot = this.conditionalAtRoot.bind(this);
    this.userLoggedInQuery = this.userLoggedInQuery.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
    this.toggleBoth = this.toggleBoth.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  toggleModal(){
    this.setState(prevState=>{
      prevState.modalActive = !prevState.modalActive;
      return prevState;
    })
  }

  toggleSignUp() {
    this.setState(prevState => {
      prevState.showSignUp = !prevState.showSignUp;
      return prevState;
    });
    this.setState({ showLogIn: false });
  }

  toggleLogIn() {
    this.setState(prevState => {
      prevState.showLogIn = !prevState.showLogIn;
      return prevState;
    });
    this.setState({ showSignUp: false });
  }

  toggleBoth() {
    this.setState(prevState => {
      prevState.showSignUp = !prevState.showSignUp;
      prevState.showLogIn = !prevState.showLogIn;
      return prevState;
    });
  }

  userSignUp(data) {
    axios({
      url: "/users",
      method: "POST",
      data: data
    })
      .then(resp => {
        console.log("POST WORKED", resp.data);
        console.log("before token save", JSON.stringify(window.localStorage));
        // TokenService.save(resp.data.token);
        console.log("after token save", JSON.stringify(window.localStorage));

        this.setState({
          isLoggedIn: true,
          currentUser: resp.data,
          errorMessage: false
              });

      })
      .catch(err => {

        this.setState({errorMessage: true});
        console.log("there was an error @ SignUp", err);
      });
  }

  userLoggedInQuery() {
    axios("http://localhost:3000/isLoggedIn", {
      headers: {
        //Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(resp => {
        console.log("checkLogin response:", resp.data);
        this.setState({
          isLoggedIn: true,
          currentUser: resp.data
        }, console.log(this.state));
       
      })
      .catch(err => {
        this.setState({ isLoggedIn: false, currentUser: "" });
        console.log(`Not Logged In  ${err}`)
      });
  }

  login(data) {
          
    this.setState({isLoggedIn: true});
    // axios("http://localhost:3000/users/login", {
    //   method: "POST",
    //   data
    // })
    //   .then(resp => {
    //     console.log('RESPONCE DATA',resp)
    //     console.log("before token save", JSON.stringify(window.localStorage));

    //     //TokenService.save(resp.data.token);
    //     console.log("after token save", JSON.stringify(window.localStorage));
    //     this.userLoggedInQuery();
    //   })
    //   .catch(err => console.log(`err: ${err}`));
  }

  logout() {
    console.log(JSON.stringify(window.localStorage));
    //TokenService.destroy();
    console.log(JSON.stringify(window.localStorage));
    this.userLoggedInQuery();
  }


  conditionalAtRoot(props) {
    if(this.state.isLoggedIn){
      return(<Redirect to='/profile' />);
    }

    if (this.state.showSignUp) {
      return (
        <SignUp 
        toggleBoth={this.toggleBoth} 
        userSignUp={this.userSignUp} 
        errorQuery={this.state.errorMessage}/>
      );
    }
    if (this.state.showLogIn) {
      return <LogIn login={this.login} toggleBoth={this.toggleBoth} />;
    } else {
      return <HomePage />;
    }
  }

  createPost(data){
    axios({
      url:'http://localhost:3000/posts',
      method:'POST',
      data: data,
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      }
    })
    .then(resp=>{
      console.log('POST CREATED', resp);
      this.getUsersPosts();
      this.toggleModal();

    })
    .catch(err => console.log(`err: ${err}`));
  }
  getUsersPosts(){
    axios({
      url: "http://localhost:3000/posts",
    //  headers: { Authorization: `Bearer ${TokenService.read()}`,
      method: 'get'
      })
    .then(resp=>{
        console.log('GET ALL POSTS', resp.data); 
        const HoldData = resp.data;  
        this.setState({userPosts: HoldData, postLoaded:true});
    })
    .catch(err => {
      this.setState({postLoaded:false})
      console.log(`err: ${err}`);
    });
  }
  componentDidMount(){
   // this.userLoggedInQuery();
  }

  render() {

    return (
      <div className="App">
              {this.state.modalActive ? 
                <Modal toggleModal={this.toggleModal} submitPost={this.createPost} /> : null }
        <BrowserRouter>
          <div className="holdsEntireApp"  >
            <Nav
              username={this.state.currentUser}
              logout={this.logout}
              isLoggedIn={this.state.isLoggedIn}
              toggleLogIn={this.toggleLogIn}
              toggleSignUp={this.toggleSignUp}
              username={this.state.currentUser}
            />

            <Switch>
              <Route
                exact
                path="/"
                render={props => this.conditionalAtRoot()}
              />
              <Route
                exact
                path="/profile"
                render={props => {
                  return(
                  this.state.isLoggedIn? 
                  <Profile
                      userPosts={this.state.userPosts}
                      postLoaded={this.state.postLoaded}
                      getUsersPosts ={this.getUsersPosts}
                      toggleModal={this.toggleModal}
                       /> : <Redirect to='/' />
                  )
                }}
              />
              <Route
                exact
                path="/posts"
                render={props => {
                  return(
                  this.state.isLoggedIn? <AllPosts /> : <Redirect to='/' />
                  )
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
