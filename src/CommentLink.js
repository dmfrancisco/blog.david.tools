import React from "react";

export default ({ gist }) => (
  <div className="u-container">
    <a className="CommentLink" href={`https://gist.github.com/${gist}#comments`}>
      Write a comment on GitHub
    </a>
  </div>
);
