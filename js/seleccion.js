const optionsContainer = document.getElementById('options');

const modal = document.getElementById('definitionModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

const letters = ['A', 'B', 'C', 'D', 'E'];

MALOCUSIONES.forEach((item, i) => {

  const article = document.createElement('article');
  article.className = 'option';

  // 🟢 Quitamos el botón de la "i" y dejamos solo Letra, Título y Flecha
  article.innerHTML = `
    <div class="option-letter">${letters[i]}</div>
    <div class="option-title">${item.titulo}</div>
  `;

  // Al hacer clic en la opción completa
  article.addEventListener('click', () => {
    window.location.href = "decisiones.html?ruta=" + item.id;
  });

  optionsContainer.appendChild(article);
});


// Cerrar ventana (se mantiene por si acaso usas el modal en otra parte)
function hideModal() {
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

if (closeModal) closeModal.addEventListener('click', hideModal);

if (modal) {
  modal.addEventListener('click', e => {
    if (e.target.dataset.closeModal !== undefined) {
      hideModal();
    }
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hideModal();
  }
});