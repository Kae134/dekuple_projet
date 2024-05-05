import styles from "./StyleNav.module.css"
import DekupleLogo from "@/src/public/image/Dekuple_logo.png"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faChartSimple, faHeadset, faBell, faGear, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

function NavLeft() {
    return (
        <div className={styles.Nav_left}>
            <div className={styles.Nav_left_top}>
                <Link href="">
                <Image
                    src={DekupleLogo}
                    width={40}
                    height={40}
                    alt="Logo Dekuple"
                />
                </Link>


                <div className={styles.links}>
                    <Link className={styles.link} href="accueil">
                        <FontAwesomeIcon className={styles.icones} icon={faHouse} />
                    </Link>
                    <Link className={styles.link} href="stats">
                        <FontAwesomeIcon className={styles.icones} icon={faChartSimple} />
                    </Link>
                    <Link className={styles.link} href="">
                        <FontAwesomeIcon className={styles.icones} icon={faHeadset} />
                    </Link>
                    <Link className={styles.link} href="">
                        <FontAwesomeIcon className={styles.icones} icon={faBell} />
                    </Link>
                    <Link className={styles.link} href="">
                        <FontAwesomeIcon className={styles.icones} icon={faGear} />
                    </Link>
                </div>
            </div>
            <Link className={styles.link} href="">
                <FontAwesomeIcon  className={styles.icones} icon={faLeftLong} />
            </Link>
        </div>
    )
}

export default NavLeft