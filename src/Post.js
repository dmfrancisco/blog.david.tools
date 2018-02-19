import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import readingTime from "reading-time";
import fecha from "fecha";
import base64 from "base-64";

import Nav from "./Nav";
import Comments from "./Comments";
import CommentLink from "./CommentLink";
import snapshot from "./snapshot";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const headers = { Authorization: `Basic ${base64.encode(accessToken + ":")}` };

class Post extends Component {
  state = {
    content: null,
  };

  fetchRenderedMarkdown(text) {
    return fetch(`https://api.github.com/markdown`, {
      headers,
      method: "POST",
      body: JSON.stringify({ text }),
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

        <article className="Post u-container">
          <header>
            <NavLink className="Posts-title Posts-title--header" to="/">
              Blog
            </NavLink>{" "}
            <em className="Posts-info Posts-info--header">
              {fecha.format(fecha.parse(post.date, "YYYY-MM-DD"), "mediumDate")} ·{" "}
              {readingTime(content || "").text}
            </em>
          </header>

          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
        </article>

        <div id="comments-root" data-gist={post.gist} />
        {!snapshot && <Comments gist={post.gist} />}
        <CommentLink gist={post.gist} />
      </Fragment>
    );
  }
}

export default Post;
