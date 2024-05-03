import React from "react";
import styles from "./Test.module.css";
import Link from "next/link";
import Button from "./Test_button";

const Test = () => {
    return (
        <div>
            <Button />
            <Link href={"mon_cul"}>test</Link>
            <div className={styles.test}>Test</div>
        </div>
    )
}

export default Test 