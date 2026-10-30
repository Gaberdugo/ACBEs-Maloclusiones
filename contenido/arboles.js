const ARBOLES = {

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

        "Corresponde a una discrepancia dento esquelética sagital, caracterizada por una posición relativa-mente adelantada de la mandíbula respecto al maxilar. La maloclusión clase III esquelética presenta una etiología multifactorial, aunque con una marcada influencia genética y la participación de factores ambientales y funcionales. Su origen puede estar asociado a una deficiencia del crecimiento maxilar,un exceso del crecimiento mandibular o una combinación de ambos factores. En términos oclusales, esta maloclusión puede manifestarse con una relación molar y canina de clase III esquelética, aunque en algunos casos pueden desarrollar compensaciones dentales que enmascaran la discrepancia esquelética y generar relaciones oclusales cercanas a Clase I. La compensación dental más frecuente se manifiesta como una protrusión de los incisivos maxilares y una retrusión de los incisivos mandibulares, lo que se traduce clínicamente en una mordida borde a borde o en una mordida cruzada anterior. El diagnóstico de la Clase III esquelética requiere una evaluación clínica y cefalometrica, mediante la identificación de características esqueléticas comunes, como el acortamiento de la base craneal anterior (NS) y posterior (S-Ar/Ba), la disminución del ángulo de la silla turca (NS-Ar) y el aumento del ángulo gonial (Ar-Go-Gn), que conducen a una posición más anterior de la fosa glenoidea, lo que resulta en maloclusión de clase III esquelética. Otras medidas en las que se correlacionan el maxilar con la mandíbula y cada uno de ellos con la base craneal anterior, (ANB) y (Wits) con valores menores o negativos; alteración de la diferencia maxilomandibular; nasion perpendicular al punto A (+2,3 mm) y nasion perpendicular al pogonion (0 mm), ambos alterados [7, 8, 9]."
        
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

        "<br><br>Los pacientes con LPHNS presentan con frecuencia una deficiencia del tercio medio facial caracte-rizada por retrusión maxilar, perfil facial cóncavo y tendencia al desarrollo de una maloclusión Clase III. Esta alteración tiene un origen multifactorial y se relaciona tanto con factores intrínsecos del desa-rrollo craneofacial como con los efectos derivados de las cirugías tempranas a los que estos pacientes son sometidos. Además de la deficiencia sagital, el maxilar suele presentar compromiso transversal y vertical, favoreciendo la presencia de mordidas cruzadas anteriores y posteriores (55). Los objetivos del tratamiento incluyen mejorar la relación maxilo mandibular, corregir las mordidas cruzadas, op-timizar la estética facial y establecer condiciones más favorables para el desarrollo oclusal durante el crecimiento"

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
            texto: "Volver 1",
            siguiente: "mixtatardia",
          },
          {
            texto: "Volver 2",
            siguiente: "crecimiento",
          }

        ]

      },

      priorizar: {

        tipo: "accion",

        texto: "<Strong>Priorizar la realización del injerto</Strong>",

        imagen: "./image/LPH1_11.png",

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

        texto: "<Strong>Remitir al protocolo de ortodoncia correctiva</Strong>",

        imagen: "./image/LPH2_1.png",

        siguiente: "expansion",

        botones: [

          {
            texto: "Volver",
            siguiente: "alveolar",
          }

        ]

      },

      expansion: {

        tipo: "decision",

        texto: "¿Ha sido  realizado un  injerto alveolar secundario?",

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

        texto: "¿Ha sido  realizado un  injerto alveolar secundario?",

        descripcion: 

        "<br>La evidencia disponible sugiere que cuando se opta por realizar el tratamiento de pacientes con LPHNS con protocolo Alternate Rapid Maxillary Expansion and Constriction (Alt RAMEC), realizar la expansión y protracción maxilar cerca del pico puberal de crecimiento podría permitir una mayor estabilidad de los resultados y disminuir la probabilidad de recidiva de tratamientos iniciados durante etapas más tempranas de la dentición mixta con este protocolo."
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>S V, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofacial J. 2025 Sep; </span>"

        ,

        imagen: "./image/LPH2_8.png",

        si: "mini",

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

        texto: "¿Ha sido  realizado un  injerto alveolar secundario?",

        descripcion: 

        "<br>La evidencia disponible sugiere que cuando se opta por realizar el tratamiento de pacientes con LPHNS con protocolo Alternate Rapid Maxillary Expansion and Constriction (Alt RAMEC), realizar la expansión y protracción maxilar cerca del pico puberal de crecimiento podría permitir una mayor estabilidad de los resultados y disminuir la probabilidad de recidiva de tratamientos iniciados durante etapas más tempranas de la dentición mixta con este protocolo."
        
        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>S V, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofacial J. 2025 Sep; </span>"

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

        "<span class='cita-biblio'>S V, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofacial J. 2025 Sep; </span>"

        +

        "<br>Recomendación de uso: El protocolo clásico Alt-RAMEC consiste en alternar semanalmente ciclos de ERM y constricción maxilar durante un período aproximado de 5 a 9 semanas. Finalizada esta fase, se inicia la protracción maxilar mediante FM. Algunos estudios sugieren que el uso de expansores de doble bisagra podría favorecer una mayor movilización del complejo maxilar y potenciar los efectos de la protracción. Asimismo, se recomienda mantener las fuerzas de protracción durante el mayor número de horas posible al día, idealmente de forma continua o según la máxima tolerancia del paciente, con el fin de optimizar la respuesta ortopédica."
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>S V, Chavan SJ, Manchanda JS, Zanwar VS, Jain SS, Arya R, et al. Skeletal Changes After Alt-RAMEC Protocol in Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Cleft Palate Craniofacial J. 2025 Sep; </span>"

        ,

        imagen: "./image/LPH2_6.png",

        siguiente: "petit",

        botones: [

          {
            texto: "Volver",
            siguiente: "expansion",
          }

        ]

      },

      QuaHy: {

        tipo: "decision_opciones",

        texto: "Elección",

        imagen: "./image/LPH2_4.png",
        
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

        "<br>Asimismo, la ERM se ha asociado con un aumento del volumen de la vía aérea orofaríngea. Sin embargo, cuando el objetivo terapéutico incluye la corrección de la deficiencia sagital maxilar, la expansión rápida debe complementarse con terapia de protracción maxilar, ya que la expansión aislada genera principalmente cambios transversales con un efecto limitado sobre el avance esquelético del maxilar"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Vasant MR, Menon S, Kannan S. Maxillary Expansion in Cleft Lip and Palate using Quad Helix and Rapid Palatal Expansion Screw. Med journal, Armed Forces India. 2009 Apr;65:150–3.</span>"

        +

        "<span class='cita-biblio'>Deepika U, Ray P, Nayak A, Simon LS, Mahakur M, Sahu M. Dento-skeletal Sequel of Hyrax in Nonsyndromic Cleft Lip and Palate: A Systematic Review and Meta-analysis. Int J Clin Pediatr Dent. 2023;16:882–96.</span>"

        +

        "<br>Recomendación de uso: Se recomienda considerar el uso de esta alternativa en dentición decidua tardía y dentición mixta. El protocolo de activación consiste en dos cuartos de vuelta diarios (una activación en la mañana y una en la noche), equivalentes a aproximadamente 0,5 mm de expansión por día. La activación debe mantenerse hasta alcanzar la corrección transversal o una ligera sobrecorrección clínica. Habitualmente, la fase activa tiene una duración aproximada de 7 a 14 días, dependiendo de la magnitud de la discrepancia transversal. Posteriormente, se recomienda mantener el aparato en posición pasiva como retenedor durante un período mínimo de 3 a 6 meses para favorecer la estabilidad de los resultados obtenidos. "
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"
        
        +

        "<span class='cita-biblio'>Deepika U, Ray P, Nayak A, Simon LS, Mahakur M, Sahu M. Dento-skeletal Sequel of Hyrax in Nonsyndromic Cleft Lip and Palate: A Systematic Review and Meta-analysis. Int J Clin Pediatr Dent. 2023;16:882–96.</span>"

        ,

        imagen: "./image/LPH2_5.png",

        siguiente: "petit",

        botones: [

          {
            texto: "Volver",
            siguiente: "QuaHy",
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

        "<br>El QH constituye una alternativa para realizar ESM en pacientes con LPHNS. La evidencia disponible indica que, en comparación con ERM mediante Hyrax (HY), el QH requiere un mayor tiempo de tratamiento para alcanzar la corrección transversal. Aunque se ha observado una mayor rotación molar durante la expansión, no se han encontrado diferencias significativas en las dimensiones intercaninas ni en las intermolares finales entre ambos métodos. Los cambios que se evidenciaron con el uso del QH fueron en el ancho intercanino (8.5 mm) (SD 3.65), ancho intermolar (4.35 mm)(SD 2.30), rotación molar (26.60°)(SD 16.30) e inclinación molar (7.0°)(SD 4.5).Por tanto, el QH puede considerarse una opción cuando se busca una expansión más gradual y controlada del maxilar"
        
        +
        
        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"
        
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

        "<br>Fuerza de tracción entre 400 y 500 gramos por lado"

        +

        "<br>Angulación de elasticos entre 10° y 30° por debajo del plano oclusal"
        
        +

        "Uso mínimo de 14 horas al dia"

        ,

        imagen: "./image/LPH3_3.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver 1",
            siguiente: "quadhelix",
          },
          {
            texto: "Volver 2",
            siguiente: "hyrax",
          },
          {
            texto: "Volver 3",
            siguiente: "ramec",
          },
          {
            texto: "Volver 4",
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
            texto: "Mascara  facial asistida por miniplacas",

            siguiente: "mascara"

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
            texto: "Volver",
            siguiente: "mini",
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

        "<br><span class=\"badge-ne-moderada\">(NE: Moderada, GRADE)</span>"

        +

        "<span class='cita-biblio'>Dutta S, Batra P, Raghavan S, Sharma K, Talwar A, Arora A, et al. Comparative assessment of facemask therapy with and without skeletal anchorage in growing Class III patients with unilateral cleft lip and palate (UCLP): A single-center, prospective randomized clinical trial. Spec Care Dent. 2024 Mar;44:491–501.</span>"
        
        +

        "<span class='cita-biblio'>Siddiqui HP, Kuijpers-Jagtman AM, Sennimalai K, Meazzini MC, Selvaraj M, Machawal J. Effects of Maxillary Protraction Techniques on Maxillofacial, Dental, and Soft Tissue Outcomes in Patients With Non-Syndromic Unilateral Cleft Lip and Palate: A Systematic Review and Meta-Analysis. Vol. 28, Orthodontics and Craniofacial Research. John Wiley and Sons Inc; 2025. p. 885–906. </span>"
        
        +

        "<br>Recomendaciones de uso: Los protocolos de protracción con anclaje óseo suelen indicarse en den-tición mixta tardía o permanente temprana, cuando existe suficiente desarrollo dentoalveolar para la colocación y posterior retiro de miniplacas bajo anestesia local (65). Se recomienda esperar aproxima-damente 2 a 3 semanas después de la colocación de las miniplacas antes de iniciar la aplicación de fuerzas ortopédicas, con el fin de favorecer la cicatrización y estabilización de los tejidos."
        
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

        "<br>Fuerza de tracción entre 450 y 500 gramos por lado"

        +

        "<br>Angulación de elásticos entre 20° y 30° por debajo del plano oclusal"

        +

        "<br>Uso entre 12 y 14 horas al día"

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
            texto: "Volver 1",
            siguiente: "petit",
          },
          {
            texto: "Volver 2",
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
        
        "<Strong>Reevaluar adherencia</Strong>"

        ,

        imagen: "./image/LPH4_5.png",

        siguiente: "aparatologia",

        botones: [

          {
            texto: "Volver",
            siguiente: "correcion",
          }
        ]

      },

      aparatologia: {

        tipo: "accion",

        texto: 
        
        "<Strong>Reevaluar  cambio de aparatología</Strong>"

        +

        "<br>El tratamiento con FM y anclaje dental suele indicarse durante la dentición mixta temprana debido a la limitada disponibilidad de sitios anatómicos adecuados para el anclaje óseo. Las alternativas de anclaje esquelético generalmente requieren la erupción de determinadas unidades dentarias o un desarrollo óseo suficiente para la colocación segura de miniplacas o dispositivos de anclaje temporal."

        +
        
        "<br>La magnitud de la sobrecorrección debe individualizarse según la edad del paciente, el potencial de crecimiento remanente, la severidad inicial de la discrepancia esquelética y la respuesta observada durante el tratamiento"

        +

        "<br><span class=\"badge-ne-muy-baja\">(NE: Muy baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Segal DA, Grayson BH, Shetye PR. Skeletal and dentoalveolar changes following the use of an occlusally bonded maxillary protraction headgear appliance in patients born with cleft lip and palate. Semin Orthod. 2017 Sep;23:279–94.</span>"

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

        "<br><span class=\"badge-ne-moderada\">(NE: Moderada, GRADE)</span>"

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
            texto: "Volver 1",
            siguiente: "correcion",
          },
          {
            texto: "Volver 2",
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
        
        "<Strong>Etapa de retención y seguimiento</Strong>"

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

        "<br><br><Strong>Tipos de Apiñamiento Dental</Strong>"

        +

        "<br><br><Strong>Apiñamiento leve (hasta 3mm):</Strong> Se observa en la dentición mixta temprana cuando los incisivos permanentes erupcionan dentro de parámetros normales. En muchos casos, este apiñamiento se resuelve espontáneamente entre los 7 y 9 años, gracias al crecimiento natural de los arcos, el aumento en la distancia intercanina y la inclinación de los incisivos en su proceso eruptivo."

        +

        "<span class='cita-biblio'>Vanderlinden FPGM. Development of the dentition. Quintessence Publishing, editor. Chicago, Illinois: Quintessence Publishing; 1983.</span>"

        +

        "<span class='cita-biblio'>Graber TM, Vanarsdall RL VK. Orthodontics: Current Principles & Techniques. Vol. 4th ed, Elsevier / Mosby. 2005.</span>"

        +

        "<br><br><Strong>Apiñamiento moderado (3-5 mm):</Strong> Si la falta de espacio es entre 3-5 mm, pueden presentarse alteraciones en la posición de los incisivos, como rotaciones o tendencia a mordida cruzada. En estos casos, no siempre se resuelve el apiñamiento de forma espontánea, y se puede optar por técnicas conservadoras como el desgaste mesial de los caninos temporales para generar espacio adicional y favorecer una alineación más armónica de los incisivos. Si el apiñamiento persiste, el procedimiento puede extenderse a los segundos molares temporales para continuar guiando la erupción de los dientes permanentes. Además, en casos seleccionados, se pueden emplear aparatos removibles para optimizar la alineación sin necesidad de tratamientos más invasivos."

        +

        "<span class='cita-biblio'>Vanderlinden FPGM. Development of the dentition. Quintessence Publishing, editor. Chicago, Illinois: Quintessence Publishing; 1983.</span>"

        +

        "<br><br><Strong>Apiñamiento severo (más de 5 mm):</Strong> En estos casos, la discrepancia de espacio es significativa, por lo cual suelen observarse inclinaciones o versiones marcadas y rotaciones dentarias. Para su diagnóstico preciso, se recomienda un análisis detallado mediante modelos de estudio, radiografías intraorales y cefalometría. Dependiendo del grado de discrepancia, puede ser necesario considerar medidas interceptivas como la extracción seriada, con el fin de redirigir la erupción dentaria y evitar la necesidad de tratamientos más complejos en la dentición permanente."

        +

        "<span class='cita-biblio'>Vanderlinden FPGM. Development of the dentition. Quintessence Publishing, editor. Chicago, Illinois: Quintessence Publishing; 1983.</span>"

        +

        "<span class='cita-biblio'>Moss JP. Introduction to Orthodontics, 2nd edition (1995). Birgit Thilander and Olli Ronning. Forlagshuset Gothia, Stockholm. Price: SEK 550,00. ISBN: 91-7205-004-004. The European Journal of Orthodontics. 1996;18(2).</span>"

        +

        "<br><br><Strong>Apiñamiento mandibular anterior:</Strong>Es una condición que resulta de una compleja interacción de factores genéticos, de desarrollo, funcionales y ambientales. Por ello es importante que el clínico tenga una comprensión detallada de la etiología del apiñamiento y así lograr un diagnóstico adecuado y un tratamiento ortodóntico efectivo."

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
        
        "<Strong>Severo</Strong> >5mm"
        
        +
        
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

        "<br>Con ello, los rangos adoptados (< 3 mm, 3–5 mm y > 5 mm) se fundamentan en patrones consistentes dentro de la literatura y permiten describir la severidad del apiñamiento con criterios claros y comparables entre estudios."

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Vol. 34, Saudi Dental Journal. 2022.</span>"

        ,

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
            siguiente: "presentacion"
          }

        ]

      },

      levemoderado: {
        
        tipo: "accion",

        texto: 
        
        "<Strong>Severo</Strong> >5mm"
        
        +
        
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

        "<br>Con ello, los rangos adoptados (< 3 mm, 3–5 mm y > 5 mm) se fundamentan en patrones consistentes dentro de la literatura y permiten describir la severidad del apiñamiento con criterios claros y comparables entre estudios."

        +

        "<span class='cita-biblio'>Khalaf K, Mustafa A, Wazzan M, Omar M, Estaitia M, El-Kishawi M. Clinical effectiveness of space maintainers and space regainers in the mixed dentition: A systematic review. Vol. 34, Saudi Dental Journal. 2022.</span>"

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

        "<span class='cita-biblio'>Davidovitch M, McInnis D, Lindauer SJ. The effects of lip bumper therapy in the mixed dentition. Am J Orthod Dentofacial Orthop. 1997;111(1).</span>"
        
        +

        "<span class='cita-biblio'>Kau CH, Durning P, Richmond S, Miotti FA, Harzer W. Extractions as a form of interception in the developing dentition: A randomized controlled trial. J Orthod. 2004;31(2).</span>"

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. American Journal of Orthodontics and Dentofacial Orthopedics. 2010;138(3).</span>"

        +

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthodontist. 2016;86(5).</span>"

        +

        "<span class='cita-biblio'>Hagberg C. The alignment of permanent mandibular incisors in children. A longitudinal prospective study. Eur J Orthod. 1994;16(2).</span>"

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

        "<span class='cita-biblio'>Raucci G, Pacheĉo-Pereira C, Elyasi M, D’Apuzzo F, Flores-Mir C, Perillo L. Short-and long-Term evaluation of mandibular dental arch dimensional changes in patients treated with a lip bumper during mixed dentition followed by fixed appliances. Angle Orthodontist. 2016;86(5).</span>"

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

        "<br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span> Una de las modalidades terapéuticas más conservadoras para manejar el apiñamiento mandibular anterior en dentición mixta es la supervisión de espacios, entendida como un seguimiento clínico periódico sin el uso de aparatología activa. Con ello, el objetivo es acompañar el proceso natural de recambio dentario y permitir que los cambios fisiológicos propios de esta etapa favorezcan una mejoría espontánea de la alineación incisiva. Esta conducta expectante ha sido ampliamente documentada en estudios longitudinales y revisiones sistemáticas, los cuales muestran que, durante la transición de dentición mixta a permanente, se presenta una reducción espontánea del apiñamiento con valores que pueden oscilar entre 0,17 y 4,62 mm (71) cerca de 1,27 mm en grupos control sin intervenciones y hasta 2-3 mm en poblaciones no tratadas<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span>"

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
        
        "Cambio en cantidad de apiñamiento +1.94 mm."

        +

        "<br> Disminución de longitud de arco: -2.18 mm."

        +

        "<br> Aumento leve  de anchura intercanina: +0.4 mm."
        
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

        "<br><br><img src='./image/im55.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

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
        
        "<Strong>Mantenedor de espacios</Strong>"
        
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

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> El ensayo clínico aleatorizado de <span class=\"badge-ne-moderado\">Myrlund et al. (2015)</span> aplicó esta combinación de manera sistemática: todos los pacientes tratados con guía de erupción recibieron también un arco lingual pasivo, justamente para garantizar la preservación del E-space mientras se corregían las relaciones sagitales, el overjet y la mordida profunda."

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

        "<br><br><img src='./image/im51.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

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

        "<span class='cita-biblio'>Moshkelgosha V, Khosravifard N, Golkari A. Tooth eruption sequence and dental crowding: a case-control study. F1000Research. 2014;3:122.</span>"

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
        
        ,

        imagen: "./image/Apiñamiento2c_3.png",

        siguiente: "tiempo3",

        botones: [

          {
            texto: "Volver",
            siguiente: "perdida",
          }

        ]

      },

      tiempo3: {

        tipo: "accion",

        texto: 
        
        "Mantener durante 6-12 meses."
        
        +

        "<br>Se posiciona a 2 mm de separación de las superficies vestibulares de los incisivos inferiores."

        ,

        imagen: "./image/Apiñamiento2c_3.png",

        siguiente: "control2",

        botones: [

          {
            texto: "Volver",
            siguiente: "lip",
          }

        ]

      },
    
      control2: {

        tipo: "accion",

        texto: 
        
        "<Strong>Controles clínicos cada 4-6 semanas.</Strong>"

        ,

        imagen: "./image/Apiñamiento2c_3.png",

        siguiente: "descrip",

        botones: [

          {
            texto: "Volver",
            siguiente: "tiempo3",
          }

        ]

      },

      descrip: {

        tipo: "accion",

        texto: 
        
        "-Disminución de cantidad de apiñamiento: -4.41mm (IC 95% -5.2 a -3.6 mm)."

        +

        "<br>-Aumento de longitud de arco: +4.89 mm."

        +

        "<br>-Aumento de anchura Inter canina +2.2 mm."

        ,

        imagen: "./image/Apiñamiento2c_3.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "control2",
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
            siguiente: "presentacion"
          }

        ]

      },

      schwarz: {

        tipo: "accion",

        texto: 
        
        "<Strong>Aparato de Schwarz mandibular</Strong>"
        
        +

        "<br><br><img src='./image/im53.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> El aparato de Schwarz mandibular es una placa removible con un tornillo central de expansión (habitualmente activado en incrementos de 0,25 mm por vuelta) que puede complementarse con resortes o escudos vestibulares. Está diseñado para producir expansión dentoalveolar, tanto transversal como anteroposterior, durante la dentición mixta."

        +

        "<span class='cita-biblio'>Tai K, Hotokezaka H, Park JH, Tai H, Miyajima K, Choi M, et al. Preliminary cone-beam computed tomography study evaluating dental and skeletal changes after treatment with a mandibular Schwarz appliance. Am J Orthod Dentofac Orthop. 2010;138:262.e1-262.e11.</span>"

        +

        "<br><span class=\"badge-ne-moderado\">(NE: Moderado, GRADE)</span> Cuando un paciente presenta de manera simultánea pérdida de longitud de arco (por migración mesial de los molares y reducción del perímetro disponible) y estrechez transversal del arco mandibular (ya sea a nivel intercanino, interpremolar o intermolar), el aparato de Schwarz se convierte en una opción terapéutica especialmente indicada. Su acción abarca ambas dimensiones, lo que permite abordar de forma integral los dos factores que contribuyen al apiñamiento mandibular anterior. El estudio de Tai et al. (2010), realizado con tomografía de haz cónico, demostró que este aparato genera una expansión significativa del complejo dentoalveolar, incluyendo movimientos a nivel radicular, con incrementos estadísticamente significativos en las anchuras intercanina, interpremolar e intermolar, además de una ganancia efectiva de perímetro de arco y mejora del apiñamiento."

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
        
        ,

        imagen: "./image/Apiñamiento2c_5.png",

        siguiente: "tiempo4",

        botones: [

          {
            texto: "Volver",
            siguiente: "transversales",
          }

        ]

      },

      tiempo4: {

        tipo: "accion",

        texto: 
        
        "Mantener durante 6-12 meses. Activación 2 veces por semana."

        ,

        imagen: "./image/Apiñamiento2c_5.png",

        siguiente: "control3",

        botones: [

          {
            texto: "Volver",
            siguiente: "schwarz",
          }

        ]

      },

      control3: {

        tipo: "accion",

        texto: 
        
        "Controles clínicos cada 2-4 semanas. "

        ,

        imagen: "./image/Apiñamiento2c_5.png",

        siguiente: "descrip2",

        botones: [

          {
            texto: "Volver",
            siguiente: "tiempo4",
          }

        ]

      },

      descrip2: {

        tipo: "accion",

        texto: 
        
        "- Reducción de apiñamiento: -2.8 mm"

        +

        "<br>-Aumento de longitud de arco: +3.76 mm."

        +

        "<br>-Aumento de anchura Inter canina +4.38 mm."

        ,

        imagen: "./image/Apiñamiento2c_5.png",

        siguiente: "reevaluacion",

        botones: [

          {
            texto: "Volver",
            siguiente: "control3",
          }

        ]

      },

      reevaluacion: {
        
        tipo: "accion",

        texto: 
        
        "Reevaluación"

        ,

        imagen: "./image/Apiñamiento3_1.png",

        siguiente: "resuelve",

        botones: [

          {
            texto: "Volver",
            siguiente: "asociacion",
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
        
        "<br>Es un procedimiento ortodóncico para corregir deficiencias transversales en la arcada superior, aumentando el perímetro maxilar mediante la ruptura de la sutura palatina media utilizando fuerzas intensas aplicadas rápidamente con el fin de superar la resistencia de la sutura, mediante activaciones diarias que varían de 0,2 a 0,5 mm, buscando aproximadamente 7 mm de sobrecorrección en la región molar y un tiempo de tratamiento que varía entre 1 a 2 semanas dependendiendo de la necesidad de expansión deseada, junto con 6 meses de retención. Está indicado su uso durante la dentición mixta debido a la mayor elasticidad ósea, menor resistencia y menor dolor. <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<span class='cita-biblio'>Araújo M-C, Bocato J-R, Oltramari P-V-P, de Almeida M-R, Conti A-CC-F, Fernandes T-M-F. Tomographic evaluation of dentoskeletal effects of rapid maxillary expansion using Haas and Hyrax palatal expanders in children: A randomized clinical trial. J Clin Exp Dent. 2020 Oct;12:e922–30.</span>"
        
        +
        
        "<br><br>Logrando una expansión intermolar de 4.3 - 6.4 mm y una expansión intercanina de 2.8 - 5.1 mm."
        
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

        "<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>" 
        
        + 
        
        "<br><br><img src='./image/Im54.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 3.7 a 5.7 mm y expansión intercanina de 2.0 a 3.5 mm"

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
        
        "<span class='cita-biblio'>Gidwani KV, Bendgude VD, Kokkali V V., Mehta V. Comparison of effectiveness of quad helix appliance with other slow maxillary expanders in children with posterior crossbite: A systematic review. J Indian Soc Pedod Prev Dent. 2018 Jul;36:225–33.</span>"
        
        +

        "<br><br> El aparato puede presentar complicaciones como pérdida, rotura, o falta de cooperación del paciente, pero estas complicaciones son generalmente evitables con un manejo adecuado en el consultorio y el laboratorio. <span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"

        +

        "<span class='cita-biblio'>Caroccia F, Moscagiuri F, Falconio L, Festa F, D’attilio M. Early orthodontic treatments of unilateral posterior crossbite: A systematic review. Vol. 10, Journal of Clinical Medicine. MDPI; 2021. p. 1–13.</span>"

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
        
        "<br><br><img src='./image/Im56.png' alt='Imagen a cambiar' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 6.2 +/-2.9 4.6 mm y expansión intercanina de 3.8 +/- 2.2 mm"

        +

        "<br><br>Expansor dentosoportado de estructura rígida en acero inoxidable, lo que permite mayores ganancias transversales. Produce un aumento del grosor óseo lingual, ancho maxilar, cresta alveolar, y arco respecto a la activación total del tornillo de 7 mm. Adicionalmente, presenta un mayor efecto ortopédico en el suelo de la cavidad nasal y cavidad nasal posterior al compararse con disyuntores tipo Haas. Se referencia un alcance en el nivel de expansión del tornillo de 6.04 +/- 1.07mm con un rango de 5 - 8 mm, evidenciando una expansión intercanina de 3.8 mm ± 2.2 mm y una expansión intermolar de 6.2 mm ± 2.9 mm.<br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<span class='cita-biblio'>Ottaviano G, Maculan P, Borghetto G, Favero V, Galletti B, Savietto E, et al. Nasal function before and after rapid maxillary expansion in children: A randomized, prospective, controlled study. Int J Pediatr Otorhinolaryngol. 2018 Dec;115:133–8.</span>"
        
        +

        "<br><br>Tiene mayor facilidad de higiene, comodidad, prevención de lesiones en tejidos blandos comparado con otros expansores como el Haas."

        +

        "<span class='cita-biblio'>Lorente C, Lorente P, Perez-Vela M, Esquinas C, Lorente T. Quad-helix compression to decompensate molar inclination prior to skeletal expansion. J Orofac Orthop. 2020 Mar;81:142–9.</span>"

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

        texto: "<strong>Disyuntor de Hass</strong><br><span class=\"badge-ne-alta\">(NE: Alta, GRADE)</span>" 
        
        + 
        
        "<br><br><img src='./image/Im57.png' alt='Imagen a cambiar' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "<br><br>Expansión intermolar de 6.7 mm y expansión intercanina de 5.3 mm "

        +

        "<br><br>Expansor dento-tejido soportado con almohadilla acrílica cerca del paladar. Es menos rígido que el Hyrax, lo que puede limitar las ganancias transversales. Se realiza la activación dando 1 vuelta por día hasta lograr sobrecorrección molar (cúspide palatina del molar maxilar en contacto con la cúspide vestibular del molar mandibular), y llega a una fase activa seguida de 6 meses de retención con el aparato como retenedor. La cooperación del paciente es clave, por eso se sugiere el envío de recordatorios vía WhatsApp para realizar las activaciones. Presenta un menor aumento del grosor óseo lingual, aumento del ancho maxilar, cresta alveolar y arco al compararse con el disyuntor Hyrax; adicionalmente tiene menor efecto ortopédico en el suelo de la cavidad nasal y cavidad nasal posterior al compararse con este mismo disyuntor. Se evidencia un promedio de expansión intermolar de 6.7 mm y un promedio de expansión intercanina de 5.3 mm al anclarse a primeros molares permanentes, por otro lado, presenta una expansión intermolar de 5.1 mm ± 3.4 mm y una expansión intercanina de 3,2 mm ± 2.7 mm cementando el aparato en los quintos. <br><span class=\"badge-ne-muy-baja\">(NE: baja, GRADE)</span>"
        
        +
        
        "<span class='cita-biblio'>Ugolini A, Cerruto C, Di Vece L, Ghislanzoni LH, Sforza C, Doldo T, et al. Dental arch response to Haas-type rapid maxillary expansion anchored to deciduous vs permanent molars: A multicentric randomized controlled trial. Angle Orthod. 2015 Jul;85:570–6.</span>"
        
        +

        "<br><br>El aparato de Haas tiene la posibilidad de ofrecer mayor expansión en la base maxilar debido al soporte tisular, sin embargo, puede presentar complicaciones como la disminución del grosor óseo vestibular, lo que puede indicar reabsorción ósea."

        +

        "<span class='cita-biblio'>Micheletti KR, Iwaki LCV, Provenzano MGA, Cuoghi OA, Ramos AL, Micheletti KR, et al. Effects of rapid maxillary expansion with six months of retention and no further orthodontic treatment. https://www.redalyc.org/journal/3072/307245984012/html/. 2015.</span>"

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
        
        "<br><br><img src='./image/Im58.png' alt='Imagen a cambiar' style='max-width:50%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
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

        texto: "<br><br><img src='./image/Im60.png' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
        +
        
        "Cementar en primer molar superior"
        
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

        texto:"<br><br><img src='./image/Im59.jpg' style='max-width:100%; height:auto; border-radius:12px; margin: 10px 0;'>" 
        
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
        
        "<span class='cita-biblio'>Micheletti KR, Iwaki LCV, Provenzano MGA, Cuoghi OA, Ramos AL, Micheletti KR, et al. Effects of rapid maxillary expansion with six months of retention and no further orthodontic treatment. https://www.redalyc.org/journal/3072/307245984012/html/. 2015.</span>"
        
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