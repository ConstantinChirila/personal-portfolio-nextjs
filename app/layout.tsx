import { Menu, Footer, SEO } from "components/shared";
import styles from "./styles.module.scss";
import "../styles/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <SEO />
      </head>
      <body>
        <Menu />
        <div className={styles.wrapper}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
