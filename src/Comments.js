import React, { Component } from "react";
import base64 from "base-64";

import "./Comments.css";
import "./markdown.css";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const headers = {
  Authorization: `Basic ${base64.encode(accessToken + ":")}`,
  Accept: "application/vnd.github.v3.html+json",
};

class Comments extends Component {
  state = {
    comments: [],
  };

  fetchGistComments(id) {
    return fetch(`https://api.github.com/gists/${id}/comments`, { headers }).then(response =>
      response.json()
    );
  }

  componentDidMount() {
    this.fetchGistComments(this.props.gist).then(comments => this.setState({ comments }));
  }

  render() {
    const { comments } = this.state;

    return (
      <section className="u-container">
        <h2>Comments</h2>

        {comments.map(comment => (
          <div key={comment.id}>
            <img
              src={`${comment.user.avatar_url}&size=64`}
              alt={`${comment.user.login} avatar`}
              width={32}
            />{" "}
            <a href={comment.user.html_url}>{comment.user.login}</a>{" "}
            <span>
              {comment.created_at}
              {comment.created_at !== comment.updated_at && " · Edited"}
              {comment.author_association === "OWNER" && " · Owner"}
            </span>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: comment.body_html }}
            />
          </div>
        ))}
      </section>
    );
  }
}

export default Comments;
