import React,{useState, useEffect} from "react"
//import{IoClose} from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Row, Col,Input ,Button ,InputNumber} from "antd";
import DemoScatter from"./chart"
function SortStreams({ match }) {
 
  const[showChart,setShowChart] = useState(false)
  const [items,setItems]=useState(JSON.parse(localStorage.getItem(match.params.id)) ||[])
  const [itemName,setItemName]=useState("")
  const [itemSales,setItemSales]=useState(0)
  const [itemProfit,setItemProfit]=useState(0)
  //console.log(match.params.id);
  //console.log(location);


  useEffect(() => {
    localStorage.setItem(match.params.id, JSON.stringify(items));
  }, [items]);

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   setItemName("")
  //   setItemSales(0)
  //   setItemProfit(0)
  // }

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



const handleItemClick=(e)=>{
  e.preventDefault();
  let newItem={itemName,itemSales: Number(itemSales),itemProfit: Number(itemProfit)}
  const newItems = [newItem, ...items];
    setItems(newItems);
    setItemName("")
    setItemSales(0)
    setItemProfit(0)
}

const handleAnalyzeClick =()=>{
  setShowChart(true)
}

const removeItem = (itemName) => {
  const removeArray = [...items].filter(item => item.itemName !==itemName);
  setItems(removeArray);
};



  const Item =({items})=>{
return items.map((item,index)=>(
  <Col xs={9} sm={9} md={3} key={index} className="item">
    <Col>{item.itemName}</Col> 
    <Col>銷售比:{item.itemSales}%</Col>
    <Col>利潤率:{item.itemProfit}%</Col>
    <RiDeleteBin6Line
          onClick={() => {
            removeItem(item.itemName);
          }}
          className="delete__icon"
        />
    </Col>
));
  }

// const SpaceChart =()=>{
//   return(
//     <div className="space__chart"></div>
//   )
// }



  return(
    <div className="content">
    <Row justify="center" >
      <Col>
      <h1  className="h_text"> {match.params.id} 的分類表</h1>
      </Col>
    </Row>



    {/* <Row justify="center">
    <Col  className="h_text">請輸入基本資料 :</Col>
    </Row> */}

<Row  justify="center">
<form>
<Row align="bottom">
<Col  className="item__input">產品名: <Input size="large" placeholder="紅鑽葡萄柚綠茶" value={itemName} onChange={handleItemNameChange}/></Col>
<Col  className="item__input">銷售比: <Input size="large" type="number" placeholder="80" value={itemSales}   onChange={handleItemSalesChange}/></Col>
<Col  className="item__input">利潤率: <Input size="large" type="number" placeholder="80" value={itemProfit}  onChange={handleItemProfitChange}/></Col>
<button size="large" onClick={handleItemClick} className="btn" >新增產品</button>
</Row>
</form>
</Row>

  <Row  justify="start">

    <Item items={items} removeItem={removeItem}/>
   
  
  </Row>





    <Row  justify="center">
      <Button size="large" onClick={handleAnalyzeClick}>分析</Button>
    </Row>
    <Row  justify="center" className="chart_fat">
      <Col className="chart">
      {showChart?<DemoScatter data = {items}/>:null}
      </Col>
    </Row>


   

    </div>
  ) 
}

export default SortStreams;
