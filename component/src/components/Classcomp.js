import React, { Component } from 'react'

export class Classcomp extends Component {
    constructor(props){
        super()
        this.state={
            name:window.localStorage.getItem("classname") || ''
        }
console.log(props)
console.log(this.props)
        
    }

     handleChange=(event)=>{
         this.setState({name:event.target.value})
     }

     componentDidUpdate(){
         localStorage.setItem('classname',this.state.name);
     }
    render() {
        return (
            <>
       <h1>this is class Component</h1>
            <form>
            <br/> <br/>
                <label>Name : </label>

                <input type="text" id="name" placeholder="enter your name" onChange={this.handleChange}/> <br/> <br/> <br/>
                <label>Your value : </label>
                <input type="text" value={this.state.name}/>
            </form>
            {/* <p>{props.greet}</p> */}

           
        
        </>
        )
    }
}

export default Classcomp
