import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import { checkPassword, validateEmail } from '../utils/validation';
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

function SignUp (props) {
    // default state
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { err, data }] = useMutation(ADD_USER);
    const navigate = useNavigate();
    
    const handleInputChange = (e) => {
        // setting up semantic variable to use
       const { name, value } = e.target;
       setFormState({...formState, [name]: value});
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const mutationResponse = await addUser({
            variables: {
              email: formState.email,
              password: formState.password,
              username: formState.username,
            },
        });
        const token = mutationResponse.data.addUser.token;
        AuthService.login(token);
        // if (!validateEmail(userFormData.email)) {
        //     setError('Email or username is in valid');
        //     return;
        // }
        // if (!checkPassword(userFormData.password)) {
        //     setError(`Choose a more secure password ${userFormData.username}`);
        //     return;
        // }
        
        // adding the user to the database
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            AuthService.login(data.addUser.token);
            console.log(formState)
            navigate("/homepage");
        } catch (err) {
            console.error(err);
        };
        // resetting the form
            setFormState({
                username: '',
                email: '',
                password: ''
            });
            setError('');

    }
    return (
    <div className="d-flex justify-content-center container">
        <div className="row d-flex justify-content-center">
            <h1 className='text-center col-12' style={styles.h1}>Welcome Stranger, would you like to lose a game of Smack Talk Toe?</h1>
            {data ? (
                <Link to="/homepage">Let's do this!</Link>
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
            {/* {error && (
                <div>
                    <p className="error-text">{error}</p>
                </div>
            )} */}
        </div>
    </div>
    );
}

export default SignUp;