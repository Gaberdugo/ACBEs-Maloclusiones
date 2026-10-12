const ARBOLES = {

  mordida_cruzada_posterior: {

    titulo: "",

    inicio: "presentacion",

    nodos: {

      presentacion: {

        tipo: "decision_opciones",

        texto: "Mordida cruzada posterior en dentición mixta o decidua",
        
        opciones: [

          {
            texto: "Definiciones",

            siguiente: "definicion"

          },

          {
            texto: "Materiales e insumos",

            siguiente: "materiales"

          },

          {
            texto: "Arbol de decisiones",

            siguiente: "habitos"

          }

        ]

      },

      definicion: {

        tipo: "accion",

        texto: "<Strong>Mordida cruzada posterior en dentición mixta o decidua</Strong>"
        
        +

        "<br><br><img src='./image/im53.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><Strong>Mordida cruzada posterior bilateral</Strong>"

        +

        "<br><br>Esta maloclusión afecta ambas hemiarcadas del maxilar. Su origen puede ser esquelético en casos donde el maxilar posee un pobre desarrollo en el plano horizontal con respecto a la mandíbula, siendo el caso más frecuentemente presentado en este tipo de mordida cruzada, o por un crecimiento excesivo de la mandíbula en sentido transversal aunque este último es poco frecuente; por otro lado puede ser de origen dentoalveolar con un componente en los rebordes alveolares propiamente dichos debido a una discrepancia transversal del maxilar, pero este caso es menos reportado."

        +

        "<br><span class='cita-biblio'>Canut Brusola JA. Ortodoncia clínica y terapéutica. 2a ed. España: Masson; 2005.</span>"

        +

        "<br><br><Strong>Mordida cruzada posterior unilateral</Strong>"

        +

        "<br><br>Este tipo de mordida afecta una hemiarcada y su origen puede ser dental, con el desplazamiento hacia palatino de los premolares y molares superiores o hacia vestibular de los premolares y molares inferiores; o de origen esquelético con alteración en la formación de una hemiarcada maxilar o una asimetría mandibular en conjunto con un laterognatismo; desviación mandibular permanente hacia uno de los lados de la línea media."

        +

        "<br><span class='cita-biblio'>de Carvalho Barbosa PB, Santos PL, De Carli JP, Luiz de Freitas PH, Pithon MM, Paranhos LR. Aesthetic facial perception and need for intervention in laterognathism in women of different ethnicities. J Cranio-Maxillo-fac Surg Off Publ Eur Assoc Cranio-Maxillo-fac Surg. octubre de 2017;45(10):1600–6.</span>"

        +

        "<br><br><Strong>Mordida cruzada posterior monodentaria</Strong>"

        +

        "<br><br>Su presencia puede darse debido a una falta de espacio en el maxilar, provocando la erupción ectópica de premolares y molares hacia palatino.Adicionalmente, las mordidas cruzadas posteriores pueden clasificarse según la extensión de dientes afectados."

        +

        "<br><span class='cita-biblio'>Yezioro S, Forero A, Guevara S. Guía de Atención de Mordidas Cruzadas. Fund HOMI- Hosp Pediátrico Misericordia. 2016;17.</span>"

        +

        "<br><br><Strong>Hipoplasia del maxilar</Strong>"

        +

        "<br><br>Presentada por un maxilar estrecho en el plano horizontal con un desarrollo normal de la mandíbula. En este caso se puede observar una constricción del maxilar con apiñamiento dentario y con protrusión de la zona incisiva."

        +

        "<br><br><Strong>Hiperplasia mandibular</Strong>"

        +

        "<br><br>Un caso poco presentado donde la mandíbula excede al maxilar en desarrollo no solo transversal sino también anteroposterior, por lo cual se observa más en pacientes con relaciones esqueléticas clase III, siendo el componente sagital el más afectado en lugar del transversal, requiriendo una intervención quirúrgica para su corrección. Cabe aclarar que se puede presentar un cuadro clínico con la asociación entre un maxilar estrecho y un hiperdesarrollo de la mandíbula."

        +

        "<br><br><Strong>Síndromes malformativos</Strong>"

        +

        "<br><br>donde adicional a la discrepancia de tamaño de los maxilares se presentan otros cuadros sindrómicos como en los casos del Síndrome de Robin,acondroplasia, Microsomía Hemifacial,entre otras."

        +

        "<br><span class='cita-biblio'>Canut Brusola JA. Ortodoncia clínica y terapéutica. 2a ed. España: Masson; 2005.</span>"

        ,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      materiales: {

        tipo: "accion",

        clase: "decision-card-panoramica",

        texto: "<Strong>Materiales para mordida cruzada posterior en dentición mixta o decidua</Strong>"
        
        +

        "<br><br><img src='./image/materialesE.png' class='img-tabla-gigante-real'>"
        
        ,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      habitos: {

        tipo: "decision",

        texto: "¿Paciente presenta hábitos?",

        imagen: "./image/mordida1_2.png",

        si: "remision_5a",

        no: "origen_mordida",

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      remision_5a: {

        tipo: "remision",

        texto: "<strong>Realizar remisión</strong>"
        
        +
        
        "<br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>."
        
        +

        "<br>Los hábitos son un factor etiológico importante en el desarrollo de la mordida cruzada posterior, en particular, el hábito de succión. Este es un factor relevante en la etiología ya que puede influir en el desarrollo de la maloclusión. Entre los factores sugeridos en la etiología de la mordida cruzada se incluye la succión del pulgar, la cual ha demostrado que si se realiza su suspensión al menos 6 meses podría conducir a una corrección espontánea de la mordida cruzada. Sin embargo, en los estudios donde este hábito fue eliminado, no se observó una corrección espontánea de la mordida cruzada posterior en los grupos de control no tratados, lo que refuerza la necesidad de intervención ortodóncica y subraya la importancia de su eliminación antes de iniciar el tratamiento para evaluar la eficacia real de los aparatos ortodóncicos."
        
        +
        
        "<br><span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
        ,

        imagen: "./image/mordida1_3.png",

        opciones: [

          {
            titulo: "Otorrinolaringología",

            texto:
              "Si presenta problemas relacionados con nariz, garganta o estructuras adyacentes."
          },

          {
            titulo: "Fonoaudiología",

            texto:
              "Si presenta problemas relacionados con la deglución o con la función labial."
          }

        ],

        siguiente: "origen_mordida",

        botones: [

          {
            texto: "Volver",
            siguiente: "habitos"
          }

        ]

      },

      origen_mordida: {

        tipo: "decision_opciones",

        texto: "Origen de la mordida cruzada posterior",

        imagen: "./image/mordida1_6.png",
        
        opciones: [

          {
            texto: "Dental",

            siguiente: "dental"

          },

          {
            texto: "Dentoalveolar",

            siguiente: "dentoalveolar"

          },

          {
            texto: "Esquelética",

            siguiente: "esqueletica"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "habitos"
          }

        ]

      },

      dental: {

        tipo: "accion",

        texto: "<Strong>Origen dental</Strong>",

        imagen: "./image/mordida1_7.png",
        
        siguiente: "acepta_plan",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen_mordida"
          }

        ]

      },

      dentoalveolar: {

        tipo: "accion",

        texto: "<Strong>Origen dentoalveolar</Strong>",

        imagen: "./image/mordida1_8.png",
        
        siguiente: "acepta_plan",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen_mordida"
          }

        ]

      },

      esqueletica: {

        tipo: "decision_opciones",

        texto: "Esquelética",

        imagen: "./image/mordida1_9.png",
        
        opciones: [

          {
            texto: "Maxilar",

            siguiente: "maxilar"

          },

          {
            texto: "Mandíbula",

            siguiente: "mandibula"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "origen_mordida"
          }

        ]

      },

      maxilar: {

        tipo: "accion",

        texto: "<Strong>Asociado al maxilar</Strong>",

        imagen: "./image/mordida1_10.png",

        siguiente: "acepta_plan",

        botones: [

          {
            texto: "Volver",
            siguiente: "esqueletica"
          }

        ]

      },

      mandibula: {

        tipo: "accion",

        texto: "<strong>Asociado a la mandíbula</strong><br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>"
        
        +
        
        "<br>Al sospechar de una hiperplasia o algún síndrome craneofacial como origen de la mordida cruzada, se recomienda remitir al posgrado de ortodoncia para su adecuado diagnóstico y tratamiento; ya que la formación de los estudiantes de pregrado no incluye manejo de anomalías dentofaciales."
        
        +
        
        "<br><span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
        ,

        imagen: "./image/mordida1_11.png",
        
        siguiente: "postgrado",

        botones: [

          {
            texto: "Volver",
            siguiente: "esqueletica"
          }

        ]

      },

      postgrado: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/mordida1_12.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion"
          }

        ]

      },

      acepta_plan: {

        tipo: "decision",

        texto: "¿Paciente y acudiente aceptan el plan de tratamiento?",

        imagen: "./image/mordida1_13.png",
        
        si: "plan_aceptado",

        no: "no_acepta_plan"

      },

      no_acepta_plan: {

        tipo: "accion",

        texto: "<strong>Informar que la mordida cruzada posterior no se autocorrige</strong> <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br><Strong>Paciente no apto para ser atendido en pregrado por decisión propia</Strong>"
        
        + 
        
        "<br>Los estudios con grupos de control no tratados muestran que la mordida cruzada posterior no se corrige de forma espontánea en pacientes que no presentan hábitos de succión (como chuparse el dedo) y que el crecimiento natural del maxilar no es suficiente para resolver esta maloclusión de manera autónoma. Debido a la ausencia de autocorrección, la mordida cruzada posterior requiere el uso de aparatos ortodónticos, como el quad-helix (QH), la placa de expansión (EP) o la expansión maxilar rápida (RME), que demostraron ser efectivos en la mayoría de los casos con tasas de éxito cercanas al 100%."
        
        +
        
        "<br><span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"
        
        +

        "<br><br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span> Los resultados muestran que los cambios naturales en el área de superficie palatina, el área de proyección palatina y el volumen de la placa palatina fueron mínimos, con un aumento de la anchura del paladar de entre 0,3 y 0,6 mm atribuido al crecimiento natural durante el período de observación de un año. Esto indica que la mordida cruzada posterior no se autocorrige de manera significativa sin tratamiento en la dentición mixta durante este período. Además la referencia indica que los niños con mordida cruzada posterior presentaban, antes del tratamiento, una superficie palatina y un área de proyección significativamente menores en comparación con un grupo de oclusión normal, y estas diferencias no se normalizaron o igualaron durante el año de observación. En resumen se debe realizar un tratamiento ortodóncico temprano para evitar efectos negativos de la mordida cruzada posterior en el crecimiento y desarrollo de la mandíbula y los dientes."
        
        +
        
        "<br><span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
        ,

        imagen: "./image/mordida1_14.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "acepta_plan"
          }

        ]

      },

      plan_aceptado: {

        tipo: "decision_opciones",

        texto: "Elección del tipo de expansión",

        imagen: "./image/mordida1_15.png",
        
        opciones: [

          {
            texto: "Expansión maxilar lenta",

            siguiente: "expansion_lenta"

          },

          {
            texto: "Expansión maxilar rápida",

            siguiente: "expansion_rapida"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "acepta_plan"
          }

        ]

      },

      expansion_lenta: {

        tipo: "accion",

        texto: "<strong>Expansión maxilar lenta</strong><br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>"
        
        +

        "<br>La expansión maxilar lenta implica la aplicación de fuerzas suaves y continuas para expandir el arco maxilar de forma gradual, generando menor resistencia tisular en las estructuras circunmaxilares, favorece una mejor formación ósea en las suturas intermaxilares y menor probabilidad de complicaciones como dolor, recidiva o efectos adversos en la articulación temporomandibular, lo que contribuye a resultados más estables, con una duración de tratamiento aproximado de 8,2 a 12 meses."
       
        +
        
        "<br><span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
        ,

        imagen: "./image/mordida2_2.png",
        
        siguiente: "duracion_lenta",

        botones: [

          {
            texto: "Volver",
            siguiente: "plan_aceptado"
          }

        ]

      },

      expansion_rapida: {

        tipo: "accion",

        texto: "<strong>Expansión maxilar rápida</strong>"
        
        +
        
        "<br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>"

        +
        
        "<br>Es un procedimiento ortodóncico para corregir deficiencias transversales en la arcada superior, aumentando el perímetro maxilar mediante la ruptura de la sutura palatina media utilizando fuerzas intensas aplicadas rápidamente con el fin de superar la resistencia de la sutura, mediante activaciones diarias que varían de 0,2 a 0,5 mm, buscando aproximadamente 7 mm de sobrecorrección en la región molar y un tiempo de tratamiento que varía entre 1 a 2 semanas dependendiendo de la necesidad de expansión deseada, junto con 6 meses de retención. Está indicado su uso durante la dentición mixta debido a la mayor elasticidad ósea, menor resistencia y menor dolor. <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<br><span class='cita-biblio'>Araújo M-C, Bocato J-R, Oltramari P-V-P, de Almeida M-R, Conti A-CC-F, Fernandes T-M-F. Tomographic evaluation of dentoskeletal effects of rapid maxillary expansion using Haas and Hyrax palatal expanders in children: A randomized clinical trial. J Clin Exp Dent. 2020 Oct;12:e922–30.</span>"
        
        +
        
        "<br><br>Logrando una expansión intermolar de 4.3 - 6.4 mm y una expansión intercanina de 2.8 - 5.1 mm."
        
        +

        "<br><span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"

        +
        
        "<br><br>Se puede lograr una expansión intermolar de 5.2 mm al estar anclado a los primeros molares permanentes. <br><span class=\"badge-ne-moderado\">(NE: moderado, GRADE)</span>"
        
        +

        "<br><span class='cita-biblio'>Bazargani F, Lund H, Magnuson A, Ludwig B. Skeletal and dentoalveolar effects using tooth-borne and tooth-bone-borne RME appliances: A randomized controlled trial with 1-year follow-up. Eur J Orthod. 2021 Jun;43:245–53.</span>"

        +
        
        "<br><br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span> La expansión maxilar rápida no solo corrige problemas dento-esqueléticos como la mordida cruzada posterior, sino que también favorece una mejora del flujo nasal inspiratorio y la sensibilidad olfativa en niños, probablemente debido a un aumento en el flujo nasal que permite que más moléculas odoríferas alcancen el epitelio olfativo."
        
        +

        "<br><span class='cita-biblio'>Ottaviano G, Maculan P, Borghetto G, Favero V, Galletti B, Savietto E, et al. Nasal function before and after rapid maxillary expansion in children: A randomized, prospective, controlled study. Int J Pediatr Otorhinolaryngol. 2018 Dec;115:133–8.</span>"


        ,

        imagen: "./image/mordida2_3.png",
        
        siguiente: "duracion_rapida",

        botones: [

          {
            texto: "Volver",
            siguiente: "plan_aceptado"
          }

        ]

      },

      duracion_lenta: {

        tipo: "decision_opciones",

        texto: "Duración aproximada de la fase activa de 5.2 a 9 meses. Para ello se usan aparatos como: ",

        imagen: "./image/mordida2_4.png",
        
        opciones: [

          {
            texto: "Quadhelix",

            siguiente: "quadhelix"

          },

          {
            texto: "Placas de expansión",

            siguiente: "placas_de_expansion"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion_lenta"
          }

        ]
      },

      quadhelix: {

        tipo: "accion",

        texto: "<strong>Quadhelix</strong>"
        
        +

        "<span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>" 
        
        + 
        
        "<br><br><img src='./image/Im54.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 3.7 a 5.7 mm y expansión intercanina de 2.0 a 3.5 mm"

        +

        "<br><br>Es un aparato fijo de acero inoxidable que se cementa en los primeros molares superiores y se activa cada 6 semanas para lograr una relación transversal normal. La activación inicial es de 10 mm antes de la colocación, y el tratamiento tiene una duración promedio de 1 año. En cuanto a la rapidez en la expansión en el contexto presente, es preferible la expansión maxilar lenta, debido a su capacidad para lograr cambios significativos a nivel del paladar con menos complicaciones potenciales en comparación con lo que se esperaría si se realizara una expansión rápida. Por otra parte, este tipo de aparato requiere menos cooperación del paciente, convirtiéndose en el aparato de elección frente a pacientes de difícil o nula cooperación. Puede presentarse algunas complicaciones como: malestar al momento de la activación, desalojo de bandas, fractura del aparato, traumatismo de tejidos blandos e inclinación dental, entre otras, sin embargo, estas complicaciones generalmente se pueden evitar con un manejo adecuado en el consultorio y el laboratorio."
        
        +
        
        "<br><span class='cita-biblio'>Gidwani KV, Bendgude VD, Kokkali V V., Mehta V. Comparison of effectiveness of quad helix appliance with other slow maxillary expanders in children with posterior crossbite: A systematic review. J Indian Soc Pedod Prev Dent. 2018 Jul;36:225–33.</span>"
        
        +

        "<br><br>Por último, según la evidencia, el QH logra una expansión intermolar de 3.7 mm - 5.7 mm (en promedio una expansión de 5.45 mm) con cantidad de expansión por retención de 3.4 - 5.1 mm, y una expansión intercanina de 2.0 mm - 3.5 mm, además el QH es más rápido en términos de expansión (0.6 a 7.7 meses) frente a placas de expansión removibles y requiere menos ajustes, reduciendo visitas y dependencia del paciente."
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"

        ,

        imagen: "./image/mordida2_7.png",
        
        siguiente: "seleccion_de_dientes",

        botones: [

          {
            texto: "Volver",
            siguiente: "duracion_lenta"
          }

        ]

      },

      placas_de_expansion: {

        tipo: "accion",

        texto: "<strong>Placas de expansión</strong>"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>" 
        
        + 
        
        "<br><br><img src='./image/Im55.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 3.0 a 4.6 mm y expansión intercanina de 1.8 a 3.6 mm"

        +

        "<br><br>Consiste en una placa de acrílico con un tornillo de expansión alineado con la sutura palatina media, activado por el paciente (0.2 mm por semana) hasta lograr la relación transversal normal. Se retira durante las comidas y el cepillado dental, con una duración de tratamiento promedio de 1 año. En cuanto a la cantidad de expansión lograda, según la evidencia, la expansión intermolar osciló entre 3.0 mm - 4.6 mm (con un promedio de 3.78 mm) y una expansión intercanina de 1.8 mm - 3.6 mm."
        
        +
        
        "<br><span class='cita-biblio'>Gidwani KV, Bendgude VD, Kokkali V V., Mehta V. Comparison of effectiveness of quad helix appliance with other slow maxillary expanders in children with posterior crossbite: A systematic review. J Indian Soc Pedod Prev Dent. 2018 Jul;36:225–33.</span>"
        
        +

        "<br><br> El aparato puede presentar complicaciones como pérdida, rotura, o falta de cooperación del paciente, pero estas complicaciones son generalmente evitables con un manejo adecuado en el consultorio y el laboratorio. <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"

        ,

        imagen: "./image/mordida2_9.png",
        
        siguiente: "seleccion_de_dientes",

        botones: [

          {
            texto: "Volver",
            siguiente: "duracion_lenta"
          }

        ]


      },

      duracion_rapida: {

        tipo: "decision_opciones",

        texto: "Duración aproximada de la fase activa de 1 a 2 semanas. Para ello se usan:",

        imagen: "./image/mordida2_5.png",
        
        opciones: [

          {
            texto: "Hyrax",

            siguiente: "hyrax"

          },

          {
            texto: "Disyuntor de Hass",

            siguiente: "disyuntor_de_hass"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion_rapida"
          }

        ]
      },

      hyrax: {

        tipo: "accion",

        texto: "<strong>Hyrax</strong><br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>" 
        
        + 
        
        "<br><br><img src='./image/Im54.png' alt='Imagen a cambiar' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 6.2 +/-2.9 4.6 mm y expansión intercanina de 3.8 +/- 2.2 mm"

        +

        "<br><br>Expansor dentosoportado de estructura rígida en acero inoxidable, lo que permite mayores ganancias transversales. Produce un aumento del grosor óseo lingual, ancho maxilar, cresta alveolar, y arco respecto a la activación total del tornillo de 7 mm. Adicionalmente, presenta un mayor efecto ortopédico en el suelo de la cavidad nasal y cavidad nasal posterior al compararse con disyuntores tipo Haas. Se referencia un alcance en el nivel de expansión del tornillo de 6.04 +/- 1.07mm con un rango de 5 - 8 mm, evidenciando una expansión intercanina de 3.8 mm ± 2.2 mm y una expansión intermolar de 6.2 mm ± 2.9 mm.<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<br><span class='cita-biblio'>Ottaviano G, Maculan P, Borghetto G, Favero V, Galletti B, Savietto E, et al. Nasal function before and after rapid maxillary expansion in children: A randomized, prospective, controlled study. Int J Pediatr Otorhinolaryngol. 2018 Dec;115:133–8.</span>"
        
        +

        "<br><br>Tiene mayor facilidad de higiene, comodidad, prevención de lesiones en tejidos blandos comparado con otros expansores como el Haas."

        +

        "<br><span class='cita-biblio'>Lorente C, Lorente P, Perez-Vela M, Esquinas C, Lorente T. Quad-helix compression to decompensate molar inclination prior to skeletal expansion. J Orofac Orthop. 2020 Mar;81:142–9.</span>"

        ,

        imagen: "./image/mordida2_11.png",
        
        siguiente: "seleccion_de_dientes",

        botones: [

          {
            texto: "Volver",
            siguiente: "duracion_rapida"
          }

        ]

      },

      disyuntor_de_hass:{

        tipo: "accion",

        texto: "<strong>Disyuntor de Hass</strong><br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>" 
        
        + 
        
        "<br><br><img src='./image/Im57.png' alt='Imagen a cambiar' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 6.7 mm y expansión intercanina de 5.3 mm "

        +

        "<br><br>Expansor dento-tejido soportado con almohadilla acrílica cerca del paladar. Es menos rígido que el Hyrax, lo que puede limitar las ganancias transversales. Se realiza la activación dando 1 vuelta por día hasta lograr sobrecorrección molar (cúspide palatina del molar maxilar en contacto con la cúspide vestibular del molar mandibular), y llega a una fase activa seguida de 6 meses de retención con el aparato como retenedor. La cooperación del paciente es clave, por eso se sugiere el envío de recordatorios vía WhatsApp para realizar las activaciones. Presenta un menor aumento del grosor óseo lingual, aumento del ancho maxilar, cresta alveolar y arco al compararse con el disyuntor Hyrax; adicionalmente tiene menor efecto ortopédico en el suelo de la cavidad nasal y cavidad nasal posterior al compararse con este mismo disyuntor. Se evidencia un promedio de expansión intermolar de 6.7 mm y un promedio de expansión intercanina de 5.3 mm al anclarse a primeros molares permanentes, por otro lado, presenta una expansión intermolar de 5.1 mm ± 3.4 mm y una expansión intercanina de 3,2 mm ± 2.7 mm cementando el aparato en los quintos. <br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<br><span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6.</span>"
        
        +

        "<br><br>El aparato de Haas tiene la posibilidad de ofrecer mayor expansión en la base maxilar debido al soporte tisular, sin embargo, puede presentar complicaciones como la disminución del grosor óseo vestibular, lo que puede indicar reabsorción ósea."

        +

        "<br><span class='cita-biblio'>Micheletti KR, Iwaki LCV, Provenzano MGA, Cuoghi OA, Ramos AL, Micheletti KR, et al. Effects of rapid maxillary expansion with six months of retention and no further orthodontic treatment. https://www.redalyc.org/journal/3072/307245984012/html/. 2015.</span>"

        ,

        siguiente: "seleccion_de_dientes",

        imagen: "./image/mordida2_13.png",
        
        botones: [

          {
            texto: "Volver",
            siguiente: "duracion_rapida"
          }

        ]

      },

      seleccion_de_dientes: {

        tipo: "accion",

        texto: "<Strong>Selección de dientes para cementar el aparato</Strong>",

        imagen: "./image/mordida2_14.png",
        
        siguiente: "inclinacion"

      },

      inclinacion: {

        tipo: "decision",

        texto: "¿Se presenta inclinación molar hacia vestibular?" 

        + 
        
        "<br><br><img src='./image/Im54.png' alt='Imagen a cambiar' style='max-width:50%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        ,

        imagen: "./image/mordida3_1.png",
        
        si: "s_inclinacion",

        no: "molar_superior",

        botones: [

          {
            texto: "Volver",
            siguiente: "seleccion_de_dientes"
          }

        ]

      },

      s_inclinacion: {
        
        tipo: "accion",

        texto: "<strong>Realizar compensación de inclinación</strong> <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>" 
        
        + 
        
        "<br><br>Expansión intermolar de 6.7 mm y expansión intercanina de 5.3 mm "

        +

        "<br><br>La compensación se realiza específicamente en pacientes en los que los molares presentan una inclinación vestibular aumentada (curva de Wilson pronunciada) con deficiencia transversal esquelética maxilar. Este procedimiento se lleva a cabo antes de la expansión esquelética con un aparato Hyrax, utilizando un dispositivo de compresión de cuádruple hélice, reduciendo el riesgo de efectos iatrogénicos como una mayor inclinación molar, desplazamiento de las raíces a través de la placa bucal, o el desarrollo de una mordida en tijera, generando mayor eficacia de la expansión esquelética. La corrección previa de la inclinación molar disminuye el riesgo de recesiones gingivales y mejora la estabilidad de la dentición y las raíces."
        
        +

        "<br><br>A continuación, se detalla el proceso descrito en el documento: Procedimiento de compensación de la inclinación molar con cuádruple hélice (QH): 1) Uso de un dispositivo de cuádruple hélice modificado:Se emplea un Sistema de Arco Intraoral Móvil (MIA) (3M Unitek, Neuss, Alemania), que es un dispositivo removible. Los brazos largos que contactan con los premolares se retiran, dejando solo la hélice cuádruple que actúa sobre los primeros molares maxilares.2) Modificación y activación del dispositivo:La hélice cuádruple se comprime hasta que las hélices posteriores se tocan, la región anterior de la hélice se calienta para mantener la forma comprimida, la fuerza de compresión se genera al insertar las asas del dispositivo en los tubos palatinos de los molares. 3) Objetivo de la compresión: La compresión de la hélice cuádruple aplica una fuerza de constricción cruzada limitada a los primeros molares maxilares, esta fuerza endereza los molares, corrigiendo la inclinación vestibular excesiva (reduciendo la curva de Wilson) para alinearlos correctamente dentro de la base dentoalveolar.4) Seguimiento y evaluación: Se realiza una evaluación cada dos semanas para monitorear el progreso de la corrección de la inclinación molar, el tratamiento con la cuádruple hélice continúa hasta lograr la inclinación molar adecuada y establecer una placa de base estable. 5) Transición a la expansión con Hyrax: Una vez corregida la inclinación molar, se procede con la expansión maxilar utilizando un aparato Hyrax de cuatro bandas (molares y premolares) con un tornillo de línea media, el protocolo de activación del Hyrax implica una activación diaria de 0,20 mm, con seguimientos mensuales durante 3 meses, y el dispositivo se mantiene in situ de 3 a 6 meses tras lograr la expansión requerida."

        +
        
        "<br><span class='cita-biblio'>Lorente C, Lorente P, Perez-Vela M, Esquinas C, Lorente T. Quad-helix compression to decompensate molar inclination prior to skeletal expansion. J Orofac Orthop. 2020 Mar;81:142–9.</span>"

        ,

        imagen: "./image/mordida3_2.png",
        
        siguiente: "molar_superior",

        botones: [

          {
            texto: "Volver",
            siguiente: "inclinacion"
          }

        ]
      
      },

      molar_superior: {

        tipo: "decision",

        texto: "¿Mordida cruzada incluye primer molar superior?",

        imagen: "./image/mordida3_3.png",
        
        si: "s_molar_superior",

        no: "n_molar_superior",

        botones: [

          {
            texto: "Volver",
            siguiente: "inclinacion"
          }

        ]

      },

      s_molar_superior: {

        tipo: "accion",

        texto: "<br><br><img src='./image/Im60.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "Cementar en primer molar superior"
        
        +
        
        "<br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br>El anclaje en segundos molares deciduos parece ofrecer ventajas en términos de mayor expansión anterior, alineación espontánea de incisivos, y menor angulación de los primeros molares permanentes, lo que puede mejorar la oclusión y facilitar tratamientos posteriores. Sin embargo, el anclaje en primeros molares permanentes proporciona un anclaje más rígido, pero con menos efectos en la alineación anterior y mayor angulación de los primeros molares permanentes, atribuyéndole cerca el 45% de la expansión lograda. La elección entre uno u otro depende de las necesidades clínicas específicas, la etapa de desarrollo dental del paciente y los objetivos del tratamiento ortodóntico."
        
        +

        "<br><br>Cementar en primer molar superior: Los primeros molares permanentes superiores muestran una disto-rotación significativamente mayor al anclarse en quintos, probablemente debido a la apertura triangular de la sutura palatina y la libertad de movimiento de los molares no anclados. Sin embargo, al anclarse a los primeros molares permanentes, se produce una mayor inclinación de los mismos, contribuyendo a la corrección de la mordida cruzada posterior si esta incluye a los primeros molares permanentes."
        
        +
        
        "<br><span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6</span>"

        +

        "<br><span class='cita-biblio'>Cerruto C, Ugolini A, Di Vece L, Doldo T, Caprioglio A, Silvestrini-Biavati A. Kephalometrische Befunde und Veränderungen im Bereich des Zahnbogens nach forcierter Gaumennahterweiterung mit einer Haas-Apparatur mit Verankerung an Milch- bzw. bleibenden Molaren: Eine multizentrische, randomisierte kontrollierte Studie. J Orofac Orthop. 2017 Sep;78:385–93.</span>"

        ,

        imagen: "./image/mordida3_5.png",
        
        siguiente: "tiempo_trata",

        botones: [

          {
            texto: "Volver",
            siguiente: "molar_superior"
          }

        ]

      },

      n_molar_superior: {

        tipo: "accion",

        texto:"<br><br><img src='./image/Im59.jpg' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "Si la mordida cruzada se da en su mayoría en zona de caninos, cementar en quintos."
        
        +
        
        "<br><span class=\"badge-ne-alta\">(NE: alta, GRADE)</span>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br>Como el tornillo del expansor está ubicado más anteriormente en comparación con los primeros molares permanentes, resulta en una mayor expansión en la zona anterior del maxilar, lo que facilita una alineación y mesio rotación espontánea de los incisivos centrales y laterales superiores. Esto se atribuye a la mayor expansión anterior y a la presión del labio superior, que influye en la alineación dental. También se sugiere que el anclaje a los segundos molares deciduos es eficaz si las raíces de estos dientes tienen al menos la misma longitud que la corona en la ortopantomografía. Esto permite corregir la mordida cruzada sin comprometer los molares permanentes, que quedan libres para adaptarse a la oclusión. Por último puede inducir una mejor disposición de las fibras transeptales, reduciendo la probabilidad de incisivos severamente rotados y aumentando la longitud del arco superior. Esto podría facilitar una segunda fase de tratamiento ortodóncico menos invasiva, especialmente en casos de maloclusión de clase II, además las fuerzas elevadas generadas durante la expansión maxilar rápida pueden afectar el estado periodontal y endodóntico de los dientes de anclaje. Algunos autores sugieren que el anclaje en molares deciduos podría reducir el impacto en los molares permanentes, ya que estos no están sujetos a las fuerzas directas del expansor."
        
        +
        
        "<br><span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6.</span>"

        +

        "<br><span class='cita-biblio'>Cerruto C, Ugolini A, Di Vece L, Doldo T, Caprioglio A, Silvestrini-Biavati A. Kephalometrische Befunde und Veränderungen im Bereich des Zahnbogens nach forcierter Gaumennahterweiterung mit einer Haas-Apparatur mit Verankerung an Milch- bzw. bleibenden Molaren: Eine multizentrische, randomisierte kontrollierte Studie. J Orofac Orthop. 2017 Sep;78:385–93.</span>"

        ,

        imagen: "./image/mordida3_4.png",
        
        siguiente: "tiempo_trata",

        botones: [

          {
            texto: "Volver",
            siguiente: "molar_superior"
          }

        ]

      },

      tiempo_trata: {

        tipo: "accion",

        texto: "<strong>Tiempo de tratamiento requerido</strong>",

        imagen: "./image/mordida3_6.png",
        
        siguiente: "correcion_clinica"

      },

      correcion_clinica: {

        tipo: "decision",

        texto: "¿Presenta corrección clínica de la mordida cruzada posterior?",

        imagen: "./image/mordida4_2.png",
        
        si: "s_correcion_clinica",

        no: "n1_correcion_clinica",

        botones: [

          {
            texto: "Volver",
            siguiente: "tiempo_trata"
          }

        ]

      },

      n1_correcion_clinica: {

        tipo: "accion",

        texto: "Evaluar componente esquelético",

        imagen: "./image/mordida4_3.png",
        
        siguiente: "n2_correcion_clinica",

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion_clinica"
          }

        ]

      },

      n2_correcion_clinica: {

        tipo: "accion",

        texto: "Evaluar protocolo de expansión",

        imagen: "./image/mordida4_4.png",
        
        siguiente: "n3_correcion_clinica",

        botones: [

          {
            texto: "Volver",
            siguiente: "n1_correcion_clinica"
          }

        ]

      },

      n3_correcion_clinica: {

        tipo: "accion",

        texto: "Evaluar colaboración del paciente",

        imagen: "./image/mordida4_5.png",
        
        siguiente: "n4_correcion_clinica",

        botones: [

          {
            texto: "Volver",
            siguiente: "n2_correcion_clinica"
          }

        ]

      },

      n4_correcion_clinica: {

        tipo: "accion",

        texto: "Evaluar cambio de aparatología",

        imagen: "./image/mordida4_6.png",
        
        siguiente: "correcion_clinica2",

        botones: [

          {
            texto: "Volver",
            siguiente: "n3_correcion_clinica"
          }

        ]

      },

      correcion_clinica2: {

        tipo: "decision",

        texto: "¿Presenta corrección clínica de la mordida cruzada posterior?",

        imagen: "./image/mordida4_9.png",
        
        si: "s_correcion_clinica",

        no: "postgrado2",

        botones: [

          {
            texto: "Volver",
            siguiente: "n4_correcion_clinica"
          }

        ]

      },

      s_correcion_clinica: {

        tipo: "accion",

        texto: "Realizar retención durante 6 meses más<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +

        "<br><br>Se especifica que, tras la expansión maxilar rápida, se empleó un protocolo de retención de seis meses, en donde después de completar la expansión con el aparato Haas modificado que se mantuvo en la cavidad oral durante tres meses para estabilizar la expansión, se reemplazó por un retenedor removible tipo Hawley. Este retenedor deberá ser usado solo por la noche durante seis meses adicionales, con esto se contribuye a la estabilidad de los resultados de la RME, ya que se evitarán cambios significativos en las dimensiones transversales ni recaídas importantes en los periodos posteriores, esta estabilidad sería cercana al 80%, se logró sin necesidad de tratamiento ortodóntico adicional."
        
        +
        
        "<br><span class='cita-biblio'>Micheletti KR, Iwaki LCV, Provenzano MGA, Cuoghi OA, Ramos AL, Micheletti KR, et al. Effects of rapid maxillary expansion with six months of retention and no further orthodontic treatment. https://www.redalyc.org/journal/3072/307245984012/html/. 2015.</span>"
        
        ,

        imagen: "./image/mordida4_7.png",
        
        siguiente: "resolucion",

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion_clinica"
          }

        ]

      },

      resolucion: {

        tipo: "accion",

        texto: "Resolución de la mordida cruzada posterior en dentición decidua o mixta.<br><br><Strong>Fin del camino</Strong>",

        imagen: "./image/mordida4_8.png",
        
        siguiente: "presentacion"

      },

      postgrado2: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/mordida4_10.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion"
          }

        ]

      }

    }

  }

};