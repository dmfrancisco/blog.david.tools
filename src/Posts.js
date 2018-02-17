import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import readingTime from "reading-time";

import Nav from "./Nav";

export default ({ nav, posts }) => (
  <Fragment>
    <Nav items={nav} />

    <section className="u-container">
      <ol className="Posts">
        {Object.entries(posts).map(([slug, post]) => (
          <li key={slug}>
            <h3>
              <NavLink to={slug}>{post.title}</NavLink>
            </h3>
            <p>{post.summary}</p>
            <em>
              {post.date} · {readingTime("example").text}
            </em>
          </li>
        ))}
      </ol>
    </section>
  </Fragment>
);
