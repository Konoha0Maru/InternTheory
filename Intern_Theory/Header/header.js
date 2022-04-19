var body = document.querySelector("body");
var sideBar = document.getElementById("sideBar");
var sidebarNav_img = document.querySelector(".sidebarNav_img");
var sidebarNav_img2 = document.querySelector(".sidebarNav_img2");
var menu = document.getElementById("menu");
var logo = document.getElementById("logo");
var header = document.getElementById("header");
var sidebarCatagoriesUL = document.getElementById("sidebarCatagoriesUL");
var sideBarNav = document.getElementById("sidebarNav");
var sidebarTitle = document.querySelectorAll(".sidebarTitles");
var expandableCourses = document.querySelector("#expandableCourse");
var coursesHidden = document.getElementById("coursesHidden");
var expandableRegister = document.getElementById("expandableRegister");
var expandableLogin = document.getElementById("expandableLogin");
var registerHidden = document.getElementById("registerHidden");
var loginHidden = document.getElementById("loginHidden");

sideBar.style.paddingLeft = "0px";

menu.addEventListener("click", () => {
  sideBar.style.width = "300px";
  sidebarNav_img.style.display = "block";
  sidebarNav_img2.style.display = "block";
  header.style.paddingLeft = "0px";
  body.style.background = "#fafafa";
  sideBar.style.background = "white";
  // sideBar.style.paddingLeft = "12px";
  sideBarNav.style.paddingLeft = "12px";
  sidebarCatagoriesUL.style.display = "block";
  sidebarCatagoriesUL.style.paddingLeft = "12px";
});

sidebarNav_img.addEventListener("click", () => {
  sideBar.style.width = "0px";
  sidebarNav_img.style.display = "none";
  sidebarNav_img2.style.display = "none";
  // sideBar.style.paddingLeft = "0px";
  header.style.paddingLeft = "12px";
  body.style.background = "#fff";
  sidebarCatagoriesUL.style.display = "none";
});

expandableRegister.addEventListener("click", () => {
  if (registerHidden.style.display == "block") {
    registerHidden.style.display = "none";
    expandableRegister.style.backgroundColor = "white";
  } else {
    registerHidden.style.display = "block";
    expandableRegister.style.backgroundColor = "#dcdcdc";
    registerHidden.style.backgroundColor = "white";
  }
});

expandableLogin.addEventListener("click", () => {
  if (loginHidden.style.display == "block") {
    loginHidden.style.display = "none";
    expandableLogin.style.backgroundColor = "white";
  } else {
    loginHidden.style.display = "block";
    expandableLogin.style.backgroundColor = "#dcdcdc";
    loginHidden.style.backgroundColor = "white";
  }
});

expandableCourses.addEventListener("click", () => {
  if (coursesHidden.style.display == "block") {
    coursesHidden.style.display = "none";
    expandableCourses.style.backgroundColor = "white";
  } else {
    coursesHidden.style.display = "block";
    expandableCourses.style.backgroundColor = "#dcdcdc";
    coursesHidden.style.backgroundColor = "white";
  }
});
