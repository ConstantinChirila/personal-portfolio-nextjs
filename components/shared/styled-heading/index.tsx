import { ReactElement } from "react";
import styles from "./styles.module.scss";

export function StyledHeading({ children }): ReactElement {
  return <div className={styles.heading}>{children}</div>;
}
