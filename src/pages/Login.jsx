// Login.jsx
import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/authSlice';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div style={{ marginBottom: '10px' }}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div style={{ marginBottom: '10px' }}>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn, username, firstName, lastName } = useSelector((state) => state.auth);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '80vw' }}>
            <div className="login-box" style={{ borderRadius: '8px' }}>
                <h1>Login</h1>
                {isLoggedIn ? (
                    <div>
                        <h1>Welcome, {firstName} {lastName} ({username})!</h1>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            rememberMe: false,
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string().required('Username is required'),
                            password: Yup.string().required('Password is required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false);
                                const storedUsername = localStorage.getItem("registeredUsername");
                                const storedPassword = localStorage.getItem("registeredPassword");
                                const storedFirstName = localStorage.getItem("registeredFirstName");
                                const storedLastName = localStorage.getItem("registeredLastName");

                                if (values.username === storedUsername && values.password === storedPassword) {
                                    dispatch(
                                        login({
                                            username: values.username,
                                            firstName: storedFirstName,
                                            lastName: storedLastName,
                                        })
                                    );
                                    navigate('/');
                                } else {
                                    alert("Incorrect username or password");
                                }
                            }, 400);
                        }}
                    >
                        <Form>
                            <MyTextInput label="Username" name="username" type="text" placeholder="Username" />
                            <div style={{ position: 'relative', marginBottom: '10px' }}>
                                <MyTextInput
                                    label="Password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>

                            <MyCheckbox name="rememberMe">Remember Me</MyCheckbox>
                            <button type="submit">Login</button>
                            <p>
                                Don't have an account? <Link to="/Registration">Register</Link>
                            </p>
                        </Form>
                    </Formik>
                )}
            </div>
        </div>
    );
};

// https://formik.org/docs/overview Accessed 20th March 2025 for base structure of code
// https://formik.org/docs/overview Accessed 20th March 2025 for base structure of code
// https://codesandbox.io/p/sandbox/zKrK5YLDZ Accessed 20th March 2025
// Hyperion Dev React - Form Validation Accessed 20th March 2025
// I know we only required validation & not authentification but after doing a similar
// task as part of a job application I wanted to add authentification.
// Reason behind on task was 2 weeks on different aplication tasks & adding to website
// "Passed" both and also had interviews -  failed interviews seeking career support.
// http://eriksmith.great-site.net/Login/index.html -  Accessed & Utilised learning from
// this which is now also present on my personal website.