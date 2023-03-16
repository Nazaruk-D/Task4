import React from 'react';
import {Checkbox, TableCell, TableRow} from "@mui/material";
import {NavLink} from "react-router-dom";

type RowPropsType = {
    row: any
}

const Row: React.FC<RowPropsType> = ({row}) => {
    return (
        <>
            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component="th" scope="row">
                    <Checkbox defaultChecked />
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
            {/*Row*/}
            {/*<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>*/}
            {/*    <TableCell component="th" scope="row">*/}
            {/*        {row.cardsCount === 0 ? (*/}
            {/*            <NavLink*/}
            {/*                to={`/no-cards/${row._id}`}*/}
            {/*                className={s.navLink}*/}
            {/*                onClick={() => setPackId(row._id, row.user_id)}*/}
            {/*            >*/}
            {/*                <img src={packAvatar} className={s.packAvatar} alt="pack cover" />*/}
            {/*            </NavLink>*/}
            {/*        ) : (*/}
            {/*            <NavLink*/}
            {/*                to={`/packs/my-packs/${row._id}`}*/}
            {/*                className={s.navLink}*/}
            {/*                onClick={() => setPackId(row._id, row.user_id)}*/}
            {/*            >*/}
            {/*                <img src={packAvatar} className={s.packAvatar} alt="pack cover" />*/}
            {/*            </NavLink>*/}
            {/*        )}*/}
            {/*    </TableCell>*/}
            {/*    <TableCell className={s.nameCell} component="th" scope="row">*/}
            {/*        {row.cardsCount === 0 ? (*/}
            {/*            <NavLink*/}
            {/*                to={`/no-cards/${row._id}`}*/}
            {/*                className={s.navLink}*/}
            {/*                onClick={() => setPackId(row._id, row.user_id)}*/}
            {/*            >*/}
            {/*                {row.name}*/}
            {/*            </NavLink>*/}
            {/*        ) : (*/}
            {/*            <NavLink*/}
            {/*                to={`/packs/my-packs/${row._id}`}*/}
            {/*                className={s.navLink}*/}
            {/*                onClick={() => setPackId(row._id, row.user_id)}*/}
            {/*            >*/}
            {/*                {row.name}*/}
            {/*            </NavLink>*/}
            {/*        )}*/}
            {/*    </TableCell>*/}
            {/*    <TableCell align="left">{row.cardsCount}</TableCell>*/}
            {/*    <TableCell align="left">{formatDate(row.updated)}</TableCell>*/}
            {/*    <TableCell align="left">{row.user_name}</TableCell>*/}
            {/*    <TableCell align="left">*/}
            {/*        <div className={s.actions}>*/}
            {/*            <div className={classEducation}>*/}
            {/*                {row.cardsCount > 0 ? (*/}
            {/*                    <NavLink to={`/packs/learn/${row._id}`}>*/}
            {/*                        <SchoolIcon fontSize={'small'} style={{ color: 'black' }} />*/}
            {/*                    </NavLink>*/}
            {/*                ) : (*/}
            {/*                    <SchoolIcon fontSize={'small'} style={{ color: 'black' }} />*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*            <div className={s.editIcon}>*/}
            {/*                {row.user_id === userId && (*/}
            {/*                    <BorderColorIcon fontSize={'small'} onClick={toggleEditPackModal} style={{ color: 'black' }} />*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*            <div className={s.deleteIcon}>*/}
            {/*                {row.user_id === userId && (*/}
            {/*                    <DeleteForeverIcon*/}
            {/*                        fontSize={'small'}*/}
            {/*                        onClick={toggleRemovePackModal}*/}
            {/*                        style={{ color: 'black' }}*/}
            {/*                    />*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </TableCell>*/}
            {/*    <TableCell align="left">*/}
            {/*        {row.user_id === userId && (*/}
            {/*            <HandlePrivatePack id={row._id} packName={row.name} avatar={row.deckCover} isPrivate={row.private} />*/}
            {/*        )}*/}
            {/*    </TableCell>*/}
            {/*</TableRow>*/}

            {/*{editPackModal && (*/}
            {/*    //to render only 1 time. when toggleEditPackModal is clicked, it sets editPackModal to true*/}
            {/*    <EditPackModal*/}
            {/*        title="Edit pack"*/}
            {/*        isShowing={editPackModal}*/}
            {/*        hide={toggleEditPackModal}*/}
            {/*        id={row._id}*/}
            {/*        packName={row.name}*/}
            {/*        avatar={row.deckCover}*/}
            {/*        isPrivate={row.private}*/}
            {/*    />*/}
            {/*)}*/}

            {/*{removePackModal && (*/}
            {/*    //to render only 1 time. when toggleRemovePackModal is clicked, it sets removePackModal to true*/}

            {/*    <RemovePackModal*/}
            {/*        title="Delete pack"*/}
            {/*        id={row._id}*/}
            {/*        packName={row.name}*/}
            {/*        isShowing={removePackModal}*/}
            {/*        hide={toggleRemovePackModal}*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
};

export default Row;