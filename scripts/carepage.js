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

let data=[
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FitCheck_Magazine-02.png",
  "price": "1990",
  "offer": "890"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Vitamin_Profile_clp.jpg",
  "price": "1990",
  "offer": "790"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Thyroid_Screening_clp.jpg",
  "price": "590",
  "offer": "390"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/WorkoutWellness_men_magazine_web2.png",
  "price": "2990",
  "offer": "1790"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/WorkoutWellness_women_magazine_web2.png",
  "price": "2990",
  "offer": "1790"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
  "price": "5999",
  "offer": "2990"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/IronScreeningClp122020.png",
  "price": "990",
  "offer": "590"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/PCODMagazineWeb.png",
  "price": "2490",
  "offer": "1990"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png",
  "price": "5999",
  "offer": "2990"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/WomensHealthScreening_Magazine.png",
  "price": "3490",
  "offer": "1490"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/HaemogramWithCBCClp.jpg",
  "price": "590",
  "offer": "450"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Diabetes_Screening_clp.jpg",
  "price": "590",
  "offer": "290"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/LipidScreening_Magazine.png",
  "price": "690",
  "offer": "290"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/ImmunityCcreening_Magazine.png",
  "price": "2990",
  "offer": "1190"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/CF01032_hero_2.png",
  "price": "2990",
  "offer": "990"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/PregnancyScreening_Magazine.png",
  "price": "790",
  "offer": "590"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/PregnancyScreening_Magazine.png",
  "price": "290",
  "offer": "280"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/HairFallScreeningClp122019.png",
  "price": "2990",
  "offer": "1090"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/BoneHealthScreening_Magazine.png",
  "price": "1490",
  "offer": "890"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/mp/diag_pack_Liver_Screening_clp.jpg",
  "price": "690",
  "offer": "290"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FeverPanel_Magazine.jpg",
  "price": "1990",
  "offer": "890"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png",
  "price": "2990",
  "offer": "1390"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/Anemia_Magazine_Web_new.png",
  "price": "1990",
  "offer": "1460"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/Anemia_Magazine_Web_new.png",
  "price": "1990",
  "offer": "1460"
},
{
  "image": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Obesity_Risk_Magazine.jpg",
  "price": "2990",
  "offer": "1190"
}
]

document.getElementById("para").innerHTML=paragraph()

display(data,"cards")
window.onload=getLocation()