
// for making dynfamic
// best seller
let getData = async(url) => {
    let res = await fetch(url);
    let data = await res.json();
    // for output
    return data;
    // console.log(data);
};
// just luuch
let getData_1 = async(url_1) => {
    let res = await fetch(url);
    let data = await res.json();
    // for output
    return data;
    // console.log(data);
};
// tradmill
let getData_2 = async(url_2) => {
    let res = await fetch(url);
    let data = await res.json();
    // for output
    return data;
    // console.log(data);
};
// spinbikes
let getData_3 = async(url_3) => {
    let res = await fetch(url);
    let data = await res.json();
    // for output
    return data;
    // console.log(data);
};
// accessories
let getData_4 = async(url_4) => {
    let res = await fetch(url);
    let data = await res.json();
    // for output
    return data;
    // console.log(data);
};
// health
let getData_5 = async(url_5) => {
    let res = await fetch(url);
    let data = await res.json();
    // for output
    return data;
    // console.log(data);
};

// class --> div_3 --> appending data

let append = (data) => {

data.forEach(({image,company,title,price,offer}) => {

let child_div = document.createElement('div');
child_div.setAttribute("class","div-3")
child_div.setAttribute("id","main-div")

let img = document.createElement('img');
    img.src = image;
img.setAttribute("class","img-size")    

let content_div = document.createElement('div');
content_div.setAttribute("class","content") 

let div_1 = document.createElement('div');
div_1.setAttribute("class","fit") 
// for company
let p = document.createElement('p');
p.innerText = company;

let div_2 = document.createElement('div');
div_2.setAttribute("class","hed") 

// for title
let t = document.createElement('h3');
t.innerText = title;

let div_3 = document.createElement('div');
div_3.setAttribute("class","p-alpha")
// for price and offer
let p2 = document.createElement('p');
        p2.innerText = price;

let p3 = document.createElement('p');
        p3.innerText = offer;

div_1.append(p)
div_2.append(t)
div_3.append(p2,p3)

content_div.append(div_1,div_2,div_3)

child_div.append(img,content_div)

// main_div.append()

document.getElementById("container").append(child_div);
    });
}
let append_1 = (data) => {

    data.forEach(({image,company,title,price,offer}) => {
    
    let child_div = document.createElement('div');
    child_div.setAttribute("class","div-3")
    child_div.setAttribute("id","main-div")
    
    let img = document.createElement('img');
        img.src = image;
    img.setAttribute("class","img-size")    
    
    let content_div = document.createElement('div');
    content_div.setAttribute("class","content") 
    
    let div_1 = document.createElement('div');
    div_1.setAttribute("class","fit") 
    // for company
    let p = document.createElement('p');
    p.innerText = company;
    
    let div_2 = document.createElement('div');
    div_2.setAttribute("class","hed") 
    
    // for title
    let t = document.createElement('h3');
    t.innerText = title;
    
    let div_3 = document.createElement('div');
    div_3.setAttribute("class","p-alpha")
    // for price and offer
    let p2 = document.createElement('p');
            p2.innerText = price;
    
    let p3 = document.createElement('p');
            p3.innerText = offer;
    
    div_1.append(p)
    div_2.append(t)
    div_3.append(p2,p3)
    
    content_div.append(div_1,div_2,div_3)
    
    child_div.append(img,content_div)
    
    // main_div.append()
    
document.getElementById("cont_1").append(child_div);
    
        });
    }

let append_2 = (data) => {

        data.forEach(({image,company,title,price,offer}) => {
        
        let child_div = document.createElement('div');
        child_div.setAttribute("class","div-3")
        child_div.setAttribute("id","main-div")
        
        let img = document.createElement('img');
            img.src = image;
        img.setAttribute("class","img-size")    
        
        let content_div = document.createElement('div');
        content_div.setAttribute("class","content") 
        
        let div_1 = document.createElement('div');
        div_1.setAttribute("class","fit") 
        // for company
        let p = document.createElement('p');
        p.innerText = company;
        
        let div_2 = document.createElement('div');
        div_2.setAttribute("class","hed") 
        
        // for title
        let t = document.createElement('h3');
        t.innerText = title;
        
        let div_3 = document.createElement('div');
        div_3.setAttribute("class","p-alpha")
        // for price and offer
        let p2 = document.createElement('p');
                p2.innerText = price;
        
        let p3 = document.createElement('p');
                p3.innerText = offer;
        
        div_1.append(p)
        div_2.append(t)
        div_3.append(p2,p3)
        
        content_div.append(div_1,div_2,div_3)
        
        child_div.append(img,content_div)
        
        // main_div.append()
        
    document.getElementById("cont_2").append(child_div);
        
            });
        }
