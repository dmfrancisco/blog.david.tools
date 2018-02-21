import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import readingTime from "reading-time";
import fecha from "fecha";
import base64 from "base-64";
import convert from "htmr";

import PostHelmet from "./PostHelmet";
import Nav from "./Nav";
import Comments from "./Comments";
import CommentLink from "./CommentLink";
import snapshot from "./snapshot";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const headers = { Authorization: `Basic ${base64.encode(accessToken + ":")}` };

const CustomPre = ({ children, ...props }) => {
  if (props.lang === "render") {
    return <p dangerouslySetInnerHTML={{ __html: children[0].props.children[0] }} />;
  }
  return <pre {...props}>{children}</pre>;
};

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
    let components;

    if (post.convert) {
      // Currently has some issues with escaping (for eg JSX in a in diff)
      components = convert(content || "", {
        map: { pre: CustomPre },
      });
    }

    return (
      <Fragment>
        <PostHelmet {...post} />

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

          {!post.convert ? (
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <div className="markdown-body">{components}</div>
          )}
        </article>

        <div id="comments-root" data-gist={post.gist} />
        {!snapshot && <Comments gist={post.gist} />}
        <CommentLink gist={post.gist} />
      </Fragment>
    );
  }
}

export default Post;
