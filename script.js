

            const slideImage = document.querySelectorAll(".slide-image");
            const slidesContainer = document.querySelector(".slides-container");
            const nextBtn = document.querySelector(".next-btn");
            const prevBtn = document.querySelector(".prev-btn");
            const navigationDots = document.querySelector(".navigation-dots");

            let numberOfImages = 10;
            let slideWidth = 1100;
            let currentSlide = 0;


            function createNavigationDots() {
            for (let i = 0; i < numberOfImages; i++) {
                const dot = document.createElement("div");
                dot.classList.add("single-dot");
                navigationDots.appendChild(dot);

                dot.addEventListener("click", () => {
                goToSlide(i);
                });
            }

            navigationDots.children[0].classList.add("active");
            }

// Next Button

            nextBtn.addEventListener("click", () => {
            if (currentSlide >= numberOfImages - 1) {
                goToSlide(0);
                return;
            }

            currentSlide++;
            goToSlide(currentSlide);
            });

// Previous Button

            prevBtn.addEventListener("click", () => {
            if (currentSlide <= 0) {
                goToSlide(numberOfImages - 1);
                return;
            }

            currentSlide--;
            goToSlide(currentSlide);
            });

// Go To Slide

            function goToSlide(slideNumber) {
            slidesContainer.style.transform =
                "translateX(-" + slideWidth * slideNumber + "px)";

            currentSlide = slideNumber;

            setActiveClass();
            }

// Set Active Class

            function setActiveClass() {
  // Set active class for Slide Image

            let currentActive = document.querySelector(".slide-image.active");
            currentActive.classList.remove("active");
            slideImage[currentSlide].classList.add("active");

  //   set active class for navigation dots

            let currentDot = document.querySelector(".single-dot.active");
            currentDot.classList.remove("active");
            navigationDots.children[currentSlide].classList.add("active");
            }

/* Camera DSLR parts */

let textBox = document.querySelector('.define-photo span');
let clickOne = document.querySelector('#btn1');
let img = document.querySelector('#dslrimage');

clickOne.addEventListener('click', () => {
    textBox.innerHTML = "<b>Precision optical viewfinder</b><br><br>With Nikon’s optical viewfinders, you see what the lens sees—without any delay and in real time. This is ideal for sports, action and low light shooting.";
    img.src = "https://www.nikonusa.com/Images/CPCAssets/dslr-rethink/img/overview/overview-hotspot-viewfinder.jpg";
});



let clickTwo = document.querySelector('#btn2');

clickTwo.addEventListener('click', () => {
    textBox.innerHTML = "<b>Ergonomic design</b><br><br> The deep, ergonomic grip design of a DSLR makes all day shooting or working with long lenses comfortable and well-balanced.";
    img.src = "https://www.nikonusa.com/Images/CPCAssets/dslr-rethink/img/overview/overview-hotspot-usability.jpg";
});


let clickThree = document.querySelector('#btn3');
clickThree.addEventListener('click', () => {
    textBox.innerHTML = "<b>Lens Compatibility</b><br><br>Nikon DSLR cameras are all designed with the same lens mount so that DX and FX lenses can be used interchangeably without the need for any adapters.";
    img.src = "https://www.nikonusa.com/Images/CPCAssets/dslr-rethink/img/overview/overview-hotspot-lens.jpg";
});



let clickFour = document.querySelector('#btn4');
clickFour.addEventListener('click', () => {
    textBox.innerHTML = "<b>Battery performance</b><br><br>DSLRs offer the ability to shoot without using an LCD or EVF (Electronic Viewfinder) to ensure nearly 3x the battery life of a camera that relies only on an LCD or EVF for composing shots.";
    img.src = "https://www.nikonusa.com/Images/CPCAssets/dslr-rethink/img/overview/overview-hotspot-battery.jpg";
});

    
/* lenses part */

//cannon

function up1() {
    alert("You like Canon Camera!");
}

function down1() {
    alert("You dont't like Canon Camera!");
}

function save1() {
    alert("Canon camera added in your saved list!");
}

//panasonic
function up2() {
    alert("You like Panasonic Camera!");
}

function down2() {
    alert("You dont't like Panasonic Camera!");
}

function save2() {
    alert("Panasonic camera added in your saved list!");
}

//nikon
function up3() {
    alert("You like Nikon Camera!");
}

function down3() {
    alert("You dont't like Nikon Camera!");
}

function save3() {
    alert("Nikon camera added in your saved list!");
}

/* sign in */
var modal = document.getElementById('id01');
 
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }