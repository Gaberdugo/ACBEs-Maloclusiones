const params = new URLSearchParams(window.location.search);

const ruta = params.get("ruta");
const nodoUrl = params.get("nodo"); // Captura si especificamos un nodo de inicio al cambiar de árbol

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

  // Si viene un nodo en la URL lo usa, de lo contrario arranca en el inicio por defecto
  const nodoInicio = nodoUrl || arbol.inicio;
  mostrarNodo(nodoInicio);

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
     CONTINUAR (Soporta siguiente y cambio de árbol con siguienteArbol)
  ----------------------------------------------- */

  if (nodo.siguienteArbol || nodo.siguiente) {

    const continuar =
      document.createElement("button");

    continuar.type = "button";

    continuar.className =
      "flow-button";

    continuar.textContent =
      "Continuar";

    continuar.addEventListener("click", () => {
      if (nodo.siguienteArbol) {
        const destinoRuta = nodo.siguienteArbol.ruta;
        const destinoNodo = nodo.siguienteArbol.nodo || "";
        window.location.href = `?ruta=${destinoRuta}${destinoNodo ? '&nodo=' + destinoNodo : ''}`;
      } else {
        mostrarNodo(nodo.siguiente);
      }
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
     SI HAY SIGUIENTE NODO O SALTO DE ÁRBOL
  ----------------------------------------------- */

  if (nodo.siguienteArbol || nodo.siguiente) {

    const continuar =
      document.createElement("button");

    continuar.type = "button";

    continuar.className =
      "flow-button";

    continuar.textContent =
      "Continuar";

    continuar.addEventListener("click", () => {
      // Verificamos si hay salto a otro árbol
      if (nodo.siguienteArbol) {
        const destinoRuta = nodo.siguienteArbol.ruta;
        const destinoNodo = nodo.siguienteArbol.nodo || "";
        window.location.href = `?ruta=${destinoRuta}${destinoNodo ? '&nodo=' + destinoNodo : ''}`;
      } else {
        mostrarNodo(nodo.siguiente);
      }
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
   BOTONES PERSONALIZADOS (VOLVER ARRIBA, OTROS ORDENADOS)
===================================================== */

function agregarBotonesPersonalizados(contenedor, nodo) {
  let btnVolverFlotante = document.querySelector('.decision-card > .flow-button.back-btn');
  let wrapperExtras = document.querySelector('.decision-card > .extra-buttons-wrapper');

  if (!nodo.botones || nodo.botones.length === 0) {
    if (btnVolverFlotante) btnVolverFlotante.style.display = 'none';
    if (wrapperExtras) wrapperExtras.remove();
    return;
  }

  // Creamos el botón "Volver" flotante si no existe
  if (!btnVolverFlotante) {
    btnVolverFlotante = document.createElement("button");
    btnVolverFlotante.type = "button";
    btnVolverFlotante.className = "flow-button back-btn";
    document.querySelector('.decision-card').appendChild(btnVolverFlotante);
  }

  // Creamos un contenedor limpio para los botones adicionales (si hay más de uno o son largos)
  if (!wrapperExtras) {
    wrapperExtras = document.createElement("div");
    wrapperExtras.className = "extra-buttons-wrapper";
    wrapperExtras.style.cssText = "display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 25px; width: 100%;";
  } else {
    wrapperExtras.innerHTML = "";
  }

  let tieneVolver = false;
  let tieneExtras = false;

  nodo.botones.forEach(botonData => {
    if (botonData.texto.toLowerCase() === "volver") {
      tieneVolver = true;
      btnVolverFlotante.textContent = botonData.texto;
      btnVolverFlotante.style.display = "block";
      
      btnVolverFlotante.onclick = () => {
        mostrarNodo(botonData.siguiente);
      };
    } else {
      tieneExtras = true;
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "flow-button";
      boton.textContent = botonData.texto;

      boton.addEventListener("click", () => {
        mostrarNodo(botonData.siguiente);
      });

      wrapperExtras.appendChild(boton);
    }
  });

  if (!tieneVolver) {
    btnVolverFlotante.style.display = "none";
  }

  // Si hay botones extra (como los nombres de los aparatos), los insertamos al inicio del flujo dentro de la tarjeta
  if (tieneExtras) {
    const decisionCard = document.querySelector('.decision-card');
    // Los insertamos antes de que empiece el contenido de flujo para que queden organizados arriba de todo
    decisionCard.insertBefore(wrapperExtras, flow);
  } else {
    wrapperExtras.remove();
  }
}