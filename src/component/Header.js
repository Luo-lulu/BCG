import React from "react";
import "./BCG.css";
import { Layout, Row, Col } from "antd";
function Header() {
  const { Header } = Layout;
  return (
    <Header>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} className="header__content">
          這是BCG矩陣，用來分析餐飲業菜單
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
