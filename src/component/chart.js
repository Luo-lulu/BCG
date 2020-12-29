import React, { useState, useEffect } from 'react';
import SortStreams from"./SortStreams"
// import { Scatter } from '@ant-design/charts';

// const DemoScatter = () => {
//   var config = {
//     width: 800,
//     height: 400,
//     autoFit: false,
//     appendPadding: 16,
//     data: items,
//     xField: 'itemSales',
//     yField: 'itemProfit',
//     shape: 'circle',
//     pointStyle: {
//       fill: '#D6E3FD',
//       fillOpacity: 0.6,
//       stroke: '#6d9bf9',
//     },
//     tooltip: {
//       showTitle: true,
//       showMarkers: false,
//       fields: ['itemSales', 'itemProfit'],
//       customContent: function customContent(title, items) {
//         var _field$data;
//         var field = items === null || items === void 0 ? void 0 : items[0];
//         var formatterInfo = {
//             itemSales: function UV(value) {
//             return value + '%';
//           },
//           itemProfit: function DAU(value) {
//             return value + '%';
//           }
//         };
//         var htmlStr = '<div style="margin:10px 0;font-weight:700;">'.concat(
//           field === null || field === void 0
//             ? void 0
//             : (_field$data = field.data) === null || _field$data === void 0
//             ? void 0
//             : _field$data.city,
//           '</div><div class="g2-tooltip-items">',
//         );
//         items.forEach(function (item) {
//           htmlStr += '<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">\n                <span class="g2-tooltip-item-label" style="margin-right: 12px;">'
//             .concat(item.name, '</span>\n                <span class="g2-tooltip-item-value">')
//             .concat(
//               item.value + formatterInfo[item.name](item.value),
//               '</span>\n              </div>',
//             );
//         });
//         htmlStr += '</div>';
//         return htmlStr;
//       },
//     },
//     xAxis: {
//       grid: { line: { style: { stroke: '#eee' } } },
//       label: {
//         formatter: function formatter(v) {
//           return v !== '0' ? v + '%' : v;
//         },
//       },
//       line: null,
//     },
//     label: {
//       formatter: function formatter(item) {
//         return item.city;
//       },
//       offsetY: 12,
//       style: {
//         fontSize: 12,
//         fill: 'rgba(0,0,0,0.85)',
//       },
//     },
//     yAxis: {
//       min: 0,
//       line: null,
//       label: {
//         formatter: function formatter(v) {
//           return v !== '0' ? v + '%' : v;
//         },
//       },
//     },
//     annotations: [
//       {
//         type: 'text',
//         position: [4, 8],
     
//         offsetY: -8,
//         style: {
//           fontSize: 12,
//           textAlign: 'center',
//         },
//       },
//       {
//         type: 'text',
//         position: [8, 4],
    
//         rotate: Math.PI / 2,
//         offsetY: -40,
//         offsetX: 8,
//         style: { fontSize: 12 },
//       },
//       {
//         type: 'region',
//         start: [7, 7],
//         end: [7.8, 7.8],
//         top: true,
//         style: {
//           fill: '#fff',
//           fillOpacity: 0.5,
//           opacity: 1,
//         },
//       },
//       {
//         type: 'region',
//         start: [0.2, 7],
//         end: [1, 7.8],
//         top: true,
//         style: {
//           fill: '#fff',
//           fillOpacity: 0.5,
//           opacity: 1,
//         },
//       },
//       {
//         type: 'region',
//         start: [7, 0.2],
//         end: [7.8, 1],
//         top: true,
//         style: {
//           fill: '#fff',
//           fillOpacity: 0.5,
//           opacity: 1,
//         },
//       },
//     ],
//     quadrant: {
//       xBaseline: 4,
//       yBaseline: 4,
//       lineStyle: {
//         lineDash: [4, 2],
//         lineWidth: 2,
//       },
//       regionStyle: [
//         {
//           fill: '#5bd8a6',
//           fillOpacity: 0.1,
//         },
//         {
//           fill: '#667796',
//           fillOpacity: 0.1,
//         },
//         { fill: '#fff' },
//         {
//           fill: '#f7664e',
//           fillOpacity: 0.1,
//         },
//       ],
//       labels: [
//         {
//           content: '热门市场',
//           position: [7.2, 7],
//           style: {
//             fill: 'rgba(0,0,0, 0.85)',
//             textAlign: 'start',
//           },
//         },
//         {
//           content: '潜力市场',
//           position: [0.2, 7],
//           style: {
//             fill: 'rgba(0,0,0, 0.85)',
//             textAlign: 'start',
//           },
//         },
//         { content: '' },
//         {
//           content: '提频市场',
//           position: [7.2, 1],
//           style: {
//             fill: 'rgba(0,0,0, 0.85)',
//             textAlign: 'start',
//           },
//         },
//       ],
//     },
//   };
//   return <Scatter {...config} />;
// };

// export default DemoScatter;