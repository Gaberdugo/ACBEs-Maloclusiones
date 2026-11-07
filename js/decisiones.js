const params = new URLSearchParams(window.location.search);

const ruta = params.get("ruta");

const flow = document.getElementById("flow");

const treeTitle = document.getElementById("treeTitle");

const arbol = ARBOLES[ruta];


/* =====================================================
   COMPROBAR QUE EXISTE EL ÁRBOL
===================================================== */

if (!arbol) {

  flow.innerHTML = `
    <p>
      No se encontró el recorrido solicitado.
    </p>
  `;

} else {

  treeTitle.textContent = arbol.titulo;

  mostrarNodo(arbol.inicio);

}


/* =====================================================
   MOSTRAR NODO
===================================================== */

function mostrarNodo(id) {

  const nodo = arbol.nodos[id];


  if (!nodo) {

    console.error("No existe el nodo:", id);

    return;

  }


  /* Limpiar pantalla, gestionar diseño y clases especiales de la tarjeta y página */
  actualizarLayoutGeneral(nodo);


  /* ===================================================
     DECISIÓN SÍ / NO
  ================================================== */

  if (nodo.tipo === "decision") {

    mostrarDecision(nodo);

    return;

  }


  /* ===================================================
     DECISIÓN CON VARIAS OPCIONES
  ================================================== */

  if (nodo.tipo === "decision_opciones") {

    mostrarOpciones(nodo);

    return;

  }


  /* ===================================================
     REMISIÓN
  ================================================== */

  if (nodo.tipo === "remision") {

    mostrarRemision(nodo);

    return;

  }


  /* ===================================================
     ACCIÓN
  ================================================== */

  if (nodo.tipo === "accion") {

    mostrarAccion(nodo);

    return;

  }

}


/* =====================================================
   GESTIÓN DE LAYOUT GENERAL (TARJETA + CLASES + IMAGEN EXTERNA)
===================================================== */

function actualizarLayoutGeneral(nodo) {
  const decisionCard = document.querySelector(".decision-card");
  const decisionPage = document.querySelector(".decision-page");
  let layoutWrapper = document.querySelector(".decision-page-layout");

  // Limpiamos y gestionamos dinámicamente las clases panorámicas
  decisionCard.className = "decision-card";
  decisionPage.className = "decision-page";

  if (nodo.clase) {
    decisionCard.classList.add(nodo.clase);
    if (nodo.clase.includes("panoramica")) {
      decisionPage.classList.add("page-panoramica");
    }
  }

  if (!layoutWrapper) {
    layoutWrapper = document.createElement("div");
    layoutWrapper.className = "decision-page-layout";
    decisionCard.parentNode.insertBefore(layoutWrapper, decisionCard);
    layoutWrapper.appendChild(decisionCard);
  }

  // Buscamos si ya existe el contenedor de imagen externa
  let contenedorImg = document.getElementById("externalImageContainer");

  if (nodo.imagen) {
    if (!contenedorImg) {
      contenedorImg = document.createElement("div");
      contenedorImg.id = "externalImageContainer";
      contenedorImg.className = "decision-image-container";
      layoutWrapper.appendChild(contenedorImg);
    }
    contenedorImg.innerHTML = `<img src="${nodo.imagen}" alt="Imagen clínica de apoyo">`;
    contenedorImg.style.display = "block";
  } else {
    if (contenedorImg) {
      contenedorImg.style.display = "none";
    }
  }

  flow.innerHTML = "";
}


/* =====================================================
   DECISIÓN SÍ / NO
===================================================== */



function mostrarDecision(nodo) {

  const contenedor =
    document.createElement("div");

  contenedor.className =
    "flow-node decision-node";


  /* -----------------------------------------------
     PREGUNTA / TÍTULO
  ----------------------------------------------- */

  const pregunta =
    document.createElement("div");

  pregunta.className =
    "flow-shape";

  pregunta.innerHTML =
    nodo.texto;

  contenedor.appendChild(pregunta);


  /* -----------------------------------------------
     DESCRIPCIÓN OPCIONAL CON HTML
  ----------------------------------------------- */

  if (nodo.descripcion) {

    const descripcion =
      document.createElement("div");

    descripcion.className =
      "flow-description";

    descripcion.innerHTML =
      nodo.descripcion;

    contenedor.appendChild(descripcion);

  }


  /* -----------------------------------------------
     BOTONES
  ----------------------------------------------- */

  const opciones =
    document.createElement("div");

  opciones.className =
    "flow-options";


  /* SÍ */

  const botonSi =
    document.createElement("button");

  botonSi.type = "button";

  botonSi.className =
    "flow-button yes-button";

  botonSi.textContent =
    "Sí";

  botonSi.addEventListener("click", () => {

    mostrarNodo(nodo.si);

  });


  /* NO */

  const botonNo =
    document.createElement("button");

  botonNo.type = "button";

  botonNo.className =
    "flow-button no-button";

  botonNo.textContent =
    "No";

  botonNo.addEventListener("click", () => {

    mostrarNodo(nodo.no);

  });


  opciones.appendChild(botonSi);

  opciones.appendChild(botonNo);

  contenedor.appendChild(opciones);


  /* -----------------------------------------------
     BOTONES PERSONALIZADOS
  ----------------------------------------------- */

  agregarBotonesPersonalizados(
    contenedor,
    nodo
  );


  /* -----------------------------------------------
     MOSTRAR NODO
  ----------------------------------------------- */

  flow.appendChild(contenedor);

}


/* =====================================================
   DECISIÓN CON VARIAS OPCIONES
===================================================== */

