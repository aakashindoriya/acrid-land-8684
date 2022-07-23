

import {getData, append} from "./components/fetch-1.js"

import { getData_1, append_1} from "./components/fetch-1.js";

// console.log(getData)
// let cont = document.getElementById("cont")

// for best seller section
const url = "http://127.0.0.1:3000/api/bestSellerData";

fetch(url).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })

// for just luch section
const url_1 = "http://127.0.0.1:3000/api/justLauched";

fetch(url_1).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append_1(res);
  })


// for tradmills
const url_2 = "http://127.0.0.1:3000/api/TREADMILLS";

fetch(url_2).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })
// for spinbikes
const url_3 = "http://127.0.0.1:3000/api/Spinbikes";

fetch(url_3).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })
// for cycle
const url_4 = "http://127.0.0.1:3000/api/cycle";

fetch(url_4).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })
// for accessories
const url_5 = "http://127.0.0.1:3000/api/Accessories";

fetch(url_5).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })
// for topwear
const url_6 = "http://127.0.0.1:3000/api/topWear";

fetch(url_6).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })
// for bottom wear
const url_7 = "http://127.0.0.1:3000/api/BOTTOMWEAR";

fetch(url_7).then((res) => {

  return res.json();
  
  }).then((res)=>{
    console.log(res);
    append(res);
  })
// for health
const url_8 = "http://127.0.0.1:3000/api/health";

fetch(url_8).then((res) => {

return res.json();

}).then((res)=>{
  console.log(res);
  append(res);
})

