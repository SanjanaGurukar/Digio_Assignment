import React from 'react';
import logo from './logo.svg';
import './App.css';
import NextPage from './NextPage'
import {Redirect} from 'react-router-dom';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        email: '',
      }
    }
  }
  
  
validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    if(name === 'email') {
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({formValid: this.validateForm(this.state.errors)});
    this.setState({errorCount: this.countErrors(this.state.errors)});
  }

  render(){
    const {errors, formValid} = this.state;
    return(
      <div>
        {!formValid ?
      <div className = "App">
        <div className = "App-header">
        Sign document using <br></br>
        Digio
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div className="body"></div>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className = "email">
                <label className="para">Proceed with your email</label>
                <input 
                  type='email' 
                  name='email'
                  className="text"
                  onChange={this.handleChange} noValidate
                />
                  {errors.email.length > 0 && 
                        <span className='error'>{errors.email}</span>}
              </div>
                <p className="tnc">By continuing, I confirm to the <b>Terms and Service</b> and <b>Privacy Policy</b> of 
                <a href="digio.in"> Digio.in</a></p>
              <button className="submit"> Continue </button>
                
            </form>
      </div>
      :
     <NextPage/>}
     </div> 
    )

  }
}