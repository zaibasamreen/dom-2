//1. create h1 tag
//2. create 3 buttons
//3. attach handlers
//4. append all the elements to root

let rootE1 = document.getElementById("root");

let count1 = document.createElement("h1");
count1.innerHTML = 0;


let incre = document.createElement("button");
incre.setAttribute("onclick","increment()");
incre.innerText = "increment";

let decre = document.createElement("button");
decre.setAttribute("onclick","decrement()");
decre.innerText = "decrement";

let res = document.createElement("button");
res.setAttribute("onclick","reset()");
res.innerText = "reset";

rootE1.appendChild(count1);
rootE1.appendChild(incre);
rootE1.appendChild(decre);
rootE1.appendChild(res);

function increment() {

    let currentCount = count1.innerText;
    let updatedCount = parseInt(currentCount) + 1;
    count1.innerHTML = updatedCount;
}
    
function decrement(){
    
   
    let currentCount = count1.innerText;
    let updatedCount =parseInt( currentCount)-1;
   count1.innerHTML = updatedCount;
}
function reset(){
  
   count1.innerHTML = 0;
}
