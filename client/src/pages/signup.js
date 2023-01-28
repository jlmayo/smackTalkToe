import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { checkPassword, validateEmail } from '../utils/validation';
import AuthService from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from "@apollo/client";


const styles = {
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
  }

const SignUp = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    
    const handleInputChange = (e) => {
       const { name, value } = e.target;

       setFormState({...formState, [name]: value});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (validateEmail(formState.email) && checkPassword (formState.password)) {
            try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            AuthService.login(data.addUser.token);
             } catch (err) {
            console.error(err);
             }
        };
    };

    return (
    <div className="d-flex justify-content-center container">
        <div className="row d-flex justify-content-center">
            <h1 className='text-center col-12' style={styles.h1}>Welcome Stranger, would you like to lose a game of Smack Talk Toe?</h1>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
                <form onSubmit={handleFormSubmit} style={styles.form} className="d-flex justify-content-center col-6">
                    <div className="m-1">
                    <input 
                    placeholder="Username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleInputChange} 
                    className="form-control" 
                    />
                    </div>
                    <div className="m-1">
                    <input 
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange} 
                    className="form-control" 
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
                    onChange={handleInputChange}
                    />
                    </div>  
                    <button
                        className="btn btn-info m-1"
                        style={styles.btn}
                        type="submit"
                    >
                        SignUp
                    </button>
                </form>
                )}
             {error && (
                <div>
                    <p className="error-text">{error}</p>
                </div>
            )}
        </div>
    </div>
    );
};

export default SignUp;