// document.querySelector(".dat-tour").addEventListener("click", function () {
//   document.getElementById("buy").style.display = "block !important";
//   document.getElementById("type").style.display = "none !important";
// });

// document.querySelector(".lien-he").addEventListener("click", function () {
//   document.getElementById("buy").style.display = "none !important";
//   document.getElementById("type").style.display = "block !important";
// });

document.querySelector(".dat-tour").addEventListener("click", function () {
  document.getElementById("buy").style.display = "block";
  document.getElementById("type").style.display = "none";
});

document.querySelector(".lien-he").addEventListener("click", function () {
  document.getElementById("buy").style.display = "none";
  document.getElementById("type").style.display = "block";
});