let append_3 = (data) => {

            data.forEach(({image,company,title,price,offer}) => {
            
            let child_div = document.createElement('div');
            child_div.setAttribute("class","div-3")
            child_div.setAttribute("id","main-div")
            
            let img = document.createElement('img');
                img.src = image;
            img.setAttribute("class","img-size")    
            
            let content_div = document.createElement('div');
            content_div.setAttribute("class","content") 
            
            let div_1 = document.createElement('div');
            div_1.setAttribute("class","fit") 
            // for company
            let p = document.createElement('p');
            p.innerText = company;
            
            let div_2 = document.createElement('div');
            div_2.setAttribute("class","hed") 
            
            // for title
            let t = document.createElement('h3');
            t.innerText = title;
            
            let div_3 = document.createElement('div');
            div_3.setAttribute("class","p-alpha")
            // for price and offer
            let p2 = document.createElement('p');
                    p2.innerText = price;
            
            let p3 = document.createElement('p');
                    p3.innerText = offer;
            
            div_1.append(p)
            div_2.append(t)
            div_3.append(p2,p3)
            
            content_div.append(div_1,div_2,div_3)
            
            child_div.append(img,content_div)
            
            // main_div.append()
            
        document.getElementById("cont_3").append(child_div);
            
                });
            }
let append_4 = (data) => {

                data.forEach(({image,company,title,price,offer}) => {
                
                let child_div = document.createElement('div');
                child_div.setAttribute("class","div-3")
                child_div.setAttribute("id","main-div")
                
                let img = document.createElement('img');
                    img.src = image;
                img.setAttribute("class","img-size")    
                
                let content_div = document.createElement('div');
                content_div.setAttribute("class","content") 
                
                let div_1 = document.createElement('div');
                div_1.setAttribute("class","fit") 
                // for company
                let p = document.createElement('p');
                p.innerText = company;
                
                let div_2 = document.createElement('div');
                div_2.setAttribute("class","hed") 
                
                // for title
                let t = document.createElement('h3');
                t.innerText = title;
                
                let div_3 = document.createElement('div');
                div_3.setAttribute("class","p-alpha")
                // for price and offer
                let p2 = document.createElement('p');
                        p2.innerText = price;
                
                let p3 = document.createElement('p');
                        p3.innerText = offer;
                
                div_1.append(p)
                div_2.append(t)
                div_3.append(p2,p3)
                
                content_div.append(div_1,div_2,div_3)
                
                child_div.append(img,content_div)
                
                // main_div.append()
                
            document.getElementById("cont_4").append(child_div);
                
                    });
                }
let append_5 = (data) => {

                    data.forEach(({image,company,title,price,offer}) => {
                    
                    let child_div = document.createElement('div');
                    child_div.setAttribute("class","div-3")
                    child_div.setAttribute("id","main-div")
                    
                    let img = document.createElement('img');
                        img.src = image;
                    img.setAttribute("class","img-size")    
                    
                    let content_div = document.createElement('div');
                    content_div.setAttribute("class","content") 
                    
                    let div_1 = document.createElement('div');
                    div_1.setAttribute("class","fit") 
                    // for company
                    let p = document.createElement('p');
                    p.innerText = company;
                    
                    let div_2 = document.createElement('div');
                    div_2.setAttribute("class","hed") 
                    
                    // for title
                    let t = document.createElement('h3');
                    t.innerText = title;
                    
                    let div_3 = document.createElement('div');
                    div_3.setAttribute("class","p-alpha")
                    // for price and offer
                    let p2 = document.createElement('p');
                            p2.innerText = price;
                    
                    let p3 = document.createElement('p');
                            p3.innerText = offer;
                    
                    div_1.append(p)
                    div_2.append(t)
                    div_3.append(p2,p3)
                    
                    content_div.append(div_1,div_2,div_3)
                    
                    child_div.append(img,content_div)
                    
                    // main_div.append()
                    
                document.getElementById("cont_5").append(child_div);
                    
                        });
                    }




export {getData, append};
export { getData_1, append_1};
export { getData_2, append_2};
export { getData_3, append_3};
export { getData_4, append_4};
export { getData_5, append_5};