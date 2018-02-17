import React from "react";

export default ({ gist }) => (
  <div className="u-container">
    <a href={`https://gist.github.com/${gist}#comments`}>Add you comment</a>
  </div>
);
