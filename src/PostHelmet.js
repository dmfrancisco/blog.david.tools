import React from "react";
import { Helmet } from "react-helmet";

export default ({ title, summary, lang }) => (
  <Helmet>
    <title>{title}</title>

    {lang && <html lang={lang} />}

    <meta name="description" content={summary} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={summary} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={summary} />
  </Helmet>
);
