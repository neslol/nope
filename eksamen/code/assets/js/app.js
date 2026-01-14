/* Burger Menu for Mobile Navigation */
const navTag = document.querySelector("nav");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
/* Variables used to find classes such as active, etc. */

function toggleMobileNav() {
  const isNavActive = navTag.classList.toggle("active");
  /* We are making the active class a variable, so we don't have to write all of that again in the next two lines. */

  openMenuBtn.classList.toggle("hidden", isNavActive);
  closeMenuBtn.classList.toggle("hidden", !isNavActive);
  /* Both buttons toggle the hidden class, if active class is either toggled or not.*/
}

/* Gallery */
function changeImage(imgUrl, alt) {
  const largeImage = document.querySelector(".large");
  /* A variable for the large img, because of same reason on line 8 but with the large img. */

  largeImage.src = imgUrl;
  largeImage.alt = alt;
  /* We are defining what info we have gotten from the function as variables. */

  document.querySelector(".active").classList.remove("active");
  /* Find active class and remove it from image that has it. */
  document
    .querySelector(
      "img.small[src = '" + imgUrl + "']",
      "img.small[alt ='" + alt + "']"
    )
    .classList.add("active");
  /* Make the specific small image change its src and alt attributes, and then add the active class. */
}
