import React,{useState} from "react";
import { Row, Col } from "antd";
function SortStreams({ location, match },props) {
  const [items,setItems]=useState([])
  const [itemName,setItemName]=useState("")
  const [itemSales,setItemSales]=useState("")
  const [itemProfit,setItemProfit]=useState("")
  //console.log(match.params.id);
  //console.log(location);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setItemName("")
    setItemSales("")
    setItemProfit("")
  }

  const handleItemNameChange=(e)=>{
    setItemName(e.target.value);
    //console.log(e.target.value)
  }
  const handleItemSalesChange=(e)=>{
    setItemSales(e.target.value)
  }
  const handleItemProfitChange=(e)=>{
    setItemProfit(e.target.value)
  }

const handleItemClick=()=>{
  console.log(itemName,itemSales,itemProfit)
setItems({itemName,itemSales,itemProfit})
console.log(items)

}
  // const addTodo = todo => {
  //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //     return;
  //   }
  //   const newTodos = [todo, ...todos];

  //   setTodos(newTodos);
  // };


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
<Col  className="item__input">產品名: <input value={itemName} onChange={handleItemNameChange}/></Col>
<Col  className="item__input">銷售比: <input value={itemSales}  onChange={handleItemSalesChange}/></Col>
<Col  className="item__input">利潤率: <input value={itemProfit}  onChange={handleItemProfitChange}/></Col>
<button onClick={handleItemClick}>新增</button>
</Row>
</form>
    </Row>

    </div>
  ) 
}

export default SortStreams;
