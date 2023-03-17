import React from 'react';
import s from "./Login.module.scss"
import {Button, FormControl, FormGroup, FormLabel, Grid, Paper, TextField} from "@mui/material";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {loginTC} from "../auth-reducer";
import {routes} from "../../../app/routes/routes";
import {useNavigate} from "react-router-dom";
import Header from "../../../app/header/Header";


const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: any = {}
            if (!values.email) {
                errors.email = 'Email Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Invalid password'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    })


    if (isLoggedIn) navigate(routes.mainPage)

    return (
        <>
            <Header/>
            <Grid container className={s.loginContainer}>
                <Grid item xs={"auto"} alignContent={"center"} justifyContent={"center"}>
                    <Paper className={s.paper} elevation={8}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    <h1 className={s.title}>Sign in</h1>
                                </FormLabel>
                                <FormGroup>
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
                                    <Button className={s.button} type={'submit'} variant={'contained'} color={'primary'} disabled={!(formik.isValid && formik.dirty)}>
                                        Login
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                        <div className={s.block}>
                            <div className={s.linebreak}><hr/></div>
                            <div className={s.title}>Or</div>
                            <div className={s.linebreak}><hr/></div>
                        </div>
                        <Button className={s.button} variant={'contained'} color={'primary'} onClick={() => navigate(routes.registration)}>
                            Create Account
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;