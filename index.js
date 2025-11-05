const parent = document.createElement("div");
const lopa1 = document.createElement("div");
const lopa2 = document.createElement("div");

parent.classList.add("parent");
lopa1.classList.add("lopa1");
lopa2.classList.add("lopa2");

parent.appendChild(lopa1);
parent.appendChild(lopa2);
document.body.appendChild(parent);

for (let i = 0; i < 5; i++) {
  const rubrik = document.createElement("h1");
  document.querySelectorAll("h1")[3];
  rubrik.innerText = `h1 ${i + 1}`;
  lopa1.appendChild(rubrik);
  rubrik.style.fontSize = `${20 + i * 10}px`;

  
  const hue = 120 + i * 20; 


  rubrik.style.backgroundColor = `hsl(${hue}, ${68 - i * 2}%, ${82 - i * 2}%)`;

  rubrik.style.color = `hsl(220, 100%, 40%)`;
}
const allh1 = document.querySelectorAll(".lopa1 h1");



const list2 = document.createElement("ul"); // eller "ol" för numrerad lista
lopa2.appendChild(list2);
lopa2.style.display = "flex";
lopa2.style.gap = "30%";
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerText = i;
  list2.appendChild(li);
  if (i == 4) {
    li.style.backgroundColor = "lavender";
    li.style.color = "white";
  }
}

const list3 = document.createElement("ul");
lopa2.appendChild(list3);
for (let i = 9; i >= 0; i--) {
  const para = document.createElement("li");
  para.innerText = i;
  list3.appendChild(para);
    if (i === 8) {
    
    para.style.backgroundColor = "lavender";
    para.style.color = "white";
  } else if (i % 2 === 0) {
  
    para.style.backgroundColor = "black";
    para.style.color = "white";
  } else {
  
    para.style.backgroundColor = "white";
    para.style.color = "black";
  }


}

const namn = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];
const list4 = document.createElement("ul");
lopa2.appendChild(list4);
for (let x = 0; x < namn.length; x++) {
  const text = document.createElement("li");
  text.innerText = namn[x];
  list4.appendChild(text);
  if(namn[x] === 'sex'){
    text.style.backgroundColor = "lavender";
    text.style.color ="white";
  }
}
