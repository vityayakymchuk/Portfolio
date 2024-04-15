import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".footer-form");
const modal = document.querySelector(".backdrop")
const closeModalBtn = document.querySelector(".modal-close-btn");

async function createUser(user) {
  const BASE_URL = "https://portfolio-js.b.goit.study/api";
  const END_POINT = "/requests";
  const url = `${BASE_URL}${END_POINT}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const res = await fetch(url, options);
  return res.json();
}

form.addEventListener("submit", onCreateUser);
async function onCreateUser(event) {
  event.preventDefault();
  const myData = {
    email: form.elements.userEmail.value.trim(),
    comment: form.elements.userComment.value.trim(),
  }
  try {
    const newUser = await createUser(myData)
    modal.classList.remove("is-hidden"); 
  } catch (error) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      position: 'topRight',
    })
  }
  event.target.reset();
}

closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("is-hidden");
});