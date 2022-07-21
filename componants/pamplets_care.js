let display=(data,place)=>{
    data.forEach((el)=>{
        let div=document.createElement("div")
        div.setAttribute("class","tamplate")
        let pic=document.createElement("img")
        pic.src=el.image
        let div1=document.createElement("div")
        div1.setAttribute("class","mrp")
        let p1=document.createElement("p")
        p1.innerText="Price"
        let p2=document.createElement("p")
        p2.innerText=el.price
        p2.style.textDecoration="line-through"
        div1.append(p1,p2)
        let div2=document.createElement("div")
        div2.setAttribute("class","offers")
        let p3=document.createElement("p")
        p3.innerText="Price"
        let p4=document.createElement("h3")
        p4.innerText=`₹ ${el.offer}`
        div2.append(p3,p4)
        div.append(pic,div1,div2)
        document.getElementById(place).append(div)
    })
    }
    export {display}