const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
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

document.getElementById("overlay").addEventListener("click", function () {
  window.location.href = "../Cart/cart.html";
});

document.querySelector(".close-button").addEventListener("click", function () {
  window.location.href = "../Cart/cart.html";
});

document.getElementById("verify").addEventListener("click", () => {
  window.location.href = "paymentsuccess.html";
});

document.getElementById("price").innerText = JSON.parse(
  localStorage.getItem("totalamount")
);
document.getElementById("priceDiv").innerText = JSON.parse(
  localStorage.getItem("totalamount")
);
