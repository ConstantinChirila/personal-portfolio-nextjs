import { Button, StyledHeading } from "@shared-components";
import FancyBox from "components/shared/fancy-box";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function AboutSection() {
  return (
    <div className={styles.wrapper}>
      <div>
        <StyledHeading>
          <h2>{`Let's`} build your next product</h2>
          <p>
            With more than 15 years of commercial experience I have helped
            start-ups and SMEs create successful web products, from planning,
            through design, development, all the way to deployment.
          </p>

          <p>
            Having worked as a designer for 8 years and now being an engineer
            for the last 6, I believe I can bring great value to your team
            having the rare ability to bridge the gap between both worlds of
            design and development. I love helping and enabling teams (and
            individuals) move faster and grow as professionals, through
            mentoring and improving overall Developer Experience.
          </p>

          <p>
            I am based in Birmingham, UK, and available remote only. If you
            would like to build something together,{" "}
            <Link href="/">{`let's`} chat</Link>!
          </p>
        </StyledHeading>
      </div>
      <div>
        <StyledHeading>
          <h2>What clients say about me</h2>
          {/* <FancyBox>test</FancyBox> */}
        </StyledHeading>
      </div>
    </div>
  );
}
