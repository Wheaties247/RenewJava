import React, { Component } from 'react';
import EditPost from './EditPost';
class UsersPosts extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.editForm = this.editForm.bind(this);
  }

editForm(id) {
    this.setState({ editPostId: id });
  }

render(){

 const posts = this.props.userPosts;
 console.log('POSTS', posts)
 const postList = posts.map( post=>{
  if(this.state.editPostId!== post.id){
        return(
          <div  className = 'userPost'
           key={post.id} onClick={()=>this.editForm(post.id)}>
          <h2>Part Name: {post.part||'Not Listed'}</h2>
          <h2>Time since purchase : { post.partAge||'Not Listed'}</h2>
          <h2>Part retail Price : {post.retailPrice||'Not Listed'}</h2>
          </div>
          )
  }else{
      return(
        <EditPost key={post.id}
        editForm={this.editForm}
        postInfo={post}
        getAllUsersPost={this.props.getAllUsersPost}/>
        )
  }
      });
  return(
      <div className='allUsersPosts'>

        

        <div className= 'posts'>
          
          {postList} 
           
        </div>

      </div>  
             )

  }


}


export default UsersPosts;