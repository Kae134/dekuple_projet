import Image from "next/image"
import Link from "next/link"
import Dekuple from "../../../public/image/Dekuple_logo.png"
import styles from "./User_profile.module.css"

function User_profile() {
    return (
        <Link href="/" className={styles.profile}>
            <Image
            className={styles.image}
            src={Dekuple}
            alt="Image profile entreprise"
            />

            <h2>Hello, Dekuple</h2>
        </Link>
    )
}

export {User_profile}