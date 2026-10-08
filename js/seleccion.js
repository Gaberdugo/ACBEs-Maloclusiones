const optionsContainer = document.getElementById('options');

const modal = document.getElementById('definitionModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

const letters = ['A', 'B', 'C', 'D', 'E'];

MALOCUSIONES.forEach((item, i) => {

  const article = document.createElement('article');
  article.className = 'option';

  article.innerHTML = `
    <div class="option-letter">${letters[i]}</div>

    <div class="option-title">${item.titulo}</div>

    <button
      class="definition-btn"
      type="button"
      aria-label="Ver información de ${item.titulo}">
      i
    </button>

    <div class="option-arrow">›</div>
  `;

  // Al hacer clic en la opción
  article.addEventListener('click', e => {
    if (e.target.closest('.definition-btn')) return;

    window.location.href =
        "decisiones.html?ruta=" + item.id;
        
  });

  // Al hacer clic en "i"
  article.querySelector('.definition-btn').addEventListener('click', () => {

    modalTitle.textContent = item.titulo;

    // Texto de la definición
    modalText.innerHTML = '';

    // Si existe imagen, mostrarla
    if (item.imagen) {

      const img = document.createElement('img');

      img.src = item.imagen;
      img.alt = item.titulo;
      img.className = 'modal-image';

      modalText.appendChild(img);
    }

    // Agregar la descripción
    const descripcion = document.createElement('p');
    descripcion.textContent = item.descripcion;

    modalText.appendChild(descripcion);

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
  });

  optionsContainer.appendChild(article);
});


// Cerrar ventana
function hideModal() {
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

closeModal.addEventListener('click', hideModal);

modal.addEventListener('click', e => {
  if (e.target.dataset.closeModal !== undefined) {
    hideModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hideModal();
  }
});