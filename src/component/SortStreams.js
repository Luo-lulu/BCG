import React,{useState, useEffect} from "react"
//import{IoClose} from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Row, Col } from "antd";
//import DemoScatter from"./chart"
import DemoScatter from"./test"
function SortStreams({ match }) {
 

  const [items,setItems]=useState(JSON.parse(localStorage.getItem(match.params.id)) ||[])
  const [itemName,setItemName]=useState("")
  const [itemSales,setItemSales]=useState("")
  const [itemProfit,setItemProfit]=useState("")
  //console.log(match.params.id);
  //console.log(location);


  useEffect(() => {
    localStorage.setItem(match.params.id, JSON.stringify(items));
  }, [items]);

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
}

const handleAnalyzeClick =()=>{
  console.log("!!!")
}

const removeItem = (itemName) => {
   console.log(itemName)
  console.log([...items])
  const removeArray = [...items].filter(item => item.itemName !==itemName);
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
            removeItem(item.itemName);
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
<Col  className="item__input">銷售比: <input type="number" placeholder="14" value={itemSales}  onChange={handleItemSalesChange}/></Col>
<Col  className="item__input">利潤率: <input type="number" placeholder="80" value={itemProfit}  onChange={handleItemProfitChange}/></Col>
<button onClick={handleItemClick}>新增</button>
</Row>
</form>
    </Row>
    <Row  justify="start">
      <Item items={items} removeItem={removeItem}/>
    </Row>
    <Row  justify="center">
      <button onClick={handleAnalyzeClick}>分析</button>
    </Row>
    <Row  justify="center">
      <Col>
      <DemoScatter data = {items}/>
      </Col>
    </Row>

    </div>
  ) 
}

export default SortStreams;
