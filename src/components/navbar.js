import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

export default () => (
    <div className={styles.navbar}>
        <div>
            <p>icon</p>
        </div>
        <div className={styles.links} >  
            <Link to="/who/">Who</Link>
            <Link to="/why/">Why</Link>
            <Link to="/what/">What</Link>
            <Link to="/how/">How</Link>
            <Link to="/contact/">Contact</Link>
        </div>
    </div>
)