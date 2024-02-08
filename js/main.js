let content = document.querySelector(".cards")

console.log(content)


content.addEventListener("click", function (event) {
  const target = event.target

  if (target.classList.contains("bxs-trash")) {
    const producto = target.closest('.card');
    content.removeChild(producto)
    let arrayProducto = document.querySelectorAll(".card")
    if (arrayProducto.length < 1) {
      location.href = "carritoVacio.html";
    }
  }
})