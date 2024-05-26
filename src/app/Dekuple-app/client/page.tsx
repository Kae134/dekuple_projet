import React from 'react';
import NavBarv from '../../components/navbar/NavBar';
import Drag from '../../components/dragAndDrop/Drag'
import TableDrag from '../../components/tableDrag/TableDrag'
import style from './client.module.css'

function Home() {
    return (
        <div className={style.container}>
            <NavBarv />
            <Drag />
            <TableDrag />
            <TableDrag />
            <TableDrag />
            <TableDrag />
            <TableDrag />
        </div>
    );
};

export default Home;