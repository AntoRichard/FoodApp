import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        email:null,
        password:null
    }
    changeHandler = event => this.setState({[event.target.name]:event.target.value});
    render() {
        const {email, password} = this.state;
        return (
            <div>
                <input name="email" onChange={()=>changeHandler(email)}  value={email}/>
                <input name="password" onChange={changeHandler}  value={password}/>
            </div>
        )
    }
}
