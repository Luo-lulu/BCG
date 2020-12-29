import React,{useState} from "react"
//import{IoClose} from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Row, Col } from "antd";
//import DemoScatter from"./chart"
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

const handleItemClick=({item})=>{
  console.log(itemName,itemSales,itemProfit)
  item={itemName,itemSales,itemProfit}
  const newItems = [item, ...items];
    setItems(newItems);

console.log(newItems)
}

const removeItem = id => {
  const removeArray = [...items].filter(item => item.id !== id);
  setItems(removeArray);
};



  const Item =({items})=>{
return items.map((item,index)=>(
  <Col xs={8} sm={6} md={4} key={index}>
    <span>{item.itemName}</span> 
    <span>銷售比:{item.itemSales}%</span>
    <span>利潤率:{item.itemProfit}%</span>
    <RiDeleteBin6Line
          onClick={() => {
            removeItem(item.id);
          }}
          className="delete__icon"
        />
    </Col>
));
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
      <Row >
<Col  className="item__input">產品名: <input  placeholder="紅鑽葡萄柚綠茶" value={itemName} onChange={handleItemNameChange}/></Col>
<Col  className="item__input">銷售比: <input placeholder="14" value={itemSales}  onChange={handleItemSalesChange}/></Col>
<Col  className="item__input">利潤率: <input placeholder="80" value={itemProfit}  onChange={handleItemProfitChange}/></Col>
<button onClick={handleItemClick}>新增</button>
</Row>
</form>
    </Row>
    <Row  justify="start">
      <Item items={items}/>
    </Row>
    <Row  justify="center">
      <button>分析</button>
    </Row>
{/* <DemoScatter/> */}
    </div>
  ) 
}

export default SortStreams;
