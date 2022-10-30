import { Button, StyledHeading } from "@shared-components";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.alignedContent}>
        <div className={styles.content}>
          <StyledHeading>
            <h1>
              Front end <br /> engineer with <br /> UX & Design expertise
            </h1>
          </StyledHeading>
          <p>
            As a <span>software engineer</span> I specialize into building and{" "}
            <span>designing</span> fast and easy to use web products. I take
            pride in enriching the end user experience, always seeking to
            provide the best ROI for you and your customers.
          </p>
          <div className={styles.ctaBar}>
            <Button>{`Let's`} work together</Button>

            <Link href="/">Read about my experience</Link>
          </div>
        </div>
        <div className={styles.featureImage}>
          <Image
            src="/static/header-feature.png"
            alt="Icelandic background "
            width={840}
            height={680}
          />
          <Image
            src="/static/header-dots.png"
            alt="Dots background"
            width={820}
            height={700}
            className={styles.dots}
          />
          <Image
            src="/static/person.png"
            alt="Contantin Chirila hovering"
            width={350}
            height={410}
            className={styles.person}
          />
        </div>
      </div>
    </div>
  );
}
