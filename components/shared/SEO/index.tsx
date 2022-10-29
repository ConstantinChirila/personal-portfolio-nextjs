import { ReactElement } from "react";

type SEOProps = {
  pageName?: string;
  description?: string;
  keywords?: string;
};

function SEO({
  pageName = "Home",
  description = "",
  keywords = "",
}: SEOProps): ReactElement {
  const title = `${pageName} | Constantin Chirila - Front End Engineer`;
  const content =
    description ??
    "Constantin Chirila is a multi skilled front end engineer with UX and design expertise based in Birmingham UK that loves transforming ideas into digital products using Javascript and React.";
  const tags =
    keywords ??
    "web, developer, engineer, frontend, front end, user experience, ux, designer, javascript developer, application, react";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content="/images/social.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Constantin Chirila" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={content} />
      <meta name="keywords" content={tags} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#CD3453" />
      <meta name="msapplication-TileColor" content="#CD3453" />
      <meta name="theme-color" content="#CD3453" />
    </>
  );
}

export { SEO };
