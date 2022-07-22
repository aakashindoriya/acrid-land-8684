function navbar(){
    return ` <div id="logo">
    <a href="../index.html"> <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt=""></a>
 </div>
 <div id="pages">
     <a href="../html/fitness.html"><h3>FITNESS</h3></a>
     <a href="../html/carepage.html"><h3>CARE</h3></a>
     <a href="../html/mind.html"><h3>MIND</h3></a>
     <a href="../html/storepage.html"><h3>STORE</h3></a>
 </div>
 <div id="functions">
    
 <div>
 <div id =location></div>
 <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/header/location.png" alt="">
</div>
     <button>GET APP</button>
     <a href="">
         <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" alt="">
     </a>
     <a href="">
         <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg" alt="">
     </a>
 </div>`
}
let getLocation=()=> {
    let location=(str)=>{
        let a=str[0]
        let b=str[1]
        let c=str[2]
        document.getElementById("location").innerText=`${a}${b}${c}...`
    }
let  success=(pos)=> {
const crd = pos.coords;
   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=e1c9154e4dad26d05d824d2852baec17`
   fetch(url).then( (res)=> {
       return res.json()
   }).then( (res)=> {
       location(res.name)
   })
}
navigator.geolocation.getCurrentPosition(success);
}
export {navbar,getLocation}