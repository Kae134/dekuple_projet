import React from 'react';
import NavLeft from '../../components/navbar/NavBar';
import { StatsCards, Details } from '../../components/cards/StatsCards';
import { StatsCards2 } from '../../components/cards2/StatsCards';
import { User_profile } from '../../components/user/User_profile';
import styles from "./stats.module.css"

function Home() {
    const Bar = StatsCards("test", "bar")
    const Donut = StatsCards("test", "donut")
    const Polar = StatsCards("test", "polar")

    const content_example = {
        'title': "Information quotidienne",
        'main': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et vexpedita. Voluptate consequatur unde eum accusamus quod ab molestias maiores cupiditate ut?"
    }
    const Details_card_hor = Details(content_example, true)
    const Details_card_simpl = Details(content_example, false)

    return (
        <main className={styles.main}>
            <NavLeft />
            <div className={styles.head}>
                <User_profile />
            </div>
            <div className={styles.container}>
                <div className={styles.n1}>{Bar}</div>
                <div className={styles.n2}>{Polar}</div>
                <div className={styles.n3}>{Donut}</div>
                <div className={styles.n4}>{Details_card_simpl}</div>
                <div className={styles.n5}>{Polar}</div>
                <div className={styles.n6}>{Details_card_hor}</div>
                {/* <div className={styles.n7}>a</div> */}
                {/* {Details_card_simpl}
                {Bar}
                {Donut}
                {Details_card_simpl}
                {Polar} */}
            </div>
        </main>
    );
};

export default Home;