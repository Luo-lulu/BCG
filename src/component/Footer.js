import React from "react";
import { GoMail } from "react-icons/go"
import { Layout, Row, Col } from "antd";
function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <Row justify="center" >
        <Col xs={24} sm={24} md={24} className="footer__content">
          <GoMail />
          聯絡我：frontluoyaru@gmail.com
        </Col>
      </Row>
    </Footer>
  );
}

export default Footer;
