let nav = document.querySelector(".container-animation-menu");
let items = document.querySelectorAll(".animation-menu li");

items.forEach((item) => {
  item.onclick = () => {
    let oldActive = nav.querySelector(".active");
    if (oldActive) oldActive.classList.remove("active");
    item.classList.add("active");
    // nav.Style.setProperty("--position-x-active", item.offsetLeft + "px");
  };
});
let itemActive = nav.querySelector(".active");
// if (itemActive)
//   nav.Style.setProperty("--position-x-active", itemActive.offsetLeft + "px");

document.getElementById("a99").addEventListener("click", function () {
  document.querySelector(".circle").style.left = "112px";
});

document.getElementById("a88").addEventListener("click", function () {
  document.querySelector(".circle").style.left = "16px";
});

document.getElementById("a00").addEventListener("click", function () {
  document.querySelector(".circle").style.left = "209px";
});

document.getElementById("a99").addEventListener("click", function () {
  document.getElementById("b50").style.display = "flex";
  document.getElementById("b90").style.display = "none";
  document.getElementById("b40").style.display = "none";
});

document.getElementById("a88").addEventListener("click", function () {
  document.getElementById("b50").style.display = "none";
  document.getElementById("b90").style.display = "flex";
  document.getElementById("b40").style.display = "none";
});

document.getElementById("a00").addEventListener("click", function () {
  document.getElementById("b50").style.display = "none";
  document.getElementById("b90").style.display = "none";
  document.getElementById("b40").style.display = "flex";
});
