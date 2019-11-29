// add the item

function additem(){
    var item = document.getElementById("item").value;
    if(item == ""){
        alert("Please enter something"); 
    }
    else{
    var div = document.createElement("div"); // create the div to store item.
    var para = document.createElement("p"); // create a paragraph to store the text
    var rembtn = document.createElement("button"); // create a button to remove the item
    rembtn.textContent = "Remove"; // set value inside the button
    div.setAttribute("class","list-item") // set class to style it
    para.textContent = item;
    rembtn.setAttribute("onclick","remitem()");
    var list = document.getElementById("list-container");
    list.appendChild(div);
    div.appendChild(para);
    div.appendChild(rembtn);
}}

// remove item
function remitem(){
    event.target.parentElement.remove();
}