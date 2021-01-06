import React from "react";
import "./BCG.css";
import { Layout, Row, Col } from "antd";
import { FcComboChart } from "react-icons/fc";
function Header() {
  const { Header } = Layout;
  return (
    <Header>
      <Row justify="start" align="middle">
        <Col>
        <FcComboChart style={{ fontSize: 50 }}/>
        </Col>
        <Col  className="header__content">
        <span>BCG Matrix</span>
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