function mostrarOpciones(nodo) {

  const contenedor =
    document.createElement("div");

  contenedor.className =
    "flow-node decision-node";


  /* Título */

  const pregunta =
    document.createElement("div");

  pregunta.className =
    "flow-shape";

  pregunta.innerHTML =
    nodo.texto;


  contenedor.appendChild(pregunta);


  /* -----------------------------------------------
     DESCRIPCIÓN OPCIONAL CON HTML
  ----------------------------------------------- */

  if (nodo.descripcion) {

    const descripcion =
      document.createElement("div");

    descripcion.className =
      "flow-description";

    descripcion.innerHTML =
      nodo.descripcion;

    contenedor.appendChild(descripcion);

  }


  /* Opciones */

  const opciones =
    document.createElement("div");

  opciones.className =
    "flow-options";


  nodo.opciones.forEach(opcion => {

    const boton =
      document.createElement("button");

    boton.type = "button";

    boton.className =
      "flow-button";

    boton.textContent =
      opcion.texto;

    boton.addEventListener("click", () => {

      mostrarNodo(opcion.siguiente);

    });

    opciones.appendChild(boton);

  });


  contenedor.appendChild(opciones);


  /* BOTONES PERSONALIZADOS */

  agregarBotonesPersonalizados(
    contenedor,
    nodo
  );


  flow.appendChild(contenedor);

}


/* =====================================================
   REMISIÓN
===================================================== */

function mostrarRemision(nodo) {

  const contenedor =
    document.createElement("div");

  contenedor.className =
    "flow-node action-node";


  /* -----------------------------------------------
     TÍTULO DE LA REMISIÓN
  ----------------------------------------------- */

  const titulo =
    document.createElement("div");

  titulo.className =
    "action-box";


  titulo.innerHTML = `

    <div>
      ${nodo.texto}

      ${
        nodo.codigo
          ? `<strong>${nodo.codigo}</strong>`
          : ""
      }
    </div>

  `;


  contenedor.appendChild(titulo);


  /* -----------------------------------------------
     PROFESIONALES
  ----------------------------------------------- */

  nodo.opciones.forEach(opcion => {

    const tarjeta =
      document.createElement("div");

    tarjeta.className =
      "action-box";


    tarjeta.innerHTML = `

      <div>
        <strong>
          ${opcion.titulo}
        </strong>
      </div>

      <div>
        ${opcion.texto}
      </div>

    `;


    contenedor.appendChild(tarjeta);

  });


  /* -----------------------------------------------
     CONTINUAR
  ----------------------------------------------- */

  const continuar =
    document.createElement("button");

  continuar.type = "button";

  continuar.className =
    "flow-button";


  continuar.textContent =
    "Continuar";


  continuar.addEventListener("click", () => {

    mostrarNodo(nodo.siguiente);

  });


  contenedor.appendChild(continuar);


  /* BOTONES PERSONALIZADOS */

  agregarBotonesPersonalizados(
    contenedor,
    nodo
  );


  flow.appendChild(contenedor);

}


/* =====================================================
   ACCIÓN
===================================================== */

function mostrarAccion(nodo) {

  const contenedor =
    document.createElement("div");

  contenedor.className =
    "flow-node action-node";


  const accion =
    document.createElement("div");

  accion.className =
    "action-box";


  accion.innerHTML = `

    <div>
      ${nodo.texto}

      ${
        nodo.codigo
          ? `<strong>${nodo.codigo}</strong>`
          : ""
      }
    </div>

  `;


  contenedor.appendChild(accion);


  /* -----------------------------------------------
     SI HAY SIGUIENTE NODO
  ----------------------------------------------- */

  if (nodo.siguiente) {

    const continuar =
      document.createElement("button");

    continuar.type = "button";

    continuar.className =
      "flow-button";

    continuar.textContent =
      "Continuar";

    continuar.addEventListener("click", () => {

      mostrarNodo(nodo.siguiente);

    });

    contenedor.appendChild(continuar);

  }


  /* BOTONES PERSONALIZADOS */

  agregarBotonesPersonalizados(
    contenedor,
    nodo
  );


  flow.appendChild(contenedor);

}


/* =====================================================
   BOTONES PERSONALIZADOS (AGRUPADOS ARRIBA A LA DERECHA)
===================================================== */

function agregarBotonesPersonalizados(contenedor, nodo) {
  // Buscamos o creamos un contenedor flotante para los botones en la esquina superior derecha de la tarjeta
  let wrapperFlotante = document.querySelector('.decision-card > .custom-buttons-wrapper');
  
  if (!nodo.botones || nodo.botones.length === 0) {
    if (wrapperFlotante) {
      wrapperFlotante.style.display = 'none';
    }
    return;
  }

  if (!wrapperFlotante) {
    wrapperFlotante = document.createElement("div");
    wrapperFlotante.className = "custom-buttons-wrapper";
    // Estilos inline para asegurar que se posicionen juntos arriba a la derecha ordenados en fila
    wrapperFlotante.style.cssText = "position: absolute; top: 30px; right: 30px; display: flex; gap: 10px; z-index: 10;";
    document.querySelector('.decision-card').appendChild(wrapperFlotante);
  } else {
    wrapperFlotante.innerHTML = ""; // Limpiamos los botones anteriores
    wrapperFlotante.style.display = "flex";
  }

  nodo.botones.forEach(botonData => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "flow-button back-btn"; // Mantiene tus estilos de botón flotante
    boton.style.position = "static"; // Para que fluyan horizontalmente dentro del flex wrapper
    boton.style.top = "auto";
    boton.style.right = "auto";
    boton.textContent = botonData.texto;

    boton.addEventListener("click", () => {
      mostrarNodo(botonData.siguiente);
    });

    wrapperFlotante.appendChild(boton);
  });
}