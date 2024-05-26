import React from 'react';
import NavLeft from '../../components/navbar/NavBar';
import { StatsCards, Details } from '../../components/cards/StatsCards';
import { User_profile } from '../../components/user/User_profile';

function Home() {
    const Bar = StatsCards("humidity_distribution", "bar")
    const Donut = StatsCards("humidity_distribution", "donut")
    const Polar = StatsCards("humidity_distribution", "polar")

    const content_example = {
        'title': "Information quotidienne",
        'main': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nam mollitia voluptates possimus et voluptatem quas cumque, neque expedita. Voluptate consequatur unde eum accusamus quod ab molestias maiores cupiditate ut?"
    }
    const Details_card_hor = Details(content_example, true)
    const Details_card_simpl = Details(content_example, false)

    return (
        <main>
            <NavLeft />
            <div className='main_frame'>
                <div className='top_main_frame'>
                    <User_profile />
                    <h1>Global View</h1>
                </div>
                <div className='charts_presentation'>
                    <div className='resume'> 
                        {Details_card_hor}
                        {Details_card_simpl}
                        {Bar}
                        {Donut}
                        {Details_card_simpl}
                    </div>
                    <div className='details'>
                        {Polar}
                        {Bar}
                        {Donut}    
                        {Donut}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;