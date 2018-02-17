import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import readingTime from "reading-time";
import moment from "moment";

import Nav from "./Nav";

export default ({ nav, post }) => (
  <Fragment>
    <Helmet>
      <title>{post.title}</title>
    </Helmet>

    <Nav items={nav} />

    <section className="u-container">
      <div>
        <NavLink to="/">Blog</NavLink> ·{" "}
        <em>
          {moment(post.date, "YYYY-MM-DD").format("MMM D, YYYY")} · {readingTime("example").text}
        </em>
      </div>

      <h1>{post.title}</h1>
    </section>
  </Fragment>
);
