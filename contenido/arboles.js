const ARBOLES = {

  clase_ii:{

    titulo: "",

    inicio: "presentacion",

    nodos: {

      presentacion: {

        tipo: "decision_opciones",

        texto: "Malocusión Clase II",
        
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

            siguiente: "modelos"

          }

        ]

      },

      definicion: {

        tipo: "accion",

        texto: "<Strong>Maloclusión clase II</Strong>"
        
        +

        "<br><br><Strong>●  Maloclusión esquelética de Clase II:</Strong>"

        +

        " Se caracteriza por una discrepancia en la relación anteroposterior entre el maxilar superior y la mandíbula. Generalmente, se observa un maxilar superior prognático o una mandíbula retrognática, lo que se traduce en un perfil facial convexo. La literatura sugiere que en la maloclusión de Clase II División 1, la mandíbula suele ser retrognática, mientras que en la Clase II División 2, la mandíbula puede ser ortognática."

        +

        "<span class='cita-biblio'>Uzuner FD, Aslan BI, Dinçer M. Dentoskeletal morphology in adults with Class I, Class II Division 1, or Class II Division 2 malocclusion with increased overbite. Am J Orthod Dentofac Orthop Off Publ Am Assoc Orthod Its Const Soc Am Board Orthod. agosto de 2019;156(2):248-256.e2. doi:10.1016/J.AJODO.2019.03.006</span>"

        +

        "<br><br><Strong>●  Maloclusión dental de Clase II:</Strong>"

        +

        " En este tipo, la discrepancia se limita principalmente a la posición de los dientes, sin una alteración significativa de la estructura esquelética subyacente. Los dientes superiores pueden estar más adelantados en relación con los inferiores, lo que puede ser corregido mediante tratamientos ortodónticos que no necesariamente alteran la estructura ósea."

        +

        "<span class='cita-biblio'>Uzuner FD, Aslan BI, Dinçer M. Dentoskeletal morphology in adults with Class I, Class II Division 1, or Class II Division 2 malocclusion with increased overbite. Am J Orthod Dentofac Orthop Off Publ Am Assoc Orthod Its Const Soc Am Board Orthod. agosto de 2019;156(2):248-256.e2. doi:10.1016/J.AJODO.2019.03.006</span>"

        +

        "<br><br><Strong>●  Maloclusión funcional de Clase II:</Strong>"

        +

        " Este tipo se refiere a una maloclusión que resulta de hábitos o patrones funcionales, como una posición mandibular alterada durante la función. Puede no haber una discrepancia esquelética o dental significativa, pero la función mandibular puede estar afectada, lo que lleva a una posición mandibular retruida durante la oclusión."

        +

        "<span class='cita-biblio'>Saadia M, Valencia R. Dentofacial Orthopedics in the Growing Child: Understanding Craniofacial Growth in the Management of Malocclusions. 2022. 1 p. (Dentofacial Orthopedics in the Growing Child: Understanding Craniofacial Growth in the Management of Malocclusions). doi:10.1002/9781119720218</span>"

        +

        "<span class='cita-biblio'>Li J, He Y, Wang Y, Chen T, Xu Y, Xu X, et al. Dental, skeletal asymmetries and functional characteristics in Class II subdivision malocclusions. J Oral Rehabil. 2015 Aug;42:588–99.</span>"

        +

        "<br><Strong> Presentaciones clínicas: </Strong>"

        +

        "<br><br><Strong>●  Clase II División 1:</Strong>"

        +

        " La maloclusión incluye incisivos superiores inclinados hacia vestibular, un aumento de la sobremordida horizontal con o sin un arco superior relativamente estrecho. Verticalmente, puede variar desde una sobremordida profunda hasta una mordida abierta. Sagitalmente se encuentra una relación distal de los maxilares."

        +

        "<span class='cita-biblio'>Uzuner FD, Aslan BI, Dinçer M. Dentoskeletal morphology in adults with Class I, Class II Division 1, or Class II Division 2 malocclusion with increased overbite. Am J Orthod Dentofac Orthop Off Publ Am Assoc Orthod Its Const Soc Am Board Orthod. agosto de 2019;156(2):248-256.e2. doi:10.1016/J.AJODO.2019.03.006</span>"

        +

        "<br><br><Strong>●  Clase II División 2:</Strong>"

        +

        " Este tipo de maloclusión se caracteriza por la excesiva inclinación lingual de los incisivos centrales superiores y la inclinación vestibular de los laterales. A menudo va acompañado de una mordida profunda y horizontal mínima. En casos de extrema sobremordida, los bordes incisales de los incisivos inferiores pueden ponerse en contacto con los tejidos blandos del paladar, o los tejidos gingivales labiales inferiores pueden verse también lesionados por la inclinación excesiva de los incisivos superiores. Sagitalmente se encuentra una relación distal de los maxilares."

        +

        "<span class='cita-biblio'>Uzuner FD, Aslan BI, Dinçer M. Dentoskeletal morphology in adults with Class I, Class II Division 1, or Class II Division 2 malocclusion with increased overbite. Am J Orthod Dentofac Orthop Off Publ Am Assoc Orthod Its Const Soc Am Board Orthod. agosto de 2019;156(2):248-256.e2. doi:10.1016/J.AJODO.2019.03.006</span>"

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

        texto: "<Strong>Materiales e insumos para maloclusión clase II</Strong>"
        
        +

        "<br><br><img src='./image/materialesA.png' style='width: 850px; height: auto; display: block; margin: 20px auto; border-radius: 12px;'>"
        
        ,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      modelos: {

        tipo: "accion",

        texto: "<Strong>Maloclusión clase II</Strong>"
        
        +

        "<br><br><img src='./image/Im1.png' style='display:block; max-width:50%; height:auto; border-radius:12px; margin:10px auto;'>"

        + 
        
        "<span class='cita-biblio-img'>(Gemini AI)</span>"
        
        +

        "<br><br><img src='./image/Im1_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>(Gemini AI)</span>"

        +

        "<br><br>Discrepancia anteroposterior entre el maxilar superior y la mandíbula, expresada por una relación sagital distal de la mandíbula respecto al maxilar, que puede deberse a prognatismo maxilar, retrognatismo mandibular o a una combinación de ambos."

        +

        "<br>Esta condición puede acompañarse de alteraciones dentales, funcionales y faciales, por lo que su diagnóstico no debe establecerse únicamente con base en la relación molar, sino mediante una evaluación clínica, funcional, cefalométrica y de modelos"

        +

        "<span class='cita-biblio'>Buschang PH. Recognizing and correcting Class II malocclusions: SECTION I: The development, phenotypic characteristics, and etiology of Class II malocclusion. In: Recognizing and Correcting Developing Malocclusions: A Problem-Oriented Approach to Orthodontics. wiley; 2015. p. 90–107.</span>"

        +

        "<span class='cita-biblio'>Guía de Atención para Maloclusiones Clase II - Odontología 2016. https://www.studocu.com/co/document/universidad-nacional-de-colombia/ortodoncia/guia-ort-maloc-clase-ii/64424197?sid=6fdadec1-ddfa-450c-8029-f39c2b210a7a1787886816. 2016.</span>"

        +

        "Para establecer el diagnóstico esquelético se deben valorar parámetros cefalométricos sagitales, verticales y dentoalveolares. Entre los parámetros mínimos sugeridos se encuentran SNA, SNB, ANB, Wits, posición del punto A respecto a N-perpendicular, posición de pogonion o punto B respecto a N-perpendicular, longitud mandibular efectiva, plano mandibular, altura facial inferior y relación maxilomandibular. Un ANB aumentado, especialmente valores iguales o superiores a 4°–4,5°, puede sugerir discrepancia esquelética de Clase II; sin embargo, este valor debe interpretarse junto con Wits, SNA, SNB, patrón vertical y análisis facial, ya que el ANB puede modificarse por la posición de nasion, la rotación de los maxilares y el patrón vertical del paciente."

        +

        "<span class='cita-biblio'>Buschang PH. Recognizing and correcting Class II malocclusions: SECTION I: The development, phenotypic characteristics, and etiology of Class II malocclusion. In: Recognizing and Correcting Developing Malocclusions: A Problem-Oriented Approach to Orthodontics. wiley; 2015. p. 90–107.</span>"
        
        +

        "<span class='cita-biblio'>Guía de Atención para Maloclusiones Clase II - Odontología 2016. https://www.studocu.com/co/document/universidad-nacional-de-colombia/ortodoncia/guia-ort-maloc-clase-ii/64424197?sid=6fdadec1-ddfa-450c-8029-f39c2b210a7a1787886816. 2016. </span>"

        +

        "Además de los parámetros esqueléticos, deben registrarse variables clínicas individuales que pueden influir en la toma de decisiones terapéuticas. Estas incluyen edad cronológica, estadio de dentición, estadio de maduración esquelética, patrón vertical, severidad del overjet, competencia labial, riesgo de trauma dentoalveolar, presencia de hábitos, alteraciones respiratorias, cooperación, higiene oral, contexto psicosocial, antecedentes de tratamiento, pérdida prematura de dientes temporales, caries, alteraciones funcionales y condiciones anatómicas particulares."

        +

        "<span class='cita-biblio'>Buschang PH. Recognizing and correcting Class II malocclusions: SECTION I: The development, phenotypic characteristics, and etiology of Class II malocclusion. In: Recognizing and Correcting Developing Malocclusions: A Problem-Oriented Approach to Orthodontics. wiley; 2015. p. 90–107.</span>"
        
        +

        "<span class='cita-biblio'>Li J, He Y, Wang Y, Chen T, Xu Y, Xu X, et al. Dental, skeletal asymmetries and functional characteristics in Class II subdivision malocclusions. J Oral Rehabil. 2015 Aug;42:588–99.</span>"

        +

        "<span class='cita-biblio'>Bidjan D, Sallmann R, Eliades T, Papageorgiou SN. Orthopedic Treatment for Class II Malocclusion with Functional Appliances and Its Effect on Upper Airways: A Systematic Review with Meta-Analysis. J Clin Med. 2020 Nov;9.</span>"

        +

        "Estas consideraciones deben individualizarse para cada paciente y no deben interpretarse como criterios rígidos ni universales."
        
        +

        "<br>Se hace énfasis en confirmar que el paciente presenta una maloclusión esquelética Clase II y, al mismo tiempo, reconocer la posible variabilidad individual que puede modificar el diagnóstico, y por ende el tratamiento."
        
        ,

        imagen: "./image/claseII1_0.png",

        siguiente: "habitos",

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      habitos: {

        tipo: "decision",

        texto: "¿Paciente presenta habitos?",

        descripcion: 
        
        "<Strong>Presencia de hábitos:</Strong>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "La respiración oral y los hábitos orales, como la succión digital y la interposición lingual, pueden actuar como factores etiológicos asociados al desarrollo y al agravamiento de maloclusiones durante el crecimiento. La respiración oral altera el equilibrio muscular orofacial y puede favorecer el retrognatismo mandibular, la rotación mandibular posterior y el aumento del overjet, características frecuentemente observadas en pacientes con maloclusión de Clase II. La comunidad científica reconoce que los malos hábitos y la respiración bucal influyen en la etiopatogenia de las maloclusiones, y esta asociación se confirma en este estudio."

        +

        "<span class='cita-biblio'>Grippaudo C, Paolantonio EG, Antonini G, Saulle R, La Torre G, Deli R. Associazione fra abitudini viziate, respirazione orale e malocclusione. Acta Otorhinolaryngol Ital. 2016 Oct;36:386–94.</span>"

        +

        "La respiración bucal y los malos hábitos pueden considerarse factores de riesgo de maloclusión, ya que alteran el equilibrio fisiológico del crecimiento. Sin embargo, si bien la respiración bucal siempre se asocia significativamente con todos los problemas oclusales estudiados, los malos hábitos sólo desempeñan un papel significativo en algunos de ellos, probablemente debido a su menor relevancia en comparación con otros factores implicados en la etiopatogenia de las maloclusiones. Por lo tanto, podemos suponer que el riesgo de desarrollar maloclusión relacionado con malos hábitos se manifestaría en individuos más susceptibles a causas genéticas y a patrones de crecimiento desfavorables. No obstante, para este tipo de problemas se requiere una estrecha colaboración entre diferentes especialistas (pediatra, alergólogo, otorrinolaringólogo, ortodoncista, logopeda), y que las visitas y el tratamiento ortodóncico tempranos, cuando sean necesarios en niños con hábitos o con rinitis alérgica y/o hipertrofia adenoamigdalina, permitan la detección precoz y el tratamiento oportuno de las disfunciones, evitando así el empeoramiento de las maloclusiones ya existentes. Este punto tiene como propósito evitar que el tratamiento ortopédico u ortodóncico se indique sin controlar factores funcionales que pueden interferir con la estabilidad o limitar la respuesta clínica. Por tanto, si el paciente presenta hábitos o alteraciones funcionales relevantes, se debe realizar remisión o manejo interdisciplinario antes o durante la intervención ortopédica u ortodóntica."

        ,

        imagen: "./image/claseII1_1.png",

        si: "remision",

        no: "severidad",

        botones: [

          {
            texto: "Volver",
            siguiente: "modelos",
          }

        ]

      },

      remision: {

        tipo: "accion",

        texto: "<Strong>Realizar remisión</Strong>"
        
        +

        "<br><br><Strong>Otorrinolaringología:</Strong>"

        +

        " si presenta problemas relacionados con nariz, garganta o estructuras adyacentes."
        
        +

        "<br><br><Strong>Fonoaudiología:</Strong>"

        +

        " si presenta problemas relacionados con la deglución o con la función labial."
        
        ,

        imagen: "./image/claseII1_2.png",

        siguiente: "severidad",

        botones: [

          {
            texto: "Volver",
            siguiente: "habitos",
          }

        ]

      },

      severidad: {
      
        tipo: "decision_opciones",

        texto: "Evaluación de la severidad",

        descripcion: 
        
        "La severidad de la maloclusión Clase II debe evaluarse integrando parámetros clínicos, oclusales, cefalométricos y funcionales. No debe definirse únicamente por la relación molar, ya que un paciente puede presentar una relación molar Clase II con discrepancia esquelética leve, o por el contrario, una relación dental parcialmente compensada con discrepancia esquelética importante."
        
        +

        "<br>Se clasifica, de forma operativa, en leve, moderada y severa. Esta clasificación tiene como objetivo orientar la conducta clínica inicial, definir si el caso puede continuar dentro del estándar o si requiere remisión a posgrado de ortodoncia."
        
        +

        "<br><Strong>●  Maloclusión Clase II leve:</Strong>"

        +

        " corresponde a pacientes con discrepancia sagital discreta, compromiso facial mínimo y ausencia de alteraciones funcionales importantes. Puede observarse relación molar Clase II parcial o menor de cúspide completa, overjet aproximado de 4 a 6 mm, ANB ligeramente aumentado, alrededor de 4° a 5°, Wits levemente aumentado, perfil facial levemente convexo, competencia labial conservada o mínimamente alterada y ausencia de riesgo elevado de trauma dentoalveolar."

        +

        "<br><Strong>●  Maloclusión Clase II moderada:</Strong>"

        +

        " corresponde a pacientes con discrepancia sagital evidente y compromiso clínico, funcional o estético significativo. Puede observarse relación molar Clase II cúspide a cúspide o Clase II completa, overjet aproximado de 6 a 9 mm, ANB aproximado entre 6° y 7°, Wits moderadamente aumentado, perfil convexo evidente, incompetencia labial leve o moderada, alteración de la relación canina, posible sobremordida aumentada o mordida abierta, y presencia de factores funcionales asociados."

        +

        "<br><Strong>●  Maloclusión Clase II severa:</Strong>"

        +

        " corresponde a pacientes con discrepancia sagital marcada, compromiso facial evidente, alteración funcional importante o riesgo clínico aumentado. Puede observarse relación molar Clase II completa marcada, overjet mayor de 9 mm, ANB mayor de 7° como criterio orientativo, perfil facial muy convexo, retrognatismo mandibular evidente o prognatismo maxilar marcada, incompetencia labial importante, riesgo aumentado de trauma dentoalveolar, alteraciones respiratorias o funcionales relevantes, asimetrías, compromiso psicosocial o sospecha de discrepancia esquelética compleja. En estos casos, se recomienda la remisión o el manejo conjunto con el posgrado de ortodoncia."

        +

        "<br>Para definir el origen del componente esquelético, se recomienda diferenciar entre componente maxilar, mandibular o combinado. El componente maxilar puede sospecharse cuando existen SNA aumentado, convexidad facial aumentada y relación sagital alterada con mandíbula dentro de parámetros aceptables."

        +

        "<br>El componente mandibular puede sospecharse cuando existe SNB disminuido, pogonion o punto B retruido respecto a N-perpendicular, longitud mandibular efectiva disminuida para la edad, perfil convexo por deficiencia mandibular y aumento de ANB o Wits."

        +

        "<br>El componente combinado se presenta cuando coexisten signos de prognatismo maxilar y retrognatismo mandibular, con un aumento de la discrepancia sagital maxilomandibular."

        +

        "<span class='cita-biblio'>Buschang PH. Recognizing and correcting Class II malocclusions: SECTION I: The development, phenotypic characteristics, and etiology of Class II malocclusion. In: Recognizing and Correcting Developing Malocclusions: A Problem-Oriented Approach to Orthodontics. wiley; 2015. p. 90–107.</span>"

        +

        "<span class='cita-biblio'>Guía de Atención para Maloclusiones Clase II - Odontología 2016. https://www.studocu.com/co/document/universidad-nacional-de-colombia/ortodoncia/guia-ort-maloc-clase-ii/64424197?sid=6fdadec1-ddfa-450c-8029-f39c2b210a7a1787886816. 2016.</span>"

        ,

        imagen: "./image/claseII1_3.png",
        
        opciones: [

          {
            texto: "Severa",

            siguiente: "severa"

          },

          {
            texto: "Moderada",

            siguiente: "moderada"

          },

          {
            texto: "Leve",

            siguiente: "leve"

          }

        ],
        
        botones: [

          {
            texto: "Volver habitos",
            siguiente: "habitos",
          },
          {
            texto: "Volver remisión",
            siguiente: "remision",
          }

        ]

      },

      severa: {

        tipo: "accion",

        texto: "<Strong>Severa</Strong>"
        
        ,

        imagen: "./image/claseII1_4.png",

        siguiente: "postgrado",

        botones: [

          {
            texto: "Volver",
            siguiente: "severidad",
          }

        ]

      },

      moderada: {

        tipo: "accion",

        texto: "<Strong>Moderada</Strong>"

        ,

        imagen: "./image/claseII1_5.png",

        siguiente: "origen",

        botones: [

          {
            texto: "Volver",
            siguiente: "severidad",
          }

        ]

      },

      leve: {

        tipo: "accion",

        texto: "<Strong>leve</Strong>"

        ,

        imagen: "./image/claseII1_6.png",

        siguiente: "origen",

        botones: [

          {
            texto: "Volver",
            siguiente: "severidad",
          }

        ]

      },

      postgrado: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/claseII1_7.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "severa"
          }

        ]

      },

      origen: {

        tipo: "decision_opciones",

        texto: "Definir el origen",

        imagen: "./image/claseII1_8.png",
        
        opciones: [

          {
            texto: "Maxilar",

            siguiente: "maxilar"

          },

          {
            texto: "Combinada",

            siguiente: "combinada"

          },

          {
            texto: "Mandibular",

            siguiente: "mandibular"

          }

        ],
        
        botones: [

          {
            texto: "Volver moderada",
            siguiente: "moderada",
          },
          {
            texto: "Volver leve",
            siguiente: "leve",
          }

        ]

      },

      maxilar:{

        tipo: "accion",

        texto: "<Strong>Maxilar</Strong>"
        
        +

        "<br><br><img src='./image/Im2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Tekale, P. D., Vakil, K. K., Vakil, J. K., & Gore, K. A. (2015). Distalization of maxillary arch and correction of Class II with mini-implants: A report of two cases. Contemporary clinical dentistry, 6(2), 226–232. https://doi.org/10.4103/0976-237X.156052</span>"

        ,

        imagen: "./image/claseII1_9.png",

        siguiente: "evaluar",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      combinada:{

        tipo: "accion",

        texto: "<Strong>Combinada</Strong>"
        
        +

        "<br><br><img src='./image/Im3.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Orrego, H., & Buendía, E. (2026). Severe class ii malocclusion in a growing patient treated with functional orthopedics and fixed appliances. Revista cientifica odontologica (Universidad Cientifica del Sur), 14(3), e305. https://doi.org/10.21142/2523-2754-1403-2026-305</span>"

        ,

        imagen: "./image/claseII1_10.png",

        siguiente: "evaluar",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      mandibular:{

        tipo: "accion",

        texto: "<Strong>Mandibular</Strong>"
        
        +

        "<br><br><img src='./image/Im4.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>(Gemini AI)</span>"

        +

        "<br><br><img src='./image/Im4_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        ,

        imagen: "./image/claseII1_11.png",

        siguiente: "evaluar",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      evaluar: {

        tipo: "accion",

        texto: "<Strong>Evaluar y definir estadio de desarrollo esquelético</Strong>"
        
        +

        "<br><br><img src='./image/Im5.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>(Baccetti T, Franchi L, McNamara JA Jr. The cervical vertebral maturation (CVM) method for the assessment of optimal treatment timing in dentofacial orthopedics. Semin Orthod. 2005;11(3):119-129. doi:10.1053/j.sodo.2005.04.005.)</span>"

        +

        "<br><br><br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br>El estado de maduración es determinado mediante el método de maduración vertebral cervical modificado por Baccetti, clasificando como prepuberales a los pacientes en CVMS I y CVMS II, y como postpuberales a los pacientes en CVMS IV y CVMS V."

        +

        "<span class='cita-biblio'>Farouk K, Eissa O, Ghoneima A, El-Bedwehi A, Abdel-Fattah E, Hussein F, et al. Treatment effects of Herbst appliance in skeletal Class II cases during pre-pubertal and post-pubertal periods: a cone-beam computed tomographic study. Sci Rep. 2023 Dec;13.</span>"
        
        +

        "En términos clínicos, los estadios CVMS I–II indican un paciente con un crecimiento remanente importante. Los estadios cercanos a CVMS II–III se consideran más favorables para obtener una respuesta ortopédica mandibular, especialmente cuando el objetivo terapéutico es avance mandibular"

        +

        "<span class='cita-biblio'>Farouk K, Eissa O, Ghoneima A, El-Bedwehi A, Abdel-Fattah E, Hussein F, et al. Treatment effects of Herbst appliance in skeletal Class II cases during pre-pubertal and post-pubertal periods: a cone-beam computed tomographic study. Sci Rep. 2023 Dec;13.</span>"
        
        +

        "Se hace necesario determinar si el paciente tiene potencial de crecimiento suficiente para beneficiarse de una intervención ortopédica. Por tanto, antes de seleccionar aparatología funcional, tracción extraoral o manejo combinado, se debe definir el estadio de desarrollo esquelético e interpretarlo junto con el diagnóstico sagital, la severidad, el patrón vertical y el riesgo individual del paciente."

        ,

        imagen: "./image/claseII2_1.png",

        siguiente: "adecuado",

        botones: [

          {
            texto: "Volver Maxilar",
            siguiente: "maxilar",
          },
          {
            texto: "Volver Combinada",
            siguiente: "combinada",
          },
          {
            texto: "Volver Mandibular",
            siguiente: "mandibular",
          }

        ]

      },

      adecuado: {

        tipo: "decision",

        texto: "¿Es el momento adecuado para la intervención?",

        descripcion: 
        
        "<br><Strong>Determinar si es el momento adecuado para la intervención:</Strong>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br>El momento de intervención debe individualizarse según el objetivo. Para el avance mandibular, el tratamiento debe priorizarse en pacientes con crecimiento remanente y cercanos al pico puberal, porque la respuesta esquelética mandibular tiende a ser mayor."

        +

        "<span class='cita-biblio'>Farouk K, Eissa O, Ghoneima A, El-Bedwehi A, Abdel-Fattah E, Hussein F, et al. Treatment effects of Herbst appliance in skeletal Class II cases during pre-pubertal and post-pubertal periods: a cone-beam computed tomographic study. Sci Rep. 2023 Dec;13.</span>"

        +

        "Para la tracción extraoral, el inicio temprano puede generar cambios favorables; sin embargo, la evidencia no demuestra una superioridad clínicamente significativa frente a un inicio más tardío en la dentición mixta"

        +

        "<span class='cita-biblio'>Julku J, Pirilä-Parkkinen K, Tolvanen M, Pirttiniemi P. Comparison of effects of cervical headgear treatment on skeletal facial changes when the treatment time is altered: A randomized controlled trial. Eur J Orthod. 2019 Dec;41:631–40.</span>"

        +

        "Por tanto, si el paciente no se encuentra en un momento favorable y no presenta factores de riesgo adicionales, se puede indicar seguimiento periódico o remisión según la complejidad del caso."
        
        ,

        imagen: "./image/claseII2_4.png",

        si: "definir",

        no: "riesgo",

        botones: [

          {
            texto: "Volver",
            siguiente: "evaluar",
          }

        ]

      },

      riesgo: {

        tipo: "decision",

        texto: "¿Existe riesgo de trauma dentoalveolar?",

        descripcion: 
        
        "<br><Strong>Riesgo de trauma dentoalveolar:</Strong>"
        
        +
        
        "<br>El riesgo de trauma dentoalveolar debe evaluarse en pacientes con maloclusión Clase II, especialmente cuando existe overjet aumentado, incompetencia labial, proinclinación incisiva, antecedentes de trauma dental o participación en actividades con mayor riesgo de impacto facial. Este punto es importante porque el trauma incisivo puede justificar una intervención temprana incluso cuando el paciente aún no se encuentra en el momento ideal de crecimiento para obtener el máximo efecto ortopédico. Se evidencia que la reducción del riesgo de trauma puede alcanzar hasta el 41% en pacientes tratados tempranamente."

        +

        "<span class='cita-biblio'>Thiruvenkatachari B, Harrison J, Worthington H, O’Brien K. Early orthodontic treatment for Class II malocclusion reduces the chance of incisal trauma: Results of a Cochrane systematic review. Vol. 148, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2015. p. 47–59.</span>"

        ,

        imagen: "./image/claseII2_3.png",

        si: "definir",

        no: "postgrado2",

        botones: [

          {
            texto: "Volver",
            siguiente: "adecuado",
          }

        ]

      },

      postgrado2: {

        tipo: "accion",

        texto: "Seguimiento ó remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/claseII2_2.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "riesgo"
          }

        ]

      },

      definir: {  

        tipo: "decision_opciones",

        texto: "Definir el objetivo de tratamiento",
        
        descripcion: 
        
        "<br>La selección del tratamiento en pacientes con maloclusión esquelética Clase II debe realizarse a partir del objetivo terapéutico principal y no únicamente por el nombre del aparato. La Clase II no corresponde a una alteración única, sino a una discrepancia que puede involucrar componentes maxilares, mandibulares, transversales, dentoalveolares y funcionales."

        +

        "<span class='cita-biblio'>Farret MMB, de Lima EM, Farret MM, de Araújo LL. Dental and skeletal effects of combined headgear used alone or in association with rapid maxillary expansion. Dental Press J Orthod. 2015 Sep;20:43–9.</span>"

        +

        "<span class='cita-biblio'>Erin Bilbo E, Marshall SD, Southard KA, Allareddy V, Holton N, Thames AM, et al. Long-term skeletal effects of high-pull headgear followed by fixed appliances for the treatment of Class II malocclusions. Angle Orthod. 2018 Sep;88:530–7.</span>"
        
        +

        "Por esta razón, después de confirmar el diagnóstico, establecer la severidad y definir el momento de intervención, el clínico debe identificar el componente predominante que se busca corregir."

        +

        "<br>Los signos clínicos de Clase II pueden estar presentes desde la dentición decidua y persistir hasta la dentición mixta, incluyendo escalón distal, relación canina de Clase II, overjet aumentado y discrepancia transversal interarcada por estrechez maxilar."

        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA, Tollaro I. Early dentofacial features of Class II malocclusion: a longitudinal study from the deciduous through the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:502–9.</span>"

        +

        "Además, señalaron que el tratamiento puede iniciarse en los tres planos del espacio mediante expansión rápida maxilar, tracción extraoral o aparatología funcional, siempre considerando la cooperación, el manejo del paciente y el beneficio clínico real."

        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA, Tollaro I. Early dentofacial features of Class II malocclusion: a longitudinal study from the deciduous through the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:502–9.</span>"

        +

        "Es importante tener en cuenta que la Clase II no tratada no tiende a autocorregirse durante el crecimiento circumpuberal, especialmente debido a una deficiencia progresiva de las dimensiones mandibulares"

        +

        "<span class='cita-biblio'>Stahl F, Baccetti T, Franchi L, McNamara JA. Longitudinal growth changes in untreated subjects with Class II Division 1 malocclusion. Am J Orthod Dentofac Orthop. 2008 Jul;134:125–37.</span>"

        ,

        imagen: "./image/claseII3_1.png",
        
        opciones: [

          {
            texto: "Expansión transversal maxilar",

            siguiente: "transversal"

          },

          {
            texto: "Restricción del crecimiento maxilar anteroposterior",

            siguiente: "anteroposterior"

          },

          {
            texto: "Avance mandibular",

            siguiente: "avance"

          }

        ],
        
        botones: [

          {
            texto: "Volver riesgo de trauma dentoalveolar",
            siguiente: "riesgo",
          },
          {
            texto: "Volver momento adecuado intervención",
            siguiente: "adecuado",
          }

        ]

      },

      transversal: {

        tipo: "accion",

        texto: "<Strong>Expansión transversal maxilar</Strong>"
        
        +

        "<br><br><img src='./image/Im6.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Franco FAC, Martínez BG, Araujo AC. Tratamiento ortodóncico-ortopédico del colapso del maxilar, mordida cruzada anterior y posterior mediante expansor Hyrax. Reporte de caso. . 2019;Año 2019(Número 1). https://www.ortodoncia.ws/publicaciones/2019/art-10</span>"

        +

        "<br><br>La expansión transversal maxilar debe considerarse cuando el paciente con maloclusión Clase II presenta una deficiencia transversal maxilar diagnosticada clínicamente o instrumentalmente. Esta indicación no debe asumirse en todos los pacientes Clase II, sino únicamente cuando exista evidencia de discrepancia transversal interarcada, estrechez maxilar, mordida cruzada posterior, tendencia a interferencias oclusales, desviación funcional o discrepancia transversal entre los arcos."

        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA, Tollaro I. Early dentofacial features of Class II malocclusion: a longitudinal study from the deciduous through the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:502–9.</span>"
        
        ,

        imagen: "./image/claseII4a_1.png",

        siguiente: "tipo",

        botones: [

          {
            texto: "Volver",
            siguiente: "definir",
          }

        ]

      },

      tipo: {

        tipo: "decision_opciones",

        texto: "Definir el tipo de expansión",

        imagen: "./image/claseII4a_2.png",
        
        opciones: [

          {
            texto: "Expansión rápida",

            siguiente: "rapida"

          },

          {
            texto: "Expansión lenta",

            siguiente: "lenta"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "transversal",
          }

        ]

      },

      rapida: {

        tipo: "accion",

        texto: "<br><Strong>Expansión rápida maxilar:</Strong>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"
        
        +

        "<br>La expansión rápida maxilar se considera cuando se requiere una corrección ortopédica transversal, especialmente en pacientes en crecimiento con dentición mixta y una discrepancia transversal maxilar clínicamente significativa de ≥4 mm."

        +

        "<span class='cita-biblio'>Lione R, Brunelli V, Franchi L, Pavoni C, Quiroga Souki B, Cozza P. Mandibular response after rapid maxillary expansion in class II growing patients: a pilot randomized controlled trial. Prog Orthod. 2017 Dec;18.</span>"

        ,

        imagen: "./image/claseII4a_3.png",

        siguiente: "disyuntor",

        botones: [

          {
            texto: "Volver",
            siguiente: "tipo",
          }

        ]

      },

      disyuntor: {

        tipo: "decision_opciones",

        texto: "Disyuntor palatal rápido",
        
        descripcion: 
        
        "<br><br><img src='./image/Im9.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><Strong>● 1K1: Disyuntor palatino rápido:</Strong>"
        
        +

        " Los aparatos evaluados fueron un expansor palatino rápido con planos de mordida posteriores y un expansor palatino rápido tipo mariposa sin planos de mordida posteriores, ambos con tornillo de 13 mm y activación de 0,25 mm/día."

        +

        "<span class='cita-biblio'>Lione R, Brunelli V, Franchi L, Pavoni C, Quiroga Souki B, Cozza P. Mandibular response after rapid maxillary expansion in class II growing patients: a pilot randomized controlled trial. Prog Orthod. 2017 Dec;18.</span>"

        ,

        imagen: "./image/claseII4a_5.png",
        
        opciones: [

          {
            texto: "Con planos de mordida posterior",

            siguiente: "cplanos"

          },

          {
            texto: "Sin planos de mordida posterior",

            siguiente: "splanos"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "rapida",
          }

        ]

      },

      cplanos: {

        tipo: "accion",

        texto: "<Strong>Con planos de mordida posterior</Strong>"
        
        +

        "<br><br><img src='./image/Im10.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<Strong>● 1K2: Expansión rápida con planos de mordida posteriores:</Strong>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "En este estudio se presentaron cambios sagitales no significativos frente al grupo control: SNA 0,0°, SNB +0,5°, ANB −0,7°, Pg a N-perpendicular +0,8 mm, Co-Gn +0,6 mm, overjet −0,7 mm y relación molar +1,1 mm. Por tanto, no se debe afirmar que mejora de forma significativa la Clase II en el plano sagital. El hallazgo clínicamente más relevante fue el de tipo vertical. El RME con planos acrílicos mostró una mayor reducción de la divergencia facial y del ángulo gonial que el expansor palatal rápido tipo mariposa y el grupo control: los autores interpretaron que la cobertura acrílica actúa como bloque de mordida, inhibiendo la extrusión posterior y favoreciendo el control vertical."

        +

        "<span class='cita-biblio'>Lione R, Brunelli V, Franchi L, Pavoni C, Quiroga Souki B, Cozza P. Mandibular response after rapid maxillary expansion in class II growing patients: a pilot randomized controlled trial. Prog Orthod. 2017 Dec;18.</span>"
        
        +

        "- Corrige deficiencia transversal."
        
        +
        
        "<br>- No mejora sagitalmente clase II (SNB +0.5°, ANB -0.7°)"

        +

        "<br>- Mayor control del patrón de crecimiento vertical."
        
        ,

        imagen: "./image/claseII4a_7.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "disyuntor",
          }

        ]

      },

      splanos: {

        tipo: "accion",

        texto: "<Strong>Sin planos de mordida posterior</Strong>"
        
        +

        "<br><br><img src='./image/Im11.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<Strong>● 1K3: Expansión rápida sin planos de mordida posteriores:</Strong>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "La expansión rápida sin planos acrílicos posteriores corresponde al RME anclado a bandas. Este aparato corrigió la dimensión transversal, pero no produjo una mejoría sagital significativa de Clase II frente al control. Los cambios reportados fueron SNA +0,4°, SNB +0,2°, ANB −0,2°, Pg a N-perpendicular +0,4 mm, Co-Gn +0,7 mm, overjet −0,8 mm y relación molar +0,7 mm. Estos resultados fueron similares a los del grupo control en términos sagitales, sin embargo, no presenta control vertical como en el caso de RME con planos de mordida posterior."

        +

        "<span class='cita-biblio'>Lione R, Brunelli V, Franchi L, Pavoni C, Quiroga Souki B, Cozza P. Mandibular response after rapid maxillary expansion in class II growing patients: a pilot randomized controlled trial. Prog Orthod. 2017 Dec;18.</span>"

        +

        "- Corrige deficiencia transversal."
        
        +
        
        "<br>- No mejora sagitalmente clase II (SNB +0.2°, ANB -0.2°)"
        
        ,

        imagen: "./image/claseII4a_8.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "disyuntor",
          }

        ]

      },

      lenta: {

        tipo: "accion",

        texto: "<Strong>Expansión lenta maxilar:</Strong>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<br>La expansión lenta maxilar se considera cuando la deficiencia transversal puede corregirse de manera progresiva mediante fuerzas ligeras y continuas."

        +

        "<span class='cita-biblio'>Revankar AV, Bhat SS, Rozario JE. A comparison of the quadhelix and the nickel-titanium palatal expander in the treatment of narrow maxillary arches: A prospective clinical study. J Orthod Sci. 2023;12:8.</span>"
        
        ,

        imagen: "./image/claseII4a_4.png",

        siguiente: "quad",

        botones: [

          {
            texto: "Volver",
            siguiente: "tipo",
          }

        ]

      },

      quad: {

        tipo: "accion",

        texto: "<Strong>Quad Helix</Strong>"
        
        +

        "<br><br><img src='./image/Im12.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><Strong>1L1:Quad-Helix:</Strong>"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<br>El Quad-Helix tiene un efecto principalmente dentoalveolar y transversal. Revankar et al. refieren que los efectos sagitales mandibulares no son significativos en comparación con los pacientes Clase II no tratados, aunque la deficiencia transversal sí se corrige."

        +

        "<span class='cita-biblio'>Revankar AV, Bhat SS, Rozario JE. A comparison of the quadhelix and the nickel-titanium palatal expander in the treatment of narrow maxillary arches: A prospective clinical study. J Orthod Sci. 2023;12:8.</span>"
        
        +

        "<br>• Corrige deficiencia transversal."

        +

        "<br>• Overjet disminuye 1.69 mm Vs control"

        +

        "<br>• ANB: -1.51°"

        +

        "<br>• SNB: +0.83°"

        +

        "<br>• Co-Gn: +5.41mm"

        ,

        imagen: "./image/claseII4a_6.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "lenta",
          }

        ]

      },

      corrige3: {

        tipo: "accion",

        texto: 
        
        "- Corrige deficiencia transversal."

        +

        "<br>-Overjet disminuye 1.69 mm Vs control"

        +

        "<br>-ANB: -1.51°"

        +

        "<br>-SNB: +0.83°"

        +

        "<br>-Co-Gn: +5.41mm"
        
        ,

        imagen: "./image/claseIII1_5.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "quad",
          }

        ]

      },

      anteroposterior: {

        tipo: "accion",

        texto: "<Strong>Restricción del crecimiento maxilar anteroposterior</Strong>"
        
        +

        "<br><br><img src='./image/Im7.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Sfondrini, M. F., Pascadopoli, M., Nardi, M. G., Cardarelli, F., Zampetti, P., Viola, A., Labadze, S., & Scribante, A. (2026). Evaluation of an Elastodontic Bioactivator Versus High-Pull Headgear for the Treatment of Skeletal Class II Hyperdivergent Pediatric Patients: A Retrospective Study. Journal of clinical medicine, 15(2), 804. https://doi.org/10.3390/jcm15020804</span>"
        
        +

        "<br><br><img src='./image/Im7_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Yoshida, N., Jost-Brinkmann, P. G., & Yamada, Y. (1995). Initial tooth movement under extraoral force and considerations for controlled molar movement. The Angle orthodontist, 65(3), 199–208. https://doi.org/10.1043/0003-3219(1995)065<0199:ITMUEF>2.0.CO;2</span>"

        +

        "<br><Strong>Restricción del crecimiento maxilar anteroposterior:</Strong>"

        +

        "<br>La restricción del crecimiento anteroposterior maxilar se considera cuando el paciente con maloclusión esquelética de Clase II presenta un componente maxilar clínicamente relevante, expresado por prognatismo maxilar. Antes de seleccionar el tipo de tracción, se debe definir el patrón de crecimiento vertical. Esta decisión es determinante porque cada vector de tracción puede producir efectos distintos en el maxilar, los molares superiores y la rotación mandibular."

        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA, Tollaro I. Early dentofacial features of Class II malocclusion: a longitudinal study from the deciduous through the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:502–9.</span>"
        
        ,

        imagen: "./image/claseII4b_1.png",

        siguiente: "tipo2",

        botones: [

          {
            texto: "Volver",
            siguiente: "definir",
          }

        ]

      },

      tipo2: {

        tipo: "decision_opciones",

        texto: "Definir el tipo de Patrón de crecimiento",

        imagen: "./image/claseII4b_2.png",
        
        opciones: [

          {
            texto: "Patrón de crecimiento hipodivergente o normodivergente",

            siguiente: "normodivergente"

          },

          {
            texto: "Patrón de crecimiento hiperdivergente",

            siguiente: "hiperdivergente"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "anteroposterior",
          }

        ]

      },

      normodivergente: {

        tipo: "decision_opciones",

        texto: "Patrón de crecimiento hipodivergente o normodivergente",
        
        descripcion: "<br><br><img src='./image/Im13.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>",

        imagen: "./image/claseII4b_3.png",
        
        opciones: [

          {
            texto: "Tracción extraoral combinada (Parietal)",

            siguiente: "parietal"

          },

          {
            texto: "Tracción extraoral cervical",

            siguiente: "extraoral"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "tipo2",
          }

        ]

      },

      parietal: {

        tipo: "accion",

        texto: "<Strong>Tracción extraoral combinada (Parietal)</Strong>"
        
        +

        "<br><br><img src='./image/Im14.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Silva-Esteves Raffo, J. F., Aliaga Del Castillo, R., & Aliaga Del Castillo, A. (2013). Tratamiento de una maloclusión Clase II División 1 en dentición mixta: Reporte de un caso. Odontología Pediátrica, 12(1), 76-84</span>"
        
        +

        "<br><Strong>Tracción extraoral combinada (Parietal):</Strong>"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<br>La tracción extraoral combinada se indica cuando se busca un efecto de restricción del crecimiento maxilar anterior y distalización de molares superiores con un vector intermedio. Esta opción puede considerarse en pacientes con patrón hipodivergente o normodivergente, cuando se requiere control anteroposterior del maxilar sin una necesidad marcada de control vertical."

        +

        "<span class='cita-biblio'>Farret MMB, de Lima EM, Farret MM, de Araújo LL. Dental and skeletal effects of combined headgear used alone or in association with rapid maxillary expansion. Dental Press J Orthod. 2015 Sep;20:43–9.</span>"

        +

        "La tracción combinada produjo principalmente efectos dentoalveolares, también se observó distalización molar superior, inclinación distal molar y rotación horaria maxilar, sin reducción significativa de SNA."

        +

        "<span class='cita-biblio'>Farret MMB, de Lima EM, Farret MM, de Araújo LL. Dental and skeletal effects of combined headgear used alone or in association with rapid maxillary expansion. Dental Press J Orthod. 2015 Sep;20:43–9.</span>"

        +

        "● Distalización molar Superior"

        +

        "<br>● Rotación horaria maxilar"

        +

        "<br>● Sin reducción significativa de SNA"

        +

        "<br>● Sin extrusión molar significativa"

        ,

        imagen: "./image/claseII4b_5.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "normodivergente",
          }

        ]

      },

      extraoral: {

        tipo: "accion",

        texto: "<Strong>Tracción extraoral cervical</Strong>"
        
        +

        "<br><br><img src='./image/Im15.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Isaza Saldarriaga, J. F., Correa Vélez, S., & Roldán Restrepo, S. (2011). Simulación numérica por el método de elementos finitos del comportamiento de una mandíbula ante un dispositivo de tracción cervical mandibular. Revista Brasileira de Engenharia Biomédica, 27(3), 135-146. https://doi.org/10.4322/rbeb.2011.011</span>"
        
        +

        "<br><Strong>Tracción extraoral cervical:</Strong>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Baja, GRADE)</span>"

        +

        "<br>La tracción extraoral cervical se indica cuando el objetivo es restringir el avance anterior del maxilar y distalizar molares superiores, en pacientes hipodivergentes o normodivergentes, debido a la posibilidad de efectos verticales como extrusión molar, aumento de la altura facial inferior o rotación mandibular horaria. Efectos dependientes del diseño del aparato, la dirección de la fuerza, el patrón facial y del control clínico. "

        +

        "La tracción cervical produjo restricción del avance maxilar, distalización de molares superiores y mejoría de la relación sagital, con disminución de ANB y Wits."

        +

        "<span class='cita-biblio'>Julku J, Pirilä-Parkkinen K, Tolvanen M, Pirttiniemi P. Comparison of effects of cervical headgear treatment on skeletal facial changes when the treatment time is altered: A randomized controlled trial. Eur J Orthod. 2019 Dec;41:631–40.</span>"

        +

        "Además, no se observó un aumento significativo del plano mandibular, lo que sugiere que, bajo un protocolo controlado, la tracción cervical puede utilizarse sin inducir necesariamente cambios verticales"

        +

        "<span class='cita-biblio'>Julku J, Pirilä-Parkkinen K, Tolvanen M, Pirttiniemi P. Comparison of effects of cervical headgear treatment on skeletal facial changes when the treatment time is altered: A randomized controlled trial. Eur J Orthod. 2019 Dec;41:631–40.</span>"

        +

        "● Restricción del avance maxilar"

        +

        "<br>● Distalización molares superiores"

        +

        "<br>● ANB disminuye/ Witts disminuye"

        +

        "<br>● Aumento significativo del componente vertical"

        ,

        imagen: "./image/claseII4b_6.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "normodivergente",
          }

        ]

      },

      hiperdivergente: {

        tipo: "accion",

        texto: "<Strong>Patrón de crecimiento hiperdivergente</Strong>"
        
        +

        "<br><br><img src='./image/Im16.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseII4b_4.png",

        siguiente: "alta",

        botones: [

          {
            texto: "Volver",
            siguiente: "tipo2",
          }

        ]

      },

      alta: {

        tipo: "accion",

        texto: "<Strong>Tracción extraoral alta</Strong>"
        
        +

        "<br><br><img src='./image/Im17.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Sfondrini, M. F., Pascadopoli, M., Nardi, M. G., Cardarelli, F., Zampetti, P., Viola, A., Labadze, S., & Scribante, A. (2026). Evaluation of an Elastodontic Bioactivator Versus High-Pull Headgear for the Treatment of Skeletal Class II Hyperdivergent Pediatric Patients: A Retrospective Study. Journal of clinical medicine, 15(2), 804. https://doi.org/10.3390/jcm15020804</span>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br>La tracción extraoral alta se considera cuando el paciente presenta componente maxilar de Clase II asociado a patrón hiperdivergente, tendencia a aumento de la altura facial inferior o necesidad de mayor control vertical. Su vector de fuerza busca restringir el crecimiento anterior del maxilar con menor riesgo de efectos verticales desfavorables sobre molares superiores y rotación mandibular."

        +

        "<span class='cita-biblio'>Erin Bilbo E, Marshall SD, Southard KA, Allareddy V, Holton N, Thames AM, et al. Long-term skeletal effects of high-pull headgear followed by fixed appliances for the treatment of Class II malocclusions. Angle Orthod. 2018 Sep;88:530–7.</span>"

        +

        "<br>Se reportó reducción de SNA, disminución de ANB y reducción del overjet, sin efecto vertical significativo a largo plazo."

        +

        "<span class='cita-biblio'>Erin Bilbo E, Marshall SD, Southard KA, Allareddy V, Holton N, Thames AM, et al. Long-term skeletal effects of high-pull headgear followed by fixed appliances for the treatment of Class II malocclusions. Angle Orthod. 2018 Sep;88:530–7.</span>"

        +

        "● Disminuye  SNA"

        +

        "<br>● Disminuye ovejet"

        +

        "<br>● Disminuye ANB"

        +

        "<br>● Sin efecto vertical significativo"

        ,

        imagen: "./image/claseII4b_7.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      avance: {

        tipo: "accion",

        texto: "<Strong>Avance mandibular</Strong>"
        
        +

        "<br><br><img src='./image/Im8.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br>El avance mandibular se considera cuando el paciente con maloclusión esquelética Clase II presenta un componente mandibular predominante, expresado por retrognatismo mandibular. La selección del aparato funcional debe basarse en el estadio de desarrollo esquelético, la magnitud de la discrepancia sagital, el patrón vertical, la presencia o ausencia de apiñamiento mandibular anterior y la cooperación del paciente."
      
        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA, Tollaro I. Early dentofacial features of Class II malocclusion: a longitudinal study from the deciduous through the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:502–9.</span>"

        +

        "En términos generales, los aparatos funcionales buscan posicionar la mandíbula anterior durante el crecimiento, favoreciendo cambios en la relación sagital maxilomandibular y reduciendo el overjet."
        
        ,

        imagen: "./image/claseII4c_1.png",

        siguiente: "apinamiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "definir",
          }

        ]

      },

      apinamiento: {

        tipo: "decision",

        texto: "¿Existe apiñamiento mandibular anterior?",

        imagen: "./image/claseII4c_2.png",

        si: "eseveridad",

        no: "aparato",

        botones: [

          {
            texto: "Volver",
            siguiente: "avance",
          }

        ]

      },

      eseveridad: {

        tipo: "decision_opciones",

        texto: "Evaluar severidad",
        
        descripcion: 
        
        "<br><br><Strong>Evaluación de la severidad del apiñamiento mandibular anterior:</Strong>"

        +

        "<br>Antes de seleccionar la aparatología de avance mandibular, se debe evaluar la presencia de apiñamiento mandibular anterior. Esta valoración es necesaria porque los aparatos funcionales utilizados para la corrección de la maloclusión Clase II pueden generar cambios dentoalveolares asociados, incluyendo la modificación de la posición e inclinación de los incisivos inferiores."

        +

        "<br>Si el apiñamiento es leve o ausente, puede continuar con la selección de aparatología de avance mandibular, siempre que no exista riesgo de compensación dentoalveolar desfavorable. Si el apiñamiento es moderado o severo, se debe valorar si requiere manejo previo antes de iniciar la mecánica de avance mandibular"

        +

        "<span class='cita-biblio'>Farouk K, Eissa O, Ghoneima A, El-Bedwehi A, Abdel-Fattah E, Hussein F, et al. Treatment effects of Herbst appliance in skeletal Class II cases during pre-pubertal and post-pubertal periods: a cone-beam computed tomographic study. Sci Rep. 2023 Dec;13.</span>"

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"
        
        ,

        imagen: "./image/claseII4c_3.png",
        
        opciones: [

          {
            texto: "Moderada ó severa",

            siguiente: "asevera"

          },

          {
            texto: "Leve",

            siguiente: "aleve"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "apinamiento",
          }

        ]

      },

      asevera: {

        tipo: "accion",

        texto: "<Strong>Moderada ó severa</Strong>"
        
        +

        "<br><br>Salida a ACBE para manejo de apañamiento mandibular anterior"
        
        ,

        imagen: "./image/claseII4c_4.png",

        siguienteArbol: {

          ruta: "apinamiento_mandibular_anterior",
          nodo: "presentacion" 
        
        },

        botones: [

          {
            texto: "Volver",
            siguiente: "eseveridad",
          }

        ]

      },

      aleve: {

        tipo: "accion",

        texto: "<Strong>Leve</Strong>",

        imagen: "./image/claseII4c_5.png",

        siguiente: "aparato",

        botones: [

          {
            texto: "Volver",
            siguiente: "eseveridad",
          }

        ]

      },

      aparato: {

        tipo: "decision_opciones",

        texto: "Seleccionar tipo de aparato",

        imagen: "./image/claseII4c_6.png",
        
        opciones: [

          {
            texto: "Twin Block",

            siguiente: "twin"

          },

          {
            texto: "Herbs",

            siguiente: "herbs"

          },

          {
            texto: "Activador de Andresen",

            siguiente: "andresen"

          },

          {
            texto: "Bionator",

            siguiente: "bionator"

          },

          {
            texto: "Frankel II",

            siguiente: "frankel"

          }

        ],
        
        botones: [

          {
            texto: "Volver ¿Existe apiñamiento mandibular anterior?",
            siguiente: "apinamiento",
          },
          {
            texto: "Volver leve",
            siguiente: "aleve",
          }

        ]

      },

      twin: {

        tipo: "accion",

        texto: "<Strong>Twin Block</Strong>"
        
        +

        "<br><br><img src='./image/Im18.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><Strong>1Q1 Twin Block:</Strong>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<br>El Twin Block se considera una de las principales alternativas removibles para el avance mandibular en pacientes en crecimiento con maloclusión esquelética Clase II por retrognatismo mandibular. Su mecanismo se basa en dos placas acrílicas independientes, superior e inferior, con planos inclinados que guían la mandíbula hacia una posición protrusiva durante la función. Esta configuración permite modificar la postura mandibular, favorecer la corrección del overjet y mejorar la relación sagital maxilomandibular en pacientes con crecimiento remanente."

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"
      
        +

        "El Twin Block es uno de los aparatos funcionales removibles más estudiados en la literatura reciente y clásica. Desde el punto de vista clínico, se indica principalmente en pacientes con maloclusión Clase II división 1 o Clase II esquelética asociada a retrognatismo mandibular, overjet aumentado y potencial de crecimiento activo."

        +

        "<br>El protocolo del Twin Block incorporó arcos vestibulares en las placas superior e inferior, elaborado mediante una mordida constructiva que permite el avance mandibular."

        +

        "<br>Se evidencian cambios clínicamente relevantes de avance mandibular, con el aumento de la longitud mandibular +6,3 ± 2,7 mm, reducción del overjet −7,0 ± 2,3 mm, aumento de SNB de +2,1°, reducción de ANB de −2,2°, incremento de la altura facial anterior total de +6,0 mm y proinclinación de incisivos inferiores de +5,3°. Estos hallazgos indican que la corrección producida por Twin Block incluye un componente esquelético mandibular, y también un componente dentoalveolar y vertical que debe ser controlado durante el tratamiento."

        +

        "<span class='cita-biblio'>DiBiase AT, Lucchesi L, Qureshi U, Lee RT. Post-treatment cephalometric changes in adolescent patients with Class II malocclusion treated using two different functional appliance systems for an extended time period: A randomized clinical trial. Eur J Orthod. 2021;42:135–43.</span>"

        +

        "La cooperación del paciente y la adherencia al tratamiento son factores esenciales para obtener resultados satisfactorios con el uso del Twin Block"

        +

        "<span class='cita-biblio'>Pacha MM, Fleming PS, Shagmani M, Johal A. The skeletal and dental effects of Hanks Herbst versus twin block appliances for class II correction in growing patients: a randomized clinical trial. Eur J Orthod. 2024 Jan;46.</span>"

        +

        "<br>-Mayor efecto  esquelético (SNB aumenta y ANB disminuye)"
        
        +
        
        "<br>-Mayor control vertical"

        +

        "<br>-Overjet disminuye"

        ,

        imagen: "./image/claseII4c_7.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "aparato",
          }

        ]

      },

      herbs: {

        tipo: "accion",

        texto: "<Strong>Herbs</Strong>"
        
        +

        "<br><br><img src='./image/Im19.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><Strong>1Q2 Herbs:</Strong>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br><br>El Herbst es un aparato funcional fijo que mantiene la mandíbula en posición adelantada mediante un sistema telescópico bilateral. Su principal ventaja clínica es que reduce la dependencia de cooperación del paciente."

        +

        "<span class='cita-biblio'>Farouk K, Eissa O, Ghoneima A, El-Bedwehi A, Abdel-Fattah E, Hussein F, et al. Treatment effects of Herbst appliance in skeletal Class II cases during pre-pubertal and post-pubertal periods: a cone-beam computed tomographic study. Sci Rep. 2023 Dec;13.</span>"

        +

        "<span class='cita-biblio'>Cirgić E, Kjellberg H, Hansen K. Treatment of large overjet in Angle Class II: Division 1 malocclusion with Andresen activators versus prefabricated functional appliances- A multicenter, randomized, controlled trial. Eur J Orthod. 2016 Oct;38:516–24.</span>"
        
        +

        "Los resultados reportados fueron los siguientes: SNB aumentó aproximadamente +1,53° y el punto B avanzó +2,13 mm."

        +

        "<br>El Herbst se ubica como la principal opción fija para avance mandibular en pacientes con baja cooperación o cuando se requiere una alternativa menos dependiente del uso voluntario."

        +

        "<span class='cita-biblio'>Pacha MM, Fleming PS, Shagmani M, Johal A. The skeletal and dental effects of Hanks Herbst versus twin block appliances for class II correction in growing patients: a randomized clinical trial. Eur J Orthod. 2024 Jan;46.</span>"

        +

        "Cambios esqueléticos favorables, pero su corrección incluye un componente dentoalveolar importante. Principal opción en casos de baja cooperación."

        ,

        imagen: "./image/claseII4c_8.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "aparato",
          }

        ]

      },

      andresen: {

        tipo: "accion",

        texto: "<Strong>Activador de Andresen</Strong>"
        
        +

        "<br><br><img src='./image/Im20.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Farronato, G., Giannini, L., Galbiati, G., Grillo, E., & Maspero, C. (2013). Occlus-o-Guide® versus Andresen activator appliance: neuromuscular evaluation. Progress in orthodontics, 14(1), 4.</span>"

        +

        "<br><br><img src='./image/Im20_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +
        
        "<br><br><Strong>Activador de Andresen:</Strong>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Baja, GRADE)</span>"

        +

        "<br>El Activador de Andresen es un aparato funcional de una sola pieza removible utilizado para el manejo temprano de pacientes con maloclusión Clase II división 1 y overjet aumentado. Su principio biomecánico consiste en posicionar la mandíbula hacia anterior mediante una mordida constructiva, impidiendo su desplazamiento posterior y generando fuerzas musculares que contribuyen a la corrección de la relación incisiva y molar."

        +

        "<span class='cita-biblio'>Cirgić E, Kjellberg H, Hansen K. Treatment of large overjet in Angle Class II: Division 1 malocclusion with Andresen activators versus prefabricated functional appliances- A multicenter, randomized, controlled trial. Eur J Orthod. 2016 Oct;38:516–24.</span>"

        +

        "El Activador de Andresen produce una reducción del overjet durante la fase activa del tratamiento, sin embargo aumenta en el año posterior al tratamiento."
      
        +

        "<br>Cambios favorables en SNB, ANB y longitud mandibular, aunque con evidencia limitada y efecto esquelético limitado por cooperación."
    
        ,

        imagen: "./image/claseII4c_9.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "aparato",
          }

        ]

      },

      bionator: {

        tipo: "accion",

        texto: "<Strong>Bionator</Strong>"
        
        +

        "<br><br><img src='./image/Im21.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Jungbauer, R., Koretsi, V., Proff, P., Rudzki, I., & Kirschneck, C. (2020). Twenty-year follow-up of functional treatment with a bionator appliance: A retrospective dental cast analysis. The Angle orthodontist, 90(2), 209–215. https://doi.org/10.2319/042419-292.1</span>"

        +

        "<br><br><Strong>Bionator:</Strong>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Baja, GRADE)</span>"

        +

        "<br>El Bionator es un aparato funcional removible de una sola pieza, utilizado para el manejo de pacientes en crecimiento con maloclusión Clase II asociada a retrognatismo mandibular. Su mecanismo terapéutico se basa en posicionar la mandíbula hacia adelante mediante una mordida constructiva, buscando favorecer cambios en la relación maxilomandibular, reducción del overjet y mejoría de la relación oclusal. Al igual que otros aparatos removibles, su efectividad depende de la cooperación del paciente y del uso constante durante el periodo activo de tratamiento."

        +

        "<span class='cita-biblio'>Sakai N, Miyazawa K, Tsutsui T, Tabuchi M, Shibata M, Goto S. Comparative study of the treatment effects of bionator and bite jumping appliances on Class II malocclusions. Orthod Waves. 2016 Mar;75:1–9.</span>"

        +
        
        "Se presentan cambios en SNB de 74,10° a 75,10°, equivalente a +1,00°, y una disminución de ANB de 4,67° a 3,67°, equivalente a −1,00°. Estos resultados sugieren una mejoría sagital principalmente asociada al componente mandibular."

        +

        "<span class='cita-biblio'>Sakai N, Miyazawa K, Tsutsui T, Tabuchi M, Shibata M, Goto S. Comparative study of the treatment effects of bionator and bite jumping appliances on Class II malocclusions. Orthod Waves. 2016 Mar;75:1–9.</span>"

        +

        "Cambios favorables en SNB, ANB (Resultados limitados por poca cooperación)."

        ,

        imagen: "./image/claseII4c_10.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "aparato",
          }

        ]

      },

      frankel: {

        tipo: "accion",

        texto: "<Strong>Frankel II</Strong>"
        
        +

        "<br><br><img src='./image/Im22.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Shihabi, R., Liu, Y., Kusaibati, A. M., Maraabeh, F., Zhan, J., Zhang, J., & Hu, L. (2025). Three-dimensional analysis of mandibular and condylar growth using artificial intelligence tools: a comparison of twin-block and Frankel II Appliances. BMC oral health, 25(1), 254. https://doi.org/10.1186/s12903-025-05624-z</span>"

        +

        "<br><br><Strong>Frankel II:</Strong>"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<br>El Frankel II es un aparato funcional removible de soporte principalmente tisular, diseñado para modificar el ambiente muscular perioral en pacientes con maloclusión Clase II división 1. Su acción se basa en el uso de escudos vestibulares y almohadillas labiales que separan la musculatura de los procesos dentoalveolares, disminuyendo presiones restrictivas y favoreciendo un entorno funcional más adecuado para el desarrollo mandibular y la corrección dentoalveolar."

        +

        "<span class='cita-biblio'>Campbell C, Millett D, Kelly N, Cooke M, Cronin M. Frankel 2 appliance versus the modified twin block appliance for phase 1 treatment of class II division 1 malocclusion in children and adolescents: A randomized clinical trial. Angle Orthod. 2020 Mar;90:202–8.</span>"

        +

        "Se evidencian cambios cefalométricos como: SNA −1,32 ± 2,99°, SNB +0,57 ± 2,53°, ANB −2,71 ± 1,70°, Wits −3,09 ± 2,23 mm, longitud mandibular efectiva +8,90 ± 7,24 mm y altura facial anterior inferior +5,81 ± 3,86 mm. A nivel dentoalveolar, se observó overjet −3,88 ± 2,58 mm, overbite −0,71 ± 2,44 mm. En tejidos blandos, se reportó labio superior a plano E −3,09 ± 0,19 mm, labio inferior a plano E +1,77 ± 5,81 mm y ángulo nasolabial +0,63 ± 7,97°."

        +

        "<span class='cita-biblio'>Acharya S, Sriwastva G, Bai PM, Gautam N, Panda S, Pani S. Radiographic assessment of skeletal and soft tissue parameters in class II malocclusion cases with frankel appliance (FR II), twin block (TB), and forsus FRD: A comparative study. J Contemp Orthod. 2025 Apr;9:252–7.</span>"

        +

        "Estos resultados sugieren que el Frankel II puede producir mejoría sagital, reducción del overjet y cambios favorables en tejidos blandos. Puede considerarse en casos seleccionados donde se priorice la acción muscular, la modificación del entorno perioral y la reeducación funcional."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Acharya S, Sriwastva G, Bai PM, Gautam N, Panda S, Pani S. Radiographic assessment of skeletal and soft tissue parameters in class II malocclusion cases with frankel appliance (FR II), twin block (TB), and forsus FRD: A comparative study. J Contemp Orthod. 2025 Apr;9:252–7.</span>"
        
        +

        "Menor tasa de adherencia, evidencia limitada y alternativa funcional cuando se prioriza acción muscular."
        ,

        imagen: "./image/claseII4c_11.png",

        siguiente: "objetivos",

        botones: [

          {
            texto: "Volver",
            siguiente: "aparato",
          }

        ]

      },

      objetivos: {

        tipo: "decision_opciones",

        texto: "<Strong>¿Que objetivos terapéuticos coexisten?</Strong>",

        imagen: "./image/claseII4d_1.png",
        
        opciones: [

          {
            texto: "Avance mandibular + expansión transversal maxilar",

            siguiente: "transversal2"

          },

          {
            texto: "Expansión transversal maxilar + restricción del crecimiento maxilar anteroposterior",

            siguiente: "crecimientoM"

          },

          {
            texto: "Restricción del crecimiento maxilar anteroposterior + avance mandibular",

            siguiente: "restriccion"

          }

        ],

        botones: [

          {
            texto: "Volver con planos de mordida",
            siguiente: "cplanos",
          },
          {
            texto: "Volver sin planos de mordida",
            siguiente: "splanos",
          },
          {
            texto: "Volver Quad Helix",
            siguiente: "quad",
          },
          {
            texto: "Volver tracción extraoral combinada (Parietal)",
            siguiente: "parietal",
          },
          {
            texto: "Volver tracción extraoral cervical",
            siguiente: "extraoral",
          },
          {
            texto: "Volver tracción extraoral alta",
            siguiente: "alta",
          },
          {
            texto: "Volver Twin Block",
            siguiente: "twin",
          },
          {
            texto: "Volver Herbs",
            siguiente: "herbs",
          },
          {
            texto: "Volver Andresen",
            siguiente: "andresen",
          },
          {
            texto: "Volver Bionator",
            siguiente: "bionator",
          },
          {
            texto: "Volver Frankel II",
            siguiente: "frankel",
          },

        ]

      },

      transversal2: {

        tipo: "accion",

        texto: "<Strong>Avance mandibular + expansión transversal maxilar</Strong>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br>La combinación de avance mandibular y expansión maxilar se considera cuando el paciente presenta maloclusión Clase II división 1, asociada a retrognatismo mandibular y deficiencia transversal maxilar. Esta combinación busca adelantar funcionalmente la mandíbula y, al mismo tiempo, eliminar restricciones transversales del arco superior que puedan limitar la coordinación interarco o interferir con una posición mandibular más favorable."

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"

        +

        "<span class='cita-biblio'>Zhao H, Sun R, Cao S, Han J. Clinical effects of twin-block combined with maxillary expansion on the upper airway in adolescents with Class II malocclusion. Clin Oral Investig. 2024 Aug;28.</span>"
        

        ,

        imagen: "./image/claseII4d_2.png",

        siguiente: "tornillo",

        botones: [

          {
            texto: "Volver",
            siguiente: "objetivos",
          }

        ]

      },

      tornillo: {

        tipo: "accion",

        texto: "<Strong>Twin Block + Tornillo de expansión transversal:</Strong>"
        
        +

        "<br><br><img src='./image/Im23.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><br><img src='./image/Im23_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br>El protocolo terapéutico combinado presenta una disminución de SNA y ANB, junto con un aumento de SNB. Sugiere una mejoría de la relación sagital maxilomandibular, probablemente asociada a la combinación entre avance funcional mandibular, corrección transversal del arco superior y reducción de la discrepancia sagital."

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"
        
        +

        "Los cambios esqueléticos reportados para Twin Block fueron: SNB +0,7°, ANB −0,7°, Wits −2,0 mm, NAPg −2,1° y Co-Gn +6,0 mm. Estos resultados evidencian una mejoría de la posición sagital mandibular, reducción de la discrepancia maxilomandibular, disminución de la convexidad esquelética y aumento de la longitud mandibular."

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"

        +

        "<span class='cita-biblio'>Zhao H, Sun R, Cao S, Han J. Clinical effects of twin-block combined with maxillary expansion on the upper airway in adolescents with Class II malocclusion. Clin Oral Investig. 2024 Aug;28.</span>"

        +

        "- Disminuye  SNA<br>- Aumenta SNB<br>- Disminuye ANB<br>- Disminuye el Overjet"

        ,

        imagen: "./image/claseII4d_5.png",

        siguiente: "controles",

        botones: [

          {
            texto: "Volver",
            siguiente: "transversal2",
          }

        ]

      },

      crecimientoM: {

        tipo: "accion",

        texto: "<Strong>Expansión transversal maxilar + restricción del crecimiento maxilar anteroposterior</Strong>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<br>Indicada en maloclusión Clase II con deficiencia transversal maxilar asociada a la necesidad de restricción del avance maxilar anteroposterior."

        +

        "<span class='cita-biblio'>Farret MMB, de Lima EM, Farret MM, de Araújo LL. Dental and skeletal effects of combined headgear used alone or in association with rapid maxillary expansion. Dental Press J Orthod. 2015 Sep;20:43–9.</span>"
        
        ,

        imagen: "./image/claseII4d_3.png",

        siguiente: "hass",

        botones: [

          {
            texto: "Volver",
            siguiente: "objetivos",
          }

        ]

      },

      hass: {

        tipo: "accion",

        texto: "<Strong>Disyuntor de Hass modificado + Tracción extraoral combinada</Strong>"
        
        +

        "<br><br><img src='./image/Im24.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Silva-Esteves Raffo, J. F., Aliaga Del Castillo, R., & Aliaga Del Castillo, A. (2013). Tratamiento de una maloclusión Clase II División 1 en dentición mixta: Reporte de un caso. Odontología Pediátrica, 12(1), 76-84</span>"

        +

        "<br><br><img src='./image/Im24_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<br><br>La combinación de expansión rápida maxilar y tracción extraoral combinada produjo desplazamiento distal de molares superiores de +1,4 mm, sin inclinación distal significativa de los molares (+1,4°; p no significativo) y sin extrusión molar significativa (+0,4 mm; p no significativo). A nivel maxilar, el grupo combinado presentó una reducción significativa de SNA de −0,6° y no mostró rotación horaria maxilar significativa."

        +

        "<span class='cita-biblio'>Farret MMB, de Lima EM, Farret MM, de Araújo LL. Dental and skeletal effects of combined headgear used alone or in association with rapid maxillary expansion. Dental Press J Orthod. 2015 Sep;20:43–9.</span>"
        
        +

        "- Disminuye  SNA<br>- Menor rotación horaria maxilar<br>- Distalización molar superior<br>- Menor inclinación distal molar"
        
        ,

        imagen: "./image/claseII4d_6.png",

        siguiente: "controles",

        botones: [

          {
            texto: "Volver",
            siguiente: "crecimientoM",
          }

        ]

      },

      restriccion: {

        tipo: "accion",

        texto: "<Strong>Restricción del crecimiento maxilar anteroposterior + avance mandibular</Strong>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "La combinación de tracción extraoral alta con activador funcional se considera cuando el paciente presenta maloclusión Clase II con overjet aumentado, necesidad de restricción maxilar y avance mandibular."

        +

        "<span class='cita-biblio'>Kallunki J, Bondemark L, Paulsson L. Early headgear activator treatment of Class II malocclusion with excessive overjet: A randomized controlled trial. Eur J Orthod. 2021 Dec;43:639–47.</span>"
        
        ,

        imagen: "./image/claseII4d_4.png",

        siguiente: "textraoral",

        botones: [

          {
            texto: "Volver",
            siguiente: "objetivos",
          }

        ]

      },

      textraoral: {

        tipo: "accion",

        texto: "<Strong>Tracción extraoral alta + Activador funcional</Strong>"
        
        +

        "<br><br><img src='./image/Im25.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Sfondrini, M. F., Pascadopoli, M., Nardi, M. G., Cardarelli, F., Zampetti, P., Viola, A., Labadze, S., & Scribante, A. (2026). Evaluation of an Elastodontic Bioactivator Versus High-Pull Headgear for the Treatment of Skeletal Class II Hyperdivergent Pediatric Patients: A Retrospective Study. Journal of clinical medicine, 15(2), 804. https://doi.org/10.3390/jcm15020804</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br>El aparato utilizado fue un activador modificado con mordida constructiva en posición borde a borde"

        +

        "<span class='cita-biblio'>Kallunki J, Bondemark L, Paulsson L. Early headgear activator treatment of Class II malocclusion with excessive overjet: A randomized controlled trial. Eur J Orthod. 2021 Dec;43:639–47.</span>"
        
        +

        "Los resultados mostraron una reducción significativa del overjet en el grupo tratado con un cambio promedio de −3,5 mm, mientras que el grupo control permaneció prácticamente sin cambios. La relación molar mejoró significativamente; el overbite se mantuvo estable en el grupo tratado, mientras que aumentó en el grupo control. A nivel cefalométrico, el grupo tratado presentó una reducción de SNA de −1,2°, una reducción de ANB de −1,6° y una retroinclinación de los incisivos superiores de −4,6°. El cambio en SNB fue pequeño, de +0,3°, y no mostró un aumento mandibular significativo frente al grupo control."

        +

        "<br>Estos resultados indican que el efecto principal de la tracción extraoral + activador fue la reducción del overjet y la mejoría de la relación molar, con cambios principalmente dentoalveolares y restricción maxilar, más que un aumento esquelético mandibular significativo."

        +

        "<span class='cita-biblio'>Kallunki J, Bondemark L, Paulsson L. Early headgear activator treatment of Class II malocclusion with excessive overjet: A randomized controlled trial. Eur J Orthod. 2021 Dec;43:639–47.</span>"
        
        +

        "- Postura mandibular adelantada por mordida constructiva<br>- Sin aumento significativo de SNB<br>- Mejoría de ANB principalmente por restricción maxilar<br>- Mayormente efectos dentoalveolares"

        ,

        imagen: "./image/claseII4d_7.png",

        siguiente: "controles",

        botones: [

          {
            texto: "Volver",
            siguiente: "restriccion",
          }

        ]

      },

      controles: {

        tipo: "accion",

        texto: "<Strong>Controles y seguimiento</Strong>"
        
        ,

        imagen: "./image/claseII5_1.png",

        siguiente: "frecuencia",

        botones: [

          {
            texto: "Volver Twin Block + Tornillo",
            siguiente: "tornillo",
          },
          {
            texto: "Volver Hass modificado + Tracción extraoral",
            siguiente: "hass",
          },
          {
            texto: "Volver tracción extraoral alta + Activador funcional",
            siguiente: "textraoral",
          }

        ]

      },

      frecuencia: {

        tipo: "accion",

        texto: "<Strong>Definir frecuencia de controles</Strong>"
        
        +

        "<br><br>La frecuencia de controles debe establecerse según el tipo de aparatología empleada, el objetivo terapéutico y la fase activa del tratamiento. En los protocolos revisados, los controles se realizaron generalmente entre 4 y 8 semanas, aunque algunos aparatos requieren controles más cercanos durante la fase inicial de adaptación."

        +

        "<br>En aparatología funcional removible, como Twin Block, Bionator, Activador de Andresen o Frankel II, los controles permiten verificar adaptación, uso adecuado del aparato, reducción progresiva del overjet, relación molar y estabilidad de la mordida constructiva." 
        
        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"

        +

        "<span class='cita-biblio'>DiBiase AT, Lucchesi L, Qureshi U, Lee RT. Post-treatment cephalometric changes in adolescent patients with Class II malocclusion treated using two different functional appliance systems for an extended time period: A randomized clinical trial. Eur J Orthod. 2021;42:135–43.</span>"

        +

        "<span class='cita-biblio'>Pacha MM, Fleming PS, Shagmani M, Johal A. The skeletal and dental effects of Hanks Herbst versus twin block appliances for class II correction in growing patients: a randomized clinical trial. Eur J Orthod. 2024 Jan;46.</span>"

        +

        "<span class='cita-biblio'>Cirgić E, Kjellberg H, Hansen K. Treatment of large overjet in Angle Class II: Division 1 malocclusion with Andresen activators versus prefabricated functional appliances- A multicenter, randomized, controlled trial. Eur J Orthod. 2016 Oct;38:516–24.</span>"

        +

        "<span class='cita-biblio'>Acharya S, Sriwastva G, Bai PM, Gautam N, Panda S, Pani S. Radiographic assessment of skeletal and soft tissue parameters in class II malocclusion cases with frankel appliance (FR II), twin block (TB), and forsus FRD: A comparative study. J Contemp Orthod. 2025 Apr;9:252–7.</span>"

        +
        
        "En los estudios revisados, los activadores fueron controlados cada 6 a 8 semanas en varios protocolos. En el caso de la tracción extraoral + activador, se realizó un primer control a la 1 o 2 semanas para valorar adaptación, seguido de controles cada 8 semanas. En protocolos combinados de Twin Block con expansión, se reportaron controles mensuales para ajustar el aparato y supervisar el progreso transversal y sagital."

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"

        +

        "<span class='cita-biblio'>DiBiase AT, Lucchesi L, Qureshi U, Lee RT. Post-treatment cephalometric changes in adolescent patients with Class II malocclusion treated using two different functional appliance systems for an extended time period: A randomized clinical trial. Eur J Orthod. 2021;42:135–43.</span>"

        +

        "<span class='cita-biblio'>Pacha MM, Fleming PS, Shagmani M, Johal A. The skeletal and dental effects of Hanks Herbst versus twin block appliances for class II correction in growing patients: a randomized clinical trial. Eur J Orthod. 2024 Jan;46.</span>"

        +

        "En los aparatos de expansión, la frecuencia depende del tipo de expansión. En expansión rápida, el seguimiento debe ser más cercano durante la fase activa, debido a la velocidad de activación y a la necesidad de controlar la sobrecorrección transversal. En expansión lenta con Quad-Helix, el protocolo reportó activaciones cada 40 días y una estabilización posterior durante 3 meses."

        +

        "<span class='cita-biblio'>Revankar AV, Bhat SS, Rozario JE. A comparison of the quadhelix and the nickel-titanium palatal expander in the treatment of narrow maxillary arches: A prospective clinical study. J Orthod Sci. 2023;12:8.</span>"

        +

        "En tracción extraoral, los controles deben verificar el uso indicado, la adaptación del arco facial, la fuerza aplicada, la relación molar, la distalización molar y el control vertical. En la tracción extraoral combinada asociada o no a expansión rápida, el protocolo se realizó durante aproximadamente 6 meses."

        +

        "<span class='cita-biblio'>Farret MMB, de Lima EM, Farret MM, de Araújo LL. Dental and skeletal effects of combined headgear used alone or in association with rapid maxillary expansion. Dental Press J Orthod. 2015 Sep;20:43–9.</span>"

        +

        "La frecuencia de control debe individualizarse según el aparato, la fase activa y la respuesta clínica, pero se recomienda mantener intervalos aproximados de 4 a 8 semanas, con controles iniciales más próximos cuando se instalen aparatos funcionales o extraorales."

        ,

        imagen: "./image/claseII5_2.png",

        siguiente: "cambios",

        botones: [

          {
            texto: "Volver",
            siguiente: "controles",
          }

        ]

      },

      cambios: {

        tipo: "accion",

        texto: "<Strong>Evaluación de cambios dentoalveolares, oclusales y esqueléticos</Strong>"
        
        +

        "<br><br>En cada control se deben registrar los cambios clínicos y esqueléticos relacionados con el objetivo terapéutico seleccionado. La evaluación dentoalveolar debe incluir el overjet, el overbite, las relaciones molar y canina, e inclinación de los incisivos superiores e inferiores. Esto es especialmente importante porque varios aparatos funcionales no producen efectos exclusivamente esqueléticos, sino también compensaciones dentoalveolares."
        
        +

        "<br>En la expansión transversal, se debe comprobar si la deficiencia transversal fue corregida y si existe una sobrecorrección adecuada. En los protocolos de expansión rápida, el éxito no debe medirse únicamente al finalizar la activación, sino también durante las fases de retención y adaptación funcional."

        +

        "<span class='cita-biblio'>Lione R, Brunelli V, Franchi L, Pavoni C, Quiroga Souki B, Cozza P. Mandibular response after rapid maxillary expansion in class II growing patients: a pilot randomized controlled trial. Prog Orthod. 2017 Dec;18.</span>"

        +

        "<span class='cita-biblio'>Revankar AV, Bhat SS, Rozario JE. A comparison of the quadhelix and the nickel-titanium palatal expander in the treatment of narrow maxillary arches: A prospective clinical study. J Orthod Sci. 2023;12:8.</span>"

        +

        "<span class='cita-biblio'>Nagrik AP, Bhad WA, Chavan SJ, Doshi UH. A randomized clinical trial to assess the sagittal effects of Transforce transverse appliance (TTA) and NiTi palatal expander (NPE) on skeletal class II malocclusion in growing patients during retention phase – A cephalometric study using a historical control group. Int Orthod. 2020 Dec;18:722–31.</span>"

        ,

        imagen: "./image/claseII5_3.png",

        siguiente: "perfil",

        botones: [

          {
            texto: "Volver",
            siguiente: "frecuencia",
          }

        ]

      },

      perfil: {

        tipo: "accion",

        texto: "<Strong>Evaluación de  perfil de tejidos blandos</Strong>"
        
        +

        "<br><br>Evaluación del perfil de tejidos blandos: La evaluación del perfil de tejidos blandos debe incluir el análisis clínico facial, la competencia labial, la convexidad facial, la proyección del mentón, la exposición dental y la armonía del tercio inferior. Esta valoración es importante porque la maloclusión Clase II no solo produce alteraciones oclusales y cefalométricas, sino también cambios en el perfil facial, especialmente cuando existe overjet aumentado, retrognatismo mandibular o incompetencia labial."

        +

        "<span class='cita-biblio'>Acharya S, Sriwastva G, Bai PM, Gautam N, Panda S, Pani S. Radiographic assessment of skeletal and soft tissue parameters in class II malocclusion cases with frankel appliance (FR II), twin block (TB), and forsus FRD: A comparative study. J Contemp Orthod. 2025 Apr;9:252–7.</span>"
        
        ,

        imagen: "./image/claseII5_4.png",

        siguiente: "traexitoso",

        botones: [

          {
            texto: "Volver",
            siguiente: "cambios",
          }

        ]

      },

      traexitoso: {

        tipo: "decision",

        texto: "¿Tratamiento exitoso o mejoría evidente?",

        imagen: "./image/claseII5_6.png",

        si: "pendientes",

        no: "habitos2",

        botones: [

          {
            texto: "Volver",
            siguiente: "perfil",
          }

        ]

      },

      habitos2: {

        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluar el caso</Strong>"
        
        +
        
        "Si no existe mejoría evidente, el caso debe reevaluarse. Esta reevaluación debe redirigirse al diagnóstico inicial y, de ahí en adelante, revisar qué factores no se tuvieron en cuenta."

        ,

        imagen: "./image/claseII5_5.png",

        siguiente: "habitos",

        botones: [

          {
            texto: "Volver",
            siguiente: "traexitoso",
          }

        ]

      },

      pendientes: {

        tipo: "decision",

        texto: "¿Existen objetivos pendientes por cumplir?",

        descripcion: 
        
        "<br>Si existe mejoría evidente entonces debe evaluarse si existen objetivos terapéuticos pendientes, si aún existen se procede a continuar tratamiento y si no, se define el tipo de retención y se realiza la remisión al posgrado para manejo dentoalveolar."

        ,

        imagen: "./image/claseII5_7.png",

        si: "continuar",

        no: "retencion",

        botones: [

          {
            texto: "Volver",
            siguiente: "traexitoso",
          }

        ]

      },

      continuar: {

        tipo: "accion",

        texto: "<Strong>Continuar tratamiento, definir frecuencia de controles periodicos</Strong>"
        
        +

        "<br><br>Si el tratamiento muestra mejoría, pero aún existen objetivos pendientes, se debe continuar la fase activa y ajustar la frecuencia de controles según la evolución. Esta situación puede presentarse cuando existe una reducción parcial del overjet, una mejoría incompleta de la relación molar, una expansión transversal aún en progreso, la necesidad de mantener la sobrecorrección o el requerimiento de vigilancia vertical."

        +

        "<br>En estos casos, los controles deben mantenerse con intervalos periódicos de 4 a 8 semanas, según el aparato y la fase clínica. También se debe definir si el paciente continúa con el mismo protocolo, si requiere ajustes en la activación, si debe pasar a una fase de retención activa o si necesita una segunda fase de tratamiento dentoalveolar. La continuidad del tratamiento debe justificarse por la presencia de objetivos pendientes y no por la prolongación indefinida del uso del aparato."

        +

        "<span class='cita-biblio'>Cukaj Ademi H, Zigante M, Premaraj Thyagaseely S, Tudor V, Palomo JM, Spalj S. Mandibular Advancement in Dentofacial Orthopaedics: Effects on Pharyngeal Airway, Dentoskeletal Characteristics and Quality of Life: A Randomised Controlled Trial. Orthod Craniofacial Res. 2026 Feb;29:122–33.</span>"

        +

        "<span class='cita-biblio'>DiBiase AT, Lucchesi L, Qureshi U, Lee RT. Post-treatment cephalometric changes in adolescent patients with Class II malocclusion treated using two different functional appliance systems for an extended time period: A randomized clinical trial. Eur J Orthod. 2021;42:135–43.</span>"

        +

        "<span class='cita-biblio'>Pacha MM, Fleming PS, Shagmani M, Johal A. The skeletal and dental effects of Hanks Herbst versus twin block appliances for class II correction in growing patients: a randomized clinical trial. Eur J Orthod. 2024 Jan;46.</span>"

        +

        "<span class='cita-biblio'>Cirgić E, Kjellberg H, Hansen K. Treatment of large overjet in Angle Class II: Division 1 malocclusion with Andresen activators versus prefabricated functional appliances- A multicenter, randomized, controlled trial. Eur J Orthod. 2016 Oct;38:516–24.</span>"

        +

        "<span class='cita-biblio'>Acharya S, Sriwastva G, Bai PM, Gautam N, Panda S, Pani S. Radiographic assessment of skeletal and soft tissue parameters in class II malocclusion cases with frankel appliance (FR II), twin block (TB), and forsus FRD: A comparative study. J Contemp Orthod. 2025 Apr;9:252–7.</span>"
        
        ,

        imagen: "./image/claseII5_8.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "pendientes",
          }

        ]

      },

      retencion: {

        tipo: "accion",

        texto: "<Strong>Definir tipo de retención , remitir al posgrado para manejo dentoalveolar</Strong>"
        
        +

        "<br><br>Cuando los objetivos terapéuticos principales se han cumplido y no existen objetivos pendientes, se debe definir el tipo de retención. La retención dependerá del aparato utilizado y del objetivo corregido. En algunos protocolos funcionales, el aparato se mantuvo como retenedor nocturno durante 6 meses tras alcanzar los objetivos. Con expansión lenta con Quad-Helix, se reportó estabilización durante 3 meses tras la expansión. En protocolos con Frankel II, la retención fue más prolongada, con uso en tarde/noche y posteriormente uso nocturno exclusivo."

        +

        "<span class='cita-biblio'>Acharya S, Sriwastva G, Bai PM, Gautam N, Panda S, Pani S. Radiographic assessment of skeletal and soft tissue parameters in class II malocclusion cases with frankel appliance (FR II), twin block (TB), and forsus FRD: A comparative study. J Contemp Orthod. 2025 Apr;9:252–7.</span>"

        +

        "<span class='cita-biblio'>Revankar AV, Bhat SS, Rozario JE. A comparison of the quadhelix and the nickel-titanium palatal expander in the treatment of narrow maxillary arches: A prospective clinical study. J Orthod Sci. 2023;12:8. </span>"

        +

        "Si después de la fase ortopédica persisten problemas dentoalveolares, apiñamiento o malposiciones dentales, el paciente debe ser remitido a posgrado de ortodoncia para manejo complementario, teniendo en cuenta que el estándar se enfoca en el manejo interceptivo y ortopédico de la maloclusión Clase II en pacientes en crecimiento, mientras que la finalización dentoalveolar puede requerir aparatología fija, alineación, nivelación y control más avanzado."
        
        ,

        imagen: "./image/claseII5_9.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "pendientes",
          }

        ]

      },

    }

  },

  clase_iii: {

    titulo: "",

    inicio: "presentacion",

    nodos: {

      presentacion: {

        tipo: "decision_opciones",

        texto: "Malocusión Clase III",
        
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

            siguiente: "modelos"

          }

        ]

      },

      definicion: {

        tipo: "accion",

        texto: "<Strong>Maloclusión clase III</Strong>"
        
        +

        "<br><br><img src='./image/Im26.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><Strong>● Maloclusión Clase III:</Strong>"

        +

        " La maloclusión Clase III se define como una alteración en la relación anteroposterior entre los arcos dentales, caracterizada por una posición adelantada de la mandíbula en relación con el maxilar superior. Este desbalance puede ser de origen esquelético, dental o funcional, y afecta la armonía facial, la masticación y la fonación."

        +

        "<span class='cita-biblio'>Proffit WR, Fields HW, Sarver DM. Contemporary Orthodontics. 6th ed. Elsevier; 2019. ISBN: 9780323543873</span>"

        +

        "En pacientes en crecimiento, esta condición puede manifestarse de manera temprana y puede agravarse si no se interviene adecuadamente"

        +

        "<span class='cita-biblio'>McNamara JA Jr. Orthodontic and orthopedic treatment in the mixed dentition. 3rd ed. Ann Arbor: Needham Press; 2001.</span>"

        +

        "<Strong>● Subclasificación de la Maloclusión Clase III: </Strong>"

        +

        " La maloclusión Clase III puede clasificarse según su etiología y sus manifestaciones clínicas:"

        +

        "<br><Strong> ◦ Clasificación por Etiología:</Strong>"

        +

        "<br><Strong>- Maloclusión Clase III Esquelética: </Strong>"

        +

        "Se debe a un crecimiento excesivo de la mandíbula, un subdesarrollo del maxilar superior o una combinación de ambos. Es la forma más común y frecuentemente asociada a factores genéticos."

        +

        "<span class='cita-biblio'>Bishara SE. Diagnostic criteria for identification of treatment strategies for malocclusions. Am J Orthod Dentofacial Orthop. 2005;127(1):23–28.</span>"

        +

        "<br><Strong>- Maloclusión Clase III Dental: </Strong>"

        +

        " Resulta de la inclinación anormal de los dientes, como los incisivos superiores retroinclinados y los inferiores proinclinados, sin una alteración significativa en la estructura esquelética"

        +

        "<span class='cita-biblio'>Bishara SE. Diagnostic criteria for identification of treatment strategies for malocclusions. Am J Orthod Dentofacial Orthop. 2005;127(1):23–28.</span>"

        +

        "<br><Strong>- Maloclusión Clase III Funcional: </Strong>"

        +

        " Ocurre cuando la relación oclusal se ve alterada por un desplazamiento mandibular funcional, debido a interferencias dentales oclusales."

        +

        "<span class='cita-biblio'>Bishara SE. Diagnostic criteria for identification of treatment strategies for malocclusions. Am J Orthod Dentofacial Orthop. 2005;127(1):23–28.</span>"

        +

        "<br><Strong> ◦ Clasificación por Severidad</Strong>"

        +

        "<br><Strong>- Leve:</Strong> Desviación mínima de los arcos dentales sin impacto significativo en la estética facial."

        +

        "<br><Strong>- Moderada:</Strong> Alteraciones dentales y esqueléticas evidentes que afectan la función y la apariencia facial."

        +

        "<br><Strong>- Severa:</Strong>  Desbalance	esquelético	pronunciado	que	puede requerir intervenciones combinadas de ortodoncia y cirugía ortognática."

        +

        "<span class='cita-biblio'>Bishara SE. Diagnostic criteria for identification of treatment strategies for malocclusions. Am J Orthod Dentofacial Orthop. 2005;127(1):23–28.</span>"

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

        texto: "<Strong>Materiales e insumos para tratamiento de maloclusión clase III</Strong>"
        
        +

        "<br><br><img src='./image/materialesB.png' style='width: 850px; height: auto; display: block; margin: 20px auto; border-radius: 12px;'>"
        
        ,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      modelos: {

        tipo: "accion",

        texto: "<Strong>Maloclusión clase III</Strong>"
        
        +

        "<br><br><img src='./image/Im26.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>(Gemini IA)</span>"

        +

        "<br><br>La maloclusión Clase III se caracteriza por una relación anteroposterior alterada entre los maxilares; con una mandíbula adelantada o con un crecimiento excesivo respecto al maxilar superior, un subdesarrollo maxilar o ambos."

        +

        "<span class='cita-biblio'>Nardoni DN, Siqueira DF, Cardoso M de A, Filho LC. Cephalometric variables used to predict the success of interceptive treatment with rapid maxillary expansion and face mask. A longitudinal study. Dental Press J Orthod. 2015;20:85–96.</span>"

        +

        "<br>Según la literatura, los criterios diagnósticos que nos pueden determinar una maloclusión clase III en un paciente que asiste a la clínica de ortodoncia son:"

        +

        "<br>● Relación molar y canina de Clase III, con oclusión cruzada anterior o mordida borde a borde (overjet cero o negativo)"

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<br>● Perfil facial cóncavo o recto, con deficiencia maxilar, prognatismo mandibular o combinación de ambos"

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<br>● Características esqueléticas como ANB < 0° o ≤ 2.5°, Wits negativo (< -2 mm), y deficiencia maxilar o protrusión mandibular."

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<br>● Puede incluir asimetrías faciales, problemas en la articulación temporomandibular, y compensaciones dentoalveolares como protrusión de incisivos maxilares o retrusión de incisivos mandibulares."

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99-116. doi: 10.2147/CCIDE.S134303.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment modalities for early management of Class III skeletal malocclusion: a case series. Contemp Clin Dent. 2020;11(1):91-6. doi: 10.4103/ccd.ccd_393_19.</span>"

        +
        
        "<br>Por otro lado, también se menciona que esta maloclusión es determinada por retrusión maxilar y/o prognatismo mandibular, independientemente de la relación molar establecida entre arcadas dentarias. Aunque la maloclusión tiende a presentar una relación molar de Clase III, no siempre expresa asociación con la gravedad de la relación esquelética y, en consecuencia, con el equilibrio facial."

        +

        "<span class='cita-biblio'>Nardoni DN, Siqueira DF, Cardoso M de A, Filho LC. Cephalometric variables used to predict the success of interceptive treatment with rapid maxillary expansion and face mask. A longitudinal study. Dental Press J Orthod. 2015;20:85–96.</span>"

        ,

        imagen: "./image/claseIII1_0.png",

        siguiente: "crecimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      crecimiento: {

        tipo: "decision",

        texto: "¿Paciente en etapa de crecimiento?",

        imagen: "./image/claseIII1_1.png",

        si: "origen",

        no: "postgrado",

        botones: [

          {
            texto: "Volver",
            siguiente: "modelos",
          }

        ]

      },

      postgrado: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/claseIII1_2.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "crecimiento"
          }

        ]

      },

      origen: {

        tipo: "decision_opciones",

        texto: "Determinar el origen de la maloclusión",
        
        imagen: "./image/claseIII1_3.png",
        
        opciones: [

          {
            texto: "Esquelético",

            siguiente: "esqueletico"

          },

          {
            texto: "Dental",

            siguiente: "dental"

          },

          {
            texto: "Funcional",

            siguiente: "funcional"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "crecimiento",
          }

        ]

      },

      esqueletico: {

        tipo: "accion",

        texto: "<Strong>Maloclusión de origen esquelético</Strong>"
        
        +

        "<br><br>Los pacientes con maloclusión resultante del desequilibrio en el plano sagital entre el maxilar y la mandíbula se consideran casos esqueléticos de Maloclusión Clase III"

        +

        "<span class='cita-biblio'>Nardoni DN, Siqueira DF, Cardoso M de A, Filho LC. Cephalometric variables used to predict the success of interceptive treatment with rapid maxillary expansion and face mask. A longitudinal study. Dental Press J Orthod. 2015;20:85–96.</span>"
        
        +

        "Este tipo de maloclusión se relaciona principalmente con retrognatismo maxilar, prognatismo mandibular o ambos componentes óseos"

        +

        "<span class='cita-biblio'>Fareen N, Alam MK, Khamis MF, Mokhtar N. Treatment effects of Reverse Twin-Block and Reverse Pull Face Mask on craniofacial morphology in early and late mixed dentition children. Orthod Craniofacial Res. 2017 Aug;20:134–9.</span>"

        +

        "Es la forma más severa de este tipo de maloclusión y puede comprometer tanto la función masticatoria como la estética facial."

        +

        "<br>Las características de la Maloclusión Clase III esquelética se evidencian por:"

        +

        "<br>● Discrepancias en el crecimiento maxilar y mandibular, incluyendo retrognatismo o hipoplasia maxilar, prognatismo o hiperdesarrollo mandibular, o combinación de ambos"

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116. </span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Cordasco G, Matarese G, Rustico L, Fastuca S, Caprioglio A, Lindauer SJ, et al. Efficacy of orthopedic treatment with protraction facemask on skeletal Class III malocclusion: A systematic review and meta-analysis. Orthod Craniofacial Res. 2014;17:133–43.</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"
        
        +

        "● Características cefalométricas incluyen ANB <0° o ≤2.5°, Wits <-2 mm, SNA disminuido (deficiencia maxilar), SNB aumentado (prognatismo mandibular), este patrón sagital puede acompañarse a nivel vertical de un patrón hiperdivergente como de un patrón hipodivergente."

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116. </span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "● Base craneal anterior acortada y ángulo de la silla turca reducido en algunos casos"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116. </span>"

        +

        "● Medidas cefalométricas de perfil de tejidos blandos incluye: ángulo nasolabial >110°, línea E (labio sup) de −5 a −7 mm, línea E (labio inf) 0 a +3 mm y ángulo de convexidad de 0° a −10°"
        
        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        ,

        imagen: "./image/claseIII1_4.png",

        siguiente: "severidad",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      dental: {

        tipo: "accion",

        texto: "<Strong>Maloclusión de origen dental</Strong>"
        
        +

        "<br><br>La maloclusión Clase III dental ocurre en presencia de una relación esquelética adecuada, pero con alteraciones en la posición de los dientes, como la inclinación palatina de los incisivos superiores o la vestibularización de los incisivos inferiores, generando un overjet negativo. Se asocia frecuentemente con hábitos orales o pérdida prematura de dientes temporales."

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116. </span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"
        
        +

        "Las características de la Maloclusión Clase III dental se evidencian en:"

        +

        "<br>● Alteraciones en la posición o inclinación de los dientes sin discrepancias óseas, como apiñamiento, desplazamientos dentales, o relación incisiva inversa"

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"
        
        +

        "● Inclinación palatina de los incisivos superiores o la vestibularización de los incisivos inferiores, resultando en mordida borde a borde o cruzada anterior"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116. </span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        ,

        imagen: "./image/claseIII1_5.png",

        siguiente: "protocolo",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      funcional: {

        tipo: "accion",

        texto: "<Strong>Maloclusión de origen funcional</Strong>"
        
        +

        "<br>Conocida como pseudoclase III, causada por desplazamiento anterior de la mandíbula debido a contactos dentales prematuros o hábitos orales como succión de pulgar o uso prolongado de chupetes<br>"
        
        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Pithon MM, Santos N de L, dos Santos CRB, Baião FCS, Pinheiro MCR, Matos Neto M, et al. Is alternate rapid maxillary expansion and constriction an effective protocol in the treatment of class III malocclusion? A systematic review. Dental Press J Orthod. 2016;21:34–42.</span>"

        +

        "<span class='cita-biblio'>Zhou C, Duan P, He H, Song J, Hu M, Liu Y, et al. Expert consensus on pediatric orthodontic therapies of malocclusions in children. Vol. 16, International Journal of Oral Science. Springer Nature; 2024.</span>"

        +

        "Es causada por desviaciones mandibulares en respuesta a interferencias oclusales, generando un desplazamiento anterior de la mandíbula. Al corregir la interferencia, la relación normal puede restablecerse, siendo fundamental el diagnóstico temprano."

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Moyers. Handbook of Orthodntics | PDF | Orthodontics | Dentistry. https://es.scribd.com/document/379064728/Handbook-of-Orthodntics. 2021.</span>"

        +

        "Se ha informado que el 36% de los sujetos con mordida cruzada anterior presentan un desplazamiento funcional (estudio realizado en Suecia); es decir, el contacto interincisal es posible cuando la mandíbula está en relación céntrica, lo que implica una maloclusión de pseudoclase III sin discrepancia esquelética de clase III inherente"

        +

        "<span class='cita-biblio'>Wiedel AP, Bondemark L. Stability of anterior crossbite correction: A randomized controlled trial with a 2-year follow-up. Angle Orthod. 2015 Mar;85:189–95.</span>"
        
        ,

        imagen: "./image/claseIII1_6.png",

        siguiente: "protocolo",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen",
          }

        ]

      },

      severidad: {

        tipo: "decision_opciones",

        texto: "Evaluación de la severidad",
        
        descripcion: 
        
        "<br><br><Strong>● Leve:</Strong>"

        +

        " Mordida borde a borde o mordida cruzada ligera sin alteraciones faciales evidentes. En este caso, lo que se espera encontrar es:"

        +

        "<br> ◦ Mordida borde a borde o contacto incisal ligero negativo (−1 mm)"

        +

        "<br> ◦ Sin compromiso importante del perfil facial."

        +

        "<br> ◦ Relación molar y canina de Clase I o tendencia a Clase III."

        +

        "<br> ◦ Relación esquelética borderline (ANB 0° a +1°, Wits −2 mm)."

        +

        "<br> ◦ Puede asociarse a desviaciones funcionales leves."

        +

        "<br> ◦ Suele tratarse exitosamente con ortopedia, ortopedia funcional o aparatos removibles."
        
        +

        "<span class='cita-biblio'>Fareen N, Alam MK, Khamis MF, Mokhtar N. Treatment effects of Reverse Twin-Block and Reverse Pull Face Mask on craniofacial morphology in early and late mixed dentition children. Orthod Craniofacial Res. 2017 Aug;20:134–9.</span>"

        +

        "<span class='cita-biblio'>Fabozzi FF, Nucci L, Correra A, d’Apuzzo F, Franchi L, Perillo L. Comparison of two protocols for early treatment of dentoskeletal Class III malocclusion: Modified SEC III versus RME/FM. Orthod Craniofacial Res. 2021 Aug;24:344–50.</span>"
        
        +

        "<br><Strong>● Moderada:</Strong>"

        +

        " Mordida cruzada establecida, ligero prognatismo mandibular, y alteración del perfil facial. En este caso, lo que se espera encontrar es:"

        +

        "<br> ◦ Mordida cruzada anterior completa (overjet negativo de 1–3 mm)."

        +

        "<br> ◦ Perfil facial recto o cóncavo con ligera proyección mandibular."

        +

        "<br> ◦ Relación molar y canina de Clase III evidente."

        +

        "<br> ◦ Discrepancia esquelética leve a moderada (ANB 0° a −1°, Wits −3 a −5 mm)."

        +

        "<br> ◦ No siempre existe desplazamiento funcional."

        +

        "<br> ◦ Se requiere intervención ortopédica interceptiva."
        
        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Cordasco G, Matarese G, Rustico L, Fastuca S, Caprioglio A, Lindauer SJ, et al. Efficacy of orthopedic treatment with protraction facemask on skeletal Class III malocclusion: A systematic review and meta-analysis. Orthod Craniofacial Res. 2014;17:133–43.</span>"
        
        +

        "<span class='cita-biblio'>Ly TK, Le LN, Do TT, Le KPV. Early treatment of skeletal class III malocclusion with facemask therapy in Vietnam. J Clin Pediatr Dent. 2024 Nov;48:187–96.</span>"
        
        +
        
        "<br><Strong>● Severa:</Strong>"

        +

        " Mordida cruzada profunda, discrepancia esquelética evidente y perfil facial marcadamente cóncavo. En este caso, lo que se espera encontrar es:"

        +

        "<br> ◦ Mordida	cruzada	profunda	con	contacto	incisivo	invertido significativo (overjet menor o igual a -4 mm)."

        +

        "<br> ◦ Perfil cóncavo pronunciado, hipoplasia maxilar o hiperplasia mandibular evidentes."

        +

        "<br> ◦ Relación molar y/o canina de Clase III completa bilateral."

        +

        "<br> ◦ Discrepancia esquelética severa (ANB menor a −1°, Wits menor a −6 mm)."

        +

        "<br> ◦ Frecuentemente acompañada de colapso transversal maxilar."

        +

        "<br> ◦ Alta probabilidad de necesitar tratamiento ortopédico o en su defecto, tratamiento combinado ortodóncico-quirúrgico si no se interviene tempranamente."
        
        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"
        
        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"
        
        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"
        

        ,

        imagen: "./image/claseIII1_7.png",
        
        opciones: [

          {
            texto: "Severa",

            siguiente: "severa"

          },

          {
            texto: "Moderada",

            siguiente: "moderada"

          },

          {
            texto: "Leve",

            siguiente: "leve"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "esqueletico",
          }

        ]

      },

      protocolo: {

        tipo: "accion",

        texto: "<Strong>Remitir a protocolo de manejo dental y funcional</Strong>",

        imagen: "./image/claseIII1_8.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver Dental",
            siguiente: "dental",
          },
          {
            texto: "Volver Funcional",
            siguiente: "funcional",
          }

        ]

      },

      severa: {

        tipo: "accion",

        texto: "<Strong>Severa</Strong>",

        imagen: "./image/claseIII1_9.png",

        siguiente: "postgrado2",

        botones: [

          {
            texto: "Volver",
            siguiente: "severidad",
          }

        ]

      },

      moderada: {

        tipo: "accion",

        texto: "<Strong>Moderada</Strong>",

        imagen: "./image/claseIII1_10.png",

        siguiente: "origen2",

        botones: [

          {
            texto: "Volver",
            siguiente: "severidad",
          }

        ]

      },

      leve: {

        tipo: "accion",

        texto: "<Strong>Leve</Strong>",

        imagen: "./image/claseIII1_11.png",

        siguiente: "origen2",

        botones: [

          {
            texto: "Volver",
            siguiente: "severidad",
          }

        ]

      },

      postgrado2: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/claseIII1_12.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "severa"
          }

        ]

      },

      origen2: {

        tipo: "decision_opciones",

        texto: "Determinar el origen",

        imagen: "./image/claseIII1_13.png",
        
        opciones: [

          {
            texto: "Maxilar",

            siguiente: "maxilar"

          },

          {
            texto: "Combinada",

            siguiente: "combinada"

          },

          {
            texto: "Mandibular",

            siguiente: "mandibular"

          }

        ],

        botones: [

          {
            texto: "Volver moderada",
            siguiente: "moderada",
          },
          {
            texto: "Volver leve",
            siguiente: "leve",
          }

        ]

      },

      maxilar: {

        tipo: "accion",

        texto: "<Strong>Maxilar</Strong>"
        
        +

        "<br><br><img src='./image/Im27.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseIII1_14.png",

        siguiente: "desarrollo",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen2",
          }

        ]

      },

      combinada: {

        tipo: "accion",

        texto: "<Strong>Combinada</Strong>"
        
        +

        "<br><br><img src='./image/Im28.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseIII1_15.png",

        siguiente: "desarrollo",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen2",
          }

        ]

      },

      mandibular: {

        tipo: "accion",

        texto: "<Strong>Mandibular</Strong>"
        
        +

        "<br><br><img src='./image/Im29.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseIII1_16.png",

        siguiente: "desarrollo",

        botones: [

          {
            texto: "Volver",
            siguiente: "origen2",
          }

        ]

      },

      desarrollo: {

        tipo: "accion",

        texto: "<Strong>Determinar el estadio de desarrollo esquelético</Strong>"
        
        +

        "<br><br><img src='./image/Im30.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>(Baccetti T, Franchi L, McNamara JA Jr. The cervical vertebral maturation (CVM) method for the assessment of optimal treatment timing in dentofacial orthopedics. Semin Orthod. 2005;11(3):119-129. doi:10.1053/j.sodo.2005.04.005.)</span>"

        +

        "<br><br>La maduración esquelética se puede evaluar mediante el método de Baccetti"

        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA. The Cervical Vertebral Maturation (CVM) method for the assessment of optimal treatment timing in dentofacial orthopedics. Semin Orthod. 2005 Sep;11:119–29.</span>"

        +

        "basado en la morfología de las vértebras cervicales (C2, C3, C4) en radiografías cefalométricas laterales."

        +

        "<span class='cita-biblio'>Nardoni DN, Siqueira DF, Cardoso M de A, Filho LC. Cephalometric variables used to predict the success of interceptive treatment with rapid maxillary expansion and face mask. A longitudinal study. Dental Press J Orthod. 2015;20:85–96.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"
        
        +

        "Etapas clave:"

        +

        "<br><br><Strong>● CS1-CS2:</Strong>"

        +

        " Prepuberal temprano, ideal para tratamientos ortopédicos como la máscara facial o expansión maxilar"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"
      
        +

        "<br><br><Strong>● CS3:</Strong>"

        +

        " Pico puberal, aún efectivo para intervenciones ortopédicas, pero con menor plasticidad esquelética"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<br><br><Strong>● CS4-CS6:</Strong>"

        +

        " Postpuberal, donde las opciones se limitan prácticamente a tratamiento ortopédico con anclaje esquelético, ortodóntico de compensación dental o cirugía ortognática"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "Según la literatura, la etapa CS1-CS3 es óptima para maximizar los efectos de la protracción maxilar y controlar el crecimiento mandibular"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32</span>"


        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        ,

        imagen: "./image/claseIII1_17.png",

        siguiente: "denticion",

        botones: [

          {
            texto: "Volver maxilar",
            siguiente: "maxilar",
          },
          {
            texto: "Volver combinada",
            siguiente: "combinada",
          },
          {
            texto: "Volver mandibular",
            siguiente: "mandibular",
          }

        ]

      },

      denticion: {

        tipo: "decision_opciones",

        texto: "Determinar tipo de dentición del paciente",
        
        descripcion: "",

        imagen: "./image/claseIII2_2.png",
        
        opciones: [

          {
            texto: "Dentición temporal",

            siguiente: "temporal"

          },

          {
            texto: "Dentición mixta",

            siguiente: "mixta"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "desarrollo",
          }

        ]

      },

      temporal: {

        tipo: "accion",

        texto: "<Strong>Dentición temporal</Strong>"
        
        +

        "<br><br><img src='./image/Im31.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><br><img src='./image/Im31_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseIII2_3.png",

        siguiente: "tratar",

        botones: [

          {
            texto: "Volver",
            siguiente: "denticion",
          }

        ]

      },

      mixta: {

        tipo: "decision_opciones",

        texto: "Dentición mixta",

        imagen: "./image/claseIII2_4.png",
        
        opciones: [

          {
            texto: "Dentición mixta temprana",

            siguiente: "temprana"

          },

          {
            texto: "Dentición mixta tardia",

            siguiente: "tardia"

          },{
            texto: "¿Es el momento adecuado para tratar al paciente?",

            siguiente: "tratar"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "denticion",
          }

        ]

      },

      temprana: {

        tipo: "accion",

        texto: "<Strong>Dentición mixta temprana</Strong>"
        
        +

        "<br><br><img src='./image/Im32.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><br><img src='./image/Im32_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        ,

        imagen: "./image/claseIII2_4.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "mixta",
          }

        ]

      },

      tardia: {

        tipo: "accion",

        texto: "<Strong>Dentición mixta tardia</Strong>"
        
        +

        "<br><br><img src='./image/Im33.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><br><img src='./image/Im33_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseIII2_4.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "mixta",
          }

        ]

      },

      tratar: {

        tipo: "decision",

        texto: "¿Es el momento adecuado para tratar al paciente?",

        descripcion: 
        
        "<br><Strong>Determinar momento adecuado de intervención</Strong>"

        +

        "<br><br><Strong>●</Strong> Intervención temprana recomendada en dentición primaria o mixta temprana, idealmente entre 6 y 8 años, antes del pico de crecimiento puberal (CS1-CS2)."

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Cordasco G, Matarese G, Rustico L, Fastuca S, Caprioglio A, Lindauer SJ, et al. Efficacy of orthopedic treatment with protraction facemask on skeletal Class III malocclusion: A systematic review and meta-analysis. Orthod Craniofacial Res. 2014;17:133–43.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<Strong>●</Strong> Tratamiento más efectivo antes de los 10 años para aprovechar el crecimiento activo y maximizar efectos ortopédicos."
      
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Ly TK, Le LN, Do TT, Le KPV. Early treatment of skeletal class III malocclusion with facemask therapy in Vietnam. J Clin Pediatr Dent. 2024 Nov;48:187–96.</span>"

        +

        "<Strong>●</Strong> En dentición mixta tardía o permanente temprana, la efectividad disminuye, pero sigue siendo viable en pacientes en crecimiento."
      
        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49. </span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<Strong>●</Strong> Intervención temprana reduce la necesidad de cirugía correctiva y minimiza la complejidad del tratamiento en adultos."
      
        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<span class='cita-biblio'>Pithon MM, Santos N de L, dos Santos CRB, Baião FCS, Pinheiro MCR, Matos Neto M, et al. Is alternate rapid maxillary expansion and constriction an effective protocol in the treatment of class III malocclusion? A systematic review. Dental Press J Orthod. 2016;21:34–42.</span>"

        +

        "<Strong>●</Strong> Se recomienda una intervención temprana para evitar efectos adversos en el crecimiento y desarrollo de los maxilares y la alteración de la actividad de los músculos temporal y masetero, lo que aumentaría el riesgo de trastornos craneomandibulares durante la adolescencia"
      
        +

        "<span class='cita-biblio'>Wiedel AP, Bondemark L. Stability of anterior crossbite correction: A randomized controlled trial with a 2-year follow-up. Angle Orthod. 2015 Mar;85:189–95.</span>"
        
        ,

        imagen: "./image/claseIII2_6.png",

        si: "tratamiento",

        no: "postgrado3",

        botones: [

          {
            texto: "Volver temporal",
            siguiente: "temporal",
          },
          {
            texto: "Volver dentición mixta",
            siguiente: "mixta",
          }

        ]

      },

      postgrado3: {

        tipo: "accion",

        texto: "Seguimiento ó remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/claseIII2_5.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "tratar"
          }

        ]

      },

      tratamiento: {

        tipo: "accion",

        texto: "<Strong>Definición de objetivos de tratamiento</Strong>"
        
        +

        "<br>El objetivo fundamental del tratamiento ortodóntico es lograr una oclusión normal que sea morfológicamente estable a largo plazo, funcional y estéticamente aceptable."

        +

        "<span class='cita-biblio'>Wiedel AP, Bondemark L. Stability of anterior crossbite correction: A randomized controlled trial with a 2-year follow-up. Angle Orthod. 2015 Mar;85:189–95.</span>"
        
        +

        "Las opciones de tratamiento para una maloclusión esquelética de Clase III dependen de la edad del paciente y del patrón y severidad de la maloclusión."

        +

        "<span class='cita-biblio'>Fareen N, Alam MK, Khamis MF, Mokhtar N. Treatment effects of Reverse Twin-Block and Reverse Pull Face Mask on craniofacial morphology in early and late mixed dentition children. Orthod Craniofacial Res. 2017 Aug;20:134–9.</span>"

        +

        "Los objetivos de tratamiento para corregir la maloclusión Clase III esquelética son:"

        +

        "<br><Strong>●</Strong> Mejorar la relación esquelética (aumentar ANB, SNA, reducir SNB) y dental (corregir overjet, corregir mordida cruzada anterior y lograr relación molar y/o canina de Clase I)"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Cordasco G, Matarese G, Rustico L, Fastuca S, Caprioglio A, Lindauer SJ, et al. Efficacy of orthopedic treatment with protraction facemask on skeletal Class III malocclusion: A systematic review and meta-analysis. Orthod Craniofacial Res. 2014;17:133–43.</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<Strong>●</Strong> Promover crecimiento maxilar anterior, inhibir crecimiento mandibular, y lograr rotación mandibular favorable"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Cordasco G, Matarese G, Rustico L, Fastuca S, Caprioglio A, Lindauer SJ, et al. Efficacy of orthopedic treatment with protraction facemask on skeletal Class III malocclusion: A systematic review and meta-analysis. Orthod Craniofacial Res. 2014;17:133–43.</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<Strong>●</Strong> Mejorar función masticatoria, estética facial, y estabilidad oclusal a largo plazo"

        +

        "<span class='cita-biblio'>Alwadei S, Ali Hattan A, Faqihi K, Alhawiatan A, Alwadei F, Alwadei A. Prevalence of malocclusion and orthodontic treatment needs among Saudi primary school male children aged 6–12 years: A cross-sectional study. J Int Oral Heal. 2023;15:106.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<Strong>●</Strong> Prevenir complicaciones como trauma dental, recesión gingival, o cambios irreversibles en tejidos blandos/duros"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<Strong>●</Strong> Reducir la necesidad de cirugía ortognática y simplificar tratamientos futuros"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        ,

        imagen: "./image/claseIII2_7.png",

        siguiente: "mecanicas",

        botones: [

          {
            texto: "Volver",
            siguiente: "tratar",
          }

        ]

      },

      mecanicas: {

        tipo: "accion",

        texto: "<Strong>Selección de mecánicas de tratamiento</Strong>",

        imagen: "./image/claseIII3_2.png",

        siguiente: "dispositivo",

        botones: [

          {
            texto: "Volver",
            siguiente: "tratamiento",
          }

        ]

      },

      dispositivo: {

        tipo: "decision_opciones",

        texto: "¿Qué tipo de dispositivo usar?",
        
        descripcion: 
        
        "<br><br>Los criterios para determinar qué tipo de aparatología usar para la corrección de la Maloclusión Clase III, dependen del origen, severidad y objetivos de tratamiento:"

        +

        "<br><Strong>● Tipo de maloclusión (esquelética, dental o funcional):</Strong>"

        +

        "<br><Strong>  ◦ Maloclusión esquelética:</Strong>"

        +

        "<br>   ■ Para deficiencia maxilar (retrognatismo o hipoplasia maxilar), se recomienda la máscara facial (con o sin expansión maxilar rápida, RME) para promover la protracción maxilar."
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta y moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Cordasco G, Matarese G, Rustico L, Fastuca S, Caprioglio A, Lindauer SJ, et al. Efficacy of orthopedic treatment with protraction facemask on skeletal Class III malocclusion: A systematic review and meta-analysis. Orthod Craniofacial Res. 2014;17:133–43</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32. </span>"

        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<br>  ■ En casos de prognatismo mandibular, se utiliza la mentonera (chin cup) para redirigir o retardar el crecimiento mandibular"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Fabozzi FF, Nucci L, Correra A, d’Apuzzo F, Franchi L, Perillo L. Comparison of two protocols for early treatment of dentoskeletal Class III malocclusion: Modified SEC III versus RME/FM. Orthod Craniofacial Res. 2021 Aug;24:344–50.</span>"

        +

        "<span class='cita-biblio'>Al-Khalifa HN, Hashem MI, Alanazi KJ, Anil S. Orthopedic effect of chin cup during mixed dentition stage. J Contemp Dent Pract. 2017;18:410–4.</span>"

        +

        "<br>  ■ Para maximizar efectos esqueléticos y minimizar compensaciones dentales, se emplean dispositivos con anclaje esquelético como miniplacas o minitornillos, especialmente en pacientes mayores (≥ 11 años) o con discrepancias severas o con poca colaboración."
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<span class='cita-biblio'>Miranda F, Cunha Bastos JC da, Magno Dos Santos A, Janson G, Pereira Lauris JR, Garib D. Dentoskeletal comparison of miniscrew-anchored maxillary protraction with hybrid and conventional hyrax expanders: A randomized clinical trial. Am J Orthod Dentofacial Orthop. 2021 Dec;160:774–83.</span>"

        +

        "<span class='cita-biblio'>Meyns J, Thanatchaporn J, Shujaat S, Politis C, Jacobs R. Long-term three-dimensional skeletal effects of hybrid hyrax with facemask versus mentoplate in growing Class III patients: a randomized controlled trial. Prog Orthod. 2025 Dec;26.</span>"

        +

        "<span class='cita-biblio'>Ragab RSE-DA, El Shennawy MI, Yousif AAEW. Comparison between maxillary skeletal expander and hybrid hyrax facemask combination in treatment of growing patients with skeletal class III malocclusion. Tanta Dent J. 2022 Oct;19:273–80.</span>"

        +

        "<br><Strong>  ◦ Maloclusión dental:</Strong>"

        +

        "<br>  ■ Para correcciones dentoalveolares simples, como mordida cruzada anterior o apiñamiento leve, se usan aparatos removibles como planos inclinados, aparatos de Hawley activos con resortes o tornillos de expansión, o placas de expansión maxilar."
        
        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Zhou C, Duan P, He H, Song J, Hu M, Liu Y, et al. Expert consensus on pediatric orthodontic therapies of malocclusions in children. Vol. 16, International Journal of Oral Science. Springer Nature; 2024.</span>"

        +

        "<br>  ■ En dentición mixta tardía o permanente temprana, se emplean aparatos fijos como el “4 por 2” o “6 por 2” para movimientos dentales específicos (corrección de inclinaciones, rotaciones o espacios)."
        
        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        +

        "<br><Strong>  ◦ Maloclusión funcional (pseudoclase III):</Strong>"

        +

        "<br>  ■ Para casos con desplazamiento mandibular debido a interferencias oclusales o hábitos, se recomiendan aparatos funcionales como el reverse Twin-block, Frankel appliance (FR-3), o retractor mandibular removible (RMR), que corrigen la relación oclusal y promueven un crecimiento adecuado."
        
        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"

        +

        "<span class='cita-biblio'>Sarangal H, Namdev R, Garg S, Saini N, Singhal P. Treatment Modalities for Early Management of Class III Skeletal Malocclusion: A Case Series. Contemp Clin Dent. 2020;11:91–6.</span>"

        ,

        imagen: "./image/claseIII3_3.png",
        
        opciones: [

          {
            texto: "Mentonera",

            siguiente: "mentonera"

          },

          {
            texto: "Aparatos removibles",

            siguiente: "removibles"

          },

          {
            texto: "Mascara facial",

            siguiente: "facial"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "mecanicas",
          }

        ]

      },

      mentonera: {

        tipo: "accion",

        texto: "<Strong>Mentonera</Strong>"
        
        +

        "<br><br><img src='./image/Im34.png' style='width: 550px; height: 420px; object-fit: contain; border-radius: 12px; margin: 10px auto; display: block;'>"

        +

        "<span class='cita-biblio-img'>(Gemini IA)</span>"

        +

        "<br><br><img src='./image/Im34_2.png' style='width: 550px; height: 360px; object-fit: contain; border-radius: 12px; margin: 10px auto; display: block;'>"
        
        +

        "<span class='cita-biblio-img'>(Gemini IA)</span>"

        +

        "<br><br>La mentonera está diseñada para suprimir y/o redirigir el crecimiento mandibular, cerrar el ángulo goniaco y remodelar la articulación mandibular y temporomandibular."

        +

        "<br>Según la literatura, para evidenciar resultados significativos, la mentonera se debería usar un mínimo de 12 a 14 horas por día con una fuerza de 400-600 g por lado."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Fabozzi FF, Nucci L, Correra A, d’Apuzzo F, Franchi L, Perillo L. Comparison of two protocols for early treatment of dentoskeletal Class III malocclusion: Modified SEC III versus RME/FM. Orthod Craniofacial Res. 2021 Aug;24:344–50. </span>"

        +
        
        "<span class='cita-biblio'>Al-Khalifa HN, Hashem MI, Alanazi KJ, Anil S. Orthopedic effect of chin cup during mixed dentition stage. J Contemp Dent Pract. 2017;18:410–4.</span>"
        
        ,

        imagen: "./image/claseIII3_4.png",

        siguiente: "seguimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "dispositivo",
          }

        ]

      },

      removibles: {

        tipo: "accion",

        texto: "<Strong>Aparatos removibles</Strong>"
        
        +

        "<br><br><img src='./image/Im35.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><br><img src='./image/Im35_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Singh, H., Kapoor, P., Sharma, P., Maurya, R. K., & Mittal, T. (2018). Skeletal Class III correction in permanent dentition using reverse twin block appliance and fixed mechanotherapy. The Saudi dental journal, 30(4), 379–388. https://doi.org/10.1016/j.sdentj.2018.05.009</span>"

        +

        "<br><br><Strong>● RTB (Reverse Twin-Block):</Strong> El RTB es un aparato funcional que consta de dos piezas de mordida extraíbles con planos inclinados oclusales. La pieza de mordida superior (que cubre los premolares superiores/molares deciduos) está situada por delante de la pieza de mordida inferior (que cubre los molares inferiores) y ayuda al reposicionamiento maxilomandibular junto con la corrección dentoalveolar en la relación de Clase III."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Fareen N, Alam MK, Khamis MF, Mokhtar N. Treatment effects of Reverse Twin-Block and Reverse Pull Face Mask on craniofacial morphology in early and late mixed dentition children. Orthod Craniofacial Res. 2017 Aug;20:134–9.</span>"

        ,

        imagen: "./image/claseIII3_5.png",

        siguiente: "seguimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "dispositivo",
          }

        ]

      },

      facial: {

        tipo: "accion",

        texto: "<Strong>Mascara facial</Strong>"
        
        +

        "<br><br><img src='./image/Im36.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>(Gemini IA)</span>"

        +

        "<br>La protracción maxilar con máscara facial produce una combinación de efectos esqueléticos y dentales. Tras la terapia con máscara facial se observa un movimiento hacia delante y hacia abajo del maxilar, la extrusión de los dientes maxilares posteriores y una rotación del plano palatino en sentido contrario a las agujas del reloj. Como consecuencia, la mandíbula rota hacia abajo y hacia atrás, aumentando la altura facial anterior inferior."

        +

        "<span class='cita-biblio'>Nardoni DN, Siqueira DF, Cardoso M de A, Filho LC. Cephalometric variables used to predict the success of interceptive treatment with rapid maxillary expansion and face mask. A longitudinal study. Dental Press J Orthod. 2015;20:85–96.</span>"

        +

        "<span class='cita-biblio'>Fareen N, Alam MK, Khamis MF, Mokhtar N. Treatment effects of Reverse Twin-Block and Reverse Pull Face Mask on craniofacial morphology in early and late mixed dentition children. Orthod Craniofacial Res. 2017 Aug;20:134–9.</span>"

        +

        "<span class='cita-biblio'>Fabozzi FF, Nucci L, Correra A, d’Apuzzo F, Franchi L, Perillo L. Comparison of two protocols for early treatment of dentoskeletal Class III malocclusion: Modified SEC III versus RME/FM. Orthod Craniofacial Res. 2021 Aug;24:344–50.</span>"

        +

        "<span class='cita-biblio'>Ly TK, Le LN, Do TT, Le KPV. Early treatment of skeletal class III malocclusion with facemask therapy in Vietnam. J Clin Pediatr Dent. 2024 Nov;48:187–96.</span>"

        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<span class='cita-biblio'>Miranda F, Cunha Bastos JC da, Magno Dos Santos A, Janson G, Pereira Lauris JR, Garib D. Dentoskeletal comparison of miniscrew-anchored maxillary protraction with hybrid and conventional hyrax expanders: A randomized clinical trial. Am J Orthod Dentofacial Orthop. 2021 Dec;160:774–83.</span>"

        +

        "<span class='cita-biblio'>Meyns J, Thanatchaporn J, Shujaat S, Politis C, Jacobs R. Long-term three-dimensional skeletal effects of hybrid hyrax with facemask versus mentoplate in growing Class III patients: a randomized controlled trial. Prog Orthod. 2025 Dec;26.</span>"

        +

        "<span class='cita-biblio'>Ragab RSE-DA, El Shennawy MI, Yousif AAEW. Comparison between maxillary skeletal expander and hybrid hyrax facemask combination in treatment of growing patients with skeletal class III malocclusion. Tanta Dent J. 2022 Oct;19:273–80.</span>"

        +

        "Según la literatura, los protocolos de máscara facial varían según el estudio realizado y estos describen lo siguiente:"

        +

        "<br>● Fuerzas 400 gr/lado, vector 30°, uso de 14 a 16 horas."

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<br>● Los aparatos se llevaban de 12 a 14 horas al día con una magnitud de fuerza de 600 g por lado."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Al-Khalifa HN, Hashem MI, Alanazi KJ, Anil S. Orthopedic effect of chin cup during mixed dentition stage. J Contemp Dent Pract. 2017;18:410–4.</span>"

        +

        "<br>● Uso de 12 horas al día con una fuerza de 500 g por lado."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<br>● Máscara con fuerzas de 300-500 g por lado durante 14h/día."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Li Y, Alifu A, Peng Y. Is maxillary protraction the earlier the better? A retrospective study on early orthodontic treatment of Class III malocclusion with maxillary deficiency. J Clin Pediatr Dent. 2024 Nov;48:133–43.</span>"

        +

        "<br>● Se usó máscara facial mínimo de 12h/día, cambio de elástico cada 2-3 días, fuerzas de 300-450 g por lado."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Ly TK, Le LN, Do TT, Le KPV. Early treatment of skeletal class III malocclusion with facemask therapy in Vietnam. J Clin Pediatr Dent. 2024 Nov;48:187–96.</span>"

        +

        "<br>● La dirección de los elásticos era de 15 a 30° hacia abajo desde el plano oclusal, ejerciendo una fuerza de entre 400 y 500 g por lado. Se indicó a los pacientes que llevaran la máscara al menos 14 horas al día."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        +

        "Haciendo un consenso de estos protocolos, en pacientes en crecimiento con maloclusión Clase III, se recomienda el uso de máscara facial con tracción antero-superior de 400 a 500 g por lado, con un vector de 30° desde el plano oclusal, por al menos 12-14 horas al día. Se aconseja el cambio de elásticos cada 2–3 días para mantener una fuerza constante. Esta recomendación se basa principalmente en estudios con nivel de evidencia alto y moderado, evaluados bajo el sistema GRADE."

        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        ,

        imagen: "./image/claseIII4_1.png",

        siguiente: "discrepancia",

        botones: [

          {
            texto: "Volver",
            siguiente: "dispositivo",
          }

        ]

      },

      discrepancia: {

        tipo: "decision",

        texto: "¿Existe discrepancia transversal maxilar?",

        imagen: "./image/claseIII4_2.png",

        si: "disyuntor",

        no: "anclaje",

        botones: [

          {
            texto: "Volver",
            siguiente: "facial",
          }

        ]

      },

      anclaje: {

        tipo: "accion",

        texto: "<Strong>Definir dispositivo de anclaje para máscara.</Strong>"
        
        +

        "<br><br><img src='./image/Im37.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        ,

        imagen: "./image/claseIII4_3.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "discrepancia",
          }

        ]

      },

      disyuntor: {

        tipo: "decision_opciones",

        texto: "Uso de disyuntor",
        
        descripcion: "<br><br><img src='./image/Im38.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>",

        imagen: "./image/claseIII4_4.png",
        
        opciones: [

          {
            texto: "Disyuntor Convencional",

            siguiente: "convencional"

          },

          {
            texto: "Disyuntor Híbrido",

            siguiente: "hibrido"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "discrepancia",
          }

        ]

      },

      convencional: {

        tipo: "accion",

        texto: "<Strong>Disyuntor Convencional</Strong>"
        
        +

        "<br><br><img src='./image/Im39.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Feldmann, I., & Bazargani, F. (2016, December 28). Pain and discomfort during the first week of rapid maxillary expansion (RME) using two different RME... The Angle Orthodontist (EH Angle Education & Research Foundation). https://doi.org/10.2319/091216-686.1Autores</span>"

        +

        "<br><br>Se refiere a un dispositivo de expansión maxilar rápida (RME), como el Hyrax o Hass, que consiste en un tornillo de expansión unido a coronas o bandas en los segundos molares primarios maxilares o primeros molares permanentes, a menudo con una placa acrílica palatina."

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"
        
        +

        "Pueden existir modificaciones para mejorar la retención o estabilidad de los dispositivos"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        ,

        imagen: "./image/claseIII4_5.png",

        siguiente: "alveolar",

        botones: [

          {
            texto: "Volver",
            siguiente: "disyuntor",
          }

        ]

      },

      hibrido: {

        tipo: "accion",

        texto: "<Strong>Disyuntor hibrido</Strong>"

        +

        "<br><br>Dispositivo de expansión maxilar rápida (RME) que incorpora anclaje esquelético, como minitornillos o miniplacas, para mejorar la estabilidad y maximizar los efectos esqueléticos, minimizando las compensaciones dentales. Se asocia con protocolos como el BAMP (Bone-Anchored Maxillary Protraction) o dispositivos con minitornillos insertados en la zona anterior del paladar en posición parasutural."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Miranda F, Cunha Bastos JC da, Magno Dos Santos A, Janson G, Pereira Lauris JR, Garib D. Dentoskeletal comparison of miniscrew-anchored maxillary protraction with hybrid and conventional hyrax expanders: A randomized clinical trial. Am J Orthod Dentofacial Orthop. 2021 Dec;160:774–83.</span>"

        +

        "Utilizado para tratar maloclusiones Clase III esqueléticas, especialmente en pacientes mayores (≥11 años) o con discrepancias severas, para lograr mayor movimiento maxilar anterior (~4 mm) con mínima inclinación dental"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<span class='cita-biblio'>Meyns J, Thanatchaporn J, Shujaat S, Politis C, Jacobs R. Long-term three-dimensional skeletal effects of hybrid hyrax with facemask versus mentoplate in growing Class III patients: a randomized controlled trial. Prog Orthod. 2025 Dec;26.</span>"

        +

        "<span class='cita-biblio'>Ragab RSE-DA, El Shennawy MI, Yousif AAEW. Comparison between maxillary skeletal expander and hybrid hyrax facemask combination in treatment of growing patients with skeletal class III malocclusion. Tanta Dent J. 2022 Oct;19:273–80.</span>"

        ,

        imagen: "./image/claseIII4_6.png",

        siguiente: "postgrado4",

        botones: [

          {
            texto: "Volver",
            siguiente: "disyuntor",
          }

        ]

      },

      alveolar: {

        tipo: "accion",

        texto: "<Strong>Mascara facial con disyuntor de anclaje dento-alveolar</Strong>"
        
        ,

        imagen: "./image/claseIII4_7.png",

        siguiente: "expansion",

        botones: [

          {
            texto: "Volver",
            siguiente: "convencional",
          }

        ]

      },

      postgrado4: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/claseIII4_8.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "hibrido"
          }

        ]

      },

      expansion: {

        tipo: "decision_opciones",

        texto: "Tipo de expansión",
        
        descripcion: 
        
        "<br><Strong>● RPE (Expansión Rápida Palatina) o RME (Expansión Rápida Maxilar):</Strong>"

        +

        " Indicado cuando hay una deficiencia transversal maxilar que requiere corrección mediante apertura de suturas palatinas maxilares, común en maloclusiones Clase III esqueléticas. Utiliza dispositivos con anclaje dental (por ejemplo, Hyrax) y es suficiente para casos leves a moderados."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<span class='cita-biblio'>Zhou C, Duan P, He H, Song J, Hu M, Liu Y, et al. Expert consensus on pediatric orthodontic therapies of malocclusions in children. Vol. 16, International Journal of Oral Science. Springer Nature; 2024. </span>"

        +

        "Más común en dentición primaria o mixta temprana (6-8 años, CS1-CS2), donde el crecimiento activo facilita la expansión maxilar."

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<br><Strong>● RPE/C (Expansión-Constricción Rápida Alternada):</Strong>"

        +

        " Preferido cuando se busca maximizar la protracción maxilar mediante la apertura de suturas palatinas y circunmaxilares, especialmente en casos esqueléticos más complejos. El protocolo Alt-RAMEC puede combinarse con anclaje esquelético (TADs) para potenciar los efectos."
        
        +

        "<span class='cita-biblio'>Pithon MM, Santos N de L, dos Santos CRB, Baião FCS, Pinheiro MCR, Matos Neto M, et al. Is alternate rapid maxillary expansion and constriction an effective protocol in the treatment of class III malocclusion? A systematic review. Dental Press J Orthod. 2016;21:34–42.</span>"

        +

        "Indicado en dentición mixta (8-12 años), especialmente en pacientes cercanos al pico puberal, para optimizar el movimiento esquelético. Puede incluir anclaje esquelético para mayor eficacia."
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<span class='cita-biblio'>Pithon MM, Santos N de L, dos Santos CRB, Baião FCS, Pinheiro MCR, Matos Neto M, et al. Is alternate rapid maxillary expansion and constriction an effective protocol in the treatment of class III malocclusion? A systematic review. Dental Press J Orthod. 2016;21:34–42.</span>"

        +

        "En el artículo de L, Weitao, se realizó un estudio clínico aleatorizado en el que se comparan los protocolos de RPE y RPE/C, dando como resultado que ambos grupos mostraron mejoría en la relación maxilomandibular, pero el grupo RPE/C (máscara facial combinada con expansión/constricción rápida alternada) presentó cambios significativamente más marcados. El SNA aumentó en 2.67 ± 1.31° en el grupo RPE/C frente a 1.93 ± 0.79° en el grupo RPE, indicando un mayor avance del maxilar. Además, el valor de Wits mejoró considerablemente en ambos grupos, en el grupo RPE/C (3.65 ± 1.89 mm) y RPE (3.28 ± 2.63 mm). Estos resultados evidencian una mayor efectividad del protocolo RPE/C para la corrección anteroposterior esquelética en pacientes con Clase III"
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        ,

        imagen: "./image/claseIII4_9.png",
        
        opciones: [

          {
            texto: "Expansión rápida (RPE)",

            siguiente: "rpe"

          },

          {
            texto: "Expansión constricción (RPE-C)",

            siguiente: "rpec"

          }

        ],
        
        botones: [

          {
            texto: "Volver",
            siguiente: "alveolar",
          }

        ]

      },

      rpe: {

        tipo: "accion",

        texto: "<Strong>Expansión Rápida Palatina (RPE)</Strong>"
        
        +

        "Tipo Hyrax o dispositivos con tornillo de expansión, sola o combinada con máscara facial"

        +

        "<span class='cita-biblio'>Paoloni V, De Razza FC, Franchi L, Cozza P. Stability prediction of early orthopedic treatment in Class III malocclusion: morphologic discriminant analysis. Prog Orthod. 2021 Dec;22.</span>"

        +

        "<span class='cita-biblio'>Reed E, Kiebach TJ, Martin C, Razmus T, Gunel E, Ngan P. Stability of early Class III orthopedic treatment. Semin Orthod. 2014;20:114–27.</span>"

        +

        "<span class='cita-biblio'>Rutili V, Nieri M, Franceschi D, Pierleoni F, Giuntini V, Franchi L. Effects produced by the facemask with and without skeletal anchorage for the orthopaedic treatment of Class III malocclusion in growing patients: A systematic review and meta-Analysis of RCTs. Vol. 45, European Journal of Orthodontics. Oxford University Press; 2023. p. 157–68.</span>"

        +

        "<span class='cita-biblio'>Miao W, Zhou D, Li C, Chen L, Guan M, Peng Y, et al. Dental developmental stage affects the treatment outcome of maxillary protraction in skeletal class iii children: A systematic review and meta-analysis. Vol. 37, Australasian Orthodontic Journal. Australian Society of Orthodontists; 2021. p. 37–49.</span>"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<span class='cita-biblio'>Zhou C, Duan P, He H, Song J, Hu M, Liu Y, et al. Expert consensus on pediatric orthodontic therapies of malocclusions in children. Vol. 16, International Journal of Oral Science. Springer Nature; 2024.</span>"

        +
        
        "<br><Strong> ● Protocolo:</Strong>"

        +

        " Durante 1 semana. El tornillo de expansión se activa 4 veces al día (1 mm al día) durante 7 días."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"
        
        ,

        imagen: "./image/claseIII4_10.png",

        siguiente: "seguimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion",
          }

        ]

      },

      rpec: {

        tipo: "accion",

        texto: "<Strong>Expansión-Constricción Rápida Palatina (RPE-C)</Strong>"
        
        +

        "Expansión y constricción alternadas con dispositivos intraorales o anclaje esquelético"

        +

        "<span class='cita-biblio'>Kirschneck C, Proff P, Lux C. Ideales Timing für die Behandlung kieferorthopädischer Anomalien – eine klinische S3-Praxisleitlinie. J Orofac Orthop. 2022 Jul;83:225–32.</span>"

        +

        "<span class='cita-biblio'>Pithon MM, Santos N de L, dos Santos CRB, Baião FCS, Pinheiro MCR, Matos Neto M, et al. Is alternate rapid maxillary expansion and constriction an effective protocol in the treatment of class III malocclusion? A systematic review. Dental Press J Orthod. 2016;21:34–42.</span>"

        +
        
        "<br><Strong> ● Protocolo:</Strong>"

        +

        " RPE/C durante 7 semanas (Una semana de expansión, seguida de una semana de constricción y así sucesivamente hasta completar 7 semanas). Tanto la expansión como la constricción se realizaron 4 veces al día (1 mm al día)."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"
        
        ,

        imagen: "./image/claseIII4_11.png",

        siguiente: "seguimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion",
          }

        ]

      },

      seguimiento: {

        tipo: "accion",

        texto: "<Strong>Seguimiento</Strong>"
        
        ,

        imagen: "./image/claseIII5_1.png",

        siguiente: "frecuencia",

        botones: [

          {
            texto: "Volver mentonera",
            siguiente: "mentonera",
          },
          {
            texto: "Volver removibles",
            siguiente: "removibles",
          },
          {
            texto: "Volver RPE",
            siguiente: "rpe",
          },
          {
            texto: "Volver RPEC",
            siguiente: "rpec",
          }

        ]

      },

      frecuencia: {

        tipo: "accion",

        texto: "<Strong>Definir frecuencia de controles</Strong>"

        +

        "<br>Aunque en la literatura no se fija una periodicidad exacta, un estudio realizado en Singapur en el año 2020 describe el tiempo promedio de los tratamientos y las visitas (controles) durante el tratamiento: “La duración media del tratamiento con aparatología fija fue de 10,8 ± 6,8 meses, con un promedio de 9,8 ± 9,2 visitas, mientras que la duración media del tratamiento con aparatología removible fue de 7,5 ± 6,5 meses, con un promedio de 6,9 ± 3,4 visitas. La duración media del tratamiento con aparatología fija y removible fue de 10,8 ± 3,2 meses, con un promedio de 12,6 ± 3,3 visitas”, esto sugiere una frecuencia de controles de por lo menos 1 visita cada 4 semanas."

        +

        "<span class='cita-biblio'>Song YL, Tan ELY, Chua BCJ, Ng RJY, Lam NKP. Interceptive orthodontic treatment in Singapore: A descriptive study. Proc Singapore Healthc. 2020 Jun;29:113–8.</span>"
        
        ,

        imagen: "./image/claseIII5_2.png",

        siguiente: "evaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "seguimiento",
          }

        ]

      },

      evaluacion: {

        tipo: "accion",

        texto: "<Strong>Evaluación de cambios esqueléticos, dentoalveolares y oclusales</Strong>"

        +

        "<br>Se reportaron mejoras significativas en la relación maxilomandibular, particularmente en:"

        +

        "<br><Strong>● Incrementos en SNA y ANB, indicando avance maxilar efectivo:</Strong>"

        +
        
        " algunos cambios reportados en artículos con NE alta y moderada en la evaluación de GRADE son: +1.14° (GT) vs +0.67° (GC), +2.1° (con RPE híbrido), en un estudio: de 78.2° a 81.3° en grupo tratado."

        +
      
        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12. </span>"

        +

        "<span class='cita-biblio'>Miranda F, Cunha Bastos JC da, Magno Dos Santos A, Janson G, Pereira Lauris JR, Garib D. Dentoskeletal comparison of miniscrew-anchored maxillary protraction with hybrid and conventional hyrax expanders: A randomized clinical trial. Am J Orthod Dentofacial Orthop. 2021 Dec;160:774–83. </span>"

        +

        "<span class='cita-biblio'>Ragab RS, El Shennawy MI, Yousif AA. Comparison between maxillary skeletal expander and hybrid hyrax facemask combination in treatment of growing patients with skeletal class III malocclusion: a randomized clinical trial. Tanta Dent J. 2022;19(4):273-80. doi: 10.4103/tdj.tdj_30_22.</span>"

        +

        "<Strong>● Reducción del SNB en algunos estudios, señalando control del crecimiento mandibular:</Strong>"

        +
        
        " algunos cambios reportados fueron: −1.5° (GT) vs −1.3° (GC) y −0.4° a −0.7° en promedio en varios estudios"

        +

        "<br><Strong>● ANB con cambios reportados de:</Strong>"

        +
        
        " Mejoría de valores negativos (–1.5°) a positivos (+1.3° a +2.5°), +1.91° FM+MS vs +0.7° FM"

        +

        "<br><Strong>● Wits appraisal mejoró significativamente con cambios de:</Strong>"

        +
        
        " +0.81 mm (GT) vs −0.67 mm (GC), FM+MS: +1.1 mm vs +0.3 mm (FM), otro estudio con mejoría de –4.2 mm a –2.1 mm"

        +

        "<br><Strong>● Cambios dentoalveolares y oclusales:</Strong>"

        +
        
        " En estudios evaluados en GRADE con un <span class=\"badge-ne-alta\">(NE: Alta y moderada, GRADE)</span>, se observan compensaciones dentales controladas, con inclinación de incisivos superiores (U1–SN) y verticalización de inferiores (IMPA), corrección de overjet: de –4.7 mm a +0.09 mm, con una ganancia promedio de 4 a 5 mm y cambios en angulaciones: U1–SN pasó de 101.4° a 103.6° y L1–MPA de 96.2° a 93.2°."

        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<span class='cita-biblio'>Miranda F, Cunha Bastos JC da, Magno Dos Santos A, Janson G, Pereira Lauris JR, Garib D. Dentoskeletal comparison of miniscrew-anchored maxillary protraction with hybrid and conventional hyrax expanders: A randomized clinical trial. Am J Orthod Dentofacial Orthop. 2021 Dec;160:774–83.</span>"

        +

        "<span class='cita-biblio'>Ragab RSE-DA, El Shennawy MI, Yousif AAEW. Comparison between maxillary skeletal expander and hybrid hyrax facemask combination in treatment of growing patients with skeletal class III malocclusion. Tanta Dent J. 2022 Oct;19:273–80.</span>"

        ,

        imagen: "./image/claseIII5_3.png",

        siguiente: "perfil",

        botones: [

          {
            texto: "Volver",
            siguiente: "frecuencia",
          }

        ]

      },

      perfil: {

        tipo: "accion",

        texto: "<Strong>Evaluación de perfil de tejidos blandos</Strong>"
        
        +

        "<br><br>Estudios clínicos reportan que los pacientes tratados con protocolos tempranos mostraron un perfil más armónico y convexo, especialmente cuando se utilizó expansión híbrida + máscara facial. También, mejoría en Ángulo facial con cambios estadísticamente significativos en algunos estudios (por ejemplo, FM+MS: +0.0° ± 1.6°, FM: +0.1° ± 1.4°)."

        +

        "<span class='cita-biblio'>Mandall N, Cousley R, DiBiase A, Dyer F, Littlewood S, Mattick R, et al. Early class III protraction facemask treatment reduces the need for orthognathic surgery: a multi-centre, two-arm parallel randomized, controlled trial. J Orthod. 2016 Jul;43:164–75.</span>"

        +

        "<span class='cita-biblio'>Liu W, Zhou Y, Wang X, Liu D, Zhou S. Effect of maxillary protraction with alternating rapid palatal expansion and constriction vs expansion alone in maxillary retrusive patients: A single-center, randomized controlled trial. Am J Orthod Dentofac Orthop. 2015 Oct;148:641–51.</span>"

        +

        "<span class='cita-biblio'>Seiryu M, Ida H, Mayama A, Sasaki S, Sasaki S, Deguchi T, et al. A comparative assessment of orthodontic treatment outcomes of mild skeletal Class III malocclusion between facemask and facemask in combination with a miniscrew for anchorage in growing patients: A single-center, prospective randomized controlled trial. Angle Orthod. 2020;90:3–12.</span>"

        +

        "<span class='cita-biblio'>Miranda F, Cunha Bastos JC da, Magno Dos Santos A, Janson G, Pereira Lauris JR, Garib D. Dentoskeletal comparison of miniscrew-anchored maxillary protraction with hybrid and conventional hyrax expanders: A randomized clinical trial. Am J Orthod Dentofacial Orthop. 2021 Dec;160:774–83.</span>"

        +

        "<span class='cita-biblio'>Ragab RSE-DA, El Shennawy MI, Yousif AAEW. Comparison between maxillary skeletal expander and hybrid hyrax facemask combination in treatment of growing patients with skeletal class III malocclusion. Tanta Dent J. 2022 Oct;19:273–80.</span>"
        
        ,

        imagen: "./image/claseIII5_4.png",

        siguiente: "exitoso",

        botones: [

          {
            texto: "Volver",
            siguiente: "evaluacion",
          }

        ]

      },

      exitoso: {

        tipo: "decision",

        texto: "¿Tratamiento Exitoso?",

        imagen: "./image/claseIII5_6.png",

        si: "definir",

        no: "reevaluar",

        botones: [

          {
            texto: "Volver",
            siguiente: "perfil",
          }

        ]

      },

      reevaluar: {

        tipo: "accion",

        texto: "<Strong>Reevaluar caso</Strong>"
        
        ,

        imagen: "./image/claseIII5_5.png",

        siguiente: "crecimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "exitoso",
          }

        ]

      },

      definir: {

        tipo: "accion",

        texto: "<Strong>Definir tipo de retención, dar de alta y realizar controles periódicos</Strong>"
        
        +

        "<br><br>Aunque existe una falta de evidencia bibliográfica sobre la retención posterior a la terapia FM, algunos estudios siguieron un protocolo de retención con Frankel III, Activador inverso, “Reverse Twin Block” o Bionator III."
        
        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"
        
        +

        "<span class='cita-biblio'>Woon SC, Thiruvenkatachari B. Early orthodontic treatment for Class III malocclusion: A systematic review and meta-analysis. Vol. 151, American Journal of Orthodontics and Dentofacial Orthopedics. Mosby Inc.; 2017. p. 28–52.</span>"
        
        +

        "<span class='cita-biblio'>Jamilian A, Cannavale R, Piancino MG, Eslami S, Perillo L. Methodological quality and outcome of systematic reviews reporting on orthopaedic treatment for class III malocclusion: Overview of systematic reviews. J Orthod. 2016 Jul;43:102–20.</span>"
        
        +

        "<span class='cita-biblio'>Zhou C, Duan P, He H, Song J, Hu M, Liu Y, et al. Expert consensus on pediatric orthodontic therapies of malocclusions in children. Vol. 16, International Journal of Oral Science. Springer Nature; 2024.</span>"
        
        +

        "<span class='cita-biblio'>Raghupathy Y, Ananthanarayanan V, Kailasam V, Padmanabhan S. Posttreatment Stability Following Facemask Therapy in Patients with Skeletal Class III Malocclusion: A Systematic Review. Int J Clin Pediatr Dent. 2023;16:897–907.</span>"
        
        +

        "Algunos autores utilizaron el “uso de FM antes de acostarse” sin cambiar la fuerza durante otros 2 a 3 meses como parte del protocolo de retención."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Raghupathy Y, Ananthanarayanan V, Kailasam V, Padmanabhan S. Posttreatment Stability Following Facemask Therapy in Patients with Skeletal Class III Malocclusion: A Systematic Review. Int J Clin Pediatr Dent. 2023;16:897–907.</span>"
        
        +

        "Los aparatos miofuncionales utilizados como dispositivo de retención podrían haber facilitado el avance continuo del punto A. Algunos pacientes también se sometieron a un tratamiento completo con aparatología fija después de la terapia FM."

        +

        "<span class='cita-biblio'>Raghupathy Y, Ananthanarayanan V, Kailasam V, Padmanabhan S. Posttreatment Stability Following Facemask Therapy in Patients with Skeletal Class III Malocclusion: A Systematic Review. Int J Clin Pediatr Dent. 2023;16:897–907.</span>"
        
        ,

        imagen: "./image/claseIII5_7.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "exitoso",
          }

        ]

      },

    }

  },

  labio_paladar_hendido_clase_iii: {

    titulo: "",

    inicio: "presentacion",

    nodos: {

      presentacion: {

        tipo: "decision_opciones",

        texto: "Malocusión Clase III Labio Y/O Paladar Hendido Y Malocusión Clase III En Detición Mixta o Decidua",
        
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

            siguiente: "modelos"

          }

        ]

      },

      definicion: {

        tipo: "accion",

        texto: "<Strong>Maloclusión clase III en LPH</Strong>"
        
        +

        "<br><br><img src='./image/Im40.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "Corresponde a una discrepancia dento esquelética sagital, caracterizada por una posición relativa-mente adelantada de la mandíbula respecto al maxilar. La maloclusión clase III esquelética presenta una etiología multifactorial, aunque con una marcada influencia genética y la participación de factores ambientales y funcionales. Su origen puede estar asociado a una deficiencia del crecimiento maxilar,un exceso del crecimiento mandibular o una combinación de ambos factores. En términos oclusales, esta maloclusión puede manifestarse con una relación molar y canina de clase III esquelética, aunque en algunos casos pueden desarrollar compensaciones dentales que enmascaran la discrepancia esquelética y generar relaciones oclusales cercanas a Clase I. La compensación dental más frecuente se manifiesta como una protrusión de los incisivos maxilares y una retrusión de los incisivos mandibulares, lo que se traduce clínicamente en una mordida borde a borde o en una mordida cruzada anterior. El diagnóstico de la Clase III esquelética requiere una evaluación clínica y cefalometrica, mediante la identificación de características esqueléticas comunes, como el acortamiento de la base craneal anterior (NS) y posterior (S-Ar/Ba), la disminución del ángulo de la silla turca (NS-Ar) y el aumento del ángulo gonial (Ar-Go-Gn), que conducen a una posición más anterior de la fosa glenoidea, lo que resulta en maloclusión de clase III esquelética. Otras medidas en las que se correlacionan el maxilar con la mandíbula y cada uno de ellos con la base craneal anterior, (ANB) y (Wits) con valores menores o negativos; alteración de la diferencia maxilomandibular; nasion perpendicular al punto A (+2,3 mm) y nasion perpendicular al pogonion (0 mm), ambos alterados."

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116</span>"

        +

        "<span class='cita-biblio'>Alhammadi MS, Halboub E, Fayed MS, Labib A, El-Saaidi C. Global distribution of malocclusion traits: A systematic review. 2018.</span>"

        +

        "<span class='cita-biblio'>Institución Universitaria Colegios de Colombia — UNICOC. Maloclusión de la población atendida en la red de clínicas del Colegio Odontológico – UNICOC. Observatorio Epidemiológico en Salud Oral. Boletín Vol. 2, No. 3. Bogotá (Colombia): UNICOC; agosto de 2014.</span>"
        
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

        texto: "<Strong>Materiales e insumos para tratamiento de maloclusión clase III esquelética en pacientes con Labio y/o paladar hendido en dentición mixta o decidua</Strong>"
        
        +

        "<br><br><img src='./image/materialesC.png' style='width: 850px; height: auto; display: block; margin: 20px auto; border-radius: 12px;'>"
        
        ,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      modelos: {

        tipo: "accion",

        texto: "<Strong>Explicación de necesidad y objetivos de tratamiento</Strong>"
        
        +

        "<br><br>Los pacientes con LPHNS presentan con frecuencia una deficiencia del tercio medio facial caracte-rizada por retrusión maxilar, perfil facial cóncavo y tendencia al desarrollo de una maloclusión Clase III. Esta alteración tiene un origen multifactorial y se relaciona tanto con factores intrínsecos del desa-rrollo craneofacial como con los efectos derivados de las cirugías tempranas a los que estos pacientes son sometidos. Además de la deficiencia sagital, el maxilar suele presentar compromiso transversal y vertical, favoreciendo la presencia de mordidas cruzadas anteriores y posteriores. Los objetivos del tratamiento incluyen mejorar la relación maxilo mandibular, corregir las mordidas cruzadas, op-timizar la estética facial y establecer condiciones más favorables para el desarrollo oclusal durante el crecimiento"

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116</span>"

        ,

        imagen: "./image/LPH1_1.png",

        siguiente: "tratamiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      tratamiento: {

        tipo: "decision",

        texto: "¿Paciente y acudiente aceptan el plan de tratamiento?",

        imagen: "./image/LPH1_2.png",

        si: "dentincion",

        no: "consecuencias",

        botones: [

          {
            texto: "Volver",
            siguiente: "modelos",
          }

        ]

      },

      consecuencias: {

        tipo: "accion",

        texto: "<Strong>Informar las consecuencias de no realizar el tratamiento</Strong>"
        
        +

        "<br><br>Los pacientes tratados con máscara facial (FM) mostraron una mejoría significativa de las relaciones esqueléticas y dentales en comparación con los pacientes controles no tratados, evidenciada por incre-mentos en el ángulo SNA de 2.12° (WMD = 2.12, IC del 95 %: 1.58 a 2.66), el ángulo ANB de 4.17° (WMD = 4.17, IC del 95 %: 3.60 a 4.74), el ángulo SN-MP de 2.60° (WMD = 2.60, IC del 95 %: 1.10 a 4.10) y, una disminución del ángulo SNB de 1.94° (WMD = -1.94, IC del 95 %: -2.48 a -1.40). "

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"

        +

        "<span class='cita-biblio'>Palikaraki G, Makrygiannakis MA, Zafeiriadis AA, Benetou V, Sanoudos M, Bitsanis I, et al. The effect of facemask in patients with unilateral cleft lip and palate: A systematic review and meta-Analysis. Vol. 43, European Journal of Orthodontics. Oxford University Press; 2021. p. 69–79. </span>"

        ,

        imagen: "./image/LPH1_3.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "tratamiento",
          }

        ]

      },

      dentincion: {

        tipo: "decision_opciones",

        texto: "Tipo de dentición presente",
        
        descripcion: 
        
        "<br>Se compararon los resultados del tratamiento realizado de forma temprana (4-7 años) con aquellos obtenidos mediante tratamiento tardío (8-13 años) y se concluyó que no se encontraron diferencias estadísticamente significativas entre ambos grupos en cuanto a la proyección esquelética final del tercio medio facial. No obstante, el grupo tratado tempranamente presentó un incremento significativamente mayor del ángulo ANB (4.56°) en comparación con el grupo de tratamiento tardío (2.53°). Sin embargo, esta diferencia se atribuyó principalmente a una mayor rotación mandibular en sentido horario y no a un mayor desplazamiento anterior del maxilar. Dichos efectos fueron más evidentes en los pacientes de menor edad, probablemente debido al crecimiento vertical asociado con la transición hacia la dentición mixta. En cuanto al ángulo SNA, aunque el grupo de tratamiento temprano mostró un incremento mayor (2,14°) que el grupo de tratamiento tardío (1,29°), esta diferencia no alcanzó significación estadística."
        
        +

        "<br>De igual manera, no se observaron diferencias significativas entre ambos grupos respecto a la recidiva. En términos generales, el 57,5 % de los pacientes volvieron a presentar algún grado de mordida cruzada anterior durante el seguimiento. Esta recidiva no se relaciona con una pérdida de estabilidad del avance maxilar obtenido, sino con el crecimiento mandibular continuo y su rotación en sentido anti horario, fenómenos que superaron los cambios esqueléticos alcanzados en el maxilar."
        
        +

        "<span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Segal DA, Grayson BH, Shetye PR. Skeletal and dentoalveolar changes following the use of an occlusally bonded maxillary protraction headgear appliance in patients born with cleft lip and palate. Semin Orthod. 2017 Sep;23:279–94.</span>"

        ,

        imagen: "./image/LPH1_4.png",
        
        opciones: [

          {
            texto: "Dentición decidua ó mixta temprana",

            siguiente: "mixtatemprana"

          },

          {
            texto: "Dentición intertransicional o mixta tardia",

            siguiente: "mixtatardia"

          },

          {
            texto: "Dentición permanente",

            siguiente: "permanente"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "tratamiento",
          }

        ]

      },

      mixtatemprana: {

        tipo: "accion",

        texto: "<Strong>Dentición decidua ó mixta temprana</Strong>"
        
        +

        "<br><br><img src='./image/Im41.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><img src='./image/Im41_2.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        ,

        imagen: "./image/LPH1_5.png",

        siguiente: "anclaje",

        botones: [

          {
            texto: "Volver",
            siguiente: "dentincion",
          }

        ]

      },

      mixtatardia: {

        tipo: "accion",

        texto: "<Strong>Dentición intertransicional o mixta tardia</Strong>"
        
        +

        "<br><br><img src='./image/Im42.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        ,

        imagen: "./image/LPH1_6.png",

        siguiente: "alveolar",

        botones: [

          {
            texto: "Volver",
            siguiente: "dentincion",
          }

        ]

      },

      alveolar: {

        tipo: "decision",

        texto: "¿Ha sido  realizado un  injerto alveolar secundario?",

        descripcion: 

        "<br>Algunos estudios han sugerido que en pacientes con labio y/o paladar hendido, la realización de un injerto alveolar secundario antes de la protracción maxilar podría favorecer una respuesta esquelética más favorable; sin embargo, la evidencia disponible es limitada y debe interpretarse con cautela. Durante el tratamiento ortodóncico interceptivo con FM, se observaron mejores efectos esqueléticos en los pacientes que habían recibido injerto alveolar, evidenciados por un mayor avance del punto A (4,18 mm) en comparación con aquellos sin injerto (2,64 mm). Asimismo, el grupo con injerto presentó una menor rotación mandibular en sentido horario (10 % frente a 50 %), lo que sugiere un menor incremento del ángulo mandibular y de la altura facial inferior, factores considerados importantes para la estabilidad de los resultados terapéuticos. De igual manera, se observó una mayor mejoría de la relación esquelética, evaluada mediante el ángulo ANB. Los autores reportaron que aproximadamente el 90 % de la corrección obtenida en el grupo con injerto fue atribuible al avance maxilar, mientras que en el grupo sin injerto solo el 50 % de la mejoría se relacionó con cambios maxilares, correspondiendo el porcentaje restante principalmente a la rotación mandibular."
        
        +

        "<span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Zhang Y, Jia H, Fu Z, Huang Y, Wang Z, Guo R, et al. Dentoskeletal effects of facemask therapy in skeletal Class III cleft patients with or without bone graft. Am J Orthod Dentofac Orthop. 2018 Apr;153:542–9.</span>"

        ,

        imagen: "./image/LPH1_8.png",

        si: "anclaje",

        no: "priorizar",

        botones: [

          {
            texto: "Volver dentición mixta tardia",
            siguiente: "mixtatardia",
          },
          {
            texto: "Volver Crecimiento",
            siguiente: "crecimiento",
          }

        ]

      },

      priorizar: {

        tipo: "accion",

        texto: "<Strong>Priorizar la realización del injerto</Strong>",

        imagen: "./image/LPH1_10.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "alveolar",
          }

        ]

      },

      permanente:{

        tipo: "accion",

        texto: "<Strong>Dentición permanente</Strong>"
        
        +

        "<br><br><img src='./image/Im43.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        ,

        imagen: "./image/LPH1_7.png",

        siguiente: "crecimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "dentincion",
          }

        ]

      },

      crecimiento: {

        tipo: "decision",

        texto: "¿Persiste la posibilidad de crecimiento?",

        descripcion: 

        "<br>La determinación del estadio de maduración vertebral cervical permite establecer si el paciente conserva potencial de crecimiento e identificar la proximidad del pico de crecimiento mandibular mediante el análisis morfológico de las vértebras cervicales C2, C3 y C4 en una radiografía lateral de cráneo. Esta información es relevante para estimar la respuesta esperada al tratamiento ortopédico maxilar y para planificar oportunamente futuras intervenciones ortodónticas o quirúrgicas."
        
        +

        "<br>Según este método, el pico de crecimiento ocurre entre los estadios cervicales CS3 y CS4."

        +

        "En el estadio CS3, considerado el inicio del pico de crecimiento, se observan concavidades en los bordes inferiores de C2 y C3, mientras que C4 permanece plano. Adicionalmente, los cuerpos vertebrales de C3 y C4 presentan una morfología trapezoidal o rectangular horizontal.Por su parte, en el estadio CS4 se evidencian concavidades en los bordes inferiores de C2, C3 y C4, acompañadas de cuerpos vertebrales con una forma rectangular horizontal bien definida. Este estadio indica que el pico de crecimiento mandibular ocurrió aproximadamente entre uno y dos años antes de la evaluación radiográfica"

        +

        "<span class='cita-biblio'>Baccetti T, Franchi L, McNamara JA, Tollaro I. Early dentofacial features of Class II malocclusion: a longitudinal study from the deciduous through the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:502–9.</span>"

        ,

        imagen: "./image/LPH1_9.png",

        si: "alveolar",

        no: "protocolo",

        botones: [

          {
            texto: "Volver",
            siguiente: "permanente",
          }

        ]

      },

      protocolo: {

        tipo: "accion",

        texto: "<Strong>Remitir al protocolo de ortodoncia correctiva</Strong>",

        imagen: "./image/LPH1_11.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "crecimiento",
          }

        ]

      },

      anclaje: {

        tipo: "accion",

        texto: "<Strong>Selección del mecanismo de anclaje</Strong>",

        imagen: "./image/LPH2_1.png",

        siguiente: "expansion",

        botones: [

          {
            texto: "Volver dentición decidua",
            siguiente: "mixtatemprana",
          },
          {
            texto: "Volver a injerti alveolar secundario",
            siguiente: "alveolar",
          }

        ]

      },

      expansion: {

        tipo: "decision",

        texto: "¿Paciente necesita expansión maxilar?",

        descripcion: 

        "<br>La necesidad de expansión maxilar debe determinarse mediante la evaluación clínica de la discrepancia transversal maxilar. En pacientes con LPHNS , la deficiencia transversal del maxilar es frecuente debido a las alteraciones del crecimiento propias de la fisura y a los efectos cicatriciales derivados de las cirugías primarias. La presencia de mordida cruzada posterior, colapso maxilar o discrepancia transversal constituye una indicación para realizar expansión maxilar antes o simultáneamente a la protracción maxilar"
        
        +

        "<span class='cita-biblio'>Deepika U, Ray P, Nayak A, Simon LS, Mahakur M, Sahu M. Dento-skeletal Sequel of Hyrax in Nonsyndromic Cleft Lip and Palate: A Systematic Review and Meta-analysis. Int J Clin Pediatr Dent. 2023;16:882–96.</span>"

        ,

        imagen: "./image/LPH2_2.png",

        si: "picocercimiento",

        no: "protraccion",

        botones: [

          {
            texto: "Volver",
            siguiente: "anclaje",
          }

        ]

      },

      protraccion: {

        tipo: "accion",

        texto: "<Strong>Elección protocolo de protracción</Strong>",

        imagen: "./image/LPH2_7.png",

        siguiente: "picocrecimiento2",

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion",
          }

        ]

      },

      picocrecimiento2: {

        tipo: "decision",

        texto: "¿Paciente se encuentra cercano al pico de crecimiento?",

        descripcion: 

        "<br>La evidencia disponible sugiere que cuando se opta por realizar el tratamiento de pacientes con LPHNS con protocolo Alternate Rapid Maxillary Expansion and Constriction (Alt RAMEC), realizar la expansión y protracción maxilar cerca del pico puberal de crecimiento podría permitir una mayor estabilidad de los resultados y disminuir la probabilidad de recidiva de tratamientos iniciados durante etapas más tempranas de la dentición mixta con este protocolo."
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>S V, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofacial J. 2025 Sep; </span>"

        ,

        imagen: "./image/LPH2_8.png",

        si: "mini2",

        no: "petit",

        botones: [

          {
            texto: "Volver",
            siguiente: "protraccion",
          }

        ]

      },

      picocercimiento: {

        tipo: "decision",

        texto: "¿Paciente se encuentra cercano al pico de crecimiento?",

        descripcion: 

        "<br>La evidencia disponible sugiere que cuando se opta por realizar el tratamiento de pacientes con LPHNS con protocolo Alternate Rapid Maxillary Expansion and Constriction (Alt RAMEC), realizar la expansión y protracción maxilar cerca del pico puberal de crecimiento podría permitir una mayor estabilidad de los resultados y disminuir la probabilidad de recidiva de tratamientos iniciados durante etapas más tempranas de la dentición mixta con este protocolo."
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Vedant S, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofac J. 2025. doi: 10.1177/10556656251403647.</span>"

        ,

        imagen: "./image/LPH2_3.png",

        si: "ramec",

        no: "QuaHy",

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion",
          }

        ]

      },

      ramec: {

        tipo: "accion",

        texto: 
        
        "<Strong>Disyunción con Alt RAMEC</Strong>"
        
        +

        "<br><br><img src='./image/Im46.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Façanha, A. J., Lara, T. S., Garib, D. G., & da Silva Filho, O. G. (2014). Transverse effect of Haas and Hyrax appliances on the upper dental arch in patients with unilateral complete cleft lip and palate: a comparative study. Dental press journal of orthodontics, 19(2), 39–45. https://doi.org/10.1590/2176-9451.19.2.039-045.oar</span>"

        +

        "<br>El protocolo Alt-RAMEC consiste en ciclos alternados de expansión y constricción maxilar realizados semanalmente durante aproximadamente siete semanas. Su objetivo es incrementar la desarticulación de las suturas circunmaxilares para facilitar la posterior protracción maxilar. La evidencia disponible sugiere que la aplicación del protocolo cerca del pico de crecimiento puede favorecer una mayor estabilidad de los resultados obtenidos."

        +

        "<br>Finalizada la fase de expansión-constricción, el tratamiento continúa con la fase de protracción maxilar mediante FM, con un seguimiento de al menos 6 meses."
        
        +

        "<br>El éxito terapéutico depende en gran medida de la adherencia al uso de la aparatología y de la magnitud y dirección de las fuerzas aplicadas."

        +

        "<br>En pacientes con LPHNS, el protocolo de Alt-RAMEC en combinación con FM, ha mostrado mejoras en el perfil facial y en la convexidad facial, así como un incremento significativo del ángulo SNA reportado entre (3.23° y 5.75°). La evidencia sugiere que estos cambios son atribuibles principalmente a modificaciones esqueléticas más que dentoalveolares y, indica una adecuada estabilidad a largo plazo de la protracción maxilar alcanzada mediante este protocolo cuando se aplica cerca al pico de crecimiento."

        +

        "<br>No obstante, los efectos sobre la relación maxilomandibular global son menos consistentes. Aunque se observa una tendencia al aumento del ángulo ANB entre (4.03° y 6.12°) esta tiene una heterogeneidad del 96 % esto debido a la variabilidad en el tiempo de uso y los niveles de fuerzas utilizados entre los estudios analizados; asimismo, la fase de expansión previa puede inducir una rotación mandibular hacia abajo y atrás lo que genera una ligera disminución del ángulo SNB entre (-1.37° y -0.8°). Estos cambios podrían ser desfavorables en pacientes con un patrón de crecimiento vertical aumentado o con tendencia a la rotación mandibular posterior."

        +

        "<br>Desde el punto de vista periodontal, algunos estudios han reportado que con el protocolo Alt RA-MEC puede generar una reducción del espesor del hueso alveolar vestibular de los dientes utilizados como anclaje durante la expansión, por lo que se recomienda un monitoreo clínico y radiográfico periódico durante el tratamiento.<span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Vedant S, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofac J. 2025. doi: 10.1177/10556656251403647.</span>"

        +

        "<br>Recomendación de uso: El protocolo clásico Alt-RAMEC consiste en alternar semanalmente ciclos de ERM y constricción maxilar durante un período aproximado de 5 a 9 semanas. Finalizada esta fase, se inicia la protracción maxilar mediante FM. Algunos estudios sugieren que el uso de expansores de doble bisagra podría favorecer una mayor movilización del complejo maxilar y potenciar los efectos de la protracción. Asimismo, se recomienda mantener las fuerzas de protracción durante el mayor número de horas posible al día, idealmente de forma continua o según la máxima tolerancia del paciente, con el fin de optimizar la respuesta ortopédica."
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Vedant S, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofac J. 2025. doi: 10.1177/10556656251403647.</span>"

        ,

        imagen: "./image/LPH2_6.png",

        siguiente: "petit",

        botones: [

          {
            texto: "Volver",
            siguiente: "picocercimiento",
          }

        ]

      },

      QuaHy: {

        tipo: "decision_opciones",

        texto: "Elección",

        imagen: "./image/LPH2_3.png",
        
        opciones: [

          {
            texto: "Quadhelix",

            siguiente: "quadhelix"

          },

          {
            texto: "Disyuntor Hyrax",

            siguiente: "hyrax"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "picocercimiento",
          }

        ]

      },

      hyrax: {

        tipo: "accion",

        texto: 
        
        "<Strong>Disyuntor Hyrax</Strong>"
        
        +

        "<br><br><img src='./image/Im45.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br>El HY es un aparato dentosoportado utilizado para realizar ERM. Su empleo se recomienda princi-palmente durante la dentición decidua tardía y la dentición mixta temprana, etapas en las que la menor maduración de las suturas maxilares favorece una respuesta ortopédica más eficiente. Los protocolos de activación descritos en la literatura incluyen entre una y dos activaciones diarias, con una dura-ción habitual de 7 a 14 días, dependiendo de la magnitud de la expansión requerida. En pacientes con LPHNS, el HY produce incrementos significativos en el ancho intercanino (5.25 mm)(SD 2.45), ancho intermolar(5,0 mm)(SD 1.5), rotación molar(1.60°)(SD 2.70) e inclinación molar(6.5°)(SD 2.5)."

        +

        "<br>Asimismo, la ERM se ha asociado con un aumento del volumen de la vía aérea orofaríngea. Sin embargo, cuando el objetivo terapéutico incluye la corrección de la deficiencia sagital maxilar, la expansión rápida debe complementarse con terapia de protracción maxilar, ya que la expansión aislada genera principalmente cambios transversales con un efecto limitado sobre el avance esquelético del maxilar"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Baja, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Vasant MR, Menon S, Kannan S. Maxillary Expansion in Cleft Lip and Palate using Quad Helix and Rapid Palatal Expansion Screw. Med journal, Armed Forces India. 2009 Apr;65:150–3.</span>"

        +

        "<span class='cita-biblio'>Deepika U, Ray P, Nayak A, Simon LS, Mahakur M, Sahu M. Dento-skeletal Sequel of Hyrax in Nonsyndromic Cleft Lip and Palate: A Systematic Review and Meta-analysis. Int J Clin Pediatr Dent. 2023;16:882–96.</span>"

        +

        "<br>Recomendación de uso: Se recomienda considerar el uso de esta alternativa en dentición decidua tardía y dentición mixta. El protocolo de activación consiste en dos cuartos de vuelta diarios (una activación en la mañana y una en la noche), equivalentes a aproximadamente 0,5 mm de expansión por día. La activación debe mantenerse hasta alcanzar la corrección transversal o una ligera sobrecorrección clínica. Habitualmente, la fase activa tiene una duración aproximada de 7 a 14 días, dependiendo de la magnitud de la discrepancia transversal. Posteriormente, se recomienda mantener el aparato en posición pasiva como retenedor durante un período mínimo de 3 a 6 meses para favorecer la estabilidad de los resultados obtenidos. "
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Baja, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Deepika U, Ray P, Nayak A, Simon LS, Mahakur M, Sahu M. Dento-skeletal Sequel of Hyrax in Nonsyndromic Cleft Lip and Palate: A Systematic Review and Meta-analysis. Int J Clin Pediatr Dent. 2023;16:882–96.</span>"

        ,

        imagen: "./image/LPH2_5.png",

        siguiente: "petit",

        botones: [

          {
            texto: "Volver",
            siguiente: "picocercimiento",
          }

        ]

      },       

      quadhelix: {

        tipo: "accion",

        texto: 
        
        "<Strong>Quadhelix</Strong>"
        
        +

        "<br><br><img src='./image/Im44.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Fahim, F. H., Othman, A., & von See, C. (2023). F-quad helix for simultaneous maxillary expansion and tooth alignment in patients with unilateral cleft lip and/or palate. Clinical case reports, 11(6), e7572. https://doi.org/10.1002/ccr3.7572</span>"

        +

        "<br>El QH constituye una alternativa para realizar ESM en pacientes con LPHNS. La evidencia disponible indica que, en comparación con ERM mediante Hyrax (HY), el QH requiere un mayor tiempo de tratamiento para alcanzar la corrección transversal. Aunque se ha observado una mayor rotación molar durante la expansión, no se han encontrado diferencias significativas en las dimensiones intercaninas ni en las intermolares finales entre ambos métodos. Los cambios que se evidenciaron con el uso del QH fueron en el ancho intercanino (8.5 mm) (SD 3.65), ancho intermolar (4.35 mm)(SD 2.30), rotación molar (26.60°)(SD 16.30) e inclinación molar (7.0°)(SD 4.5).Por tanto, el QH puede considerarse una opción cuando se busca una expansión más gradual y controlada del maxilar"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Baja, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Vasant MR, Menon S, Kannan S. Maxillary Expansion in Cleft Lip and Palate using Quad Helix and Rapid Palatal Expansion Screw. Med journal, Armed Forces India. 2009 Apr;65:150–3.</span>"

        +

        "<span class='cita-biblio'>Deepika U, Ray P, Nayak A, Simon LS, Mahakur M, Sahu M. Dento-skeletal Sequel of Hyrax in Nonsyndromic Cleft Lip and Palate: A Systematic Review and Meta-analysis. Int J Clin Pediatr Dent. 2023;16:882–96.</span>"

        ,

        imagen: "./image/LPH2_4.png",

        siguiente: "petit",

        botones: [

          {
            texto: "Volver",
            siguiente: "QuaHy",
          }

        ]

      }, 

      petit: {

        tipo: "accion",

        texto: 
        
        "<Strong>Protocolo de protracción con mascara Petit</Strong>"
        
        +

        "<br><br><img src='./image/Im47.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Ponglertnapakorn AA, Burak MY, Barrios JCQ. Cambios maxilares en sentido anteroposterior y vertical con el uso de máscara facial en pacientes con secuela de labio y paladar hendidos unilaterales del Hospital General «Dr. Manuel Gea González». Revista Mexicana de Ortodoncia. 2014;2:174-82</span>"

        +

        "<br>La FM constituye una alternativa eficaz para el tratamiento de la deficiencia maxilar en pacientes con LPHNS. Los resultados con el uso de FM mostraron cambios esqueléticos significativos en comparación con pacientes con LPHNS no tratados, evidenciados por un aumento del ángulo SNA entre (2,12° a 2.64°), una disminución del ángulo SNB entre (-1,90° a -2.00°), un incremento del ángulo ANB entre (4,17° a 4,40°), una mejoría de 5,53 mm (IC 95 %: 4.27 a 6.79) en la valoración de Wits y, un aumento del ángulo mandibular entre (1,64° a 2,75°) lo que sugiere una rotación mandibular en sentido horario (hacia abajo y atrás) en pacientes con LPHNS tratados en comparación con el grupo control de pacientes con LPHNS no tratados, posiblemente relacionado con la resistencia generada por los tejidos cicatriciales propios de la fisura. "
        
        +
        
        "<br>En cuanto a los efectos dentoalveolares, la mayoría de los estudios no encontraron diferencias estadísticamente significativas. No obstante se reportó una proinclinación de los incisivos superiores U1-SN entre (2.84° a 3,24°), una disminución en el IMPA de 3,75° y una reducción en el ángulo interincisal U1-L1 de 2,35°. Adicionalmente, una corrección del overjet de 5,16 mm (IC 95 %: 4.33 a 5.99) y una reducción del overbite de 3,46 mm (IC 95 %: -4.26 a -2.66), sugiriendo la presencia de com-pensaciones dentarias asociadas a la protracción maxilar"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Haichao J, Weiran L. Maxillary Protraction Effects on Anterior Crossbites Repaired Unilateral Cleft Versus Noncleft Prepubertal Boys. https://angle-orthodontist.kglmeridian.com/meridian/angle/published/rest/pdf-watermark/v1/journals/angl/78/4/article-p617.pdf/watermark-pdf/. 2008. </span>"

        +

        "<span class='cita-biblio'>Palikaraki G, Makrygiannakis MA, Zafeiriadis AA, Benetou V, Sanoudos M, Bitsanis I, et al. The effect of facemask in patients with unilateral cleft lip and palate: A systematic review and meta-Analysis. Vol. 43, European Journal of Orthodontics. Oxford University Press; 2021. p. 69–79.</span>"

        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906. </span>"

        +

        "<span class='cita-biblio'>Gandhi V, Fattal A, Genova G, Yadav S, Janakiraman N. Comparative Analysis of Bone vs. Tooth Anchored Maxillary Protraction in Cleft Lip and Palate Patients-A Systematic Review and Meta-Analysis. Orthod Craniofac Res. 2025 Sep; </span>"
    
        +
        
        "<br>Recomendaciones de uso: Para la protracción maxilar se recomienda la aplicación de fuerzas entre 400 y 500 gramos por lado, dirigidas aproximadamente entre 10° y 30° por debajo del plano oclusal. El uso diario de la máscara facial debe mantenerse durante al menos 12 a 14 horas, aunque puede ajustarse según los objetivos terapéuticos, la cooperación del paciente y la respuesta clínica observada. La duración del tratamiento debe individualizarse en función de la severidad de la deficiencia maxilar, la respuesta ortopédica obtenida y el patrón de crecimiento craneofacial. En la mayoría de los pacientes, la fase activa de protracción suele extenderse entre 12 y 18 meses, requiriendo controles periódicos para evaluar la necesidad de continuar, modificar o finalizar la terapia."

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Palikaraki G, Makrygiannakis MA, Zafeiriadis AA, Benetou V, Sanoudos M, Bitsanis I, et al. The effect of facemask in patients with unilateral cleft lip and palate: A systematic review and meta-Analysis. Vol. 43, European Journal of Orthodontics. Oxford University Press; 2021. p. 69–79.</span>"

        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906. </span>"

        +

        "<span class='cita-biblio'>Gandhi V, Fattal A, Genova G, Yadav S, Janakiraman N. Comparative Analysis of Bone vs. Tooth Anchored Maxillary Protraction in Cleft Lip and Palate Patients-A Systematic Review and Meta-Analysis. Orthod Craniofac Res. 2025 Sep; </span>"
    
        +

        "<br>- Fuerza de tracción entre 400 y 500 gramos por lado"

        +

        "<br>- Angulación de elasticos entre 10° y 30° por debajo del plano oclusal"
        
        +

        "<br>- Uso mínimo de 14 horas al dia"

        ,

        imagen: "./image/LPH3_3.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver Quadhelix",
            siguiente: "quadhelix",
          },
          {
            texto: "Volver Hyrax",
            siguiente: "hyrax",
          },
          {
            texto: "Volver a protocolo Alt-RAMEC",
            siguiente: "ramec",
          },
          {
            texto: "Volver Pico crecimiento",
            siguiente: "picocrecimiento2",
          }

        ]

      },

      mini2: {

        tipo: "decision_opciones",

        texto: "<Strong>Elección</Strong>",

        imagen: "./image/LPH2_8.png",
        
        opciones: [

          {
            texto: "Mini placas con elásticos ",

            siguiente: "mini"

          },

          {
            texto: "Mascara facial asistida por miniplacas",

            siguiente: "mascara"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "picocrecimiento2",
          }

        ]

      },

      mini: {

        tipo: "decision_opciones",

        texto: "<Strong>Miniplacas con elásticos intermaxilares</Strong>",

        descripcion:
        
        "<br><br>La terapia con elásticos intermaxilares de Clase III anclados a miniplacas consiste en la colocación quirúrgica de dos miniplacas en la región infra cigomática del maxilar y dos miniplacas adicionales en la región mandibular, generalmente entre los caninos y los incisivos laterales. Ambas estructuras se conectan mediante elásticos de Clase III, generando fuerzas ortopédicas continuas."

        +

        "<br>Al estar el sistema anclado directamente al hueso, las fuerzas se transmiten predominantemente al complejo maxilomandibular, favoreciendo los cambios esqueléticos y minimizando las compensacio-nes dentoalveolares observadas con los sistemas de anclaje dentario. Los cambios promedio registrados para este tratamiento fueron un aumento en el ANB de 1.51°, aumento en el SNA de 1.63°, un rango de proinclinación de los incisivos superiores U1-FH entre 0.5° y 4.3°, y un incremento en el overjet de 2.38 mm; finalmente un cambio no significativo en el SNB de -0.62° en promedio y (p=0.62)"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Jahanbin A, Shafaee H, Pahlavan H, Bardideh E, Entezari M. Efficacy of Different Methods of Bone-Anchored Maxillary Protraction in Cleft Lip and Palate Children: A Systematic Review and Meta-Analysis. J Craniofac Surg. 2023 May;34:875–80.</span>"

        +
        
        "<br>Recomendaciones de uso: Se recomienda iniciar la tracción intermaxilar con fuerzas ligeras, apro-ximadamente de 150 gramos por lado, incrementándose progresivamente hasta alcanzar entre 200 y 250 gramos por lado, según la tolerancia del paciente y la respuesta clínica observada. Se recomienda que los elásticos sean utilizados de forma continua, idealmente durante las 24 horas del día, retirándose únicamente para la higiene oral y el recambio de los mismos. Para mantener una magnitud de fuerza adecuada, los pacientes deben ser instruidos para reemplazar los elásticos al menos una vez al día o según las indicaciones del fabricante y del protocolo clínico utilizado. La duración del tratamiento debe individualizarse de acuerdo con la severidad de la discrepancia esquelética, la respuesta al tratamiento, el patrón de crecimiento craneofacial y el grado de cooperación del paciente. En la mayoría de los protocolos, la fase activa de protracción suele mantenerse durante aproximadamente 12 a 18 meses. La protracción maxilar mediante miniplacas y elásticos intermaxilares suele estar mejor documentada en pacientes cercanos al final de la dentición mixta o en dentición permanente temprana, cuando existe suficiente soporte óseo para la colocación de las miniplacas."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Jahanbin A, Shafaee H, Pahlavan H, Bardideh E, Entezari M. Efficacy of Different Methods of Bone-Anchored Maxillary Protraction in Cleft Lip and Palate Children: A Systematic Review and Meta-Analysis. J Craniofac Surg. 2023 May;34:875–80.</span>"
        

        ,

        imagen: "./image/LPH3_5.png",
        
        opciones: [

          {
            texto: "Mini implantes con resortes intraorales",

            siguiente: "miniimplantes"

          },

          {
            texto: "Mascara facial asistida por miniplacas",

            siguiente: "mascara"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "mini2",
          }

        ]

      },

      miniimplantes: {

        tipo: "accion",

        texto: 
        
        "<Strong>Mini implantes con resortes intraorales</Strong>"
        
        +

        "<br><br>La protracción maxilar asistida por resortes intraorales de níquel-titanio (NiTi) con anclaje esquelético mediante mini implantes utiliza resortes helicoidales de aproximadamente 0,036 pulgadas que generan fuerzas continuas entre 300 y 500 gramos por lado. Los tiempos de tratamiento reportados oscilan entre 5 y 8 meses."
        
        +
        
        "<br>Este protocolo suele combinarse con expansión maxilar previa mediante expansores tipo bisagra. Los estudios reportan un avance maxilar promedio en el punto A de 2,9 ± 1,9 mm, superior al observado con expansión maxilar rápida convencional, que alcanza aproximadamente 0,9 ± 1,1 mm. Estos resultados sugieren que la protracción maxilar asistida por mini implantes puede constituir una alternativa efectiva para incrementar los efectos ortopédicos sobre el maxilar en pacientes con LPHNS."

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"

        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906.</span>"

        +

        "<br>Recomendación clínica: Cuando las condiciones anatómicas permitan una adecuada inserción y estabilidad de los mini implantes, se recomienda la utilización de resortes helicoidales de níquel-titanio capaces de generar fuerzas continuas de aproximadamente 300 a 500 gramos por lado. Este protocolo puede combinarse con expansión maxilar previa, especialmente mediante expansores tipo bisagra, con el objetivo de favorecer la desarticulación de las suturas circunmaxilares y potenciar la respuesta ortopédica."

        +
        
        "<br>Se recomienda realizar controles periódicos para evaluar la estabilidad de los mini implantes, la integridad de los tejidos periimplantarios y la respuesta clínica al tratamiento. La duración de la fase activa suele oscilar entre 5 y 8 meses, aunque deberá individualizarse según la severidad de la deficiencia maxilar, la respuesta obtenida y el patrón de crecimiento del paciente."

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"

        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906.</span>"

        ,

        imagen: "./image/LPH3_6.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver miniplacas con elastico",
            siguiente: "mini",
          },{
            texto: "Volver pico de crecimiento",
            siguiente: "picocrecimiento2",
          }

        ]

      },

      mascara: {

        tipo: "accion",

        texto: 
        
        "<Strong>Mascara  facial asistida por miniplacas</Strong>"
        
        +

        "<br><br>El uso de Máscara facial asistida por miniplacas (FM-MP), produjo un desplazamiento anterior significativo del punto A y aumentos de 2,14° y 1,76° en los ángulos SNA y ANB, respectivamente . En cuanto a los efectos dentarios, la FM-MP presentó una proinclinación de los incisivos superiores considerablemente menor que la observada en los sistemas de anclaje dental, con rangos reportados entre 1,8° y 2,8°. El overjet aumentó en promedio 4,33 mm (IC 95 %: 2,93–5,73), el Wits aumentó en promedio 3.51 mm (IC 95 %: 1.44-5.58) reflejando una corrección efectiva de la discrepancia sagital. El ángulo SNB no mostró cambios significativos con un aumento de 0.35°(p=0.66), lo que sugiere un efecto principalmente maxilar. Estos hallazgos sugieren que la FM-MP permite obtener efectos esqueléticos significativos con menor rotación mandibular en sentido horario y menor compen-sación dentaria en comparación con la FM asociada a ERM convencional."
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Jahanbin A, Shafaee H, Pahlavan H, Bardideh E, Entezari M. Efficacy of Different Methods of Bone-Anchored Maxillary Protraction in Cleft Lip and Palate Children: A Systematic Review and Meta-Analysis. J Craniofac Surg. 2023 May;34:875–80.</span>"

        +

        "<br>En comparación con pacientes no tratados, la protracción maxilar con anclaje óseo (BAMP) produjo incrementos significativos, en el ángulo SNA (1,76°), el ángulo ANB (2,08°) y la valoración de Wits (2,17 mm). A diferencia de los sistemas de anclaje dentario, la BAMP no mostró cambios significativos en la inclinación de los incisivos U1-PP (-1.51°, p=0.14), IMPA (-0.17°, p=0.91), reduciendo los efectos secundarios dentarios no deseados"

        +

        "<br>Además, se observó una corrección del overjet de aproximadamente 2,03 mm. No se identificaron cambios significativos en el ángulo SNB (-0.64°, p=0.12), el ángulo mandibular (-1.10°, p=0.09), ni en la sobremordida vertical (-0.45 mm, p=0.39), lo que indica una menor tendencia a inducir rotación mandibular hacia abajo y atrás."
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<span class='cita-biblio'>Gandhi V, Fattal A, Genova G, Yadav S, Janakiraman N. Comparative Analysis of Bone vs. Tooth Anchored Maxillary Protraction in Cleft Lip and Palate Patients-A Systematic Review and Meta-Analysis. Orthod Craniofac Res. 2025 Sep;</span>"
        
        +

        "<br>La FM-MP permite obtener una corrección esquelética eficiente de la discrepancia maxilomandibu-lar a corto plazo, esto debido a los cambios reportados en los ángulos SNA con un aumento de (4.55°), ANB con un aumento de (3.91°) y, un avance hacia adelante del punto A (3.83 mm), cambio en Wits (3.71 mm), con menor proinclinación de los incisivos superiores U1-NA (0.55°)(P= 0.59), menor extrusión molar (0.76 mm) y menor rotación horaria del plano mandibular (0.87°) (p= .29). Asimismo, se ha observado que los efectos esqueléticos medibles con BAMP son más favorables en pacientes con fisura unilateral que en aquellos con fisura bilateral"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Dutta S, Batra P, Raghavan S, Sharma K, Talwar A, Arora A, et al. Comparative assessment of facemask therapy with and without skeletal anchorage in growing Class III patients with unilateral cleft lip and palate (UCLP): A single-center, prospective randomized clinical trial. Spec Care Dent. 2024 Mar;44:491–501.</span>"
        
        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906. </span>"
        
        +

        "<br>Recomendaciones de uso: Los protocolos de protracción con anclaje óseo suelen indicarse en den-tición mixta tardía o permanente temprana, cuando existe suficiente desarrollo dentoalveolar para la colocación y posterior retiro de miniplacas bajo anestesia local."
        
        +

        "<span class='cita-biblio'>Jahanbin A, Shafaee H, Pahlavan H, Bardideh E, Entezari M. Efficacy of Different Methods of Bone-Anchored Maxillary Protraction in Cleft Lip and Palate Children: A Systematic Review and Meta-Analysis. J Craniofac Surg. 2023 May;34:875–80.</span>"

        +
        
        "Se recomienda esperar aproxima-damente 2 a 3 semanas después de la colocación de las miniplacas antes de iniciar la aplicación de fuerzas ortopédicas, con el fin de favorecer la cicatrización y estabilización de los tejidos."
        
        +

        "<br>La protracción maxilar puede realizarse mediante fuerzas entre 450 y 500 gramos por lado, dirigi-das aproximadamente entre 20° y 30° por debajo del plano oclusal. Se recomienda un tiempo de uso diario de 12 a 14 horas para favorecer una respuesta ortopédica adecuada. La duración del tratamien-to debe individualizarse según la severidad de la deficiencia maxilar, la respuesta clínica observada, la cooperación del paciente y el patrón de crecimiento craneofacial. La terapia debe mantenerse hasta alcanzar una corrección o ligera sobrecorrección de la discrepancia sagital, con reevaluaciones perió-dicas para determinar la necesidad de continuar, modificar o suspender el tratamiento."
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906. </span>"
        
        +

        "<span class='cita-biblio'>Gandhi V, Fattal A, Genova G, Yadav S, Janakiraman N. Comparative Analysis of Bone vs. Tooth Anchored Maxillary Protraction in Cleft Lip and Palate Patients-A Systematic Review and Meta-Analysis. Orthod Craniofac Res. 2025 Sep; </span>"
        
        +

        "<span class='cita-biblio'>Jahanbin A, Shafaee H, Pahlavan H, Bardideh E, Entezari M. Efficacy of Different Methods of Bone-Anchored Maxillary Protraction in Cleft Lip and Palate Children: A Systematic Review and Meta-Analysis. J Craniofac Surg. 2023 May;34:875–80. </span>"
        
        +

        "<br>• Fuerza de tracción entre 450 y 500 gramos por lado"

        +

        "<br>• Angulación de elásticos entre 20° y 30° por debajo del plano oclusal"

        +

        "<br>• Uso entre 12 y 14 horas al día"

        ,

        imagen: "./image/LPH3_4.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "mini",
          }

        ]

      },

      reevaluacion: {

        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluación de tratamiento</Strong>"

        ,

        imagen: "./image/LPH4_1.png",

        siguiente: "correcion",

        botones: [

          {
            texto: "Volver Petit",
            siguiente: "petit",
          },
          {
            texto: "Volver Mascara asistida",
            siguiente: "mascara",
          }

        ]

      },
      
      correcion: {

        tipo: "decision",

        texto: "¿Presenta corrección clínica de la maloclusión clase III?",

        descripcion: 

        "<br>La corrección clínica de la maloclusión Clase III debe evaluarse mediante criterios esqueléticos, den-tales y funcionales. Entre los signos clínicos favorables se incluyen la corrección de la mordida cruzada anterior, la obtención de un resalte horizontal positivo, la mejora de la relación sagital maxilomandibular y la normalización de las relaciones dentarias (clase I molar y canina bilateral)."
        
        +

        "<br>Debe considerarse que algunos pacientes pueden presentar compensaciones dentoalveolares que en-mascaran una discrepancia esquelética residual; por lo tanto, la valoración clínica debe complementarse con el análisis cefalométrico correspondiente."

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        ,

        imagen: "./image/LPH4_2.png",

        si: "correcion3",

        no: "reevaluar",

        botones: [

          {
            texto: "Volver",
            siguiente: "reevaluacion",
          }

        ]

      },

      reevaluar: {

        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluar adherencia</Strong>"

        ,

        imagen: "./image/LPH4_3.png",

        siguiente: "rprotraccion",

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion",
          }
        ]

      },

      rprotraccion: {

        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluar  protocolo de protracción</Strong>"

        ,

        imagen: "./image/LPH4_5.png",

        siguiente: "aparatologia",

        botones: [

          {
            texto: "Volver",
            siguiente: "reevaluar",
          }
        ]

      },

      aparatologia: {

        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluar cambio de aparatología</Strong>"

        +

        "<br>El tratamiento con FM y anclaje dental suele indicarse durante la dentición mixta temprana debido a la limitada disponibilidad de sitios anatómicos adecuados para el anclaje óseo. Las alternativas de anclaje esquelético generalmente requieren la erupción de determinadas unidades dentarias o un desarrollo óseo suficiente para la colocación segura de miniplacas o dispositivos de anclaje temporal."

        +
        
        "<br>En pacientes que inician tratamiento en dentición decidua o mixta temprana con FM de anclaje dental, se puede considerar la transición hacia protocolos con anclaje óseo durante la dentición mixta tardía o permanente temprana cuando exista persistencia de la discrepancia esquelética o se considere necesario optimizar los efectos ortopédicos del tratamiento."

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Jahanbin A, Shafaee H, Pahlavan H, Bardideh E, Entezari M. Efficacy of Different Methods of Bone-Anchored Maxillary Protraction in Cleft Lip and Palate Children: A Systematic Review and Meta-Analysis. J Craniofac Surg. 2023 May;34:875–80. </span>"

        ,

        imagen: "./image/LPH4_7.png",

        siguiente: "correcion2",

        botones: [

          {
            texto: "Volver",
            siguiente: "rprotraccion",
          }
        ]

      },

      correcion2: {

        tipo: "decision",

        texto: "¿Presenta corrección clínica de la maloclusión clase III?",

        descripcion: 

        "<br>La corrección clínica de la maloclusión Clase III debe evaluarse mediante criterios esqueléticos, den-tales y funcionales. Entre los signos clínicos favorables se incluyen la corrección de la mordida cruzada anterior, la obtención de un resalte horizontal positivo, la mejora de la relación sagital maxilomandibular y la normalización de las relaciones dentarias (clase I molar y canina bilateral)."
        
        +

        "<br>Debe considerarse que algunos pacientes pueden presentar compensaciones dentoalveolares que en-mascaran una discrepancia esquelética residual; por lo tanto, la valoración clínica debe complementarse con el análisis cefalométrico correspondiente."

        +

        "<span class='cita-biblio'>Zere E, Chaudhari PK, Sharan J, Dhingra K, Tiwari N. Developing Class III malocclusions: challenges and solutions. Clin Cosmet Investig Dent. 2018;10:99–116.</span>"

        ,

        imagen: "./image/LPH4_9.png",

        si: "correcion3",

        no: "quirurgico",

        botones: [

          {
            texto: "Volver",
            siguiente: "aparatologia",
          }

        ]

      },

      quirurgico: {

        tipo: "accion",

        texto: 
        
        "<Strong>Evaluación para manejo quirúrgico</Strong>"

        +

        "<br>A pesar de las mejoras dento esqueléticas obtenidas mediante los protocolos de protracción maxilar con anclaje dental o esquelético, una proporción de pacientes con LPHNS continuará presentando discrepancias esqueléticas significativas al finalizar el crecimiento."

        +
        
        "<br>Por lo tanto, en aquellos pacientes que persistan con una deficiencia maxilar severa, una relación maxilomandibular desfavorable o alteraciones funcionales y estéticas importantes, debe considerarse la remisión para valoración conjunta con cirugía maxilofacial y la posible planificación de cirugía ortognática una vez completado el crecimiento craneofacial."

        +

        "<br>La literatura reporta que aproximadamente el 40 % de los pacientes tratados puede requerir cirugía ortognática al finalizar el crecimiento, aunque esta proporción varía según la severidad de la maloclusión y las características de la muestra estudiada. "

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906.</span>"

        ,

        imagen: "./image/LPH4_10.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion2",
          }
        ]

      },

      correcion3: {

        tipo: "accion",

        texto: 
        
        "<Strong>Realizar sobre corrección</Strong>"

        +

        "<br>Diversos estudios sugieren que parte de las ganancias obtenidas durante la protracción maxilar pueden disminuir con el crecimiento posterior, especialmente debido a la persistencia del crecimiento mandibular. Por esta razón, algunos autores recomiendan alcanzar una sobrecorrección clínica moderada de la relación sagital durante la fase activa del tratamiento."
        
        +

        "<br>La magnitud de la sobrecorrección debe individualizarse según la edad del paciente, el potencial de crecimiento remanente, la severidad inicial de la discrepancia esquelética y la respuesta observada durante el tratamiento"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Segal DA, Grayson BH, Shetye PR. Skeletal and dentoalveolar changes following the use of an occlusally bonded maxillary protraction headgear appliance in patients born with cleft lip and palate. Semin Orthod. 2017 Sep;23:279–94.</span>"

        ,

        imagen: "./image/LPH4_4.png",

        siguiente: "retencion",

        botones: [

          {
            texto: "Volver corrección arriba",
            siguiente: "correcion",
          },
          {
            texto: "Volver corrección abajo",
            siguiente: "correcion2",
          }

        ]

      },

      retencion:{

        tipo: "accion",

        texto: 
        
        "<Strong>Etapa de retención y seguimiento</Strong>"

        ,

        imagen: "./image/LPH4_6.png",

        siguiente: "remision",

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion3",
          }

        ]

      },

      remision:{

        tipo: "accion",

        texto: 
        
        "<Strong>Remisión a tratamiento ortodóntico</Strong>"

        ,

        imagen: "./image/LPH4_8.png",

        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "retencion",
          }

        ]

      },

    }
  },

  apinamiento_mandibular_anterior: {
    
    titulo: "",

    inicio: "presentacion",

    nodos: {

      presentacion: {

        tipo: "decision_opciones",

        texto: "Apiñamiento mandibular anterior",
        
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

            siguiente: "modelos"

          }

        ]

      },

      definicion: {

        tipo: "accion",

        texto: "<Strong>Apiñamiento Dental</Strong>"
        
        +

        "<br><br><img src='./image/Im48.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br>El apiñamiento dental es un tipo de maloclusión caracterizada por la discrepancia entre el tamaño de los dientes y el espacio disponible en los arcos dentales, lo cual resulta en la alineación inadecuada de los dientes."

        +

        "<span class='cita-biblio'>Proffit WR, Fields HW, Sarver DM. Contemporary Orthodontics. 6th ed. Elsevier; 2019. ISBN: 9780323543873</span>"

        +

        "<span class='cita-biblio'>Graber TM, Vanarsdall RL VK. Orthodontics: Current Principles & Techniques. Vol. 4th ed, Elsevier / Mosby. 2005.</span>"

        +

        "<br>En cuanto al apiñamiento mandibular anterior, este se refiere al desplazamiento de dientes anteriores inferiores (incisivos y caninos), debido a la falta de espacio en la arcada dental inferior."

        +

        "<br><br><Strong>• Tipos de Apiñamiento Dental</Strong>"

        +

        "<br><br><Strong>◦ Apiñamiento leve (hasta 3mm):</Strong> Se observa en la dentición mixta temprana cuando los incisivos permanentes erupcionan dentro de parámetros normales. En muchos casos, este apiñamiento se resuelve espontáneamente entre los 7 y 9 años, gracias al crecimiento natural de los arcos, el aumento en la distancia intercanina y la inclinación de los incisivos en su proceso eruptivo."

        +

        "<span class='cita-biblio'>Vanderlinden FPGM. Development of the dentition. Quintessence Publishing, editor. Chicago, Illinois: Quintessence Publishing; 1983.</span>"

        +

        "<span class='cita-biblio'>Graber TM, Vanarsdall RL VK. Orthodontics: Current Principles & Techniques. Vol. 4th ed, Elsevier / Mosby. 2005.</span>"

        +

        "<br><br><Strong>◦ Apiñamiento moderado (3-5 mm):</Strong> Si la falta de espacio es entre 3-5 mm, pueden presentarse alteraciones en la posición de los incisivos, como rotaciones o tendencia a mordida cruzada. En estos casos, no siempre se resuelve el apiñamiento de forma espontánea, y se puede optar por técnicas conservadoras como el desgaste mesial de los caninos temporales para generar espacio adicional y favorecer una alineación más armónica de los incisivos. Si el apiñamiento persiste, el procedimiento puede extenderse a los segundos molares temporales para continuar guiando la erupción de los dientes permanentes. Además, en casos seleccionados, se pueden emplear aparatos removibles para optimizar la alineación sin necesidad de tratamientos más invasivos."

        +

        "<span class='cita-biblio'>Vanderlinden FPGM. Development of the dentition. Quintessence Publishing, editor. Chicago, Illinois: Quintessence Publishing; 1983.</span>"

        +

        "<br><br><Strong>◦ Apiñamiento severo (más de 5 mm):</Strong> En estos casos, la discrepancia de espacio es significativa, por lo cual suelen observarse inclinaciones o versiones marcadas y rotaciones dentarias. Para su diagnóstico preciso, se recomienda un análisis detallado mediante modelos de estudio, radiografías intraorales y cefalometría. Dependiendo del grado de discrepancia, puede ser necesario considerar medidas interceptivas como la extracción seriada, con el fin de redirigir la erupción dentaria y evitar la necesidad de tratamientos más complejos en la dentición permanente."

        +

        "<span class='cita-biblio'>Vanderlinden FPGM. Development of the dentition. Quintessence Publishing, editor. Chicago, Illinois: Quintessence Publishing; 1983.</span>"

        +

        "<span class='cita-biblio'>Moss JP. Introduction to Orthodontics, 2nd edition (1995). Birgit Thilander and Olli Ronning. Forlagshuset Gothia, Stockholm. Price: SEK 550,00. ISBN: 91-7205-004-004. The European Journal of Orthodontics. 1996;18(2).</span>"

        +

        "<br><br><Strong>• Apiñamiento mandibular anterior:</Strong>Es una condición que resulta de una compleja interacción de factores genéticos, de desarrollo, funcionales y ambientales. Por ello es importante que el clínico tenga una comprensión detallada de la etiología del apiñamiento y así lograr un diagnóstico adecuado y un tratamiento ortodóntico efectivo."

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

        texto: "<Strong>Materiales para apiñamiento mandibular anterior</Strong>"
        
        +

        "<br><br><img src='./image/materialesD.png' class='img-tabla-gigante-real'>"
        
        ,

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },

      modelos: {

        tipo: "accion",

        texto: "Toma de modelos y radiografías diagnósticas (Panorámica y de perfil)"
        
        +

        "<br><br><img src='./image/Im49.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        ,

        imagen: "./image/Apiñamiento1_1.png",

        siguiente: "evaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "presentacion",
          }

        ]

      },
    
      evaluacion: {

        tipo: "decision_opciones",

        texto: "Evaluación de severidad de apiñamiento",

        descripcion: 
        
        "<br><br>La clasificación del apiñamiento mandibular anterior suele establecerse a partir de la discrepancia medida en milímetros, y aunque los rangos pueden variar ligeramente entre autores, la literatura ofrece parámetros comunes que permiten unificar criterios. Con ello, se considera apiñamiento leve cuando la discrepancia es menor a 3 mm, moderado cuando se encuentra entre 3 y 5 mm, y severo cuando supera los 5 mm."

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Estos valores se adoptan porque coinciden con los rangos reportados en estudios clave: <span class=\"badge-ne-alta\">Owais et al. (2011)</span> describieron el apiñamiento leve como menor a 2 mm."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42.</span>"

        +
        
        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE) Davidovitch et al. (1997)</span> incluyeron discrepancias entre 3 y 8 mm dentro de categorías leves a moderadas;"

        +

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:52–8.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE) y Kau et al. (2004)</span> identificaron rangos de 4 a 9 mm al clasificar distintos grados de severidad."

        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: a randomized controlled trial. J Orthod. 2004 Jun;31:107–14.</span>"

        +

        "Por su parte, <span class=\"badge-ne-alta\">(NE: Alta, GRADE) Chen et al. (2019)</span> registraron reducciones promedio cercanas a 5 mm, lo que sitúa este valor como un límite clínicamente relevante;"

        +
        
        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "y <span class=\"badge-ne-alta\">(NE: Alta, GRADE) Oliveira dos Santos et al. (2023)</span> Oliveira dos Santos observaron mejorías espontáneas de hasta 4,62 mm en apiñamientos leves a moderado"

        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. Springer Science and Business Media Deutschland GmbH; 2023.</span>"

        +

        "Así mismo, <span class=\"badge-ne-alta\">(NE: Alta, GRADE)  Khalaf et al. (2021)</span> también utilizaron este mismo intervalo para describir los grados de apiñamiento leve y moderado."

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Vol. 34, Saudi Dental Journal. 2022.</span>"
        
        +

        "<br>Con ello, los rangos adoptados (< 3 mm, 3–5 mm y > 5 mm) se fundamentan en patrones consistentes dentro de la literatura y permiten describir la severidad del apiñamiento con criterios claros y comparables entre estudios."

        ,

        imagen: "./image/Apiñamiento1_2.png",
        
        opciones: [

          {
            texto: "Leve o Moderado",

            siguiente: "levemoderado"

          },

          {
            texto: "Severo",

            siguiente: "severo"

          }

        ],

        botones: [

          {
            texto: "Volver",
            siguiente: "modelos"
          }

        ]

      },

      severo: {
        
        tipo: "accion",

        texto: 
        
        "<Strong>Severo</Strong> >5mm",

        imagen: "./image/Apiñamiento1_3.png",

        siguiente: "postgrado",

        botones: [

          {
            texto: "Volver",
            siguiente: "evaluacion",
          }

        ]

      },

      postgrado: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/Apiñamiento1_5.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "severo"
          }

        ]

      },

      levemoderado: {
        
        tipo: "accion",

        texto: 
        
        "<Strong>• Leve:</Strong> menor de 3mm"

        +

        "<br><Strong>• Moderado:</Strong> 3mm - 5mm"

        ,

        imagen: "./image/Apiñamiento1_4.png",

        siguiente: "asociacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "evaluacion",
          }

        ]

      },

      asociacion: {

        tipo: "decision",

        texto: "¿El apiñamiento se asocia a problemas de longitud o anchura del arco?",

        descripcion: 
        
        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> El apiñamiento mandibular anterior se relaciona principalmente con una discrepancia entre el tamaño de los dientes y las dimensiones del arco, afectando tanto la longitud como la anchura. En el plano longitudinal, la disminución del perímetro de arco suele estar asociada a la migración mesial de los primeros molares permanentes hacia el espacio remanente que dejan los molares temporales tras su exfoliación o pérdida prematura, lo cual reduce el espacio disponible para la alineación incisiva."
        
        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42. </span>"
        
        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Rebellato J, Lindauer SJ, Rubenstein LK, Isaacson RJ, Davidovitch M, Vroom K. Lower arch perimeter preservation using the lingual arch. Am J Orthod Dentofacial Orthop. 1997;112(4).</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5.</span>"

        +
        
        "<br>Los estudios longitudinales describen pérdidas naturales de entre 0,44 y 2–4 mm por cuadrante, relacionadas con movimientos mesiales progresivos y con cierta inclinación lingual de los incisivos durante la transición hacia la dentición permanente."
        
        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. 2023.</span>"
        
        +

        "<span class='cita-biblio'>Arslan SG, Kama JD, Şahin S, Hamamci O. Longitudinal changes in dental arches from mixed to permanent dentition in a Turkish population. American Journal of Orthodontics and Dentofacial Orthopedics. 2007;132(5).</span>"

        +

        "<span class='cita-biblio'>Ciftci V, Uzel A, Dogan MC. Evaluation of skeletal and dental effects of lower lingual arches. Journal of Clinical Pediatric Dentistry. 2018;42(6).</span>"

        +

        "<span class='cita-biblio'>Sinclair PM, Little RM. Maturation of untreated normal occlusions. Am J Orthod. 1983;83(2).<<</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> En cuanto a la anchura del arco, cuando esta se encuentra reducida, especialmente a nivel intercanino, se limita el espacio transversal necesario para la erupción de caninos y premolares, favoreciendo un colapso lateral que se traduce en mayor irregularidad de los incisivos. La literatura muestra que, sin intervención, suele presentarse una disminución natural de la anchura intercanina, mientras que diferentes estudios reportan incrementos entre 0,72 y 3,9 mm en anchuras intercanina, interpremolar e intermolar cuando se aplican intervenciones interceptivas orientadas a expandir o mantener el arco."

        +

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:52–8.</span>"

        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: a randomized controlled trial. J Orthod. 2004 Jun;31:107–14.</span>"

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. Am J Orthod Dentofac Orthop. 2010;138:262.e1-262.e11.</span>"

        +

        "<span class='cita-biblio'>Hagberg C. The alignment of permanent mandibular incisors in children. A longitudinal prospective study. Eur J Orthod. 1994 Apr;16:121–9.</span>"

        +

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthodontist. 2016;86(5).</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Así, tanto la reducción de la longitud del arco como la insuficiente anchura transversal actúan conjuntamente en el desarrollo y persistencia del apiñamiento mandibular anterior, lo que evidencia la importancia de comprender cómo cambian estas dimensiones durante la dentición mixta y por qué son determinantes en la aparición y severidad del apiñamiento."

        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021.</span>"

        +

        "<span class='cita-biblio'>Sampson WJ, Richards LC. Prediction of mandibular incisor and canine crowding changes in the mixed dentition. Am J Orthod. 1985;88:47–63.</span>"

        +

        "<span class='cita-biblio'>Nevant CT, Buschang PH, Alexander RG, Steffen JM. Lip bumper therapy for gaining arch length. American Journal of Orthodontics and Dentofacial Orthopedics. 1991;100(4).</span>"

        ,

        imagen: "./image/Apiñamiento1_6.png",

        si: "activo",

        no: "leve",

        botones: [

          {
            texto: "Volver",
            siguiente: "levemoderado",
          }

        ]

      },

      leve: {

        tipo: "decision",

        texto: "¿El apiñamiento mandibular anterior es leve?",

        imagen: "./image/Apiñamiento2b_1.png",

        si: "espaciosS",

        no: "espaciosM",

        botones: [

          {
            texto: "Volver",
            siguiente: "asociacion",
          }

        ]

      },

      espaciosS:{

        tipo: "accion",

        texto: 
        
        "<Strong>Supervisión de espacios</Strong>"
        
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Una de las modalidades terapéuticas más conservadoras para manejar el apiñamiento mandibular anterior en dentición mixta es la supervisión de espacios, entendida como un seguimiento clínico periódico sin el uso de aparatología activa. Con ello, el objetivo es acompañar el proceso natural de recambio dentario y permitir que los cambios fisiológicos propios de esta etapa favorezcan una mejoría espontánea de la alineación incisiva. Esta conducta expectante ha sido ampliamente documentada en estudios longitudinales y revisiones sistemáticas, los cuales muestran que, durante la transición de dentición mixta a permanente, se presenta una reducción espontánea del apiñamiento con valores que pueden oscilar entre 0,17 y 4,62 mm cerca de 1,27 mm en grupos control sin intervenciones y hasta 2-3 mm en poblaciones no tratadas<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"

        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. Springer Science and Business Media Deutschland GmbH; 2023.</span>"

        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: a randomized controlled trial. J Orthod. 2004 Jun;31:107–14.</span>"

        +

        "<span class='cita-biblio'>Arslan SG, Kama JD, Şahin S, Hamamci O. Longitudinal changes in dental arches from mixed to permanent dentition in a Turkish population. Am J Orthod Dentofac Orthop. 2007;132:576.e15-576.e21. </span>"

        +

        "<span class='cita-biblio'>Sinclair PM, Little RM. Maturation of untreated normal occlusions. Am J Orthod. 1983;83:114–23.</span>"

        +

        "<span class='cita-biblio'>Hagberg C. The alignment of permanent mandibular incisors in children. A longitudinal prospective study. Eur J Orthod. 1994 Apr;16:121–9.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Estos cambios favorables se relacionan principalmente con el aprovechamiento natural del espacio de Leeway, el incremento fisiológico de la anchura intercanina durante la erupción de los caninos permanentes, ciertos movimientos espontáneos de acomodación incisiva y el crecimiento transversal propio de la arcada."

        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. Springer Science and Business Media Deutschland GmbH; 2023.</span>"

        +

        "<span class='cita-biblio'>Arslan SG, Kama JD, Şahin S, Hamamci O. Longitudinal changes in dental arches from mixed to permanent dentition in a Turkish population. Am J Orthod Dentofac Orthop. 2007;132:576.e15-576.e21. </span>"

        +

        "<span class='cita-biblio'>Sinclair PM, Little RM. Maturation of untreated normal occlusions. Am J Orthod. 1983;83:114–23.</span>"

        +

        "<span class='cita-biblio'>Hagberg C. The alignment of permanent mandibular incisors in children. A longitudinal prospective study. Eur J Orthod. 1994 Apr;16:121–9.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> La evidencia sugiere que la supervisión de espacios resulta especialmente útil en apiñamientos leves o moderados limítrofes (≤ 4–5 mm), donde la autocorrección es más predecible y ocurre, sobre todo, entre la erupción de los incisivos laterales y la llegada de los caninos permanentes. Esta modalidad permite evitar intervenciones innecesarias en pacientes que probablemente presentan una mejora espontánea, al tiempo que asegura un seguimiento cercano para detectar oportunamente los casos que sí requerirán manejo activo."

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22. </span>"

        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. Springer Science and Business Media Deutschland GmbH; 2023.</span>"

        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021.</span>"
        
        ,

        imagen: "./image/Apiñamiento2b_2.png",

        siguiente: "observacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "leve",
          }

        ]

      },

      observacion:{

        tipo: "accion",

        texto: "<Strong>Observación o control clínico</Strong>",

        imagen: "./image/Apiñamiento2b_4.png",

        siguiente: "tiempo",

        botones: [

          {
            texto: "Volver",
            siguiente: "espaciosS",
          }

        ]

      },

      tiempo:{

        tipo: "accion",

        texto: "<Strong>Mantener durante 12-18 meses</Strong>",

        imagen: "./image/Apiñamiento2b_6.png",

        siguiente: "controles",

        botones: [

          {
            texto: "Volver",
            siguiente: "observacion",
          }

        ]

      },

      controles:{

        tipo: "accion",

        texto: 
        
        "<Strong>Controles clínicos:</Strong>"

        +
        
        "<br>- 9-10 años: Intensificar cada 6  meses (precaninos)."

        +

        "<br>- 12 años o más: Control una vez al año."
        
        ,

        imagen: "./image/Apiñamiento2b_8.png",

        siguiente: "cambio",

        botones: [

          {
            texto: "Volver",
            siguiente: "tiempo",
          }

        ]

      },

      cambio:{

        tipo: "accion",

        texto: 
        
        "• Cambio en cantidad de apiñamiento +1.94 mm."

        +

        "<br>• Disminución de longitud de arco: -2.18 mm."

        +

        "<br>• Aumento leve  de anchura intercanina: +0.4 mm."
        
        ,

        imagen: "./image/Apiñamiento2b_11.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "controles",
          }

        ]

      },

      espaciosM:{

        tipo: "accion",

        texto: 
        
        "<Strong>Mantenedor de espacios</Strong>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> El mantenimiento de espacios en dentición mixta se entiende como una modalidad terapéutica cuyo propósito es conservar la longitud y el perímetro del arco, evitando la pérdida de espacio que ocurre de manera habitual tras la exfoliación o la pérdida prematura de los segundos molares temporales. Esta pérdida suele favorecer la migración mesial de los primeros molares permanentes, reduciendo así el espacio disponible para la alineación de los incisivos. El aparato más estudiado y utilizado con esta finalidad es el arco lingual inferior pasivo, elaborado en alambre de acero inoxidable (entre 0,9 y 1,25 mm), cementado en los primeros molares permanentes y ajustado de manera que permanezca completamente pasivo, apoyado a nivel cingular de los incisivos inferiores."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22. </span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5. </span>"

        +

        "<span class='cita-biblio'>Ciftci V, Uzel A, Dogan MC. Evaluation of skeletal and dental effects of lower lingual arches. J Clin Pediatr Dent. 2018;42:469–74.</span>"

        +

        "<span class='cita-biblio'>Rebellato J, Lindauer SJ, Rubenstein LK, Isaacson RJ, Davidovitch M, Vroom K. Lower arch perimeter preservation using the lingual arch. Am J Orthod Dentofacial Orthop. 1997;112(4).</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Su función principal es impedir el movimiento mesial de los molares permanentes, preservando el espacio de Leeway para que pueda aprovecharse durante el recambio dentario y así contribuir a la resolución del apiñamiento incisivo anterior. En términos clínicos, los estudios reportan incrementos modestos pero significativos en las anchuras intercanina, interpremolar e intermolar (entre 0,72 y 2,41 mm) y una resolución promedio del apiñamiento mandibular que oscila entre 4 y 5,10 mm, con tasas de éxito cercanas al 60–68 % cuando se utiliza como única intervención interceptiva"

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42. </span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5.</span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"
      
        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Si bien se ha descrito una ligera proclividad de los incisivos inferiores durante su uso, el mantenimiento de espacios mediante arco lingual pasivo continúa considerándose una estrategia conservadora, de bajo riesgo y utilidad demostrada. Está especialmente indicado en apiñamientos leves a moderados, en aquellos casos en los que el espacio de Leeway disponible permite anticipar una alineación adecuada sin necesidad de recurrir a extracciones definitivas."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42.</span>"

        +

        "<span class='cita-biblio'>Rebellato J, Lindauer SJ, Rubenstein LK, Isaacson RJ, Davidovitch M, Vroom K. Lower arch perimeter preservation using the lingual arch. Am J Orthod Dentofacial Orthop. 1997;112:449–56.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"
        
        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021.</span>"
        
        ,

        imagen: "./image/Apiñamiento2b_3.png",

        siguiente: "arco",

        botones: [

          {
            texto: "Volver",
            siguiente: "leve",
          }

        ]

      },

      arco:{

        tipo: "accion",

        texto: 
        
        "<Strong>Arco lingual pasivo</Strong>"
        
        +

        "<br><br><img src='./image/Im50.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> El arco lingual inferior pasivo se considera el principal aparato de mantenimiento de espacios en el manejo interceptivo del apiñamiento mandibular anterior durante la dentición mixta. Se define como un dispositivo fijo y pasivo, elaborado habitualmente en alambre redondo de acero inoxidable de 0,9 a 1,25 mm, cementado o soldado a bandas en los primeros molares permanentes inferiores y ajustado de manera que permanezca sin activación, apoyado suavemente sobre la superficie lingual de los incisivos inferiores sin ejercer fuerzas directas sobre ellos."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22. </span>"

        +

        "<span class='cita-biblio'>Rebellato J, Lindauer SJ, Rubenstein LK, Isaacson RJ, Davidovitch M, Vroom K. Lower arch perimeter preservation using the lingual arch. Am J Orthod Dentofacial Orthop. 1997;112:449–56.</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5. </span>"

        +

        "<span class='cita-biblio'>Ciftci V, Uzel A, Dogan MC. Evaluation of skeletal and dental effects of lower lingual arches. J Clin Pediatr Dent. 2018;42:469–74.</span>"

        +

        "<br>Su finalidad es impedir la migración mesial de los primeros molares permanentes y preservar la longitud y el perímetro del arco, evitando que se pierda el espacio de Leeway tras la exfoliación o pérdida prematura de los segundos molares temporales. De esta manera, el espacio remanente puede aprovecharse durante la erupción de caninos y premolares permanentes, favoreciendo la corrección fisiológica del apiñamiento incisivo anterior."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22. </span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5. </span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> En cuanto a sus efectos clínicos, la literatura reporta que el arco lingual pasivo logra una resolución promedio del apiñamiento entre 4 y 5,10 mm, con tasas de éxito del 60–68 % en casos leves a moderados.<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Asimismo, produce incrementos modestos pero significativos en la anchura intercanina, interpremolar e intermolar, sin evidencia de efectos negativos sobre el crecimiento mandibular. En conjunto, estos hallazgos respaldan su uso como una intervención interceptiva conservadora y eficaz en la dentición mixta."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"
        
        +

        "<span class='cita-biblio'>Rebellato J, Lindauer SJ, Rubenstein LK, Isaacson RJ, Davidovitch M, Vroom K. Lower arch perimeter preservation using the lingual arch. Am J Orthod Dentofacial Orthop. 1997;112:449–56.</span>"
        
        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5.</span>"

        +

        "<span class='cita-biblio'>Ciftci V, Uzel A, Dogan MC. Evaluation of skeletal and dental effects of lower lingual arches. J Clin Pediatr Dent. 2018;42:469–74.</span>"
        
        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021.</span>"
        
        ,

        imagen: "./image/Apiñamiento2b_5.png",

        siguiente: "alteracion",

        botones: [

          {
            texto: "Volver",
            siguiente: "espaciosM",
          }

        ]

      },

      alteracion: {
        
        tipo: "decision",

        texto: "¿Presenta alteración de secuencia de erupción?",

        descripcion: 
        
        "<br><br>La alteración de la secuencia de erupción dental se entiende, en el contexto del apiñamiento mandibular anterior, como la inversión del orden fisiológico de erupción entre el canino permanente y el primer premolar. En lugar de la secuencia habitual 3-4-5, se observa una erupción 4-3-5, es decir, el canino erupciona antes que el primer premolar. En algunos casos, esta alteración también incluye una erupción marcadamente precoz del canino en relación con el segundo premolar. Este patrón anómalo se reconoce como un factor etiológico que contribuye al desarrollo o agravamiento del apiñamiento incisivo durante la dentición mixta tardía."

        +

        "<br><br>La evidencia disponible respalda esta asociación.<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE) Moshkelgosha et al. (2014)</span> encontraron que los niños con apiñamiento moderado a severo presentaban un avance eruptivo significativamente mayor del canino permanente (65,82 ± 13,00 %) respecto al primer premolar (78,92 ± 10,15 %), mientras que en el grupo sin apiñamiento ambos dientes mostraban porcentajes de erupción prácticamente simultáneos (74,12 % y 75,47 %, respectivamente; p < 0,001). <br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> De forma concordante, <span class=\"badge-ne-alta\">Sampson (1985)</span> y <span class=\"badge-ne-alta\">Kau et al. (2004)</span> describieron que la erupción temprana del canino ocupa de manera anticipada tanto el espacio primate como el espacio destinado al primer premolar, lo que favorece el desplazamiento del segmento anterior y el incremento de la irregularidad incisiva"
        
        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: a randomized controlled trial. J Orthod. 2004 Jun;31:107–14.</span>"

        +

        "<span class='cita-biblio'>Sampson WJ, Richards LC. Prediction of mandibular incisor and canine crowding changes in the mixed dentition. Am J Orthod. 1985;88:47–63.</span>"

        +

        "<span class='cita-biblio'>Golkari A, Moshkelgosha V, Khosravifard N. Tooth eruption sequence and dental crowding: A case-control study. F1000Res. 2014;3.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Además, esta alteración se relaciona con la reducción fisiológica del perímetro de arco y con la pérdida del efecto de “autoalineación” que ofrece la erupción tardía del canino en una secuencia normal.<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> Por ello, la evaluación radiográfica del orden eruptivo canino-primer premolar constituye un predictor clínico útil para identificar pacientes con mayor riesgo de presentar o mantener un apiñamiento mandibular anterior significativo durante la transición hacia la dentición permanente."

        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. Springer Science and Business Media Deutschland GmbH; 2023.</span>"

        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021. </span>"

        +

        "<span class='cita-biblio'>Golkari A, Moshkelgosha V, Khosravifard N. Tooth eruption sequence and dental crowding: A case-control study. F1000Res. 2014;3.</span>"

        +

        "<span class='cita-biblio'>Sampson WJ, Richards LC. Prediction of mandibular incisor and canine crowding changes in the mixed dentition. Am J Orthod. 1985;88:47–63.</span>"

        ,

        imagen: "./image/Apiñamiento2b_7.png",

        si: "guia",

        no: "seguimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "arco",
          }

        ]

      },

      guia: {

        tipo: "accion",

        texto: 
        
        "<Strong>Guía de erupción con extracciones de dientes temporales</Strong>"
        
        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> El aparato de guía de erupción (EGA) se define como un dispositivo removible destinado a orientar la erupción de los dientes permanentes durante la dentición mixta. Actúa mediante planos inclinados y modificaciones de los contactos oclusales, y en algunos modelos incorpora elementos de expansión, lo que permite influir en la posición de incisivos y caninos, así como en las relaciones sagitales y verticales del paciente en crecimiento"

        +

        "<span class='cita-biblio'>Myrlund R, Dubland M, Keski-Nisula K, Kerosuo H. One year treatment effects of the eruption guidance appliance in 7- to 8-year-old children: A randomized clinical trial. Eur J Orthod. 2014 Aug;37:128–34.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Cuando se utiliza un aparato de guía de erupción, resulta indispensable complementarlo con un arco lingual inferior pasivo, ya que el EGA no controla la migración mesial de los molares permanentes ni preserva la longitud del arco. El arco lingual asegura la conservación del espacio de Leeway, evitando la pérdida de perímetro durante la fase activa del tratamiento y permitiendo que el espacio disponible se use de manera eficaz en la alineación de los incisivos inferiores."

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5.</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> El ensayo clínico aleatorizado de <br><span class=\"badge-ne-moderado\">Myrlund et al. (2015)</span> aplicó esta combinación de manera sistemática: todos los pacientes tratados con guía de erupción recibieron también un arco lingual pasivo, justamente para garantizar la preservación del E-space mientras se corregían las relaciones sagitales, el overjet y la mordida profunda."

        +

        "<span class='cita-biblio'>Myrlund R, Dubland M, Keski-Nisula K, Kerosuo H. One year treatment effects of the eruption guidance appliance in 7- to 8-year-old children: A randomized clinical trial. Eur J Orthod. 2014 Aug;37:128–34. </span>"

        +
        
        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> En casos seleccionados, especialmente cuando existe apiñamiento moderado con riesgo de colapso anterior adicional, esta combinación puede reforzarse mediante la extracción seriada o equilibrada de los caninos temporales inferiores, siguiendo los criterios interceptivos descritos en la literatura clásica"

        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: a randomized controlled trial. J Orthod. 2004 Jun;31:107–14.</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> En el estudio de <br><span class=\"badge-ne-moderado\">Myrlund et al. (2015)</span>, esta estrategia tri-modal (guía de erupción, arco lingual pasivo y extracción selectiva de caninos) permitió obtener una reducción significativa del apiñamiento mandibular anterior, además de mejoras marcadas en overjet, overbite y relación molar, con corrección de la Clase II en el 96 % de los casos tratados"

        +

        "<span class='cita-biblio'>Myrlund R, Dubland M, Keski-Nisula K, Kerosuo H. One year treatment effects of the eruption guidance appliance in 7- to 8-year-old children: A randomized clinical trial. Eur J Orthod. 2014 Aug;37:128–34. </span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> La preservación efectiva del espacio de Leeway por parte del arco lingual fue un componente clave para estos resultados."

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5. </span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Aunque la evidencia procede de un único ensayo aleatorizado, la integración de estos tres elementos ofrece una alternativa interceptiva sólida para pacientes jóvenes que presentan simultáneamente apiñamiento mandibular, aumento del overjet y mordida profunda, logrando resultados más completos que los obtenidos con cada modalidad por separado."

        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: a randomized controlled trial. J Orthod. 2004 Jun;31:107–14.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22. </span>"

        +

        "<span class='cita-biblio'>Myrlund R, Dubland M, Keski-Nisula K, Kerosuo H. One year treatment effects of the eruption guidance appliance in 7- to 8-year-old children: A randomized clinical trial. Eur J Orthod. 2014 Aug;37:128–34.</span>"

        ,

        imagen: "./image/Apiñamiento2b_9.png",

        siguiente: "seguimiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "alteracion",
          }

        ]

      },

      seguimiento:{

        tipo: "accion",

        texto: 
        
        "<Strong>Seguimiento y control</Strong>"

        ,

        imagen: "./image/Apiñamiento2b_10.png",

        siguiente: "tiempo2",

        botones: [

          {
            texto: "Volver",
            siguiente: "alteracion",
          }

        ]

      },

      tiempo2:{

        tipo: "accion",

        texto: 
        
        "<Strong>Mantener arco lingual durante 9-13 meses</Strong>"

        ,

        imagen: "./image/Apiñamiento2b_12.png",

        siguiente: "control",

        botones: [

          {
            texto: "Volver",
            siguiente: "seguimiento",
          }

        ]

      },

      control:{

        tipo: "accion",

        texto: 
        
        "<Strong>Controles clínicos cada 3-6 meses</Strong>"

        ,

        imagen: "./image/Apiñamiento2b_13.png",

        siguiente: "resolucion",

        botones: [

          {
            texto: "Volver",
            siguiente: "tiempo2",
          }

        ]

      },

      resolucion: {
        
        tipo: "accion",

        texto: 
        
        "- Resolución espontanea o completa en el 60% de los casos."
        
        +

        "<br>-Aumento de longitud de arco: +1.29 mm."

        +

        "<br>-Sin expansión transversal significativa."

        ,

        imagen: "./image/Apiñamiento2b_14.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "control",
          }

        ]

      },

      activo:{

        tipo: "accion",

        texto: 
        
        "<Strong>Tratamiento activo</strong>"

        ,

        imagen: "./image/Apiñamiento2c_1.png",

        siguiente: "perdida",

        botones: [

          {
            texto: "Volver",
            siguiente: "asociacion",
          }

        ]

      },

      perdida:{
        
        tipo: "decision",

        texto: "¿Existe perdida de longitud de arco?",

        descripcion: 

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>  La pérdida de longitud de arco mandibular se entiende como la disminución del perímetro disponible entre los primeros molares permanentes durante la transición de la dentición mixta a la permanente. Este fenómeno ocurre principalmente por la migración mesial de los molares permanentes hacia el espacio de Leeway después de la exfoliación (o de la pérdida prematura) de los segundos molares temporales. La literatura reporta reducciones que pueden oscilar entre 0,44 mm y 4 mm por arcada, dependiendo del estudio y de las características de la población evaluada."

        +

        "<span class='cita-biblio'>Owais AI, Rousan ME, Badran SA, Abu Alhaija ES. Effectiveness of a lower lingual arch as a space holding device. Eur J Orthod. 2011 Feb;33:37–42. </span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Sinclair PM, Little RM. Maturation of untreated normal occlusions. Am J Orthod. 1983;83:114–23. </span>"

        +

        "<span class='cita-biblio'>Rebellato J, Lindauer SJ, Rubenstein LK, Isaacson RJ, Davidovitch M, Vroom K. Lower arch perimeter preservation using the lingual arch. Am J Orthod Dentofacial Orthop. 1997;112(4).</span>"
        
        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117(1).</span>"
        
        +

        "<span class='cita-biblio'>Arslan SG, Kama JD, Şahin S, Hamamci O. Longitudinal changes in dental arches from mixed to permanent dentition in a Turkish population. American Journal of Orthodontics and Dentofacial Orthopedics. 2007;132(5).</span>"
        
        +

        "<span class='cita-biblio'>Ciftci V, Uzel A, Dogan MC. Evaluation of skeletal and dental effects of lower lingual arches. Journal of Clinical Pediatric Dentistry. 2018;42(6).</span>"

        +

        "<br>Esta disminución del perímetro constituye uno de los factores mecánicos más determinantes en la aparición o el agravamiento del apiñamiento incisivo anterior durante la dentición mixta tardía, ya que reduce de manera directa el espacio necesario para la alineación de los dientes permanentes."

        ,

        imagen: "./image/Apiñamiento2c_2.png",

        si: "lip",

        no: "transversales",

        botones: [

          {
            texto: "Volver",
            siguiente: "activo",
          }

        ]

      },

      lip: {

        tipo: "accion",

        texto: 
        
        "<Strong>Lip Bumper</Strong>"
        
        +

        "<br><br><img src='./image/Im51.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> El lip bumper es un aparato interceptivo utilizado en dentición mixta para modificar el equilibrio de fuerzas en el arco mandibular. Se fabrica habitualmente en alambre redondo de acero inoxidable de 0.036 a 0.045 pulgadas, recubierto con tubo termocontraíble o con un escudo acrílico anterior, y se inserta en los tubos linguales soldados a las bandas de los primeros o segundos molares permanentes inferiores. Su posición habitual es 2–3 mm por delante y por debajo de los incisivos inferiores, sin contacto directo con dientes o encía, de manera que actúa como una barrera que elimina la presión labial sobre el sector anterio."

        +

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:52–8.</span>"

        +

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthod. 2016 Sep;86:753–60.</span>"

        +

        "<span class='cita-biblio'>Nevant CT, Buschang PH, Alexander RG, Steffen JM. Lip bumper therapy for gaining arch length. American Journal of Orthodontics and Dentofacial Orthopedics. 1991;100(4).</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Este aparato resulta especialmente útil cuando se combinan deficiencias de longitud y anchura de arco, o cuando existe riesgo inminente de pérdida de perímetro por migración mesial de los molares permanentes tras la exfoliación o extracción de los segundos molares temporales. Su mecanismo de acción permite recuperar espacio al liberar la presión de los tejidos blandos sobre incisivos y caninos, favoreciendo la protrusión fisiológica de incisivos, la expansión transversal a nivel intercanino, interpremolar e intermolar, y el enderezamiento o distalización de los primeros molares permanentes. La literatura reporta ganancias significativas de perímetro de arco entre 2,5 y 5,5 mm, incrementos en la anchura intercanina de 2,1–3,8 mm, interpremolar de 2,7–4 mm e intermolar de 3,6–5,5 mm, además de una resolución del apiñamiento mandibular anterior de 3–5 mm en promedio, con estabilidad clínica a largo plazo."

        +

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:52–8.</span>"

        +

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthod. 2016 Sep;86:753–60.</span>"

        +

        "<span class='cita-biblio'>Nevant CT, Buschang PH, Alexander RG, Steffen JM. Lip bumper therapy for gaining arch length. American Journal of Orthodontics and Dentofacial Orthopedics. 1991;100(4).</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Estas mejoras suelen ser mayores que las obtenidas únicamente con el arco lingual pasivo cuando existe una deficiencia simultánea de longitud y anchura. El lip bumper es especialmente indicado cuando el espacio de Leeway ya se ha perdido parcialmente o cuando el apiñamiento supera los 5–6 mm, situación en la cual el mantenimiento pasivo del espacio resulta insuficiente para recuperar el perímetro necesario. Por ello, en casos con reducción documentada del arco y estrechez transversal, el lip bumper constituye una alternativa conservadora y eficaz para restablecer el perímetro y la anchura del arco sin necesidad de extracciones premolares."

        +

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:52–8.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22</span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"
        
        +

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthod. 2016 Sep;86:753–60.</span>"
        
        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021.</span>"
        
        +

        "• Mantener durante 6-12 meses."
        
        +

        "<br>• Se posiciona a 2 mm de separación de las superficies vestibulares de los incisivos inferiores."

        +

        "<br>• Controles clínicos cada 4-6 semanas."

        +

        "<br>• Disminución de cantidad de apiñamiento: -4.41mm (IC 95% -5.2 a -3.6 mm)."

        +

        "<br>• Aumento de longitud de arco: +4.89 mm."

        +

        "<br>•Aumento de anchura Inter canina +2.2 mm."

        ,

        imagen: "./image/Apiñamiento2c_3.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "perdida",
          }

        ]

      },

      transversales: {

        tipo: "decision",

        texto: "¿Paciente con presencia de problemas transversales?",

        descripcion: 

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Los problemas transversales representan un factor importante en la aparición y el agravamiento del apiñamiento mandibular anterior, ya que una anchura intercanina, interpremolar o intermolar reducida limita el espacio disponible para la erupción normal de caninos y premolares permanentes. Esta insuficiencia transversal favorece el colapso del sector anterior y condiciona una mayor irregularidad de los incisivos. La evidencia longitudinal muestra que, en ausencia de intervención, la anchura intercanina suele permanecer estable o incluso disminuir durante la transición de la dentición mixta a la permanente. <br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> Además, se ha observado que los niños con apiñamiento marcado presentan valores de anchura intercanina inferiores a 26 mm, lo que refuerza su papel como predictor clínico."

        +

        "<span class='cita-biblio'>Arslan SG, Kama JD, Şahin S, Hamamci O. Longitudinal changes in dental arches from mixed to permanent dentition in a Turkish population. Am J Orthod Dentofac Orthop. 2007;132:576.e15-576.e21.</span>"

        +

        "<span class='cita-biblio'>Sinclair PM, Little RM. Maturation of untreated normal occlusions. Am J Orthod. 1983;83:114–23. </span>"

        +

        "<span class='cita-biblio'>Hagberg C. The alignment of permanent mandibular incisors in children. A longitudinal prospective study. Eur J Orthod. 1994 Apr;16:121–9.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Por el contrario, los pacientes que experimentan una mejoría espontánea o terapéutica del apiñamiento tienden a mostrar incrementos naturales o inducidos de la anchura intercanina. Diversos estudios coinciden en que las intervenciones interceptivas más efectivas (como el arco lingual pasivo, el lip bumper o los aparatos de expansión) generan aumentos significativos en las dimensiones transversales, con incrementos de 0,72 a 3,8 mm en anchura intercanina, 2,7 a 4 mm en interpremolar y 3,6 a 5,5 mm en intermolar, dependiendo del aparato y del protocolo utilizado."

        +

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111:52–8.</span>"

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22.</span>"

        +

        "<span class='cita-biblio'>dos Santos CCO, da Rosa Moreira Bastos RT, Bellini-Pereira SA, Garib D, Normando D. Spontaneous changes in mandibular incisor crowding from mixed to permanent dentition: a systematic review. Vol. 24, Progress in Orthodontics. Springer Science and Business Media Deutschland GmbH; 2023.</span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Brennan MM, Gianelly AA. The use of the lingual arch in the mixed dentition to resolve incisor crowding. Am J Orthod Dentofacial Orthop. 2000;117:81–5.</span>"

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. Am J Orthod Dentofac Orthop. 2010;138:262.e1-262.e11. </span>"

        +

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthod. 2016 Sep;86:753–60.</span>"

        +

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> En conjunto, estos hallazgos muestran que la estrechez transversal mandibular no solo contribuye al desarrollo del apiñamiento, sino que su corrección activa se vuelve un componente esencial para lograr una alineación estable del sector anterior y reducir la necesidad de extracciones premolares"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. John Wiley and Sons Ltd; 2021. </span>"

        ,

        imagen: "./image/Apiñamiento2c_4.png",

        si: "schwarz",

        no: "postgrado2",

        botones: [

          {
            texto: "Volver",
            siguiente: "perdida",
          }

        ]

      },
      
      postgrado2: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/Apiñamiento2c_6.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "transversales"
          }

        ]

      },

      schwarz: {

        tipo: "accion",

        texto: 
        
        "<Strong>Aparato de Schwarz mandibular</Strong>"
        
        +

        "<br><br><img src='./image/Im52.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Quinzi, V., Caruso, S., Mummolo, S., Nota, A., Angelone, A. M., Mattei, A., Gatto, R., & Marzo, G. (2020). Evaluation of Lower Dental Arch Crowding and Dimension after Treatment with Lip Bumper versus Schwarz Appliance. A Prospective Pilot Study. Dentistry journal, 8(2), 34. https://doi.org/10.3390/dj8020034</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> El aparato de Schwarz mandibular es una placa removible con un tornillo central de expansión (habitualmente activado en incrementos de 0,25 mm por vuelta) que puede complementarse con resortes o escudos vestibulares. Está diseñado para producir expansión dentoalveolar, tanto transversal como anteroposterior, durante la dentición mixta."

        +

        "<span class=\"badge-ne-moderado\">(Tai et al., 2010)</span>"

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. Am J Orthod Dentofac Orthop. 2010;138:262.e1-262.e11.</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> Cuando un paciente presenta de manera simultánea pérdida de longitud de arco (por migración mesial de los molares y reducción del perímetro disponible) y estrechez transversal del arco mandibular (ya sea a nivel intercanino, interpremolar o intermolar), el aparato de Schwarz se convierte en una opción terapéutica especialmente indicada. Su acción abarca ambas dimensiones, lo que permite abordar de forma integral los dos factores que contribuyen al apiñamiento mandibular anterior. El estudio de <span class=\"badge-ne-moderado\">(Tai et al., 2010)</span>, realizado con tomografía de haz cónico, demostró que este aparato genera una expansión significativa del complejo dentoalveolar, incluyendo movimientos a nivel radicular, con incrementos estadísticamente significativos en las anchuras intercanina, interpremolar e intermolar, además de una ganancia efectiva de perímetro de arco y mejora del apiñamiento."

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. Am J Orthod Dentofac Orthop. 2010;138:262.e1-262.e11.</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> Estos cambios superan los obtenidos con aparatos pasivos como el arco lingual, cuya acción transversal depende principalmente de inclinaciones dentarias leves. Por ello, el aparato de Schwarz resulta especialmente útil cuando existe colapso transversal marcado o cuando el espacio de Leeway ya está parcialmente perdido, situaciones en las que un simple mantenedor de espacios no es suficiente.<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> Aunque sus efectos son principalmente dentoalveolares y no esqueléticos, su capacidad para ampliar el arco en dos dimensiones lo convierte en una alternativa conservadora eficaz para manejar apiñamientos moderados con un componente transversal significativo, reduciendo la necesidad de extracciones premolares posteriores."

        +

        "<span class='cita-biblio'>Chen CY, Hsu KLC, Marghalani AA, Dhar V, Coll JA. Systematic Review and Meta-Analysis of Passive Lower Lingual Arch for Resolving Mandibular Incisor Crowding and Effects on Arch Dimension. Pediatr Dent. 2019 Jan;41:9–22. </span>"

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Saudi Dent J. 2022 Feb;34:75–86.</span>"

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. Am J Orthod Dentofac Orthop. 2010;138:262.e1-262.e11.</span>"
        
        +

        "<span class='cita-biblio'>Turner S, Harrison JE, Sharif FNJ, Owens D, Millett DT. Orthodontic treatment for crowded teeth in children. Vol. 2021, Cochrane Database of Systematic Reviews. 2021.</span>"
        
        +

        "• Mantener durante 6-12 meses. Activación 2 veces por semana."

        +

        "<br>• Controles clínicos cada 2-4 semanas. "

        +

        "<br>• Reducción de apiñamiento: -2.8 mm"

        +

        "<br>• Aumento de longitud de arco: +3.76 mm."

        +

        "<br>• Aumento de anchura Inter canina +4.38 mm."

        ,

        imagen: "./image/Apiñamiento2c_5.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "transversales",
          }

        ]

      },

      reevaluacion: {
        
        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluación</Strong>"

        ,

        imagen: "./image/Apiñamiento3_1.png",

        siguiente: "resuelve",

        botones: [

          {
            texto: "Volver Supervisión de espacios",
            siguiente: "cambio",
          },
          {
            texto: "Volver Arco lingual pasivo",
            siguiente: "resolucion",
          },
          {
            texto: "Volver Lip Bumper",
            siguiente: "lip",
          },
          {
            texto: "Volver Aparato de Schwarz mandibular",
            siguiente: "schwarz",
          }

        ]
      
      },

      resuelve: {

        tipo: "decision",

        texto: "¿El apiñamiento se resuelve?",

        imagen: "./image/Apiñamiento3_2.png",

        si: "control4",

        no: "tratamiento",

        botones: [

          {
            texto: "Volver",
            siguiente: "reevaluacion",
          }

        ]

      },

      control4: {

        tipo: "accion",

        texto: "Control y seguimiento",

        imagen: "./image/Apiñamiento3_3.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "resuelve"
          }

        ]

      },

      tratamiento: {

        tipo: "decision",

        texto: "¿Existe adherencia al tratamiento?",

        imagen: "./image/Apiñamiento3_4.png",

        si: "reformula",

        no: "postgrado3",

        botones: [

          {
            texto: "Volver",
            siguiente: "resuelve",
          }

        ]

      },

      reformula:{
        
        tipo: "accion",

        texto: "Reformular el tipo de tratamiento.",

        imagen: "./image/Apiñamiento3_5.png",
        
        siguiente: "asociacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "tratamiento"
          }

        ]

      },

      postgrado3: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/Apiñamiento3_6.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "tratamiento"
          }

        ]

      },

    }

  },

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

        "<br><br><img src='./image/Im53.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Ponglertnapakorn AA, Burak MY, Barrios JCQ. Cambios maxilares en sentido anteroposterior y vertical con el uso de máscara facial en pacientes con secuela de labio y paladar hendidos unilaterales del Hospital General «Dr. Manuel Gea González». Revista Mexicana de Ortodoncia. 2014;2:174-82</span>"

        +

        "<br><br><Strong>Mordida cruzada posterior bilateral</Strong>"

        +

        "<br><br>Esta maloclusión afecta ambas hemiarcadas del maxilar. Su origen puede ser esquelético en casos donde el maxilar posee un pobre desarrollo en el plano horizontal con respecto a la mandíbula, siendo el caso más frecuentemente presentado en este tipo de mordida cruzada, o por un crecimiento excesivo de la mandíbula en sentido transversal aunque este último es poco frecuente; por otro lado puede ser de origen dentoalveolar con un componente en los rebordes alveolares propiamente dichos debido a una discrepancia transversal del maxilar, pero este caso es menos reportado."

        +

        "<span class='cita-biblio'>Canut Brusola JA. Ortodoncia clínica y terapéutica. 2a ed. España: Masson; 2005.</span>"

        +

        "<br><br><Strong>Mordida cruzada posterior unilateral</Strong>"

        +

        "<br><br>Este tipo de mordida afecta una hemiarcada y su origen puede ser dental, con el desplazamiento hacia palatino de los premolares y molares superiores o hacia vestibular de los premolares y molares inferiores; o de origen esquelético con alteración en la formación de una hemiarcada maxilar o una asimetría mandibular en conjunto con un laterognatismo; desviación mandibular permanente hacia uno de los lados de la línea media."

        +

        "<span class='cita-biblio'>de Carvalho Barbosa PB, Santos PL, De Carli JP, Luiz de Freitas PH, Pithon MM, Paranhos LR. Aesthetic facial perception and need for intervention in laterognathism in women of different ethnicities. J Cranio-Maxillo-fac Surg Off Publ Eur Assoc Cranio-Maxillo-fac Surg. octubre de 2017;45(10):1600–6.</span>"

        +

        "<br><br><Strong>Mordida cruzada posterior monodentaria</Strong>"

        +

        "<br><br>Su presencia puede darse debido a una falta de espacio en el maxilar, provocando la erupción ectópica de premolares y molares hacia palatino.Adicionalmente, las mordidas cruzadas posteriores pueden clasificarse según la extensión de dientes afectados."

        +

        "<span class='cita-biblio'>Yezioro S, Forero A, Guevara S. Guía de Atención de Mordidas Cruzadas. Fund HOMI- Hosp Pediátrico Misericordia. 2016;17.</span>"

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

        "<span class='cita-biblio'>Canut Brusola JA. Ortodoncia clínica y terapéutica. 2a ed. España: Masson; 2005.</span>"

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
        
        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<br>Los hábitos son un factor etiológico importante en el desarrollo de la mordida cruzada posterior, en particular, el hábito de succión. Este es un factor relevante en la etiología ya que puede influir en el desarrollo de la maloclusión. Entre los factores sugeridos en la etiología de la mordida cruzada se incluye la succión del pulgar, la cual ha demostrado que si se realiza su suspensión al menos 6 meses podría conducir a una corrección espontánea de la mordida cruzada. Sin embargo, en los estudios donde este hábito fue eliminado, no se observó una corrección espontánea de la mordida cruzada posterior en los grupos de control no tratados, lo que refuerza la necesidad de intervención ortodóncica y subraya la importancia de su eliminación antes de iniciar el tratamiento para evaluar la eficacia real de los aparatos ortodóncicos."
        
        +
        
        "<span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
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

        texto: "<strong>Asociado a la mandíbula</strong><br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +
        
        "<br>Al sospechar de una hiperplasia o algún síndrome craneofacial como origen de la mordida cruzada, se recomienda remitir al posgrado de ortodoncia para su adecuado diagnóstico y tratamiento; ya que la formación de los estudiantes de pregrado no incluye manejo de anomalías dentofaciales."
        
        +
        
        "<span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
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
            siguiente: "mandibula"
          }

        ]

      },

      acepta_plan: {

        tipo: "decision",

        texto: "¿Paciente y acudiente aceptan el plan de tratamiento?",

        imagen: "./image/mordida1_13.png",
        
        si: "plan_aceptado",

        no: "no_acepta_plan",

        botones: [

          {
            texto: "Volver dental",
            siguiente: "dental"
          },
          {
            texto: "Volver dentoalveolar",
            siguiente: "dentoalveolar"
          },
          {
            texto: "Volver maxilar",
            siguiente: "maxilar"
          }

        ]

      },

      no_acepta_plan: {

        tipo: "accion",

        texto: "<strong>Informar que la mordida cruzada posterior no se autocorrige</strong> <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        + 
        
        "<br>Los estudios con grupos de control no tratados muestran que la mordida cruzada posterior no se corrige de forma espontánea en pacientes que no presentan hábitos de succión (como chuparse el dedo) y que el crecimiento natural del maxilar no es suficiente para resolver esta maloclusión de manera autónoma. Debido a la ausencia de autocorrección, la mordida cruzada posterior requiere el uso de aparatos ortodónticos, como el quad-helix (QH), la placa de expansión (EP) o la expansión maxilar rápida (RME), que demostraron ser efectivos en la mayoría de los casos con tasas de éxito cercanas al 100%."
        
        +
        
        "<span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"
        
        +

        "<br><br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Los resultados muestran que los cambios naturales en el área de superficie palatina, el área de proyección palatina y el volumen de la placa palatina fueron mínimos, con un aumento de la anchura del paladar de entre 0,3 y 0,6 mm atribuido al crecimiento natural durante el período de observación de un año. Esto indica que la mordida cruzada posterior no se autocorrige de manera significativa sin tratamiento en la dentición mixta durante este período. Además la referencia indica que los niños con mordida cruzada posterior presentaban, antes del tratamiento, una superficie palatina y un área de proyección significativamente menores en comparación con un grupo de oclusión normal, y estas diferencias no se normalizaron o igualaron durante el año de observación. En resumen se debe realizar un tratamiento ortodóncico temprano para evitar efectos negativos de la mordida cruzada posterior en el crecimiento y desarrollo de la mandíbula y los dientes."
        
        +
        
        "<span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
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

        texto: "<strong>Expansión maxilar lenta</strong><br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<br>La expansión maxilar lenta implica la aplicación de fuerzas suaves y continuas para expandir el arco maxilar de forma gradual, generando menor resistencia tisular en las estructuras circunmaxilares, favorece una mejor formación ósea en las suturas intermaxilares y menor probabilidad de complicaciones como dolor, recidiva o efectos adversos en la articulación temporomandibular, lo que contribuye a resultados más estables, con una duración de tratamiento aproximado de 8,2 a 12 meses."
       
        +
        
        "<span class='cita-biblio'>Sollenius O, Golež A, Primožič J, Ovsenik M, Bondemark L, Petrén S. Three-dimensional evaluation of forced unilateral posterior crossbite correction in the mixed dentition: A randomized controlled trial. Eur J Orthod. 2020 Aug;42:415–25.</span>"
        
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
        
        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"

        +
        
        "<br>Es un procedimiento ortodóncico para corregir deficiencias transversales en la arcada superior, aumentando el perímetro maxilar mediante la ruptura de la sutura palatina media utilizando fuerzas intensas aplicadas rápidamente con el fin de superar la resistencia de la sutura, mediante activaciones diarias que varían de 0,2 a 0,5 mm, buscando aproximadamente 7 mm de sobrecorrección en la región molar y un tiempo de tratamiento que varía entre 1 a 2 semanas dependendiendo de la necesidad de expansión deseada, junto con 6 meses de retención. Está indicado su uso durante la dentición mixta debido a la mayor elasticidad ósea, menor resistencia y menor dolor."
        
        +
        
        "<span class='cita-biblio'>Araújo M-C, Bocato J-R, Oltramari P-V-P, de Almeida M-R, Conti A-CC-F, Fernandes T-M-F. Tomographic evaluation of dentoskeletal effects of rapid maxillary expansion using Haas and Hyrax palatal expanders in children: A randomized clinical trial. J Clin Exp Dent. 2020 Oct;12:e922–30.</span>"
        
        +
        
        "<br><br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>Logrando una expansión intermolar de 4.3 - 6.4 mm y una expansión intercanina de 2.8 - 5.1 mm."
        
        +

        "<span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"

        +
        
        "<br><br>Se puede lograr una expansión intermolar de 5.2 mm al estar anclado a los primeros molares permanentes. <br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Bazargani F, Lund H, Magnuson A, Ludwig B. Skeletal and dentoalveolar effects using tooth-borne and tooth-bone-borne RME appliances: A randomized controlled trial with 1-year follow-up. Eur J Orthod. 2021 Jun;43:245–53.</span>"

        +
        
        "<br><br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span> La expansión maxilar rápida no solo corrige problemas dento-esqueléticos como la mordida cruzada posterior, sino que también favorece una mejora del flujo nasal inspiratorio y la sensibilidad olfativa en niños, probablemente debido a un aumento en el flujo nasal que permite que más moléculas odoríferas alcancen el epitelio olfativo."
        
        +

        "<span class='cita-biblio'>Ottaviano G, Maculan P, Borghetto G, Favero V, Galletti B, Savietto E, et al. Nasal function before and after rapid maxillary expansion in children: A randomized, prospective, controlled study. Int J Pediatr Otorhinolaryngol. 2018 Dec;115:133–8.</span>"

        +

        "<span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’Attilio M. Early Orthodontic 26 Universidad Nacional de Colombia Facultad de Odontología Treatments of Unilateral Posterior Crossbite: A Systematic Review. J Clin Med. el 24 de diciembre de 2020;10(1):33.</span>"

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
        
        "<br><br><img src='./image/Im54.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br>Es un aparato fijo de acero inoxidable que se cementa en los primeros molares superiores y se activa cada 6 semanas para lograr una relación transversal normal. La activación inicial es de 10 mm antes de la colocación, y el tratamiento tiene una duración promedio de 1 año. En cuanto a la rapidez en la expansión en el contexto presente, es preferible la expansión maxilar lenta, debido a su capacidad para lograr cambios significativos a nivel del paladar con menos complicaciones potenciales en comparación con lo que se esperaría si se realizara una expansión rápida. Por otra parte, este tipo de aparato requiere menos cooperación del paciente, convirtiéndose en el aparato de elección frente a pacientes de difícil o nula cooperación. Puede presentarse algunas complicaciones como: malestar al momento de la activación, desalojo de bandas, fractura del aparato, traumatismo de tejidos blandos e inclinación dental, entre otras, sin embargo, estas complicaciones generalmente se pueden evitar con un manejo adecuado en el consultorio y el laboratorio."
        
        +
        
        "<span class='cita-biblio'>Gidwani KV, Bendgude VD, Kokkali V V., Mehta V. Comparison of effectiveness of quad helix appliance with other slow maxillary expanders in children with posterior crossbite: A systematic review. J Indian Soc Pedod Prev Dent. 2018 Jul;36:225–33.</span>"
        
        +

        "<br><br>Por último, según la evidencia, el QH logra una expansión intermolar de 3.7 mm - 5.7 mm (en promedio una expansión de 5.45 mm) con cantidad de expansión por retención de 3.4 - 5.1 mm, y una expansión intercanina de 2.0 mm - 3.5 mm, además el QH es más rápido en términos de expansión (0.6 a 7.7 meses) frente a placas de expansión removibles y requiere menos ajustes, reduciendo visitas y dependencia del paciente."
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>" 
        
        +
        
        "Expansión intermolar de 3.7 a 5.7 mm y expansión intercanina de 2.0 a 3.5 mm"

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
        
        "<br><br><img src='./image/Im55.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br>Consiste en una placa de acrílico con un tornillo de expansión alineado con la sutura palatina media, activado por el paciente (0.2 mm por semana) hasta lograr la relación transversal normal. Se retira durante las comidas y el cepillado dental, con una duración de tratamiento promedio de 1 año. En cuanto a la cantidad de expansión lograda, según la evidencia, la expansión intermolar osciló entre 3.0 mm - 4.6 mm (con un promedio de 3.78 mm) y una expansión intercanina de 1.8 mm - 3.6 mm."
        
        +
        
        "<span class='cita-biblio'>Gidwani KV, Bendgude VD, Kokkali V V., Mehta V. Comparison of effectiveness of quad helix appliance with other slow maxillary expanders in children with posterior crossbite: A systematic review. J Indian Soc Pedod Prev Dent. 2018 Jul;36:225–33.</span>"
        
        +

        "<br><br> El aparato puede presentar complicaciones como pérdida, rotura, o falta de cooperación del paciente, pero estas complicaciones son generalmente evitables con un manejo adecuado en el consultorio y el laboratorio."
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>" 
        
        +
        
        "Expansión intermolar de 3.0 a 4.6 mm y expansión intercanina de 1.8 a 3.6 mm"

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

        texto: "<strong>Hyrax</strong>" 
        
        + 
        
        "<br><br><img src='./image/Im56.png' alt='Imagen a cambiar' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Feldmann, I., & Bazargani, F. (2016, December 28). Pain and discomfort during the first week of rapid maxillary expansion (RME) using two different RME... The Angle Orthodontist (EH Angle Education & Research Foundation). https://doi.org/10.2319/091216-686.1Autores</span>"

        +

        "<br><br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>Expansor dentosoportado de estructura rígida en acero inoxidable, lo que permite mayores ganancias transversales. Produce un aumento del grosor óseo lingual, ancho maxilar, cresta alveolar, y arco respecto a la activación total del tornillo de 7 mm. Adicionalmente, presenta un mayor efecto ortopédico en el suelo de la cavidad nasal y cavidad nasal posterior al compararse con disyuntores tipo Haas. Se referencia un alcance en el nivel de expansión del tornillo de 6.04 +/- 1.07mm con un rango de 5 - 8 mm, evidenciando una expansión intercanina de 3.8 mm ± 2.2 mm y una expansión intermolar de 6.2 mm ± 2.9 mm."
        
        +
        
        "<span class='cita-biblio'>Ottaviano G, Maculan P, Borghetto G, Favero V, Galletti B, Savietto E, et al. Nasal function before and after rapid maxillary expansion in children: A randomized, prospective, controlled study. Int J Pediatr Otorhinolaryngol. 2018 Dec;115:133–8.</span>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>Tiene mayor facilidad de higiene, comodidad, prevención de lesiones en tejidos blandos comparado con otros expansores como el Haas."

        +

        "<span class='cita-biblio'>Lorente C, Lorente P, Perez-Vela M, Esquinas C, Lorente T. Quad-helix compression to decompensate molar inclination prior to skeletal expansion. J Orofac Orthop. 2020 Mar;81:142–9.</span>"
        
        +
        
        "Expansión intermolar de 6.2 +/-2.9 4.6 mm y expansión intercanina de 3.8 +/- 2.2 mm"

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

        texto: "<strong>Disyuntor de Hass</strong>" 
        
        + 
        
        "<br><br><img src='./image/Im57.png' alt='Imagen a cambiar' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Expansor dento-tejido soportado con almohadilla acrílica cerca del paladar. Es menos rígido que el Hyrax, lo que puede limitar las ganancias transversales. Se realiza la activación dando 1 vuelta por día hasta lograr sobrecorrección molar (cúspide palatina del molar maxilar en contacto con la cúspide vestibular del molar mandibular), y llega a una fase activa seguida de 6 meses de retención con el aparato como retenedor. La cooperación del paciente es clave, por eso se sugiere el envío de recordatorios vía WhatsApp para realizar las activaciones. Presenta un menor aumento del grosor óseo lingual, aumento del ancho maxilar, cresta alveolar y arco al compararse con el disyuntor Hyrax; adicionalmente tiene menor efecto ortopédico en el suelo de la cavidad nasal y cavidad nasal posterior al compararse con este mismo disyuntor. Se evidencia un promedio de expansión intermolar de 6.7 mm y un promedio de expansión intercanina de 5.3 mm al anclarse a primeros molares permanentes, por otro lado, presenta una expansión intermolar de 5.1 mm ± 3.4 mm y una expansión intercanina de 3,2 mm ± 2.7 mm cementando el aparato en los quintos. <br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6.</span>"
        
        +

        "<br><br>El aparato de Haas tiene la posibilidad de ofrecer mayor expansión en la base maxilar debido al soporte tisular, sin embargo, puede presentar complicaciones como la disminución del grosor óseo vestibular, lo que puede indicar reabsorción ósea."

        +

        "<span class='cita-biblio'>Micheletti KR, Iwaki LCV, Provenzano MGA, Cuoghi OA, Ramos AL, Micheletti KR, et al. Effects of rapid maxillary expansion with six months of retention and no further orthodontic treatment. https://www.redalyc.org/journal/3072/307245984012/html/. 2015.</span>" 
        
        +
        
        "Expansión intermolar de 6.7 mm y expansión intercanina de 5.3 mm "

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
        
        siguiente: "inclinacion",

        botones: [

          {
            texto: "Volver quadhelix",
            siguiente: "quadhelix"
          },
          {
            texto: "Volver placas de expansion",
            siguiente: "placas_de_expansion"
          },
          {
            texto: "Volver hyrax",
            siguiente: "hyrax"
          },
          {
            texto: "Volver disyuntor de hass",
            siguiente: "disyuntor_de_hass"
          },

        ]

      },

      inclinacion: {

        tipo: "decision",

        texto: "<br><br><Strong>¿Se presenta inclinación molar hacia vestibular?</Strong>",

        descripcion: 
        
        "<img src='./image/Im58.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>tecnicas expansion maxilar [PDF]. (2024). https://www.lorenteortodoncia.com/wp-content/uploads/2024/09/tecnicas-expansion-maxilar.pdf</span>"

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

        "<br><br>La compensación se realiza específicamente en pacientes en los que los molares presentan una inclinación vestibular aumentada (curva de Wilson pronunciada) con deficiencia transversal esquelética maxilar. Este procedimiento se lleva a cabo antes de la expansión esquelética con un aparato Hyrax, utilizando un dispositivo de compresión de cuádruple hélice, reduciendo el riesgo de efectos iatrogénicos como una mayor inclinación molar, desplazamiento de las raíces a través de la placa bucal, o el desarrollo de una mordida en tijera, generando mayor eficacia de la expansión esquelética. La corrección previa de la inclinación molar disminuye el riesgo de recesiones gingivales y mejora la estabilidad de la dentición y las raíces."
        
        +

        "<br><br>A continuación, se detalla el proceso descrito en el documento: Procedimiento de compensación de la inclinación molar con cuádruple hélice (QH): 1) Uso de un dispositivo de cuádruple hélice modificado:Se emplea un Sistema de Arco Intraoral Móvil (MIA) (3M Unitek, Neuss, Alemania), que es un dispositivo removible. Los brazos largos que contactan con los premolares se retiran, dejando solo la hélice cuádruple que actúa sobre los primeros molares maxilares.2) Modificación y activación del dispositivo:La hélice cuádruple se comprime hasta que las hélices posteriores se tocan, la región anterior de la hélice se calienta para mantener la forma comprimida, la fuerza de compresión se genera al insertar las asas del dispositivo en los tubos palatinos de los molares. 3) Objetivo de la compresión: La compresión de la hélice cuádruple aplica una fuerza de constricción cruzada limitada a los primeros molares maxilares, esta fuerza endereza los molares, corrigiendo la inclinación vestibular excesiva (reduciendo la curva de Wilson) para alinearlos correctamente dentro de la base dentoalveolar.4) Seguimiento y evaluación: Se realiza una evaluación cada dos semanas para monitorear el progreso de la corrección de la inclinación molar, el tratamiento con la cuádruple hélice continúa hasta lograr la inclinación molar adecuada y establecer una placa de base estable. 5) Transición a la expansión con Hyrax: Una vez corregida la inclinación molar, se procede con la expansión maxilar utilizando un aparato Hyrax de cuatro bandas (molares y premolares) con un tornillo de línea media, el protocolo de activación del Hyrax implica una activación diaria de 0,20 mm, con seguimientos mensuales durante 3 meses, y el dispositivo se mantiene in situ de 3 a 6 meses tras lograr la expansión requerida."

        +
        
        "<span class='cita-biblio'>Lorente C, Lorente P, Perez-Vela M, Esquinas C, Lorente T. Quad-helix compression to decompensate molar inclination prior to skeletal expansion. J Orofac Orthop. 2020 Mar;81:142–9.</span>"

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

        texto: 
        
        "<Strong>Cementar en primer molar superior</Strong>"
        
        +
        
        "<br><br><img src='./image/Im60.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br>El anclaje en segundos molares deciduos parece ofrecer ventajas en términos de mayor expansión anterior, alineación espontánea de incisivos, y menor angulación de los primeros molares permanentes, lo que puede mejorar la oclusión y facilitar tratamientos posteriores. Sin embargo, el anclaje en primeros molares permanentes proporciona un anclaje más rígido, pero con menos efectos en la alineación anterior y mayor angulación de los primeros molares permanentes, atribuyéndole cerca el 45% de la expansión lograda. La elección entre uno u otro depende de las necesidades clínicas específicas, la etapa de desarrollo dental del paciente y los objetivos del tratamiento ortodóntico."
        
        +

        "<br><br>Cementar en primer molar superior: Los primeros molares permanentes superiores muestran una disto-rotación significativamente mayor al anclarse en quintos, probablemente debido a la apertura triangular de la sutura palatina y la libertad de movimiento de los molares no anclados. Sin embargo, al anclarse a los primeros molares permanentes, se produce una mayor inclinación de los mismos, contribuyendo a la corrección de la mordida cruzada posterior si esta incluye a los primeros molares permanentes."
        
        +
        
        "<span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6</span>"

        +

        "<span class='cita-biblio'>Cerruto C, Ugolini A, Di Vece L, Doldo T, Caprioglio A, Silvestrini-Biavati A. Kephalometrische Befunde und Veränderungen im Bereich des Zahnbogens nach forcierter Gaumennahterweiterung mit einer Haas-Apparatur mit Verankerung an Milch- bzw. bleibenden Molaren: Eine multizentrische, randomisierte kontrollierte Studie. J Orofac Orthop. 2017 Sep;78:385–93.</span>"

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

        texto:"<br><br><img src='./image/Im59.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"
        
        +

        "<span class='cita-biblio-img'>Muradova, N., & Özçırpıcı, A. A. (2019). Modified Haas Expander for the Treatment of Anterior Openbite and Posterior Crossbite Associated with Thumb Sucking-A Case Report: 3-Years Follow-Up. Turkish journal of orthodontics, 32(4), 247–252. https://doi.org/10.5152/TurkJOrthod.2019.19070</span>"
        
        +
        
        "Si la mordida cruzada se da en su mayoría en zona de caninos, cementar en quintos."
        
        +
        
        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>"
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<br><br>Como el tornillo del expansor está ubicado más anteriormente en comparación con los primeros molares permanentes, resulta en una mayor expansión en la zona anterior del maxilar, lo que facilita una alineación y mesio rotación espontánea de los incisivos centrales y laterales superiores. Esto se atribuye a la mayor expansión anterior y a la presión del labio superior, que influye en la alineación dental. También se sugiere que el anclaje a los segundos molares deciduos es eficaz si las raíces de estos dientes tienen al menos la misma longitud que la corona en la ortopantomografía. Esto permite corregir la mordida cruzada sin comprometer los molares permanentes, que quedan libres para adaptarse a la oclusión. Por último puede inducir una mejor disposición de las fibras transeptales, reduciendo la probabilidad de incisivos severamente rotados y aumentando la longitud del arco superior. Esto podría facilitar una segunda fase de tratamiento ortodóncico menos invasiva, especialmente en casos de maloclusión de clase II, además las fuerzas elevadas generadas durante la expansión maxilar rápida pueden afectar el estado periodontal y endodóntico de los dientes de anclaje. Algunos autores sugieren que el anclaje en molares deciduos podría reducir el impacto en los molares permanentes, ya que estos no están sujetos a las fuerzas directas del expansor."
        
        +
        
        "<span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6.</span>"

        +

        "<span class='cita-biblio'>Cerruto C, Ugolini A, Di Vece L, Doldo T, Caprioglio A, Silvestrini-Biavati A. Kephalometrische Befunde und Veränderungen im Bereich des Zahnbogens nach forcierter Gaumennahterweiterung mit einer Haas-Apparatur mit Verankerung an Milch- bzw. bleibenden Molaren: Eine multizentrische, randomisierte kontrollierte Studie. J Orofac Orthop. 2017 Sep;78:385–93.</span>"

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
        
        siguiente: "correcion_clinica",

        botones: [

          {
            texto: "Volver no incluye molar superior",
            siguiente: "n_molar_superior"
          },
          {
            texto: "Volver incluye molar superior",
            siguiente: "s_molar_superior"
          }

        ]

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

        texto: "<Strong>Realizar retención durante 6 meses más</Strong><br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +

        "<br><br>Se especifica que, tras la expansión maxilar rápida, se empleó un protocolo de retención de seis meses, en donde después de completar la expansión con el aparato Haas modificado que se mantuvo en la cavidad oral durante tres meses para estabilizar la expansión, se reemplazó por un retenedor removible tipo Hawley. Este retenedor deberá ser usado solo por la noche durante seis meses adicionales, con esto se contribuye a la estabilidad de los resultados de la RME, ya que se evitarán cambios significativos en las dimensiones transversales ni recaídas importantes en los periodos posteriores, esta estabilidad sería cercana al 80%, se logró sin necesidad de tratamiento ortodóntico adicional."
        
        +
        
        "<span class='cita-biblio'>Micheletti KR, Iwaki LCV, Provenzano MGA, Cuoghi OA, Ramos AL, Micheletti KR, et al. Effects of rapid maxillary expansion with six months of retention and no further orthodontic treatment. https://www.redalyc.org/journal/3072/307245984012/html/. 2015.</span>"
        
        ,

        imagen: "./image/mordida4_7.png",
        
        siguiente: "resolucion",

        botones: [

          {
            texto: "Volver arriba",
            siguiente: "correcion_clinica"
          },
          {
            texto: "Volver abajo",
            siguiente: "correcion_clinica2"
          }

        ]

      },

      resolucion: {

        tipo: "accion",

        texto: "Resolución de la mordida cruzada posterior en dentición decidua o mixta.<br><br><Strong>Fin del camino</Strong>",

        imagen: "./image/mordida4_8.png",
        
        siguiente: "presentacion",
        
        botones: [

          {
            texto: "Volver",
            siguiente: "s_correcion_clinica"
          }

        ]

      },

      postgrado2: {

        tipo: "accion",

        texto: "Remitir al posgrado de ortodoncia.<br><Strong>Paciente no apto para ser atendido en pregrado</Strong>",

        imagen: "./image/mordida4_10.png",
        
        siguiente: null,

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion_clinica2"
          }

        ]

      }

    }

  }

};