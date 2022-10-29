import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  isReverse?: boolean;
};

export function Button({
  children,
  isReverse = false,
  ...props
}: PropsWithChildren<
  ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
>) {
  function getClassName() {
    if (isReverse) {
      return `${styles.reverse}`;
    }
    return "";
  }

  return (
    <button className={`${styles.button} ${getClassName()}`} {...props}>
      {children}
    </button>
  );
}
