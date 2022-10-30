import { social } from "@config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { StyledHeading } from "../styled-heading";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <div className={styles.addPadding}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <StyledHeading>
              <h2>Want to hire me?</h2>
            </StyledHeading>
          </div>
          <h2>{`Let's`} collaborate on your next project</h2>
          <p>
            I am open to discussing product engineering / design work or
            partnership opportunities.
          </p>
          <Button>{`Let's`} do this</Button>
          <div className={styles.divider}></div>

          <div className={styles.social}>
            <Link href={social.twitter}>
              <Image
                src="/static/icons/twitter.svg"
                alt="Constantin Chirila Twitter Profile"
                width={26}
                height={26}
              />
            </Link>
            <Link href={social.instagram}>
              <Image
                src="/static/icons/instagram.svg"
                alt="Constantin Chirila Instagram Profile"
                width={26}
                height={26}
              />
            </Link>
            <Link href={social.linkedin}>
              <Image
                src="/static/icons/linkedin.svg"
                alt="Constantin Chirila Linkedin Profile"
                width={26}
                height={26}
              />
            </Link>
            <Link href={social.github}>
              <Image
                src="/static/icons/github.svg"
                alt="Constantin Chirila Github profile"
                width={26}
                height={26}
              />
            </Link>
          </div>
          <p className={styles.copyRight}>
            Copyright &copy; {new Date().getFullYear()} Constantin Chirila. All
            Rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
