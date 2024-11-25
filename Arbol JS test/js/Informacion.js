// Simulación de la funcionalidad con JavaScript
const mostrarInformacion = (enfermedad) => {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar contenido previo 

    const info = {
        Cancer: `Tipos comunes de cáncer:
Los cánceres se clasifican principalmente según el tipo de células donde comienzan, y algunos de los tipos más comunes incluyen:

Cáncer de pulmón: Se origina en los pulmones, y puede estar relacionado con el tabaquismo, la exposición a sustancias tóxicas o factores genéticos. Es uno de los cánceres más comunes y una de las principales causas de muerte por cáncer en el mundo.

Cáncer de mama: Afecta principalmente a las mujeres (aunque también puede ocurrir en hombres) y comienza en las células de los senos. Su detección temprana mediante mamografías puede aumentar significativamente las tasas de supervivencia.

Cáncer colorrectal: Afecta el colon o el recto y se desarrolla a partir de pólipos benignos en las paredes intestinales que, con el tiempo, pueden volverse cancerosos. La detección mediante colonoscopias puede prevenir su desarrollo.

Leucemia: Es un tipo de cáncer que afecta a la sangre y a la médula ósea, produciendo un exceso de glóbulos blancos. Existen varios subtipos, como leucemia mieloide crónica (LMC) y leucemia linfoblástica aguda (LLA).

Cáncer de próstata: Es el cáncer más común en hombres, y afecta a la glándula prostática. Generalmente es de crecimiento lento y puede no presentar síntomas hasta etapas más avanzadas.

Cáncer de piel (melanoma): Afecta las células pigmentarias de la piel y está fuertemente relacionado con la exposición al sol. Es uno de los tipos de cáncer más prevenibles, pero también uno de los más agresivos si no se detecta a tiempo.

Linfoma: Afecta al sistema linfático, que es parte del sistema inmunológico del cuerpo. Existen dos tipos principales: linfoma de Hodgkin y linfoma no Hodgkin.

Causas del cáncer:
El cáncer es causado por cambios o mutaciones en el ADN de las células, que pueden ser inducidos por diversos factores, tales como:

Factores genéticos: Herencia de mutaciones genéticas que aumentan el riesgo de ciertos tipos de cáncer.
Tabaquismo: Uno de los principales factores de riesgo para el cáncer de pulmón y otros tipos, como el cáncer de garganta y boca.
Radiación: Exposición a radiación ultravioleta (como la del sol), radioterapia o radiación nuclear.
Químicos y toxinas: Exposición a sustancias químicas como el asbesto, benceno, o ciertos pesticidas.
Virus: Algunos virus como el papilomavirus humano (VPH) pueden aumentar el riesgo de cáncer cervical, y el virus de la hepatitis B y C puede causar cáncer hepático.
ObeVIHd: Se asocia con un mayor riesgo de varios tipos de cáncer, como el de colon, esófago, riñón y mama.
Síntomas comunes:
Los síntomas varían según el tipo de cáncer, pero algunos signos comunes incluyen:

Fatiga inexplicable.
Pérdida de peso sin razón aparente.
Dolor persistente o cambios en el cuerpo, como bultos o erupciones en la piel.
Cambios en los hábitos intestinales o urinarios.
Tos persistente o dificultad para respirar.
Sangrado o secreción anormal.
Tratamientos:
El tratamiento para el cáncer depende de su tipo, estadio y localización. Algunas opciones comunes incluyen:

Cirugía: Para eliminar tumores sólidos o tejidos afectados.
Radioterapia: Uso de radiación para destruir células cancerosas o reducir el tamaño de tumores.
Quimioterapia: Uso de medicamentos que atacan y destruyen las células cancerosas, o impiden su crecimiento y división.
Inmunoterapia: Tratamientos que estimulan el sistema inmunológico para atacar las células cancerosas.
Terapias dirigidas: Fármacos que atacan células cancerosas específicas o sus mecanismos de crecimiento.
Terapia hormonal: Utilizada en ciertos tipos de cáncer, como el de mama y próstata, donde las hormonas favorecen el crecimiento del tumor.`,
        VIH: `El SIDA (Síndrome de Inmunodeficiencia Adquirida) es una enfermedad grave causada por el virus de la inmunodeficiencia humana (VIH). El VIH ataca el sistema inmunológico, debilitándolo y haciendo que la persona sea más susceptible a infecciones y enfermedades graves. Cuando el VIH avanza sin tratamiento, puede llevar al desarrollo del SIDA.

Tipos de VIH:
El VIH tiene dos tipos principales:

VIH-1: Es el tipo más común y se encuentra en la mayoría de los casos de VIH en todo el mundo. Es más transmisible y responsable de la mayoría de los casos de SIDA.
VIH-2: Es menos común y se encuentra principalmente en África Occidental. Se transmite de manera similar al VIH-1, pero tiende a progresar más lentamente y es menos probable que cause SIDA.
Causas:
El VIH se transmite principalmente a través de fluidos corporales, como sangre, semen, fluidos vaginales, líquidos preseminales y leche materna. Las principales formas de transmisión son:

Relaciones sexuales sin protección: Tener relaciones sexuales sin preservativo con una persona infectada.
Compartir agujas o jeringas: Como en el caso de usuarios de drogas intravenosas.
De madre a hijo: Durante el embarazo, el parto o la lactancia, una madre infectada puede transmitir el VIH a su hijo.
Transfusiones de sangre o productos sanguíneos infectados: Aunque el riesgo es muy bajo en países con controles de sangre estrictos.
Exposición laboral: A través de pinchazos accidentales con agujas o exposición a sangre infectada en entornos de trabajo, como hospitales.
Síntomas:
El VIH tiene varias etapas, y los síntomas pueden variar en cada fase:

Fase aguda (2 a 4 semanas después de la exposición al VIH): En esta fase, el virus se multiplica rápidamente y el sistema inmunológico comienza a reaccionar. Los síntomas pueden incluir:

Fiebre.
Dolor de garganta.
Fatiga extrema.
Dolores musculares y articulares.
Erupciones en la piel.
Ganglios linfáticos inflamados.
Úlceras bucales o genitales.
Fase clínica latente (también llamada "fase crónica"): Puede durar varios años, durante los cuales la persona puede no tener síntomas graves, pero el virus sigue replicándose y dañando el sistema inmunológico. Durante este período, el VIH se puede controlar mediante tratamiento antirretroviral (TAR).

Fase del SIDA: Es la fase más grave, donde el sistema inmunológico está severamente dañado y la persona es vulnerable a infecciones oportunistas y ciertos tipos de cáncer. Los síntomas incluyen:

Pérdida de peso inexplicable.
Sudores nocturnos profusos.
Diarrea crónica.
Fatiga extrema.
Infecciones recurrentes (como neumonía, tuberculosis, candidiasis, etc.).
Enfermedades graves como ciertos tipos de cáncer (por ejemplo, linfoma, sarcoma de Kaposi).
Daños neurológicos.
Tratamientos:
Aunque no existe una cura para el VIH/SIDA, los tratamientos disponibles pueden ayudar a controlar la infección y prevenir que progrese a SIDA. El tratamiento principal es el Tratamiento Antirretroviral (TAR), que implica el uso de una combinación de medicamentos que actúan en diferentes etapas del ciclo de vida del virus para reducir su carga viral y mejorar la función del sistema inmunológico. Los beneficios del TAR incluyen:

Reducir la carga viral: Los medicamentos ayudan a reducir la cantidad de VIH en la sangre a niveles indetectables.
Preservar el sistema inmunológico: Al reducir la cantidad de virus en el cuerpo, se permite que el sistema inmunológico se recupere y combata infecciones.
Prevenir la transmisión: Si la carga viral es indetectable, el riesgo de transmitir el virus a otras personas es extremadamente bajo (esto se conoce como "Indetectable = Intransmisible", o I=I).
Los medicamentos antirretrovirales suelen ser tomados de por vida y deben ser tomados regularmente para mantener su efectividad. Existen varios tipos de medicamentos antirretrovirales, que incluyen:

Inhibidores de la transcriptasa inversa (ITR): Bloquean una enzima crucial para que el VIH copie su material genético.
Inhibidores de la proteasa (IP): Impiden que el VIH madure y se multiplique.
Inhibidores de la integrasa (INI): Evitan que el VIH integre su material genético en las células del huésped.
Inhibidores de fusión y entrada: Evitan que el VIH ingrese a las células del sistema inmunológico.`,
        Gripa: `La gripe (también conocida como influenza) es una infección respiratoria causada por el virus de la influenza. A menudo se confunde con un resfriado común, pero la gripe tiende a ser más grave y presenta síntomas más intensos.

Tipos de gripe:
Existen varios tipos de virus de la influenza, pero los más comunes son:

Influenza tipo A: Es el más común y el que puede causar pandemias. Se encuentra en animales y humanos. Se clasifica en subtipos según las proteínas en la superficie del virus (hemaglutinina [H] y neuraminidasa [N]).

Influenza tipo B: Afecta solo a los humanos, y aunque puede ser grave, no provoca pandemias con la misma frecuencia que la tipo A.

Influenza tipo C: Generalmente causa una enfermedad más leve y rara vez está asociada con brotes significativos.

Causas:
La gripe se transmite principalmente a través de:

Aerosoles: Las gotículas respiratorias que se liberan al toser, estornudar o hablar pueden infectar a las personas cercanas.
Superficies contaminadas: El virus puede vivir en superficies por varias horas, por lo que tocar superficies contaminadas y luego tocarse la cara (ojos, nariz, boca) puede ser una vía de infección.
Contacto directo: A través del contacto directo con personas infectadas, como al estrechar la mano o abrazar.
Síntomas:
Los síntomas de la gripe pueden variar de leves a graves, e incluyen:

Fiebre alta (generalmente superior a 38°C).
Escalofríos.
Dolores musculares y articulares.
Dolor de cabeza.
Cansancio extremo.
Tos seca.
Dolor de garganta.
Congestión nasal.
Malestar general.
En algunos casos, pueden presentarse complicaciones graves, como neumonía, especialmente en personas mayores, niños pequeños y personas con sistemas inmunitarios debilitados.

Tratamientos:
El tratamiento para la gripe se enfoca en aliviar los síntomas y, en algunos casos, reducir la duración de la enfermedad. Algunas opciones incluyen:

Antivirales: Los medicamentos antivirales como oseltamivir (Tamiflu) o zanamivir (Relenza) pueden reducir la duración de los síntomas si se administran dentro de las primeras 48 horas de haber comenzado los síntomas. Sin embargo, no son siempre necesarios, especialmente en personas saludables.

Tratamientos sintomáticos:

Analgésicos: Medicamentos como el paracetamol (acetaminofén) o el ibuprofeno pueden ayudar a reducir el dolor y la fiebre.
Descanso y líquidos: Beber líquidos y descansar es fundamental para la recuperación.
Descongestionantes nasales: Pueden ayudar a aliviar la congestión nasal.`,
        Diabetes: `La diabetes es una enfermedad crónica que afecta la forma en que el cuerpo procesa el azúcar (glucosa), que es la principal fuente de energía para las células. La glucosa proviene de los alimentos que comemos y necesita ser transportada a las células por una hormona llamada insulina, que es producida por el páncreas. En la diabetes, el cuerpo no produce suficiente insulina o no la utiliza correctamente, lo que lleva a niveles elevados de glucosa en la sangre, una condición conocida como hiperglucemia.

Tipos de diabetes:
Existen varios tipos principales de diabetes, pero los más comunes son:

Diabetes tipo 1:

Es una condición autoinmune en la cual el sistema inmunológico del cuerpo destruye las células beta del páncreas que producen insulina. Esto provoca una deficiencia total de insulina.
Es más común en niños y jóvenes, aunque también puede desarrollarse en adultos.
Las personas con diabetes tipo 1 deben tomar insulina todos los días para controlar sus niveles de glucosa.
Diabetes tipo 2:

Es el tipo más común de diabetes y se desarrolla cuando el cuerpo no utiliza la insulina de manera eficiente (resistencia a la insulina) o cuando el páncreas no produce suficiente insulina.
Se asocia principalmente con el sobrepeso, la inactividad física y una dieta poco saludable, aunque también pueden influir factores genéticos.
Aunque la diabetes tipo 2 inicialmente puede ser controlada con cambios en el estilo de vida, como dieta y ejercicio, algunas personas necesitan medicamentos orales o insulina.
Diabetes gestacional:

Ocurre durante el embarazo y se caracteriza por niveles elevados de glucosa en la sangre. La diabetes gestacional puede aumentar el riesgo de complicaciones tanto para la madre como para el bebé.
En la mayoría de los casos, los niveles de glucosa vuelven a la normalidad después del parto, pero las mujeres que la desarrollan tienen un mayor riesgo de desarrollar diabetes tipo 2 más adelante en la vida.
Otros tipos de diabetes:

Existen formas menos comunes de diabetes que son causadas por defectos genéticos, enfermedades del páncreas, o el uso de ciertos medicamentos.
Causas de la diabetes:
Las causas de la diabetes dependen del tipo de diabetes:

Diabetes tipo 1:

Es una enfermedad autoinmune en la que el sistema inmunológico ataca y destruye las células que producen insulina. La causa exacta de este ataque no se entiende completamente, pero puede estar relacionada con factores genéticos y, en algunos casos, infecciones virales.
Diabetes tipo 2:

La resistencia a la insulina es la principal causa. Las células del cuerpo no responden de manera adecuada a la insulina, y el páncreas trata de compensar produciendo más insulina. Con el tiempo, el páncreas no puede mantener la cantidad adecuada de insulina. Los factores que contribuyen a la diabetes tipo 2 incluyen:
Genética: Tener antecedentes familiares de diabetes.
Estilo de vida: El sobrepeso, la inactividad física, una dieta poco saludable y el estrés son factores de riesgo.
Edad: El riesgo aumenta a medida que se envejece, especialmente después de los 45 años.
Diabetes gestacional:

Durante el embarazo, la placenta produce hormonas que pueden interferir con la acción de la insulina. Si el cuerpo no puede producir suficiente insulina para superar esta resistencia, los niveles de glucosa aumentan.
Síntomas de la diabetes:
Los síntomas de la diabetes pueden variar según el tipo y el grado de control, pero algunos de los más comunes son:

Diabetes tipo 1:

Necesidad frecuente de orinar.
Aumento de la sed y hambre.
Fatiga extrema.
Pérdida de peso inexplicable, a pesar de comer más.
Visión borrosa.
Heridas que tardan mucho en sanar.
Diabetes tipo 2:

Los síntomas pueden ser más sutiles y desarrollarse lentamente, por lo que muchas personas pueden no notarlos hasta que haya complicaciones graves. Sin embargo, algunos síntomas comunes son:
Aumento de la sed y la frecuencia urinaria.
Fatiga.
Visión borrosa.
Heridas que sanan lentamente.
Manchas oscuras en la piel, especialmente en el cuello o las axilas (acantosis nigricans).
Diabetes gestacional:

Puede no presentar síntomas notables, pero algunas mujeres experimentan sed excesiva y orinar con más frecuencia.
Tratamiento de la diabetes:
El tratamiento de la diabetes depende del tipo y la gravedad de la enfermedad. Las opciones incluyen:

Diabetes tipo 1:

Insulina: Las personas con diabetes tipo 1 necesitan insulina para controlar sus niveles de glucosa. La insulina puede ser administrada mediante inyecciones o bombas de insulina.
Monitoreo de glucosa: Es fundamental medir los niveles de glucosa en la sangre regularmente.
Dieta y ejercicio: Aunque la insulina es necesaria, mantener una dieta equilibrada y realizar ejercicio regularmente es importante para controlar la diabetes.
Diabetes tipo 2:

Medicamentos orales: Muchos pacientes con diabetes tipo 2 pueden controlar sus niveles de glucosa con medicamentos que mejoran la respuesta del cuerpo a la insulina o aumentan la producción de insulina. Ejemplos incluyen metformina, sulfonilureas y medicamentos inhibidores de SGLT2.
Insulina: En algunos casos, se puede necesitar insulina, especialmente cuando otros tratamientos no son efectivos.
Dieta y ejercicio: El control de la glucosa en sangre puede mejorar significativamente con cambios en el estilo de vida, como una dieta saludable y ejercicio regular.
Monitoreo de glucosa: Los pacientes con diabetes tipo 2 deben monitorear sus niveles de glucosa en la sangre con regularidad.
Diabetes gestacional:

Dieta y ejercicio: Cambios en la dieta y el aumento de la actividad física suelen ser suficientes para controlar los niveles de glucosa.
Insulina: Si los niveles de glucosa no se pueden controlar con cambios en el estilo de vida, puede ser necesario el uso de insulina.
Monitoreo de glucosa: Es fundamental controlar los niveles de glucosa en sangre durante el embarazo para evitar complicaciones.`,
        Asma: `El asma es una enfermedad crónica que afecta las vías respiratorias, específicamente los bronquios, que son los conductos que llevan el aire a los pulmones. En las personas con asma, las vías respiratorias se inflaman y se estrechan, lo que dificulta la respiración. Los episodios de asma pueden ser provocados por diversos factores, como alergias, infecciones respiratorias, ejercicio o exposición a irritantes.

Tipos de asma:
Existen varios tipos de asma, que pueden clasificarse según su causa y los factores que desencadenan los síntomas:

Asma alérgica:

Este tipo de asma está asociado con alergias, como al polen, ácaros del polvo, caspa de animales o moho. El sistema inmunológico reacciona de manera exagerada a estas sustancias, lo que provoca inflamación en las vías respiratorias.
Asma no alérgica:

Este tipo de asma no está relacionado con alergias. Puede ser desencadenado por factores como infecciones respiratorias, ejercicio físico, cambios climáticos o exposición a irritantes como humo, polución o productos químicos.
Asma ocupacional:

Se desarrolla como resultado de la exposición a sustancias irritantes en el lugar de trabajo, como productos químicos, polvo, humos o vapores.
Asma inducida por el ejercicio:

Es un tipo de asma que ocurre principalmente durante o después del ejercicio físico, especialmente en ambientes fríos y secos.
Asma infantil:

Es el tipo de asma que afecta a los niños. Muchas veces, los síntomas mejoran con la edad, aunque algunas personas siguen teniendo asma en la adultez.
Asma en adultos:

También conocida como asma de inicio tardío, este tipo de asma se desarrolla en la edad adulta, a menudo después de los 40 años, y puede estar relacionada con factores ambientales o de estilo de vida.
Causas:
El asma tiene una causa multifactorial, y se cree que involucra una combinación de factores genéticos y ambientales:

Factores genéticos: La predisposición a desarrollar asma puede ser hereditaria. Las personas que tienen antecedentes familiares de asma o enfermedades alérgicas tienen un mayor riesgo de desarrollarlo.

Factores ambientales:

Alergias: El contacto con alérgenos como polen, ácaros, moho, pelos de animales o alimentos puede desencadenar el asma.
Infecciones respiratorias: Las infecciones virales, especialmente durante la infancia, pueden aumentar el riesgo de desarrollar asma.
Contaminación del aire y exposición a irritantes: El humo de tabaco, la contaminación del aire, los productos químicos o los vapores pueden desencadenar o empeorar los síntomas de asma.
Factores climáticos: Cambios en el clima, como la exposición al aire frío o la humedad, pueden ser factores desencadenantes del asma.

Ejercicio: La actividad física intensa, sobre todo en ambientes fríos y secos, puede causar síntomas de asma en algunas personas.

Síntomas:
Los síntomas del asma pueden variar de leves a graves y suelen ocurrir en episodios o crisis. Los más comunes son:

Dificultad para respirar.
Sibilancias: Un sonido agudo al respirar, especialmente al exhalar.
Tos: Sobre todo durante la noche o al hacer ejercicio.
Sensación de opresión en el pecho.
Fatiga: Sensación de cansancio debido a la dificultad para respirar.
Los síntomas suelen empeorar durante la noche o temprano por la mañana, y pueden ser desencadenados por factores como infecciones respiratorias, cambios de clima, ejercicio o exposición a irritantes.

Tratamiento:
El tratamiento del asma se centra en controlar los síntomas y prevenir las crisis asmáticas. Los tratamientos pueden incluir:

Medicamentos:

Broncodilatadores: Son medicamentos de acción rápida que ayudan a relajar los músculos de las vías respiratorias y abren los bronquios, facilitando la respiración. Se usan en casos de emergencia o durante una crisis asmática. El salbutamol (ventolín) es un ejemplo común.
Corticosteroides inhalados: Son medicamentos antiinflamatorios que ayudan a reducir la inflamación de las vías respiratorias y prevenir los síntomas. Se utilizan a largo plazo para controlar el asma.
Antagonistas de leucotrienos: Son medicamentos orales que ayudan a reducir la inflamación y la producción de moco.
Anticuerpos monoclonales: En casos graves, se pueden utilizar tratamientos biológicos que inhiben la inflamación y las respuestas alérgicas en el asma.
Broncodilatadores de acción prolongada: Se usan junto con corticosteroides inhalados para proporcionar control a largo plazo.
Evitar desencadenantes:

Controlar las alergias: Evitar los alérgenos que provocan la inflamación en las vías respiratorias.
Evitar el humo del tabaco y la contaminación: La exposición a estos factores puede agravar los síntomas del asma.
Mantener un ambiente limpio y libre de polvo: Usar fundas de almohada y colchón antiácaros y evitar ambientes húmedos o polvorientos.
Controlar las infecciones respiratorias: Evitar resfriados y gripes que puedan empeorar los síntomas asmáticos.
Monitoreo de la función pulmonar:

El uso de un espirómetro o medidor de pico de flujo puede ayudar a controlar la función pulmonar y detectar cambios en la respiración.
Educación:

Es importante que las personas con asma aprendan a reconocer los síntomas y a manejar las crisis de manera efectiva, además de saber cuándo buscar atención médica.`,
        Alzheimer: `El Alzheimer es una enfermedad neurodegenerativa progresiva que afecta principalmente a personas mayores y es la causa más común de demencia. Se caracteriza por el deterioro de la memoria, el pensamiento, el comportamiento y las habilidades cognitivas. Con el tiempo, la enfermedad interfiere de manera significativa en la capacidad de una persona para llevar a cabo las actividades cotidianas.

Tipos de Alzheimer:
Enfermedad de Alzheimer de inicio temprano:

Se presenta en personas menores de 65 años, aunque es relativamente rara (menos del 10% de los casos).
Los síntomas suelen aparecer entre los 40 y 60 años y pueden progresar más rápidamente que en los casos de inicio tardío.
Enfermedad de Alzheimer de inicio tardío:

Es el tipo más común, y los síntomas suelen aparecer después de los 65 años.
La progresión de la enfermedad varía, pero generalmente avanza más lentamente en las primeras etapas.
Enfermedades genéticas relacionadas:

En casos muy raros, la enfermedad de Alzheimer puede ser hereditaria, asociada a mutaciones en los genes como APP, PSEN1 o PSEN2, que provocan un inicio temprano.
Causas del Alzheimer:
La causa exacta del Alzheimer no se comprende completamente, pero se cree que involucra una combinación de factores genéticos, ambientales y de estilo de vida. Las principales teorías sobre las causas incluyen:

Acumulación de placas de beta-amiloide:

En el cerebro de las personas con Alzheimer, se acumulan placas de beta-amiloide, una proteína que se adhiere a las células nerviosas y provoca su daño. Esta acumulación interfiere con la comunicación entre las células cerebrales.
Ovillos de tau:

La proteína tau, que normalmente ayuda a mantener la estructura de las células nerviosas, se descompone en la enfermedad de Alzheimer y forma ovillos que interfieren con la función neuronal.
Factores genéticos:

La presencia del gen ApoE4 aumenta el riesgo de desarrollar Alzheimer, aunque no garantiza que alguien desarrolle la enfermedad.
Inflamación e inmunidad:

Algunos estudios sugieren que la inflamación en el cerebro, como resultado de la respuesta inmune del cuerpo, podría contribuir al desarrollo de la enfermedad.
Factores de riesgo:

Edad: El principal factor de riesgo para el Alzheimer es la edad avanzada. La mayoría de los casos ocurren después de los 65 años.
Historia familiar: Las personas con antecedentes familiares de Alzheimer tienen un mayor riesgo de desarrollarlo.
Enfermedades cardiovasculares: El riesgo aumenta en personas con hipertensión, diabetes, colesterol alto o que han tenido accidentes cerebrovasculares.
Traumatismos cerebrales: Un golpe en la cabeza grave puede aumentar el riesgo de desarrollar Alzheimer.
Estilo de vida: La falta de ejercicio, una dieta poco saludable, el aislamiento social y la falta de estimulación cognitiva pueden aumentar el riesgo.
Síntomas del Alzheimer:
Los síntomas del Alzheimer tienden a empeorar con el tiempo, y generalmente se agrupan en diferentes etapas de la enfermedad. Los síntomas iniciales suelen ser leves y pueden confundirse con signos normales de envejecimiento.

Etapa temprana (leve):

Pérdida de memoria: Olvido de citas recientes, nombres o detalles de eventos.
Dificultad para planificar o resolver problemas: Les resulta difícil organizar tareas complejas o seguir instrucciones.
Confusión con el tiempo o lugar: Pueden perderse en lugares familiares o no saber qué día es.
Problemas de lenguaje: Dificultad para encontrar las palabras adecuadas en una conversación.
Cambios en el estado de ánimo y la personalidad: Puede haber irritabilidad, ansiedad o tristeza.
Etapa intermedia (moderada):

Confusión más profunda: Dificultad para reconocer a amigos o familiares cercanos.
Cambios en el comportamiento: Pueden volverse inquietos, agresivos o reacios a salir de casa.
Problemas con el control de los movimientos: Dificultad para coordinar movimientos, caminar o realizar actividades cotidianas.
Desorientación: Olvidan eventos importantes, como la fecha de su cumpleaños, o no recuerdan dónde están.
Etapa avanzada (grave):

Pérdida total de memoria: Ya no recuerdan a sus familiares, su propia identidad o su vida pasada.
Dependencia total: Necesitan ayuda para realizar las tareas más básicas como vestirse, comer y bañarse.
Dificultades físicas: Pueden experimentar problemas para caminar, tragar alimentos y mantener el equilibrio.
Comportamientos repetitivos: Pueden repetir las mismas palabras o acciones sin razón aparente.
Tratamiento del Alzheimer:
Aunque no existe una cura para el Alzheimer, existen tratamientos que pueden ayudar a aliviar los síntomas o ralentizar su progresión:

Medicamentos:

Inhibidores de la colinesterasa: Medicamentos como donepezil, rivastigmina y galantamina ayudan a aumentar los niveles de acetilcolina, un neurotransmisor involucrado en el proceso de memoria y aprendizaje.
Memantina: Ayuda a regular la actividad de glutamato, otro neurotransmisor involucrado en el aprendizaje y la memoria. Se usa en etapas moderadas a graves de la enfermedad.
Tratamientos sintomáticos:

Terapias cognitivas y conductuales: Estas terapias pueden ayudar a las personas a mantener habilidades cognitivas y controlar comportamientos difíciles.
Estimulación cognitiva: Actividades que fomentan la memoria y la función cognitiva, como rompecabezas, leer, o actividades creativas, pueden ayudar a retrasar el deterioro cognitivo.
Control de síntomas secundarios:

El manejo de la depresión, la ansiedad, el insomnio y otros síntomas relacionados es esencial para mejorar la calidad de vida del paciente.
Apoyo para los cuidadores:

Los cuidadores familiares o profesionales también necesitan apoyo. Existen recursos y grupos de apoyo que ofrecen orientación sobre cómo manejar el estrés y las dificultades que surgen al cuidar a una persona con Alzheimer.`,
        Varicela: `La varicela es una enfermedad infecciosa altamente contagiosa causada por el virus varicela-zóster, un miembro del grupo de los herpesvirus. Aunque la varicela es comúnmente una enfermedad infantil, también puede afectar a adultos, especialmente aquellos que no han sido vacunados o que no han tenido la enfermedad en la infancia.

Tipos de varicela:
No existen "tipos" específicos de varicela, ya que la enfermedad es causada por un solo virus, pero puede haber variaciones en la severidad de la infección según la edad, el estado inmunológico y otros factores.

Varicela en niños:

La varicela en los niños generalmente es leve y se caracteriza por la aparición de erupciones cutáneas que se convierten en ampollas llenas de líquido. A menudo se resuelve en unos 7 a 10 días sin complicaciones graves.
Varicela en adultos:

En los adultos, la varicela puede ser más grave, con síntomas más intensos y un mayor riesgo de complicaciones como neumonía o infecciones bacterianas secundarias en la piel.
Varicela en mujeres embarazadas:

Si una mujer embarazada contrae varicela, puede poner en riesgo al feto, especialmente si la infección ocurre en las primeras etapas del embarazo, pudiendo provocar defectos congénitos o complicaciones graves.
Varicela en personas inmunocomprometidas:

Las personas con sistemas inmunitarios debilitados, como aquellas que se han sometido a quimioterapia, trasplantes de órganos o que viven con VIH, tienen un mayor riesgo de desarrollar complicaciones graves debido a la varicela.
Causas:
La varicela es causada por el virus varicela-zóster (VZV), que se transmite de una persona a otra principalmente a través de:

Aerosoles: Al toser, estornudar o hablar, una persona infectada puede liberar pequeñas gotas en el aire que contienen el virus.
Contacto directo con las lesiones: El virus también puede propagarse al tocar las ampollas de una persona infectada o al compartir objetos que hayan estado en contacto con ellas.
Transmisión vertical: Las mujeres embarazadas que contraen varicela pueden transmitir el virus al feto a través de la placenta, lo que puede causar varicela congénita.
Síntomas:
La varicela tiene un período de incubación de 10 a 21 días después de la exposición al virus, lo que significa que los síntomas pueden no aparecer de inmediato. Los síntomas suelen aparecer en fases, y los más comunes incluyen:

Erupción cutánea:

Inicialmente aparecen manchas rojas que luego se convierten en pequeñas ampollas llenas de líquido. Las ampollas se rompen y forman costras. Este brote generalmente comienza en la cara, el cuero cabelludo o el tronco, y luego se extiende al resto del cuerpo.
La erupción puede ser muy pruriginosa (picar), lo que puede ser incómodo.
Fiebre:

La fiebre suele aparecer antes o durante la erupción cutánea, y puede durar varios días.
Malestar general:

Dolor de cabeza, fatiga, pérdida de apetito, y dolores musculares son síntomas comunes.
Síntomas respiratorios:

En algunos casos, la varicela puede acompañarse de tos, dolor de garganta o congestión nasal.
Picazón intensa:

La picazón es uno de los síntomas más molestos debido a las ampollas en la piel.
Complicaciones:
Aunque la varicela generalmente es una enfermedad leve en niños sanos, puede causar complicaciones graves, especialmente en adultos, embarazadas y personas con sistemas inmunitarios debilitados. Algunas de las complicaciones incluyen:

Neumonía:

La varicela puede causar una infección pulmonar grave, especialmente en adultos y personas con un sistema inmunológico debilitado.
Infecciones bacterianas de la piel:

Las ampollas de varicela pueden infectarse por bacterias, lo que puede llevar a complicaciones más graves.
Enfermedades neurológicas:

En raras ocasiones, la varicela puede causar inflamación en el cerebro (encefalitis) o afecciones neurológicas como la ataxia (pérdida de coordinación muscular).
Síndrome de Reye:

Aunque es raro, el uso de aspirina para tratar los síntomas de la varicela en niños puede provocar el síndrome de Reye, una afección rara pero grave que afecta al hígado y al cerebro.
Varicela congénita:

Si una mujer embarazada contrae varicela, puede haber riesgo de que el bebé nazca con defectos congénitos, como problemas oculares, problemas de desarrollo cerebral o afecciones de la piel.
Tratamiento:
En la mayoría de los casos, la varicela es autolimitada, lo que significa que el cuerpo puede combatir la infección por sí solo. El tratamiento está orientado a aliviar los síntomas y prevenir complicaciones:

Medicamentos antivirales:

En algunos casos, especialmente en adultos o personas con sistemas inmunitarios comprometidos, se pueden recetar medicamentos antivirales como aciclovir o valaciclovir para reducir la gravedad de los síntomas y la duración de la enfermedad.
Medicamentos para la fiebre y el dolor:

Paracetamol o ibuprofeno pueden usarse para aliviar la fiebre y el dolor, aunque el uso de aspirina está contraindicado en niños debido al riesgo de síndrome de Reye.
Cremas o lociones para aliviar la picazón:

Lociones como la calamina pueden ayudar a aliviar la picazón, y los baños de avena también son útiles para calmar la piel irritada.
Antibióticos:

Si se desarrollan infecciones bacterianas secundarias, como infecciones en la piel, los antibióticos pueden ser necesarios.
Descanso:

El descanso adecuado es esencial para ayudar al cuerpo a combatir la infección y recuperar energía.`
    };

    if (info[enfermedad]) {
        const titulo = document.createElement("h3");
        titulo.innerText = enfermedad;
        const descripcion = document.createElement("p");
        descripcion.innerText = info[enfermedad];

        resultado.appendChild(titulo);
        resultado.appendChild(descripcion);
    }
};