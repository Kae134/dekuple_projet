import React from 'react';
import NavLeft from '../../components/navbar/NavBar';
import { StatsCards } from '../../components/cards/StatsCards';

function Home() {
    const Stats = StatsCards("test", "bar")
    const test = StatsCards("test", "donut")
    return (
        <main>
            <NavLeft />
            
            <div className='charts_presentation'>
                {Stats}
                {test}
            </div>
        </main>
    );
};

export default Home;