// Registration.jsx
import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice'; // Assuming you kept the authSlice in the store folder

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

export const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="login-box" style={{ borderRadius: '8px' }}>
                <h1>Register</h1>
                <Formik
                    initialValues={{
                        username: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        reEnterPassword: '',
                        rememberMe: false,
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .min(3, 'Username must be at least 3 characters')
                            .max(20, 'Username must be 20 characters or less')
                            .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
                            .required('Username is required'),
                        firstName: Yup.string()
                            .min(2, 'First Name must be at least 2 characters')
                            .max(15, 'First Name must be 15 characters or less')
                            .required('First Name is required'),
                        lastName: Yup.string()
                            .min(2, 'Last Name must be at least 2 characters')
                            .max(20, 'Last Name must be 20 characters or less')
                            .required('Last Name is required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        password: Yup.string()
                            .min(8, 'Password must be at least 8 characters')
                            .matches(
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
                            )
                            .required('Required'),
                        reEnterPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);

                            // Store registration details in localStorage (for this basic example)
                            localStorage.setItem("registeredUsername", values.username);
                            localStorage.setItem("registeredPassword", values.password);
                            localStorage.setItem("registeredFirstName", values.firstName);
                            localStorage.setItem("registeredLastName", values.lastName);

                            // Dispatch login action to update Redux state
                            dispatch(
                                login({
                                    username: values.username,
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                })
                            );

                            navigate('/');
                        }, 400);
                    }}
                >
                    <Form>
                        <MyTextInput label="Username" name="username" type="text" placeholder="Username" />
                        <MyTextInput label="First Name" name="firstName" type="text" placeholder="First Name" />
                        <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Last Name" />
                        <MyTextInput label="Email Address" name="email" type="email" placeholder="email@example.com" />
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
                        <div style={{ position: 'relative', marginBottom: '10px' }}>
                            <MyTextInput
                                label="Confirm Password"
                                name="reEnterPassword"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Re-enter Password"
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
                        <button type="submit">Register</button>
                        <p>
                            Already have an account? <Link to="/Login">Login</Link>
                        </p>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

// https://formik.org/docs/guides/validation Accessed 8th April 2025 - re username and scheme validation
// https://formik.org/docs/tutorial#schema-validation-with-yup Accessed 8th April 2025 - re username and scheme validation
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