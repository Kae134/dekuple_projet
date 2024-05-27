import React from 'react';
import NavBarv from '../../components/navbar/NavBar';
import Drag from '../../components/dragAndDrop/Drag'
import TableDrag from '../../components/tableDrag/TableDrag'
import styles from './client.module.css'

function Home() {
    return (
        <div className={styles.container}>
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