// Get Slider Items "Array.from" "ES6 Feature"
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number String Element
let SlideNumberElement = document.querySelector("#slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");

let prevButton = document.getElementById("prev");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement("ul");

// Set Id on Created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List items based on Slides Count
for (let i = 1; i <= slidesCount; i++) {
  // Create the LI
  var paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items To The Main Ul List
  paginationElement.appendChild(paginationItem);
}

// Add the created ul element to the page
document.getElementById("indicators").appendChild(paginationElement);

// Get the new created ul
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items "Array.from" "ES6 Feature"
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop through all bullets items
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

//  Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

//  Next Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create the checker function
function theChecker() {
  // Set the slide Number
  SlideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;

  // Remove All Active Classes
  removeAllActive();

  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set active class on current pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if the current slide is the first
  if (currentSlide === 1) {
    // Add disabled class on the previous button
    prevButton.classList.add("disabled");
  } else {
    // Remove disables class from the previous button
    prevButton.classList.remove("disabled");
  }

  // Check if the current slide is the Last
  if (currentSlide === slidesCount) {
    // Add disabled class on the previous button
    nextButton.classList.add("disabled");
  } else {
    // Remove disables class from the previous button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes form images and pagination bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

// Trigger the checker Function
theChecker();
