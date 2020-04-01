import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      myEmail:'',
      id:'',
      loggedIn:false
    }
  }
  componentDidMount(){
    localStorage.setItem('loggedIn',this.state.loggedIn)
  }
  handleChange=(e)=>{
    this.setState({myEmail:e.target.value})
  }
  handleButton=()=>{
    this.setState({users:this.props.users})
    const value=this.props.users.find(ele=>{
      if(ele.email==this.state.myEmail){
        return ele
      }
    })
    if(value){
      this.setState({id:value.id,loggedIn:true,value})
      localStorage.setItem('loggedIn',true)
    }
  }
  render(){
    return(
      <div align="center">
        <h3>Login Page</h3>
        <p>Enter the email below</p>
        <input id="myEmail" name="myEmail" value={this.state.myEmail} onChange={this.handleChange}></input>
        <button onClick={this.handleButton}>Submit</button>
        {localStorage.getItem('loggedIn')=='true'&& <Redirect to={`/users/${this.state.id}`}></Redirect>}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    users:state.users.users
  }
}
export default connect(mapStateToProps) (Login)