import React from "react";
import { Helmet } from "react-helmet";

export default ({ title, summary }) => (
  <Helmet>
    <title>{title}</title>

    <meta name="description" content={summary} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={summary} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={summary} />
  </Helmet>
);
