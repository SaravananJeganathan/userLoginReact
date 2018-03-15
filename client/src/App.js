import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import { Button } from 'react-bootstrap';
// let { signInForm };
class App extends Component {
  state = {
    response: '',
    userName:'',
    password:''
  };
  componentDidMount() {
    this.signUpApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  signInApi = async () => {

    this.userName = document.getElementById("usr").value;
    this.password = document.getElementById("pwd").value;

    const response = await fetch('/signin?userName='+this.userName+'&password='+this.password);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  signUpApi = async () => {
    const response = await fetch('/signup', { 
      method: 'POST', body: JSON.stringify({
        userName: document.getElementById("susr").value,
        password:document.getElementById("spwd").value,
        firstName:document.getElementById("fname").value,
        lastName:document.getElementById("lname").value
       })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  enableForm = (signInForm) => {
    (signInForm) ? signInForm=true : signInForm=false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button> signIn </Button>
        <Button> signUp </Button>
        <div className="form-inline">
          <div className="form-group">
            <label className="sr-only">userName:</label>
            <input type="text" className="form-control" id="usr" placeholder="Enter UserName" required></input>

            <label className="sr-only">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required></input>
            <button className="btn btn-default" onClick={this.signInApi} type="submit" >Sign In</button>
          </div>

          <div className="form-group">
            <label className="sr-only" htmlFor="usr">userName:</label>
            <input type="text" className="form-control" id="susr" placeholder="Enter UserName"></input>

            <label className="sr-only" htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="spwd" placeholder="Enter password" name="pwd"></input>

            <label className="sr-only" htmlFor="pwd">E-mail:</label>
            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"></input>

            <label className="sr-only" htmlFor="email">First Name:</label>
            <input type="text" className="form-control" id="fname" placeholder="Enter FirstName" name="fname"></input>

            <label className="sr-only">Last Name:</label>
            <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>

            <button className="btn btn-default" onClick={this.signUp} type="submit" >Sign Un</button>
          </div>
        </div>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
