import React from 'react';
import s from "./Header.module.scss"
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {

    return (
        <div className={s.headerContainer}>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Task4
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;