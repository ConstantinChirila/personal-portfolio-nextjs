import Image from "next/image";
import Link from "next/link";
import { Button } from "../";
import styles from "./styles.module.scss";

export function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/static/logo.svg"
            alt="This is a logo"
            width={300}
            height={39}
            // className={styles.desktopLogo}
          />
          {/* <Image
            src="/static/logo-mark.svg"
            alt="This is a logo"
            width={49}
            height={49}
            className={styles.mobileLogo}
          /> */}
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/about">About me</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.showMobile}>
              <Link href="/blog">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.cta}>
          <Button>Say Hello</Button>
        </div>
      </div>
    </div>
  );
}
