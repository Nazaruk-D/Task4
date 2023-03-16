import React from 'react';
import {Checkbox, TableCell, TableRow} from "@mui/material";
import {useAppDispatch} from "../../../app/store/store";
import {changeUserStatusAC, DomainUsersType} from "../users-reducer";

type RowPropsType = {
    row: DomainUsersType
}

const Row: React.FC<RowPropsType> = ({row}) => {
    const dispatch = useAppDispatch()

    const onChangeHandler = (id: number, status: boolean) => {
        dispatch(changeUserStatusAC({id, status}))
    }

    return (
            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component="th" scope="row">
                    <Checkbox checked={row.isSelected} onChange={() => onChangeHandler(row.id, !row.isSelected)} />
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.registerData}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.loginData}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.status}
                </TableCell>
            </TableRow>
    );
};

export default Row;