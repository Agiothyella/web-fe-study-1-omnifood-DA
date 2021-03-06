// ------------------------- Sticky Navigation ------------------------- //
const stickyAdd = new Waypoint({
  element: document.getElementById("features"),
  handler: function (direction) {
    document.querySelector(".sticky-waypoint").classList.toggle("sticky");
  },
  offset: "60px",
});

// ------------------------- Animations ------------------------- //
const animateFeatures = new Waypoint({
  element: document.querySelector(".features-waypoint"),
  handler: function () {
    document
      .querySelector(".features-animate")
      .classList.add("animate__fadeInUp");
  },
  offset: "bottom-in-view",
});

const animateHowTo = new Waypoint({
  element: document.querySelector(".how-to-waypoint"),
  handler: function () {
    document.querySelector(".app-animate").classList.add("animate__fadeInLeft");
    document
      .querySelector(".step-animate")
      .classList.add("animate__fadeInRight");
  },
  offset: "bottom-in-view",
});

const animateCity = new Waypoint({
  element: document.querySelector(".city-waypoint"),
  handler: function () {
    document.querySelector(".city-animate").classList.add("animate__fadeIn");
  },
  offset: "bottom-in-view",
});

const animatePlan = new Waypoint({
  element: document.querySelector(".plan-waypoint"),
  handler: function () {
    document.querySelector(".plan-animate").classList.add("animate__pulse");
  },
  offset: "bottom-in-view",
});

// ------------------------- MOBILE NAVIGATION ------------------------- //
const nav = document.querySelector(".mobile-nav-icon");

nav.addEventListener(`click`, function () {
  document.querySelector(".nav-menu").classList.toggle("hid");
  document.querySelector(".nav-close").classList.toggle("hid");
  document.querySelector(".toggle-nav").classList.toggle("mobile-nav");
  document.querySelector(".toggle-nav").classList.toggle("main-nav");
});
