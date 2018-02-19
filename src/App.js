import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHelmet from "./AppHelmet";
import Posts from "./Posts";
import Post from "./Post";
import NotFound from "./NotFound";
import data from "./data";

export default () => (
  <Fragment>
    <AppHelmet {...data.helmet} />

    <Router>
      <Switch>
        <Route exact path="/" render={routeProps => <Posts {...data} />} />

        {Object.entries(data.posts).map(([slug, post]) => (
          <Route
            key={slug}
            exact
            path={`/${slug}`}
            render={({ match }) => <Post nav={data.nav} post={post} />}
          />
        ))}

        <Route render={routeProps => <NotFound {...data} />} />
      </Switch>
    </Router>
  </Fragment>
);
