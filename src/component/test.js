import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter = () => {

  const data = [
    {
    itemName:"香橙綠茶",
    itemSales:8,
    itemProfit:60
},
    {
    itemName:"葡萄柚綠茶",
    itemSales:15,
    itemProfit:70
},
{
    itemName:"百香綠茶",
    itemSales:1,
    itemProfit:65
},
{
    itemName:"香橙百香綠茶",
    itemSales:5,
    itemProfit:55
},
{
    itemName:"綠茶",
    itemSales:8,
    itemProfit:90
},
{
    itemName:"香橙紅茶",
    itemSales:8,
    itemProfit:85
},
{
    itemName:"想不到",
    itemSales:8,
    itemProfit:10
},
];

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
    width: 800,
    height: 400,
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
        fontSize: 12,
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
    // annotations: [
    //   {
    //     type: 'region',
    //     start: [7, 7],
    //     end: [7.8, 7.8],
    //     top: true,
    //     style: {
    //       fill: '#fff',
    //       fillOpacity: 0.5,
    //       opacity: 1,
    //     },
    //   },
    //   {
    //     type: 'region',
    //     start: [0.2, 7],
    //     end: [1, 7.8],
    //     top: true,
    //     style: {
    //       fill: '#fff',
    //       fillOpacity: 0.5,
    //       opacity: 1,
    //     },
    //   },
    //   {
    //     type: 'region',
    //     start: [7, 0.2],
    //     end: [7.8, 1],
    //     top: true,
    //     style: {
    //       fill: '#fff',
    //       fillOpacity: 0.5,
    //       opacity: 1,
    //     },
    //   },
    // ],
    quadrant: {
      xBaseline: profitAverage(data),
      yBaseline: salesAverage(data),
      lineStyle: {
        lineDash: [1, 2],
        lineWidth: 1,
      },
      regionStyle: [
        {
          fill: '#ffff00',
          fillOpacity: 0.1,
        },
        {
          fill: '#778899',
          fillOpacity: 0.1,
        },
        { fill: '#fff' },
        {
          fill: '#a52a2a',
          fillOpacity: 0.1,
        },
      ],
      labels: [
        {
          content: '明星產品',
          position: [100, 13.5],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'end',
          },
        },
        {
          content: '問題產品',
          position: [0.2, 13.5],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
        {
          content: '瘦狗產品',
          position: [2, 1.5],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
        {
          content: '金牛產品',
          position: [100, 1.5],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'end',
          },
        }
      ],
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;