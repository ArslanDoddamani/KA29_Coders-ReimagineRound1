var t1 = gsap.timeline();
const p2 = document.querySelector(".p2");
const play = document.querySelector("#play");
const loader = document.querySelector(".loader");

function load(){
  loader.style.display = "none";
};

const myTimeout = setTimeout(load, 2000);


const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

t1.from(".logo , #nav-part1 h4, #nav-part2 svg", {
  y: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.7,
});

t1.from(".hero1 h1, .hero1 h2", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});

t1.from(".bigCircle", {
  rotate: "180deg",
  x: 900,
  duration: 1.2,
});

t1.from(".b1", {
  scale: 0,
  duration: 0.8,
});

t1.from(".bike1", {
  scale: 0,
  stagger: 0.3,
  duration: 0.8,
});

t1.from(".hero1 .btn div, .hero1 .sale h3", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});

Shery.makeMagnet("#nav-part1 h4, #nav-part2 svg", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1.5,
});

let t2 = gsap.timeline();
p2.addEventListener("mouseenter", () => {
  p2.style.cursor = "none";

  p2.addEventListener("mousemove", (e) => {
    gsap.to("#play", {
      left: e.x,
      top: e.y,
    });
  });
  p2.addEventListener("click", () => {
    document.querySelector("#vid").style.display = "block";
    p2.style.cursor = "auto";
  });
});

p2.addEventListener("mouseleave", (e) => {
  gsap.to("#play", {
    left: "5%",
    top: "15%",
  });
  document.querySelector("#vid").style.display = "none";
});


const rangeSlider = document.querySelectorAll(".distance-slider");
const sliderValue = document.querySelectorAll(".slider-value");

rangeSlider.forEach((slider ,idx)=> {
  slider.addEventListener("input", function () {
    const value = this.value;
    sliderValue[idx].textContent = value;
    if (value <= 6) {
      sliderValue[idx].style.left = `2%`;
    } else if (value >= 80) {
      sliderValue[idx].style.left = `80%`;
    } else {
      sliderValue[idx].style.left = `calc(${value}% - 20px)`; // Adjust the position based on the value
    }
    this.style.background = `linear-gradient(to right, #FB8500 0%, #FB8500 ${value}%, #FDCE99 ${value}%, #FDCE99 100%)`;
    var petrolCost = (value * 1.5).toFixed(2); // Example cost calculation
    var revampCost = (value * 0.17).toFixed(2); // Example cost calculation
    var totalSavings = (petrolCost - revampCost).toFixed(2);
    document.getElementById("petrol").innerText = "₹ " + petrolCost;
    document.getElementById("revamp").innerText = "₹ " + revampCost;
    document.getElementById("total-savings").innerText = "₹ " + totalSavings;
  });
});

let dots = document.querySelectorAll(".dot");
let color = document.querySelector(".color-name");
let name = document.querySelector("#bikeName");
let image = document.querySelector(".p5-part2 img");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => (d.style.border = "none"));
    if (dot.id === "1") {
      color.textContent = "Billionaire Blue";
      dot.style.border = "3px solid rgba(0, 0, 0, 0.454)";
      name.style.color = "#4488C8";
      image.src = "./asset/blue-buddie.png";
    } else if (dot.id === "2") {
      color.textContent = "Royal Red";
      dot.style.border = "3px solid rgba(0, 0, 0, 0.454)";
      name.style.color = "#EF3A4F";
      image.src = "./asset/red-buddie.png";
    } else if (dot.id === "3") {
      color.textContent = "Grand Grey";
      dot.style.border = "3px solid rgba(0, 0, 0, 0.454)";
      name.style.color = "#76797b";
      image.src = "./asset/grey-buddie.png";
    } else if (dot.id === "4") {
      color.textContent = "Wealthy White";
      dot.style.border = "3px solid rgba(0, 0, 0, 0.454)";
      name.style.color = "#e5e5e5";
      image.src = "./asset/white-buddie.png";
    } else if (dot.id === "5") {
      color.textContent = "Oscar Orange";
      dot.style.border = "3px solid rgba(0, 0, 0, 0.454)";
      name.style.color = "#f57e35";
      image.src = "./asset/orange-buddie.png";
    }
  });
});

let v1 = document.querySelector(".v1");
let video1 = document.querySelector(".video1");
let v1_h1 = document.querySelector(".v1 h1");
let v1_h2 = document.querySelector(".v1 h2");

v1.addEventListener("mouseover", () => {
  v1.style.border = "3px solid #FB8500";
  video1.style.opacity = "1";
  video1.play();
  video1.controls = true;
  video1.setAttribute("controlsList", "nodownload");
  v1_h1.style.opacity = "0";
  v1_h2.style.opacity = "0";
});

