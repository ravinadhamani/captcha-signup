import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css"

const SignupForm = () => {
    const [style, setStyle] = useState("Dark");
    const [lightStyle, setLightStyle] = useState("Light")
    const changeStyle = () => {
        if (style === "Dark") {
            setStyle("Dark_Mode");
            setLightStyle("Light");
        }
    }
    const changeLightStyle = () => {
        if (lightStyle === "Light") {
            setStyle("Dark");
            setLightStyle("Light_Mode");
        }
    };

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [challenge, setChallenge] = useState('');


    const generateChallenge = () => {
        // Generating a random challenge string
        const newChallenge = Math.random().toString(36).substring(6);
        setChallenge(newChallenge);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validating the CAPTCHA
        if (captcha === challenge) {
            // The CAPTCHA successfully validated
            // Proceeding with the rest of the form validation

            if (username.length < 6) {
                alert('Username must be at least 6 characters long');
            } else if (password.length < 8) {
                alert('Password must be at least 8 characters long');
            } else {
                // Form is validated
                alert('Signup successful');
                navigate("/home");
            }
        } else {
            // The CAPTCHA was incorrect
            alert('Please enter valid CAPTCHA');
        }
    };

    useEffect(() => {
        generateChallenge();
    }, []);

    return (
        <>
            <div className={style}>
                <div className={lightStyle}>
                    <div className="container">
                        <div className="screen">
                            <div className="screen__content">
                                <form className="login" onSubmit={handleSubmit}>
                                    <div className='modesBtn'>
                                        <button className="darkButton" onClick={changeStyle}>
                                            Dark Mode
                                        </button>
                                        <button className="lightButton" onClick={changeLightStyle}>
                                            Light Mode
                                        </button>
                                    </div>
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
                </div>
            </div>

        </>
    );
};

export default SignupForm;
