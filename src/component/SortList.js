import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
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
    //console.log(sort, ...sorts);
  };

  const removeSort = id => {
    const removeArray = [...sorts].filter(sort => sort.id !== id);
    setSorts(removeArray);
  };

  const SortItem = ({ sorts }) => {
    // return (
    //   <Row>
    //     <Col>
    //       {sorts.map((sort, index) => {
    //         <Col key={index}>
    //           <Link
    //             to={{
    //               pathname: "sort/" + sort.text,
    //               state: {
    //                 SortID: sort.id
    //               }
    //             }}
    //           >
    //             <span key={sort.id}>{sort.text}</span>
    //           </Link>
    //           <RiDeleteBin6Line
    //             onClick={() => {
    //               removeSort(sort.id);
    //             }}
    //             className="delete__icon"
    //           />
    //         </Col>;
    //       })}
    //     </Col>
    //   </Row>
    // );
    return sorts.map((sort, index) => (
      <Col xs={8} sm={6} md={4} key={index} className="sort__group">
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
        <RiDeleteBin6Line
          onClick={() => {
            removeSort(sort.id);
          }}
          className="delete__icon"
        />
      </Col>
    ));
  };

  const ItemList = () => {
    return (
      <Row className="item__list">
        <SortItem sorts={sorts} removeSort={removeSort} />
      </Row>
    );
  };

  return (
    <div>
      <SortFrom onSubmit={addSort} />
      {/* <SortItem sorts={sorts} removeSort={removeSort} /> */}
      <ItemList />
    </div>
  );
}

export default SortList;
