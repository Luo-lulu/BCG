import React,{useState} from "react";
import { Row, Col } from "antd";
function SortStreams({ location, match },props) {
  const [item,setItem]=useState([])
  //console.log(match.params.id);
  //console.log(location);
  const handleSubmit=(e)=>{
    e.preventDefault();
  

  }


  return(
    <div>
    <Row justify="center">
      <Col>
      <h1>這是 {match.params.id} 的分類表</h1>
      </Col>
    </Row>

    <Row justify="center">
    <Col>請輸入基本資料 :</Col>
    </Row>

    <Row justify="center">
      <form onSubmit={handleSubmit}>
      <Row>
<Col  className="item__input">產品名: <input/></Col>
<Col  className="item__input">銷售比: <input/></Col>
<Col  className="item__input">利潤率: <input/></Col>
<button>新增</button>
</Row>
</form>
    </Row>

    </div>
  ) 
}

export default SortStreams;
