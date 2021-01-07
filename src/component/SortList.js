import React, { useState, useEffect } from "react";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import SortFrom from "./SortFrom";
import { Row, Col } from "antd";
function SortList() {
  const [sorts, setSorts] = useState(
    JSON.parse(localStorage.getItem("SORTS")) || []
  );

  useEffect(() => {
    localStorage.setItem("SORTS", JSON.stringify(sorts));
  }, [sorts]);

  const addSort = sort => {
    if (!sort.text || /^\s*$/.test(sort.text)) {
      return;
    }
    const newSorts = [sort, ...sorts];
    setSorts(newSorts);
  };

  const removeSort = id => {
    const removeArray = [...sorts].filter(sort => sort.id !== id);
    setSorts(removeArray);
  };

  const SortItem = ({ sorts }) => {
   
    return sorts.map((sort, index) => (
      <Col  xs={10} sm={8} md={3} key={index} className="sort__group">
        <Link
          to={{
            pathname: "sort/" + sort.text,
            state: {
              SortID: sort.id
            }
          }}
        >
          <span key={sort.id} className="sort">
            {sort.text}
          </span>
        </Link>
        <BsX
          onClick={() => {
            removeSort(sort.id)
          }}
          className="delete__icon"
        />
      </Col>
    ));
  };

  // const ItemList = () => {
  //   return (
  //     <Row  justify="center">
  //       <Col className="item__list" xs={22} sm={22} md={20}>
  //       <SortItem sorts={sorts} removeSort={removeSort} />
  //       </Col>
  //     </Row>
  //   );
  // };

  return (
    <div className="content">
      <SortFrom onSubmit={addSort} />
      <Row  justify="start">
       
        <SortItem sorts={sorts} removeSort={removeSort} />
        
      </Row>
    </div>
  );
}

export default SortList;
