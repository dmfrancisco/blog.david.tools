import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Posts from "./Posts";
import Post from "./Post";
import NotFound from "./NotFound";
import data from "./data";

export default () => (
  <Fragment>
    <Helmet defaultTitle={data.helmet.title} titleTemplate={`%s · ${data.helmet.title}`} />

    <Router>
      <Switch>
        <Route exact path="/" render={routeProps => <Posts {...data} />} />
        <Route
          exact
          path="/:slug"
          render={({ match }) => <Post nav={data.nav} post={data.posts[match.params.slug]} />}
        />
        <Route render={routeProps => <NotFound {...data} />} />
      </Switch>
    </Router>
  </Fragment>
);
