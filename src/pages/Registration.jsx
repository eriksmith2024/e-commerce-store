import React, { useState } from 'react'; // Imports useState hook for managing local component state.
import { Formik, Form, useField } from 'formik'; // Imports Formik components for handling forms & input fields.
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"; // Imports the Link component for navigation & the useNavigate hook
import * as Yup from 'yup'; // Imports the Yup library for form validation.
import { useDispatch } from 'react-redux'; // Imports the useDispatch hook to dispatch actions to the Redux store.
import { login } from '../store/authSlice'; // Imports the 'login' action creator from the authSlice in the Redux store.

// Custom input component using Formik's useField hook for easy form integration.
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props); // Gets field props and meta data from Formik.
    return (
        <div style={{ marginBottom: '10px' }}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input"  style={{
                    border: '1px solid grey',
                    padding: '8px',
                    borderRadius: '4px', }} {...field} {...props} /> {/* Applies Formik's field props with custom styles to the input. */}
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div> // Displays error message if field has been entered & has an error
            ) : null}
        </div>
    );
};

// Custom checkbox component using Formik's useField hook for easy form integration.
const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' }); // Gets field props & meta data for a checkbox from Formik.
    return (
        <div style={{ marginBottom: '10px' }}>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} /> {/* Applies Formik's field props to the checkbox. */}
                {children} {/* Displays the label text for the checkbox. */}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div> // Displays error message if field entered & has an error against criteria
            ) : null}
        </div>
    );
};

// Defines the Registration component for new users to create account.
export const Registration = () => {
    const [showPassword, setShowPassword] = useState(false); // local state manage password set to false / hidden
    const navigate = useNavigate(); //function to navigate different app.
    const dispatch = useDispatch();  // Function to dispatch actions to the Redux store.

    // Toggles the 'showPassword' state to show or hide the password input.
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '80px' }}>
            <div className="login-box" style={{ borderRadius: '8px', width:'80vw'  }}>
                <h1>Register</h1>
                {/* Formik component to handle the registration form. */}
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
                    // Defines the validation criteria for the registration form using Yup i.e. username has to 3 characters.
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

                    onSubmit={(values, { setSubmitting }) => {// When user clicks "Register", this runs.
                        // No more pop-up, proceeding directly to registration.
                        setSubmitting(true); // Tell Formik the form is submitting.

                        // Save registration info in the browser's local storage.
                        localStorage.setItem("registeredUsername", values.username);
                        localStorage.setItem("registeredPassword", values.password);
                        localStorage.setItem("registeredFirstName", values.firstName);
                        localStorage.setItem("registeredLastName", values.lastName);

                        // Tell Redux to log the user in.
                        dispatch(
                            login({
                                username: values.username,
                                firstName: values.firstName,
                                lastName: values.lastName,
                            })
                        );

                        navigate('/'); // Go to the home page.
                        // No need for setTimeout for immediate registration.
                    }}
                >
                    <Form>
                        <MyTextInput label="Username" name="username" type="text" placeholder="Username" />
                        <MyTextInput label="First Name" name="firstName" type="text" placeholder="First Name" />
                        <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Last Name" />
                        <MyTextInput label="Email Address" name="email" type="email" placeholder="email@example.com" />
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
                        {/* Container for the confirm password input with a toggle visibility button. */}
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
                                {showPassword ? 'Hide' : 'Show'} {/* Button to toggle password visibility. */}
                            </button>
                        </div>

                        <MyCheckbox name="rememberMe">Remember Me</MyCheckbox>
                        <button type="submit">Register</button> {/* Submit button for the registration form. */}
                        <p>
                            Already have an account? <Link to="/Login">Login</Link> {/* Link to navigate to the login page. */}
                        </p>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};