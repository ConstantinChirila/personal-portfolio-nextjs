import { Footer, SEO } from "components/shared";

import "../styles/global.scss";
import { Menu } from "components/shared";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <SEO />
      </head>
      <body>
        <Menu />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
