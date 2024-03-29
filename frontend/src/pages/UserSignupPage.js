import React from "react";
import { signup } from "../api/apiCalls";
import Input from "../components/Input";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    }

    onChange = event => {
        // const value = event.target.value;
        // const feild = event.target.name; 
        const { name, value } = event.target;
        const errors = { ...this.state.errors };
        errors[name] = undefined;
        if(name == "password" || name == "passwordRepeat"){
            if(name == "password" && value !== this.state.passwordRepeat){
                errors.passwordRepeat = "Passwords mismatch";

            }else if(name == "passwordRepeat" && value !== this.state.password){
                errors.password = "Passwords mismatch";
            }else{
                errors.passwordRepeat = undefined;
                errors.password = undefined;
            }
        }
        this.setState({ [name]: value,
        errors
        });
       
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

    onClickSingup = async event => {
        event.preventDefault();

        const { username, displayName, password } = this.state;

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
        };
        this.setState({ pendingApiCall: true });

        try {
            const response = await signup(body);
        } catch (error) {
            if(error.response.data.validationErrors){
                this.setState({ errors: error.response.data.validationErrors });

            }

        }
        this.setState({ pendingApiCall: false })

        // signup(body)
        //     .then(response => {
        //         this.setState({ pendingApiCall: false })
        //     }).catch(error => {
        //         this.setState({ pendingApiCall: false })
        //     })
    }



    render() {
        const { pendingApiCall,errors } = this.state;
        const {username, displayName,password,passwordRepeat} = errors;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">Sign Up</h1>
                    <Input name = "username" label = "Username" error = {username} onChange = {this.onChange} />
                    <Input name = "displayName" label = "Display Name" error = {displayName} onChange = {this.onChange} />
                    <Input name = "password" label = "Password" error = {password} onChange = {this.onChange} type="password"/>
                    <Input name = "passwordRepeat" label = "Password Repeat" error = {passwordRepeat} onChange = {this.onChange} type="password"/>

                    <div className="text-center">

                        <button className="btn btn-primary  mt-2"
                            onClick={this.onClickSingup}
                            disabled={pendingApiCall || passwordRepeat !== undefined || password !== undefined}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm" ></span>}Sign Up</button>
                    </div>
                </form>
            </div>


        );
    }

}

export default UserSignupPage;