import React from 'react';
import s from "./UsersTable.module.scss"
import {Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import Row from "./Row/Row";
import BlockIcon from '@mui/icons-material/Block';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useAppSelector} from "../../app/store/store";


const UsersTable = () => {
    const users = useAppSelector(s => s.users)

    // const cardPacks = [
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    //     {id: 1, name: "Alex", email: "test@mail.ru", registerData: "22.02.2022", loginData: "22.02.2022", status: "blocked" },
    // ]

    return (
        <div className={s.tableContainer}>
            <div className={s.toolbarContainer}>
                <div className={s.toolbar}>
                    <div className={s.icon}><BlockIcon fontSize={"medium"}/></div>
                    <div className={s.icon}><RestoreIcon fontSize={"medium"}/></div>
                    <div className={s.icon}><DeleteForeverIcon fontSize={"medium"}/></div>
                </div>
            </div>
            <TableContainer component={Paper} className={s.tableBlock}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    </TableHead>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#EFEFEF' }}>
                            <TableCell style={{ fontWeight: '600' }} width={"10%"}>
                                <Checkbox defaultChecked />
                            </TableCell>
                            <TableCell style={{ fontWeight: '600' }} width={"10%"}>
                                Id
                            </TableCell>
                            <TableCell style={{ fontWeight: '600' }} width={"15%"}>
                                Name
                            </TableCell>
                            <TableCell align="left" style={{ fontWeight: '600' }} width={"15%"}>
                                Email
                            </TableCell>
                            <TableCell align="left" style={{ fontWeight: '600' }} width={"15%"}>
                                Date of registration
                            </TableCell>
                            <TableCell align="left" style={{ fontWeight: '600' }} width={"15%"}>
                                Last login date
                            </TableCell>
                            <TableCell align="left" style={{ fontWeight: '600' }} width={"10%"}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {users.length ? (
                        <TableBody>
                            {users.map((row) => (
                                <Row key={row.email} row={row} />
                            ))}
                        </TableBody>
                    ) : (
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    No results matching your request
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </div>
    );
};

export default UsersTable;

