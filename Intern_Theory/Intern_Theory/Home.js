// document.getElementById("S_button").addEventListener("click",helfun)
// function helfun(){
//     console.log("here")
//    var S_Search =document.getElementById("S_Search").value;
//    var city1= document.getElementById("city1").value;

//    var type = document.getElementById("city").value;

//    if(S_Search===""){
//        alert("Please Enter What kind of job you Want ")
//    }else{
//        window.location.href="https://www.google.com/"
//    }
//    console.log("city1",city1, "S-search",S_Search,"Type", type)
// }

// the header js code

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

let div = document.getElementById("div1");

function myFunction() {
  let div = document.getElementById("div1");
  div.innerHTML = `  <ul id="myUL">
    <li><input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Delhi</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Hydrabad</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Kanpur</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Goa</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Ptna</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Christina</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Lucknow</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Orrisa</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Kolkata</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">JaiPur</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag"> Agra</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Mumbai</a></li>
    <li> <input type="checkbox"> <a href="../Internship/internship.html" class="class-class-a-tag">Bangalore</a></li>

  </ul>

  `;
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function remove() {
  div.innerHTML = "";
}
