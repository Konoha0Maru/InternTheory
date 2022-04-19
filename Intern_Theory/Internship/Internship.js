let data = [
  {
    d1: "Develop Your Skillset",
    d2: "Taught by Industry Experts Internship",
    d3: "Certified Courses",
    d4: "Guaranteed Internship Opportunities",
    d5: "Learn Industry-Demanded Skills",
    week: "4-6 Weeks",
    img: "https://assets.interntheory.com/creative/logo.png",
    apply: "VIEW AND APPLY",
  },
  {
    d1: "Lyrics Tapping",
    d2: "Hungama Digital Media Entertainment",
    d3: "Work From Home Internship",
    d4: "Others",
    d5: "Mumbai",
    week: "4-6 Weeks",
    img: "https://assets.interntheory.com/uploads/company/logos/89155904600a1990114b3aa68c326bc2a0b517e8.jpg",
    apply: "VIEW AND APPLY",
  },
  {
    d1: "UI/UX Intern",
    d2: "Edvora",
    d3: "Part Time Internship",
    d4: "Web Design And Development",
    d5: "Greater Noida",
    week: "4-6 Weeks",
    img: "https://assets.interntheory.com/uploads/company/logos/a8332f75566bda9b8dfc6116498adfd8383275f7.jpg",
    apply: "VIEW AND APPLY",
  },
  {
    d1: "Marketing",
    d2: "BVG India",
    d3: "Full Time Internship",
    d4: "Marketing",
    d5: "Pune",
    week: "4-6 Weeks",
    img: "https://assets.interntheory.com/uploads/company/logos/63036adbec115ffbde4c5bc8f635d703e3871120.jpg",
    apply: "VIEW AND APPLY",
  },

  {
    d1: "Android Kotlin Intern",
    d2: "Edvora",
    d3: "Part Time Internship",
    d4: "Web Design And Development",
    d5: "Greater Noida",
    week: "4-6 Weeks",
    img: "https://assets.interntheory.com/uploads/company/logos/a8332f75566bda9b8dfc6116498adfd8383275f7.jpg",
    apply: "VIEW AND APPLY",
  },
];

let parent = document.getElementById("products");

function showproducts(d) {
  parent.innerHTML = null;

  d.forEach(function (product) {
    console.log(product.name);
    let main_div = document.createElement("div");
    main_div.id = "int_main_id";
    let div = document.createElement("div");
    div.id = "content";
    let img1 = document.createElement("img");

    img1.src = product.img;
    img1.id="main-img1"
    // img1.className="img-img-class"
    var p1 = document.createElement("h2");
    p1.innerHTML = product.d1;
    let p2 = document.createElement("h3");
    p2.innerHTML = product.d2;
    let p3 = document.createElement("p");
    p3.innerHTML = product.d3;
    let p4 = document.createElement("p");
    p4.innerHTML = product.d4;
    let p5 = document.createElement("h4");
    p5.innerHTML = product.d5;

    let div1 = document.createElement("div");
    div1.id = "content";

    let p7 = document.createElement("h3");

    p7.innerHTML = product.week;

    let p8 = document.createElement("button");
    p8.id = "button";

    p8.addEventListener("click", btnfun);
    p8.onclick = function () {
      newfunction(product);
    };

    // p8.onclick =window.location="

    p8.innerHTML = product.apply;

    div.append(p1, p2, p3, p4, p5);
    div1.append(p7, p8);

    parent.append(img1, div, div1);
  });
}
showproducts(data);

function btnfun() {
  console.log("here");
}
function newfunction(p) {
  window.location.href = "apply.html";
  console.log("here it's p1");
  console.log("p1", product.d1);
}
