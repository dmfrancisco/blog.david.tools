import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import readingTime from "reading-time";
import moment from "moment";
import base64 from "base-64";
import "github-markdown-css";

import Nav from "./Nav";
import "./Post.css";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const headers = { Accept: "application/vnd.github.v3.html" };
headers["Authorization"] = `Basic ${base64.encode(accessToken + ":")}`;

class Post extends Component {
  state = {
    content: null,
  };

  fetchRenderedMarkdown(text) {
    return fetch(`https://api.github.com/markdown`, {
      headers,
      method: "POST",
      body: JSON.stringify({
        mode: "gfm",
        text,
      }),
    }).then(response => response.text());
  }

  fetchGistMarkdownText(rawUrl) {
    return fetch(rawUrl).then(response => response.text());
  }

  fetchGistMarkdownUrl(id) {
    return fetch(`https://api.github.com/gists/${id}`, { headers })
      .then(response => response.json())
      .then(json => {
        const file = json.files["post.md"] || Object.values(json.files)[0];
        return file.raw_url;
      });
  }

  fetchData() {
    return this.fetchGistMarkdownUrl(this.props.post.gist)
      .then(this.fetchGistMarkdownText)
      .then(this.fetchRenderedMarkdown);
  }

  componentDidMount() {
    this.fetchData().then(content => this.setState({ content }));
  }

  render() {
    const { nav, post } = this.props;
    const { content } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>

        <Nav items={nav} />

        <section className="u-container">
          <div>
            <NavLink to="/">Blog</NavLink> ·{" "}
            <em>
              {moment(post.date, "YYYY-MM-DD").format("MMM D, YYYY")} ·{" "}
              {readingTime("example").text}
            </em>
          </div>

          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </Fragment>
    );
  }
}

export default Post;
