import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';
import "../index.css";


/*const styles = {
  h1: {
    color: "whitesmoke",
  },
  form: {
    border: "2px ",
    borderRadius: "5px",
    margin: "5px"
  },
  input: {
    background: "#c3d898",
    color: "#70161e",
  },
  btn: {
    color: "black",
    background: "#858585",
    borderColor: "black"
  },
  button: {
    color: "black",
    background: "#858585",
    borderColor: "black",
    width: "10%"
  }
}*/

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

      setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      AuthService.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

    return (
      <div className="d-flex justify-content-center container">
        <div className="row d-flex justify-content-center">
            <h2 className='text-center col-12'>Welcome, Stranger!</h2><h3>Would you like to lose a game of Smack Talk Toe?</h3>
            {AuthService.loggedIn() && (<Navigate to='/homepage' replace={true} />)}
            {data ? (
              <p>Get in, Loser. We're playing Tic Tac Toe.</p>
            ) : (
            <form onSubmit={handleFormSubmit} className="d-flex justify-content-center">
                <div className="m-1">
                  <input 
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange} 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  />
                </div>
                <div className="m-1">
                  <input 
                  placeholder="******"
                  name="password"
                  type="password" 
                  className="form-control" 
                  id="exampleInputPassword1"
                  value={formState.password}
                  onChange={handleChange}
                  />
                </div> 
                <button
                  className="btn btn-info m-1"
                  type="submit"
                >
                  Login
                </button>
            </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error}
              </div>
            )}
            <h2 className='text-center'>Or</h2>
            <div className='d-flex justify-content-center'>
              <Link to="/signup">
              <button className="btn btn-block btn-info">Sign Up</button>
              </Link>
            </div>
        </div>
      </div>
    )
}

export default Login;