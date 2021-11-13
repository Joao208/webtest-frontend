import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing, Loading, Result, Upload } from "./screens";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/upload" component={Upload} />
        <Route path="/loading" component={Loading} />
        <Route path="/result" component={Result} />

        {/* <Route exact path="*" component={Page404} /> */}
      </Switch>
    </BrowserRouter>
  );
}
