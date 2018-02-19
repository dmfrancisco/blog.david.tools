import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import fecha from "fecha";

import Nav from "./Nav";

export default ({ nav, posts }) => (
  <Fragment>
    <Nav items={nav} />

    <section className="u-container">
      <h1 className="Posts-title">Blog</h1>

      <ol className="Posts">
        {Object.entries(posts).map(([slug, post]) => (
          <li className="Posts-item" key={slug}>
            <h2 className="Posts-subtitle">
              <NavLink className="Posts-link" to={slug}>
                {post.title}
              </NavLink>
            </h2>
            <p className="Posts-description">{post.summary}</p>
            <em className="Posts-info">
              {fecha.format(fecha.parse(post.date, "YYYY-MM-DD"), "mediumDate")}
            </em>

            <NavLink to={slug} hidden className="Posts-linkMask">
              {" "}
            </NavLink>
          </li>
        ))}

        <li>
          <a className="Posts-older u-btn" href={`http://blog.dmfranc.com`}>
            Older posts on Tumblr
          </a>
        </li>
      </ol>
    </section>
  </Fragment>
);
