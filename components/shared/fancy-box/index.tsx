import styles from "./styles.module.scss";

export default function FancyBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}
