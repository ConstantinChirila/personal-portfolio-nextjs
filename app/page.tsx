import { Button } from "@shared-components";
import { StyledHeading } from "components/shared/styled-heading";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <StyledHeading>
        <h1>
          Front end <br /> engineer with <br /> UX & DEsign expertise
        </h1>
      </StyledHeading>
      <StyledHeading>
        <h2>Lets build your next product</h2>
      </StyledHeading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
        porro! Minima provident maiores ipsum vero reprehenderit consequuntur
        blanditiis facere deleniti ipsa molestias odio, veritatis tenetur
        doloribus aut veniam omnis ipsam?
      </p>
      <p>
        <Link href="/">This is a nice link</Link>
      </p>
      <br /> <Button>Lets work together</Button>
    </div>
  );
}
