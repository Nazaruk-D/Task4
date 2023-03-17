import React, {useEffect, useState} from 'react';
import s from "./UsersTable.module.scss"
import {Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import Row from "./Row/Row";
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useAppDispatch, useAppSelector} from "../../app/store/store";
import {blockingUsersTC, changeAllUserStatusAC} from "./users-reducer";
import {logoutTC} from "../auth/auth-reducer";
import {routes} from "../../app/routes/routes";
import {useNavigate} from "react-router-dom";
import Header from "../../app/header/Header";


const UsersTable = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)
    const [isAllUsers, setIsAllUsers] = useState(false)
    const users = useAppSelector(s => s.users)

    const onChangeHandler = () => {
        setIsAllUsers(!isAllUsers)
        dispatch(changeAllUserStatusAC(!isAllUsers))
    }

    const blockingUsers = () => {
        const xxx = users.filter(u => u.isSelected)
        dispatch(blockingUsersTC(xxx))

    }

    function onClickHandler() {
        dispatch(logoutTC())
    }


    useEffect(() => {
        if (!isLoggedIn) navigate(routes.login)
    },[isLoggedIn])

    return (
        <>
            <Header/>
            <div className={s.tableContainer}>
                <div className={s.toolbarContainer}>
                    <div className={s.toolbar}>
                        <div className={s.icon}><Button variant="outlined" color={"error"}
                                                        onClick={blockingUsers}>Blocked</Button></div>
                        <div className={s.icon}><RestoreIcon fontSize={"medium"}/></div>
                        <div className={s.icon}><DeleteForeverIcon fontSize={"medium"}/></div>
                    </div>
                </div>
                <TableContainer component={Paper} className={s.tableBlock}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                        </TableHead>
                        <TableHead>
                            <TableRow style={{backgroundColor: '#EFEFEF'}}>
                                <TableCell style={{fontWeight: '600'}} width={"10%"}>
                                    <Checkbox checked={isAllUsers} onChange={onChangeHandler}/>
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"10%"}>
                                    Id
                                </TableCell>
                                <TableCell style={{fontWeight: '600'}} width={"15%"}>
                                    Name
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"15%"}>
                                    Email
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"15%"}>
                                    Date of registration
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"15%"}>
                                    Last login date
                                </TableCell>
                                <TableCell align="left" style={{fontWeight: '600'}} width={"10%"}>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {users.length ? (
                            <TableBody>
                                {users.map((row) => (
                                    <Row key={row.id} row={row}/>
                                ))}
                            </TableBody>
                        ) : (
                            <TableBody>
                                <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell component="th" scope="row">
                                        No results matching your request
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>
            </div>
        </>

    );
};

export default UsersTable;

