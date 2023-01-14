import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css"

const SignupForm = () => {
   

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

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the CAPTCHA
        if (captcha === challenge) {
            // The CAPTCHA successfully validated
            // Proceed with the rest of the form validation

            if (username.length < 4) {
                console.log(username);
                alert('Username must be at least 4 characters long');
            } else if (password.length < 8) {
                console.log(password);
                alert('Password must be at least 8 characters long');
            } else {
                console.log("ravina 50")
                // Form is valid
                alert('Signup successful');
                console.log("ravina 52")
                navigate("/login")
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

                            <div className="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="Enter Username"
                                    required value={username}
                                    onChange={(event) => setUsername(event.target.value)} />
                            </div>
                            <div className="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Enter Password"
                                    required value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div>
                                <p className="captcha">{challenge}</p>
                                <label className="captchaText">
                                    Enter CAPTCHA:
                                    <input className="enterCaptcha" placeholder="Enter Captcha"
                                        type="text" required
                                        value={captcha}
                                        onChange={(event) => setCaptcha(event.target.value)}
                                    />
                                </label>
                            </div>
                            <button type="submit" className="button login__submit">
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
