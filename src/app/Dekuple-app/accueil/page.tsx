import React from 'react';
import NavLeft from '../../components/navbar/NavBar';
import { Details, ReportCard } from '../../components/cards/StatsCards';

function Home() {
    const acceuil = Details({'title':"Bienvenue sur l'accueil", 'main':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit! Ad tenetur in ducimus illum. Mollitia, nisi dignissimos eaque quibusdam saepe, dolor vitae numquam asperiores laborum culpa ad autem error."}, true)
    const accueil_details = Details({'title':"Details", 'main':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit! Ad tenetur in ducimus illum. Mollitia, nisi dignissimos eaque quibusdam saepe, dolor vitae numquam asperiores laborum culpa ad autem error."}, false)
    const report = ReportCard([{date:"23/04/2024",data:"new report"}, {date:"03/05/2024",data:"new report"}, {date:"05/05/2024",data:"new report"}, {date:"05/05/2024",data:"new report"}, {date:"05/05/2024",data:"new report"}])
    return (
        <main>
            <NavLeft />

            <div className='main_frame'> 
                <div className='card_temp'>
                    {acceuil}
                    {accueil_details}
                    {report}
                </div>
            </div>
        </main>
    );
};

export default Home;