import React from "react";

export default ({ gist }) => (
  <div className="CommentLink u-container">
    <a className="u-btn" href={`https://gist.github.com/${gist}#comments`}>
      Write a comment on GitHub
    </a>
  </div>
);
