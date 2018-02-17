import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";

export default ({ nav, post }) => (
  <Fragment>
    <Nav items={nav} />

    <section className="u-container">
      <div>
        <NavLink to="/">Blog</NavLink> ·{" "}
        <em>
          {post.date} · {post.readtime} min read
        </em>
      </div>

      <h1>{post.title}</h1>
    </section>
  </Fragment>
);
