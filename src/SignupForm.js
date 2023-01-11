import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./App.css"

const SignupForm = ({ setIsloggedIn, isLoggedIn }) => {
   

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [challenge, setChallenge] = useState('');
    

    const generateChallenge = () => {
        // Generate a random challenge string
        const newChallenge = Math.random().toString(36).substring(6);
        setChallenge(newChallenge);
    };

    const handleDarkMode = () => {

    }
    const handle= () => {
        //setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
        if (isLoggedIn === true) {
            navigate("/home");
            localStorage.setItem("isLoggedIn", false);  
            
        }
        else{
            navigate("/");
            localStorage.setItem("isLoggedIn", true);
               // setIsloggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
        }
       
       /*  localStorage.setItem(username, JSON.stringify("username"));
        localStorage.setItem(password, JSON.stringify("password"));
        localStorage.getItem(username, JSON.stringify("username"));
        localStorage.getItem(password, JSON.stringify("password"));
        if(username && password)
        {
            setUsername(username);
            console.log(username);
            navigate("/home");
        } 
        else{
            navigate("/")
        }*/
    }
    


    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the CAPTCHA
        if (captcha === challenge) {
            // The CAPTCHA was successfully completed
            // Proceed with the rest of the form validation

            // Validate the rest of the form
            if (username.length < 4) {
                console.log(username);
                alert('Username must be at least 4 characters long');
            } else if (password.length < 8) {
                 console.log(password);
                alert('Password must be at least 8 characters long');
            } else {
                // Form is valid
                alert('Signup successful');
                navigate("/")
            }
        } else {
            // The CAPTCHA was incorrect
            alert('CAPTCHA incorrect');
            
        }
    };
  
    useEffect(() => {
        generateChallenge();
    }, []);

    return (

        <>
       
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <button onClick={handleDarkMode}>Dark Mode</button>
                            <div className="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="User name"
                                    required value={username}
                                    onChange={(event) => setUsername(event.target.value)} />
                            </div>
                            <div className="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password"
                                    required value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div>
                                <p className="captcha">{challenge}</p>
                                <label className="captchaText">
                                    Enter CAPTCHA:
                                    <input className="enterCaptcha"
                                        type="text" required
                                        value={captcha}
                                        onChange={(event) => setCaptcha(event.target.value)}
                                    />

                                </label>
                            </div>
                            <button type="submit" className="button login__submit" onClick={handle}>
                                <span className="button__text">Sign Up</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>

                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>

                </div>
            </div>

        </>
    );
};

export default SignupForm;
