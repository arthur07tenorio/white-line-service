import styles from "./styles.module.scss";

export const Button = ({ text, href }: { text: string; href: string }) => {
  return <a className={styles.whatsapp} href={href}>{text}</a>;
};
