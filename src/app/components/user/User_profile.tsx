import Image from "next/image"
import Dekuple from "../../../public/image/Dekuple_logo.png"
import styles from "./User_profile.module.css"

function User_profile() {
    return (
        <div className={styles.profile}>
            <Image 
            width={40}    
            height={40} 
            src={Dekuple} 
            alt="Image profile entreprise"
            />
            
            <h2>Hello, Dekuple</h2>
        </div>
    )
}

export {User_profile}