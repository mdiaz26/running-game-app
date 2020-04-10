import React from 'react'
import {Redirect} from 'react-router-dom'

class SignUp extends React.Component {
    
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        redirectToGame: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createUser = () => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password !== this.state.confirmPassword) {
            alert("Password and confirm password do not match. Please try again")
            this.setState({
                password: "",
                confirmPassword: ""
            })
        } else if (this.props.users.filter(user => user.username === this.state.username).length > 0) {
            alert("This user already exists. Try changing your username or logging in")
            this.setState({
                password: "",
                confirmPassword: ""
            })
        } else if (!this.state.username || !this.state.password || !this.state.confirmPassword){
            alert("no blank spaces please")
            this.setState({
                password: "",
                confirmPassword: ""
            })
        } else {
            this.createUser()
            this.setState({
                username: "",
                password: "",
                confirmPassword: "",
                redirectToGame: true
            })
        }
    }

    render(){
        const redirectToGame = this.state.redirectToGame
        if (redirectToGame) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Sign Up Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default SignUp