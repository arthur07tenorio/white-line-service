import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"


export const Logo = ({className}: {className?: string}) => {
    return <Link className={`${styles.logo} ${className}`} href={"/"}>
        <Image width="95" height="65" src="/img/logo.png" alt="Logo White Line Service" />
    </Link>     
}