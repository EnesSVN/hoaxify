import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null
    }

    onChange = event =>{
        // const value = event.target.value;
        // const feild = event.target.name; 
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    // onChangeUsername = event => {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // onChangeDisplayName = event => {
    //     this.setState({
    //         displayName: event.target.value
    //     })
    // }

    // onChangePassword = event => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    // onChangePasswordRepeat = event => {
    //     this.setState({
    //         passwordRepeat: event.target.value
    //     })
    // }

    onClickSingup = event => {
        event.preventDefault();

        const {username ,displayName,password} = this.state;

        const body = {
            // username: this.state.username,
            // displayName: this.state.displayName,
            // password: this.state.password

            // username:username,
            // displayName:displayName,
            // password:password

            username,
            displayName,
            password
        }

        axios.post('http://localhost:8081/api/1.0/users',body)
    }
   


    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange} />
                </div>
                <div>
                    <label>Display Name</label>
                    <input name="displayName" onChange={this.onChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" onChange={this.onChange} type="password" />
                </div>
                <div>
                    <label>Password repeat</label>
                    <input name="passwordRepeat" onChange={this.onChange} type="password" />
                </div>
                <div>
                    <button onClick={this.onClickSingup}>Sign Up</button>
                </div>
            </form>

        );
    }

}

export default UserSignupPage;