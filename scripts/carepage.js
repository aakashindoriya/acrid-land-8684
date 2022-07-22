console.log("yes")
import {navbar,getLocation} from "../componants/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
import {display,paragraph} from "../componants/pamplets_care.js"
let arr=["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/5202889c-e166-40eb-8a1e-e3cf3aa57632.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/dc6538da-9ee5-4326-ad26-f3cee3a6322e.png"]
let i=0
setInterval(()=>{
 if(i==2){
  i=0
 } 
 document.getElementById("moveing").src=arr[i]
 i++
},2000)

fetch("http://127.0.0.1:3000/api/careData").then((res)=>{
  return res.json()
}).then((res)=>{
  display(res,"cards")
})

document.getElementById("para").innerHTML=paragraph()
window.onload=getLocation()
import { footer } from "../componants/footer.js"
document.getElementById("footer").innerHTML=footer()