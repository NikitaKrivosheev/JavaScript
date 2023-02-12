// window.alert("1");
// window.prompt("Как тебя зовут?");
// window.confirm("как тебя зовут?");

//-------------------------------------------------------------------------------

// const heading = document.getElementById("hello");

// setTimeout(() => {
//   heading.textContent = "Changed from JavaScript!";
//   heading.style.color = "red";
//   heading.style.padding = "2rem";
//   heading.style.backgroundColor = "black";
//   heading.style.textAlign = "center";
// }, 1500);

//-------------------------------------------------------------------------------

// методы вызыва элементов

// const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2")[0];        ------- старый метод
// const heading2 = document.getElementsByClassName("h2-class")[0];      ------- старый метод

// CSS
// const heading2 = document.querySelector(".h2-class");         // или (h2)
// const heading2 = document.querySelector("#sub-hello");       // всегда 1 элемент

// const heading3 = heading2.nextElementSibling; // следующий элемент ~(среди одинаковых элементов)
// console.dir(heading3);

// const h2List = document.querySelectorAll("h2");
// console.dir(h2List);                                        // or console.log(h2List[1]) - для вывода нужного элемента
// const heading3 = h2List[h2List.length - 1];                // or = h2List[1]
// console.dir(heading3);

//-------------------------------------------------------------------------------

const heading = document.getElementById("hello");
console.dir(heading);
const heading2 = document.querySelector("h2");
console.dir(heading2);
const h2List = document.querySelectorAll("h2");
console.dir(h2List);
const heading3 = h2List[h2List.length - 1];
console.dir(heading3);

function addStylesTo(node, text, color = "#988e83", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.padding = "2rem";
  node.style.backgroundColor = "#efdecd";
  node.style.textAlign = "center";
  node.style.display = "block";
  node.style.width = "100%";
  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

setTimeout(() => {
  addStylesTo(heading, "JavaScript");
}, 1500);

setTimeout(() => {
  addStylesTo(heading2, "Практикуйся", "#706961");
}, 3000);

const link = heading3.querySelector("a"); // heading3.children[1]
link.addEventListener("click", (event) => {
  //-
  event.preventDefault(); //-
  console.log("click on link", event.target.getAttribute("href")); //-
  const url = event.target.getAttribute("href"); //-
  window.location = url; //-
}); //-
setTimeout(() => {
  addStylesTo(link, "И всё получится!", "#4a4541", "2rem");
}, 4500);

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
  if (heading.style.color == "rgb(152, 142, 131)") {
    heading.style.color = "#efdecd";
    heading.style.backgroundColor = "#c3b5a7";
  } else {
    heading.style.color = "rgb(152, 142, 131)";
    heading.style.backgroundColor = "#efdecd";
  }
  console.log("click");
};

heading2.addEventListener("dblclick", () => {
  console.log("start");
  if (heading2.style.color === "rgb(112, 105, 97)") {
    console.log(heading2.style.color);
    heading2.style.color = "#efdecd";
    heading2.style.backgroundColor = "#c3b5a7";
  } else {
    console.log("else");
    heading2.style.color = "rgb(112, 105, 97)";
    console.log(heading2.style.color);
    heading2.style.backgroundColor = "#efdecd";
  }
});
