import React from 'react';
import {useAppSelector} from "../../../app/store/store";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../app/routes/routes";
import Header from "../../../app/header/Header";
import ErrorWindow from "../../../common/ErrorWindow/ErrorWindow";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const Registration = () => {
    const navigate = useNavigate()
    const isRegistered = useAppSelector(s => s.auth.isRegistered)

    if (isRegistered) navigate(routes.login)

    return (
        <>
            <Header/>
            <RegistrationForm/>
            <ErrorWindow/>
        </>

    );
};

export default Registration;