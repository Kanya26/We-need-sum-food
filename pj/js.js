//สร้างช่องใส่ input ตามจำนวนเลขที่ใส่ในรายการอาหาร
function countfood(){
    let countfood = document.getElementById("countfood").value;
    let intcf = Number(countfood);
    let divv = document.createElement("div");
    let x3 = document.createElement("input");
    x3.setAttribute("type","button");
    x3.setAttribute("onclick","countname()");
    x3.setAttribute("value","ต่อไป")
    x3.setAttribute("id","btn");
    for (i=1 ; i<=intcf ; i++){
        let x1 = document.createElement("input");
        let x2 = document.createElement("input");
        let bbrr = document.createElement("br");
        divv.setAttribute("class","container")
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
function countname(){

}