v1.addEventListener("mouseout", () => {
  v1.style.border = "2px solid #7E7D7D";
  video1.pause();
  video1.controls = false;
  video1.style.opacity = "0.2";
  v1_h1.style.opacity = "1";
  v1_h2.style.opacity = "1";
});

let v2 = document.querySelector(".v2");
let video2 = document.querySelector(".video2");
let v2_h1 = document.querySelector(".v2 h1");
let v2_h2 = document.querySelector(".v2 h2");

v2.addEventListener("mouseover", () => {
  v1.classList.remove("v1");
  v1_h1.classList.remove("v1_h1");
  v1_h2.classList.remove("v1_h2");

  v1.classList.add("v2");
  v1_h1.classList.add("v2_h1");
  v1_h2.classList.add("v2_h2");

  v2.classList.remove("v2");
  v2_h1.classList.remove("v2_h1");
  v2_h2.classList.remove("v2_h2");

  v2.classList.add("v1");
  v2_h1.classList.add("v1_h1");
  v2_h2.classList.add("v1_h2");

  video2.classList.remove("video2");
  video2.classList.add("video1");
  video1.classList.remove("video1");
  video1.classList.add("video2");

  v2.style.border = "3px solid #FB8500";
  video2.style.opacity = "1";
  video2.play();
  video2.controls = true;
  video2.setAttribute("controlsList", "nodownload");
  v2_h1.style.opacity = "0";
  v2_h2.style.opacity = "0";
});

v2.addEventListener("mouseout", () => {
  v1.classList.remove("v2");
  v1_h1.classList.remove("v2_h1");
  v1_h2.classList.remove("v2_h2");

  v1.classList.add("v1");
  v1_h1.classList.add("v1_h1");
  v1_h2.classList.add("v1_h2");

  v2.classList.remove("v1");
  v2_h1.classList.remove("v1_h1");
  v2_h2.classList.remove("v1_h2");

  v2.classList.add("v2");
  v2_h1.classList.add("v2_h1");
  v2_h2.classList.add("v2_h2");

  video2.classList.remove("video1");
  video2.classList.add("video2");
  video1.classList.remove("video2");
  video1.classList.add("video1");

  v2.style.border = "2px solid #7E7D7D";
  video2.pause();
  video2.controls = false;
  video2.style.opacity = "0.2";
  v2_h1.style.opacity = "1";
  v2_h2.style.opacity = "1";
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const isOpen = element.classList.contains("open");

  document.querySelectorAll(".faq-answer").forEach((answer) => {
    answer.style.display = "none";
  });

  document.querySelectorAll(".faq-question").forEach((question) => {
    question.classList.remove("open");
  });

  if (!isOpen) {
    answer.style.display = "block";
    element.classList.add("open");
  }
}

const faq = document.querySelectorAll(".faq-question");

faq.forEach((question) => {
  question.addEventListener("click", () => {
    toggleAnswer(question);
  });
});

const p1Images = document.querySelectorAll(".p1-img img"); // Select individual image
const itemName = document.querySelector("#itemName");
const itemPrice = document.querySelector("#itemPrice");
const itemImage = document.querySelector("#itemImage");

p1Images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    p1Images.forEach((img) => {
      img.classList.remove("active");
    });
    itemImage.src = "./asset/Blue_Seat.png";
    itemName.textContent = "RM Buddie 25";
    itemPrice.textContent = "₹69,999";
  });
  img.addEventListener("click", () => {
    p1Images.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");
    if (img.id === "Carrier") {
      itemImage.src = "./asset/Blue_Carrier.png";
      itemName.textContent = "Carrier";
      itemPrice.textContent = "₹71,898";
    } else if (img.id === "Flat_Rack") {
      itemImage.src = "./asset/Blue_Flat_Rack.png";
      itemName.textContent = "Flat Rack";
      itemPrice.textContent = "₹71,648";
    } else if (img.id === "Hotkeep") {
      itemImage.src = "./asset/Blue_HotKeep.png";
      itemName.textContent = "Hot Keep";
      itemPrice.textContent = "₹89,999";
    } else if (img.id === "InsulatedBag") {
      itemImage.src = "./asset/Blue_Insulated_Bag.png";
      itemName.textContent = "Insulated Bag";
      itemPrice.textContent = "₹72,098";
    } else if (img.id === "bag") {
      itemImage.src = "./asset/Blue_Saddle_Bag.png";
      itemName.textContent = "Saddle Bag";
      itemPrice.textContent = "₹73,749";
    } else if (img.id === "InsulatedBox") {
      itemImage.src = "./asset/Blue_Insulated_Box.png";
      itemName.textContent = "Insulated Box";
      itemPrice.textContent = "₹72,498";
    }
  });
});
