var body = document.querySelector("body");
var sideBar = document.getElementById("sideBar");
var sidebarNav_img = document.querySelector(".sidebarNav_img");
var sidebarNav_img2 = document.querySelector(".sidebarNav_img2");
var menu = document.getElementById("menu");
var logo = document.getElementById("logo");
var header = document.getElementById("header");
var sidebarCatagoriesUL = document.getElementById("sidebarCatagoriesUL");

sideBar.style.paddingLeft = "0px";

menu.addEventListener("click", () => {
  sideBar.style.width = "300px";
  sidebarNav_img.style.display = "block";
  sidebarNav_img2.style.display = "block";
  header.style.paddingLeft = "0px";
  body.style.background = "#fafafa";
  sideBar.style.background = "white";
  sideBar.style.paddingLeft = "12px";
  sidebarCatagoriesUL.style.display = "block";
});

sidebarNav_img.addEventListener("click", () => {
  sideBar.style.width = "0px";
  sidebarNav_img.style.display = "none";
  sidebarNav_img2.style.display = "none";
  sideBar.style.paddingLeft = "0px";
  header.style.paddingLeft = "12px";
  body.style.background = "#fff";
  sidebarCatagoriesUL.style.display = "none";
});
