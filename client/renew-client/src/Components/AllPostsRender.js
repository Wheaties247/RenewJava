import React, {Component} from 'react';

class AllPostsRender extends Component{
  constructor(props){
  super(props);
      this.state = {}

  }

  render(){
    const allPosts = this.props.allPosts;
    console.log(allPosts);
    const listOfAllPosts = allPosts.map(post =>{
      return(
        <div className='allPost'  key= {post[0].id}>
          <h2>Renew a :{post[0].name || 'Not Listed'}</h2>
          <h2>Age: {post.age || 'Not Listed'}</h2>
          <h2>Retail Price: {post.retail_price || 'Not Listed'}</h2>
          <h3>Created By :{post[1]}</h3>
        </div>
        )
    })
    return (<div className='postContainer' >{listOfAllPosts}</div>)
  }

}

export default AllPostsRender;