let rev = 0;
carousel(rev);

function previousReview() {
  rev = rev - 1;
  carousel(rev);
}

function nextReview() {
  rev = rev + 1;
  carousel(rev);
}

function carousel(review) {
  let reviews = document.getElementsByClassName("review__items");

  if (review >= reviews.length) {
    review = 0;
    rev = 0;
  }
  if (review < 0) {
    review = reviews.length - 1;
    rev = reviews.length - 1;
  }
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[review].style.display = "block";
}
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});
sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".form-container form", { delay: 800, origin: "left" });
sr.reveal(".heading", { delay: 800, origin: "top" });
sr.reveal(".ride-container .box", { delay: 600, origin: "top" });
sr.reveal(".services-container .box", { delay: 600, origin: "top" });
sr.reveal(".about-container .box", { delay: 600, origin: "top" });
sr.reveal(".reviews-container", { delay: 600, origin: "top" });
