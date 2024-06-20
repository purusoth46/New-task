//const heading = document.querySelector("h1");
//console.log(heading);
//heading.innerText = "Purusothaman M";
// const heading = document.getElementsById("id1");
// console.log(heading);
// const squre = document.createElement("div")
// squre.setAttribute("style","width:100px;" height)
var count = 10;

const interval = setInterval(() => {
  count = count - 1;
  console.log(count);
  if (count === 0) {
    clearInterval(interval);
    setTimeout() => {
      heading.innerText = "Happy New Year"
  }
}, 1000);
