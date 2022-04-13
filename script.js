const buttons = document.querySelectorAll(".btn")
const modal = document.querySelector(".modal-wrapper")
const modalInner = document.querySelector(".modal-inner")
const body = document.querySelector("body")
const element = document.querySelector("#element")

// click event
buttons.forEach((button) => {
  button.addEventListener("click", revealModal)
})
// close click event
element.addEventListener("click", closeModal)

function revealModal(e) {
  const card = e.currentTarget.closest(".cell")
  const img = card.children[0].src
  const alt = card.children[0].alt
  console.log(img)
  modal.classList.add("open")
  body.classList.add("body-modal-open")

  // html
  const html = `
    <img src="${img}" alt="${alt}" >
  `
  modalInner.innerHTML = html
}

function closeModal() {
  modal.classList.remove("open")
  body.classList.remove("body-modal-open")
}
