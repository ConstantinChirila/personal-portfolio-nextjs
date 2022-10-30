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
