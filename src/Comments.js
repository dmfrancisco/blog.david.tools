import React, { Component } from "react";
import fecha from "fecha";

const headers = { Accept: "application/vnd.github.v3.html+json" };

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

    if (comments.length === 0) {
      return null;
    }

    return (
      <section className="u-container">
        <h2 className="Posts-title">Comments</h2>

        {comments.map(comment => (
          <div className="Comment" key={comment.id}>
            <div className="Comment-header">
              <img
                className="Comment-avatar"
                src={`${comment.user.avatar_url}&size=40`}
                alt={`${comment.user.login} avatar`}
                width={20}
                draggable="false"
              />{" "}
              <a className="Comment-author" href={comment.user.html_url}>
                {comment.user.login}
              </a>{" "}
              <span className="Comment-info">
                {comment.author_association === "OWNER" && "Author · "}
                {comment.created_at !== comment.updated_at && "Edited · "}
                {fecha.format(new Date(comment.created_at), "HH:mm MMM D, YYYY")}
              </span>
            </div>
            <div
              className="Comment-body markdown-body"
              dangerouslySetInnerHTML={{ __html: comment.body_html }}
            />
          </div>
        ))}
      </section>
    );
  }
}

export default Comments;
