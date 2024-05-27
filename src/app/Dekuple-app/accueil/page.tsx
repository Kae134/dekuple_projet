import React from 'react';
import { Details, ReportCard } from '../../components/cards/StatsCards';
import NavBarv from '../../components/navbar/NavBar';
import { User_profile } from '../../components/user/User_profile';
import styles from "./accueil.module.css"
import Notifications from '../../components/notifications/Notifications';
import CartEntreprise1 from '../../components/CartEntreprise/CartEntreprise1';
import CartEntreprise2 from '../../components/CartEntreprise/CartEntreprise2';
import CartEntreprise3 from '../../components/CartEntreprise/CartEntreprise3';
import CartEntreprise4 from '../../components/CartEntreprise/CartEntreprise4';

function Home() {

    const acceuil = Details({'title':"Bienvenue sur l'accueil", 'main':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit! Ad tenetur in ducimus illum. Mollitia, nisi dignissimos eaque quibusdam saepe, dolor vitae numquam asperiores laborum culpa ad autem error."}, true)
    const accueil_details = Details({'title':"Details", 'main':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit! Ad tenetur in ducimus illum. Mollitia, nisi dignissimos eaque quibusdam saepe, dolor vitae numquam asperiores laborum culpa ad autem error."}, false)
    const report = ReportCard([{date:"23/04/2024",data:"new report"}, {date:"03/05/2024",data:"new report"}, {date:"05/05/2024",data:"new report"}, {date:"05/05/2024",data:"new report"}, {date:"05/05/2024",data:"new report"}])

    return (
        <main className={styles.main}>
            <NavBarv />
            <div className={styles.head}>
                <User_profile />
            </div>
            <div className={styles.container}>
                <div className={styles.aaa}>
                    <CartEntreprise1/>
                    <CartEntreprise2/>
                    <CartEntreprise3/>
                    <CartEntreprise4/>
                </div>
                <Notifications />
            </div>
        </main>
    );
};

export default Home;