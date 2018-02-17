import React from "react";
import { render } from "react-dom";
import Loadable from "react-loadable";

import snapshot from "./snapshot";
import "./index.css";

const production = process.env.NODE_ENV === "production";

const LoadableApp = Loadable({
  loader: () => import("./App"),
  loading: () => null,
});

const LoadableComments = Loadable({
  loader: () => import("./Comments"),
  loading: () => null,
});

if (snapshot || !production) {
  const el = document.getElementById("root");
  render(<LoadableApp />, el);
} else {
  const el = document.getElementById("comments-root");
  if (el) render(<LoadableComments gist={el.dataset.gist} />, el);
}
