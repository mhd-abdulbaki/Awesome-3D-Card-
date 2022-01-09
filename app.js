// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Animation Event

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.cssText = `transform:rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animation In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform='translateZ(150px)'
  sneaker.style.transform='translateZ(100px) rotateZ(-20deg)'
  description.style.transform='translateZ(120px)'
  purchase.style.transform='translateZ(100px)'
  sizes.style.transform='translateZ(70px)'
});

// Animation Out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all .8s ease";

  title.style.transform='translateZ(0px)'
  sneaker.style.transform='translateZ(0px) rotateZ(0deg)'
  description.style.transform='translateZ(0px)'
  purchase.style.transform='translateZ(0px)'
  sizes.style.transform='translateZ(0px)'
});


