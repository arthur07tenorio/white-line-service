import { Wrapper } from "@/components/atoms/wrapper";
import styles from "./styles.module.scss";
import { Logo } from "@/components/atoms/logo";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <Wrapper>
        <Logo className={styles.logo} />
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Serviços</Link>
          </li>
          <li>
            <Link href="/sobre-nos">Sobre nós</Link>
          </li>
        </ul>
        <Button text={"Entrar em contato"} href={"#"}/>
      </Wrapper>    
    </div>
  );
};
