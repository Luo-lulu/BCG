import React from "react";
import { Layout, Row, Col } from "antd";
function Footer() {
  const { Footer } = Layout;
  return (
    <Footer>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} className="footer__content">
          聯絡我：frontluoyaru@gmail.com
        </Col>
      </Row>
    </Footer>
  );
}

export default Footer;
