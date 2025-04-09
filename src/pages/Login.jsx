import React, { useState } from 'react'; // Imports useState hook for managing local component state.
import { Formik, Form, useField } from 'formik'; // Imports Formik components for handling forms and input fields.
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"; // Imports Link component for navigation & useNavigate hook for  navigation.
import * as Yup from 'yup'; // Imports the Yup library for form validation.
import { useDispatch, useSelector } from 'react-redux'; // Imports hooks to access the Redux store and dispatch actions.
import { login, logout } from '../store/authSlice'; // Imports action creators for login and logout from the authSlice in the Redux store.

// Custom input component using Formik's useField hook for easy form integration.
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props); // Gets field props and meta data from Formik.
    return (
        <div style={{ marginBottom: '10px' }}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} /> {/* Applies Formik's field props to the input. */}
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div> // Displays an error message if the field has been entered & has an error against the criteria.
            ) : null}
        </div>
    );
};

// Custom checkbox component using Formik's useField hook for easy form integration.
const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' }); // Gets field props and meta data for a checkbox from Formik.
    return (
        <div style={{ marginBottom: '10px' }}>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} /> {/* Applies Formik's field props to the checkbox. */}
                {children} {/* Renders the label text for the checkbox. */}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div> // Displays an error message if the field is entered & has an error.
            ) : null}
        </div>
    );
};

// Defines the Login component
export const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // Manages local state for toggling password visibility, initially set false (hidden).
    const navigate = useNavigate();    // Provides a function to navigate to different routes in the app.
    const dispatch = useDispatch(); // Provides a function to dispatch actions to the Redux store.
    const { isLoggedIn, username, firstName, lastName } = useSelector((state) => state.auth); // Accesses the login status, username, first name, & last name from the 'auth' section of app data store (Redux)

    // Toggles the 'showPassword' state to show or hide the password input.
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handles the logout functionality by dispatching the 'logout' action and navigating to the login page.
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '80vw' }}>
            <div className="login-box" style={{ borderRadius: '8px' }}>
                <h1>Login</h1>
                {/* Conditionally renders content based on the login status. */}
                {isLoggedIn ? (
                    <div>
                        <h1>Welcome, {firstName} {lastName} ({username})!</h1>
                        <button onClick={handleLogout}>Logout</button> {/* Button to trigger the logout functionality. */}
                    </div>
                ) : (
                    // Formik component to handle the login form.
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            rememberMe: false,
                        }}
                        // Defines the validation rules for the login form using Yup.
                        validationSchema={Yup.object({
                            username: Yup.string().required('Username is required'),
                            password: Yup.string().required('Password is required'),
                        })}
                        // Function that is called when the form is submitted.
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false); // Sets the submitting state to false after the asynchronous operation.
                                // Retrieves stored registration details from local storage.
                                const storedUsername = localStorage.getItem("registeredUsername");
                                const storedPassword = localStorage.getItem("registeredPassword");
                                const storedFirstName = localStorage.getItem("registeredFirstName");
                                const storedLastName = localStorage.getItem("registeredLastName");

                                // Checks if the entered username and password match the stored registration details.
                                if (values.username === storedUsername && values.password === storedPassword) {
                                    // Dispatches the 'login' action to update the authentication state in Redux.
                                    dispatch(
                                        login({
                                            username: values.username,
                                            firstName: storedFirstName,
                                            lastName: storedLastName,
                                        })
                                    );
                                    navigate('/'); // Navigates the user to the home page after successful login.
                                } else {
                                    alert("Incorrect username or password"); // Displays an alert for incorrect login credentials.
                                }
                            }, 400); // 400 is the milliseconds the login process waits, simulating a server delay.
                        }}
                    >
                        <Form>
                            <MyTextInput label="Username" name="username" type="text" placeholder="Username" />
                            {/* Container for the password input with a toggle visibility button. */}
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
                                    {showPassword ? 'Hide' : 'Show'} {/* Button to toggle password visibility. */}
                                </button>
                            </div>

                            <MyCheckbox name="rememberMe">Remember Me</MyCheckbox>
                            <button type="submit">Login</button> {/* Submit button for the login form. */}
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