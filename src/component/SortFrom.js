import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
// import { Link } from "react-router-dom";
function SortFrom(props) {
  const { Content } = Layout;
  const [sort, setSort] = useState("");
  const handleInputChange = e => {
    setSort(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: sort
    });
    setSort("");
  };
  return (
    <Content>
      <Row justify="center">
        <form
          xs={24}
          sm={20}
          md={16}
          onSubmit={handleSubmit}
          className="sorts__from"
        >
          <Row justify="center">
            <input
              className="sort__input"
              type="text"
              placeholder="好茶 or 2020年7月"
              value={sort}
              name="text"
              onChange={handleInputChange}
            ></input>
            <button className="sort__btn">新增分類</button>
          </Row>
        </form>
      </Row>
    </Content>
  );
}

export default SortFrom;
