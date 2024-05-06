import React from 'react';
import NavLeft from '../../components/navbar/NavBar';
import { Details } from '../../components/cards/StatsCards';

function Home() {
    const acceuil = Details({'title':"Bienvenu sur l'accueil", 'main':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit! Ad tenetur in ducimus illum. Mollitia, nisi dignissimos eaque quibusdam saepe, dolor vitae numquam asperiores laborum culpa ad autem error."}, true)
    const accueil_details = Details({'title':"Details", 'main':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit! Ad tenetur in ducimus illum. Mollitia, nisi dignissimos eaque quibusdam saepe, dolor vitae numquam asperiores laborum culpa ad autem error."}, false)

    return (
        <main>
            <NavLeft />
            <div className='main_frame'>
                <div className='card_temp'>
                    {acceuil}
                    {accueil_details}
                    {accueil_details}
                </div>
            </div>
        </main>
    );
};

export default Home;