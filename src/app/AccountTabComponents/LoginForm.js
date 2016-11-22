import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import CreateAccountButton from './CreateAccountButton';

var LoginForm = React.createClass({
    getInitialState() {
        return {
            email: "",
            password: "",
            rePassword: "",
        };
    },
    handleChangeEmail: function (email) {
        this.setState({ email: email });
    },
    handleChangePassword: function (password) {
        this.setState({ password: password });
    },
    handleChangeRePassword: function (password) {
        this.setState({ rePassword: password });
    },
    signIn: function () {
        this.props.signIn(this.state.email, this.state.password);
    },
    createAccount: function () {
        if(this.state.password == this.state.rePassword){
            this.props.createAccount(this.state.email, this.state.password);
        }
        else {
            this.props.sendMessage("Passwords don't match.")
        }
    },
    render() {
        return (
            <div>
                <EmailInput handleChangeEmail={this.handleChangeEmail}/>
                <PasswordInput handleChangePassword={this.handleChangePassword} handleChangeRePassword={this.handleChangeRePassword}/>
                <br/>
                <LoginButton signIn={this.signIn}/>
                <CreateAccountButton createAccount={this.createAccount}/>
            </div>
        );
    }
});

export default LoginForm;