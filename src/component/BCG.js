import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./BCG.css";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import SortStreams from "./SortStreams";
function BCG() {
  return (
    <Router>
      <Layout className="layout">
        <Header />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/sort/:id" component={SortStreams} />
        </Switch>
        {/* <Content /> */}
        <Footer />
      </Layout>
    </Router>
  );
}

export default BCG;
