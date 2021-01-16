import React, { useState } from 'react';
import { authService } from 'fbase';
//import * as emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import 'styles/Styles.css';

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    /*emailjs.init("user_qZI9l13HagISOtHrtwC3r");

    const mailHandler = (event, MailTo) => {
        event.preventDefault();

        let templateParams = {
            from_name: process.env.MY_MAIL,
            to_name: `<${MailTo}>`,
            subject: 'Sign In Announcement from Cwitter',
            message_html: ''
        }

        emailjs.send(
            'naver',
            'template_c2fnq3i',
            templateParams,
            'user_qZI9l13HagISOtHrtwC3r'
        )
    }*/

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                //create
                data = await authService.createUserWithEmailAndPassword(email, password);
                //mailHandler(email);
            } else {
                //log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch(error) {
            var errormsg = error.message;
            setError(errormsg);
            console.log(errormsg);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    required
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Log In"}
                />
                {error && <span styles="color: red;">error</span>}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
        </>
    )
}

export default AuthForm