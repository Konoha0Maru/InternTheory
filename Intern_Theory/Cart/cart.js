// to update the card

let cart_data = JSON.parse(localStorage.getItem("avail_data"));
console.log("Cartcart_data:", cart_data);

let opt_courses = document.getElementById("opt_courses");

let total;
total = localStorage.getItem("total");
console.log("total:", total);

if (total == null) {
  total = 0;
}

let total_amount = 0;

// setInterval(() => {
//   localStorage.setItem("totalamount", JSON.stringify(total_amount));
// }, 1000);

for (var i = 0; i < cart_data.length; i++) {
  if (cart_data[i].btn_option == "CHECKOUT >>") {
    total_amount += Number(cart_data[i].new_price);
    let opt_course = document.createElement("div");
    opt_course.setAttribute("class", "opt_courses_cart");
    opt_course.setAttribute("id", `cart_${i}`);
    opt_course.innerHTML = `
<div class="opt_courses_left">
<div id="cross" onclick="cancel(${i})"><svg
class="cross"
focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                    >
                    <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"
                      ></path>
                  </svg>

                </div>
                <div class="opt_courses_img">
                  <img
                  src=${cart_data[i].img_source}
                  />
                  </div>
                <div class="opt_courses_title">
                <h3>${cart_data[i].title}</h3>
                </div>
                </div>
              <div class="opt_courses_right">
                <p>₹ ${cart_data[i].old_price}</p>
                <h2>₹ ${cart_data[i].new_price}</h2>
                </div>
              `;
    opt_courses.append(opt_course);
  }
  localStorage.setItem("totalamount", JSON.stringify(total_amount));
}

let amount = document.getElementById("amount");
let igst = document.getElementById("igst");
let cgst = document.getElementById("cgst");
let total_cont = document.getElementById("total_cont");
let checkout_btn = document.getElementById("check_btn");
let coupon = document.getElementById("coupon");
let go = document.getElementById("go");
let updated_price = document.getElementById("updated_price");
let promo_price = document.getElementById("promo_price");
let cart_empty = document.getElementById("cart_empty");
amount.innerHTML = `₹ ${total_amount}`;
igst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
cgst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
total_cont.innerHTML = `₹ ${Math.round(total_amount * 1.18)}`;
if (total != 0) {
  checkout_btn.innerHTML = "CHECKOUT";
  coupon.style.display = "block";
  go.style.display = "inline";
  cart_empty.style.display = "none";
} else {
  cart_empty.style.display = "block";
  coupon.style.display = "none";
  go.style.display = "none";
  checkout_btn.innerHTML = "ENROLL";
}

// cancel the product from cart

function cancel(id) {
  let total = localStorage.getItem("total");
  promo_price.style.display = "none";
  let cart_data = JSON.parse(localStorage.getItem("avail_data"));
  cart_data[id].btn_option = "ADD TO CART";
  let total_amount = 0;
  for (var i = 0; i < cart_data.length; i++) {
    if (cart_data[i].btn_option == "CHECKOUT >>") {
      total_amount += Number(cart_data[i].new_price);
    }
  }
  let opt_course = document.getElementById(`cart_${id}`);
  opt_course.style.display = "none";
  let amount = document.getElementById("amount");
  let igst = document.getElementById("igst");
  let cgst = document.getElementById("cgst");
  let total_cont = document.getElementById("total_cont");
  total = Number(total) - 1;

  amount.innerHTML = `₹ ${total_amount}`;
  igst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
  cgst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
  total_cont.innerHTML = `₹ ${Math.round(total_amount * 1.18)}`;
  localStorage.setItem("total", total);
  localStorage.setItem("avail_data", JSON.stringify(cart_data));

  console.log("total:", total);

  if (total == 0) {
    let opt_cart = document.createElement("div");
    opt_cart.setAttribute("class", "opt_carts_cart");
    opt_cart.innerHTML = `<p>The cart is empty</p>
    <button onclick="online_courses()">CHECKOUT OUR COURSES</button>`;
    opt_courses.append(opt_cart);
    localStorage.clear();
  }
}

// Final payment
var body = document.querySelector("body");
function checkout_click() {
  body.innerHTML = popup();
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    console.log(button);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function debitcard() {
  window.location.href = "../payment check/debitcard.html";
}

function popup() {
  return `<div class="modal" id="modal">
  <div class="modal-header">
    <div class="title">Pay Via</div>
  </div>
  <div class="modal-body">
    <div class="paymentPage" onclick="debitcard()">
      <img src="../Images/card.png" class="card" /> CREDIT CARD
    </div>
    <div class="paymentPage">
      <img
        src="../Images/card.png"
        class="card"
        style="margin-right: 3px"
      />DEBIT CARD
    </div>
    <div class="paymentPage">NET BANKING</div>
    <div class="paymentPage">PAYTM</div>
    <div class="paymentPage">UPI</div>
    <div class="paymentPage">EMI(CREDIT CARD)</div>
  </div>
</div>
<div id="overlay"></div>`;
}
