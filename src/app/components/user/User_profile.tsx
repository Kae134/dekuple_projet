import Image from "next/image"
import Link from "next/link"
import pp from "../../../public/image/pp.jpg"
import styles from "./User_profile.module.css"

function User_profile() {
    return (
        <Link href="/" className={styles.profile}>
            <Image
            className={styles.image}
            src={pp}
            alt="Image profile entreprise"
            />

            <h2>Algont-ier</h2>
        </Link>
    )
}

export {User_profile}