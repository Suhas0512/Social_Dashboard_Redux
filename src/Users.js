import React from 'react'
import { connect } from 'react-redux'

function Users(props){
  const handleButton=()=>{
    localStorage.setItem('loggedIn',false)
    props.history.push('/')
  }
  return(
        <div>
          <button onClick={handleButton}>LogOut</button>
          
          <h3>User Posts</h3>
          {
            props.users && <div>
              Name:{props.users.name},<br/>
            Email:{props.users.email},<br/>
            Phone:{props.users.phone},<br/>
            </div>
            }
            
          {props.users&&<div><p>Company name:{props.users.company.name},<br></br>
          Company catchphrase:{props.users.company.catchPhrase}<br></br>
          Company bs:{props.users.company.bs}</p><br/></div>}
  
          {props.posts && <div><p>Post Title and body is as follows{props.posts.map(ele=>{
            return <li key={ele.id}>{ele.title}<br/>{ele.body}</li>
          })}</p></div>}
          
        </div>
        )
    }
const mapStateToProps=(state,props)=>{
  const id=props.match.params.id
  return{
    users:state.users.users.find(ele=>ele.id==id),
    posts:state.users.posts.filter(ele=>ele.userId==id)
  }
}
export default connect(mapStateToProps) (Users)