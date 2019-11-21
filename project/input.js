function countfood(){
    let countfood = document.getElementById("countfood").value;
    let intcf = Number(countfood);
    let divv = document.createElement("div");
    let x3 = document.createElement("input");
    x3.setAttribute("type","button");
    x3.setAttribute("onclick","nameeee()");
    x3.setAttribute("value","ต่อไป")
    x3.setAttribute("id","btn");
    for (i=1 ; i<=intcf ; i++){
        let x1 = document.createElement("input");
        let x2 = document.createElement("input");
        let bbrr = document.createElement("br");
        divv.setAttribute("class","container");
        x1.setAttribute("type","text");
        x1.setAttribute("id","menu"+i);
        x1.setAttribute("placeholder","ชื่อเมนู");
        x2.setAttribute("type","number");
        x2.setAttribute("id","price"+i);
        x2.setAttribute("placeholder","ราคา");
        divv.appendChild(x1);
        divv.appendChild(x2);
        divv.appendChild(bbrr);
        document.body.appendChild(divv);
    }
    
    document.body.appendChild(x3);
}

function nameeee(){
    let text = document.createTextNode("จำนวนคน : ");
    let ip1 = document.createElement("input");
    let ip2 = document.createElement("input");
    ip1.setAttribute("type","number");
    ip1.setAttribute("id","countname");
    ip2.setAttribute("type","button");
    ip2.setAttribute("value","ต่อไป");
    ip2.setAttribute("onclick","createname()");
    let p = document.createElement("p");
    let divv = document.createElement("div");
    divv.setAttribute("class","container");
    p.appendChild(text);
    p.appendChild(ip1);
    p.appendChild(ip2);
    divv.appendChild(p);

    document.body.appendChild(divv);
}


function createname(){
    let count = document.getElementById("countname").value;
    let divv = document.createElement("div");
    let x2 = document.createElement("input");
    divv.setAttribute("class","container");
    x2.setAttribute("type","button");
    x2.setAttribute("value","ต่อไป");
    x2.setAttribute("onclick","select()");
    x2.setAttribute("id","btn3")
    for (i=1;i<=count;i++){
        let bbrr = document.createElement("br");
        let x1 = document.createElement("input");
        
        x1.setAttribute("type","text");
        x1.setAttribute("id","name"+i);
        x1.setAttribute("placeholder","ชื่อ");
        
        divv.appendChild(x1);
        divv.appendChild(bbrr);
    }
    divv.appendChild(x2);
    document.body.appendChild(divv);
}
