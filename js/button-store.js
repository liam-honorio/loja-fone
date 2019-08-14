const btn = document.querySelector(".-second");
const compra = document.querySelector('[data-header="carrinho"]');

btn.addEventListener("click", mudaCarrinho);

function mudaCarrinho() {
  event.preventDefault();
  compra.textContent = "Mudou";
}
