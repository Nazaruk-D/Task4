import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, Paper, TextField} from "@mui/material";
import s from "./Registration.module.scss";
import {useFormik} from "formik";
import {registrationTC} from "../auth-reducer";
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../app/routes/routes";
import Header from "../../../app/header/Header";

const Registration = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isRegistered = useAppSelector(s => s.auth.isRegistered)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: any = {}

            if (!values.name) {
                errors.name = 'Invalid name'
            }

            if (!values.email) {
                errors.email = 'Email Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Invalid password'
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Password is required'
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(registrationTC({name: values.name, email: values.email, password: values.password}))
            formik.resetForm()
        },
    })

    if(isRegistered) navigate(routes.login)

    return (
        <>
            <Header/>
            <Grid container className={s.registrationContainer}>
                <Grid item xs={"auto"} alignContent={"center"} justifyContent={"center"}>
                    <Paper className={s.paper} elevation={8}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    <h1 className={s.title}>Create Account</h1>
                                </FormLabel>
                                <FormGroup>
                                    <TextField
                                        label="Name"
                                        margin="normal"
                                        {...formik.getFieldProps('name')}
                                    />
                                    {formik.touched.name && formik.errors.name &&
                                        <div style={{color: "red"}}>{formik.errors.name}</div>}
                                    <TextField
                                        label="Email"
                                        margin="normal"
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email &&
                                        <div style={{color: "red"}}>{formik.errors.email}</div>}
                                    <TextField
                                        type="password"
                                        label="Password"
                                        margin="normal"
                                        autoComplete={"on"}
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password &&
                                        <div style={{color: "red"}}>{formik.errors.password}</div>}
                                    <TextField
                                        type="password"
                                        label="Confirm password"
                                        margin="normal"
                                        autoComplete={"on"}
                                        {...formik.getFieldProps('confirmPassword')}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                                        <div style={{color: "red"}}>{formik.errors.confirmPassword}</div>}
                                    <Button className={s.button} type={'submit'} variant={'contained'} color={'primary'} disabled={!(formik.isValid && formik.dirty)}>
                                        Registration
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </>

    );
};

export default Registration;