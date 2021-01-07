import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter = (props) => {
  // const [data2, setData2] = useState([]);
  // useEffect(() => {
  //   setData2(props.data)
  // }, []);
//console.log(props)
const data = props.data


//取銷售率平均
 const  salesAverage =(data)=>{
  let total = 0
 let result = 0
for(let i=0 ;i<data.length;i++){
total = total+data[i].itemSales
result = total/data.length
}
console.log(result)
return result
}
//取利潤平均
const  profitAverage =(data)=>{
  let total = 0
 let result = 0
for(let i=0 ;i<data.length;i++){
total = total+data[i].itemProfit
result = total/data.length
}
console.log(result)
return result
}

  var config = {
   
    width: 1000,
    height: 600,
    autoFit: false,
    appendPadding: 16,
    data: data,
    xField: 'itemProfit',
    yField: 'itemSales',
    shape: 'circle',
    pointStyle: {
      fill: '#8B4513',
      fillOpacity: 0.8,
      stroke: '#D2B48C',
    },
    tooltip: {
      showTitle: true,
      showMarkers: false,
      fields: ['itemProfit', 'itemSales'],
      customContent: function customContent(title, items) {
        var _field$data;
        var field = items === null || items === void 0 ? void 0 : items[0];
        let formatterInfo = {
          itemProfit: function Profit() {
            return ""+ '%';
          },
          itemSales: function Sale() {
            return "" + '%';
          }
        };
        var htmlStr = '<div style="margin:10px 0;font-weight:700;">'.concat(
          field === null || field === void 0
            ? void 0
            : (_field$data = field.data) === null || _field$data === void 0
            ? void 0
            : _field$data.itemName,
          '</div><div class="g2-tooltip-items">',
        );
        items.forEach(function (item) {
          htmlStr += '<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">\n                <span class="g2-tooltip-item-label" style="margin-right: 12px;">'
            .concat(item.name, '</span>\n                <span class="g2-tooltip-item-value">')
            .concat(
              item.value + formatterInfo[item.name](item.value),
              '</span>\n              </div>',
            );
        });
        htmlStr += '</div>';
        return htmlStr;
      },
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      label: {
        formatter: function formatter(v) {
          return v !== '0' ? v + '%' : v;
        },
      },
      line: null,
    },
    label: {
      formatter: function formatter(item) {
        return item.itemName;
      },
      offsetY: 0,
      style: {
        fontSize: 14,
        fill: 'rgba(0,0,0,0.85)',
      },
    },
    yAxis: {
      min: 0,
      line: null,
      label: {
        formatter: function formatter(v) {
          return v !== '0' ? v + '%' : v;
        },
      },
    },
  
    quadrant: {
      xBaseline:60,
      yBaseline: salesAverage(data),
      lineStyle: {
        lineDash: [1, 2],
        lineWidth: 1,
      },
      regionStyle: [
        {
          fill: '#ff8c00',
          fillOpacity: 0.3,
        },
        {
          fill: '#2e8b57',
          fillOpacity: 0.3,
        },
        { fill: '#696969',
          fillOpacity: 0.3,
         },
        {
          fill: '#a52a2a',
          fillOpacity: 0.3,
        },
      ],
      labels: [
        {
          content: '明星產品',
          position: [65, salesAverage(data)*1.25],
          style: {
            fontSize:'30',
            fontWeight:'900',
            fill: 'rgba(255,255,255,0.8)',
            textAlign: 'start',
          },
        },
        {
          content: '問題產品',
          position: [55,salesAverage(data)*1.25],
          style: {
            fontSize:'30',
            fontWeight:'900',
            fill: 'rgba(255,255,255,0.8)',
            textAlign: 'end',
          },
        },
        {
          content: '瘦狗產品',
          position: [55,salesAverage(data)*0.75],
          style: {
            fontSize:'30',
            fontWeight:'900',
            fill: 'rgba(255,255,255,0.8)',
            textAlign: 'end',
          },
        },
        {
          content: '金牛產品',
          position: [65, salesAverage(data)*0.75],
          style: {
            fontSize:'30',
            fontWeight:'900',
            fill: 'rgba(255,255,255,0.8)',
            textAlign: 'start',
          },
        }
      ],
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;