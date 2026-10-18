import { callout, list, p, table } from "../blocks";
import type { Dictionary } from "../types";

const es: Dictionary = {
    meta: {
        siteName: "MotionCore",
        home: {
            title: "MotionCore: la cámara cuenta cada repetición",
            description:
                "MotionCore sigue tu técnica con la cámara del móvil, cuenta repeticiones completas y medias, y te permite competir en duelos de 60 segundos y clasificaciones. Gratis en Android.",
        },
        support: {
            title: "Soporte",
            description: "Ayuda con MotionCore: contacta con el equipo, informa de un problema o encuentra respuestas a las preguntas frecuentes.",
        },
        deleteAccount: {
            title: "Eliminar tu cuenta",
            description: "Cómo eliminar tu cuenta de MotionCore y tus datos: desde la app o con una solicitud en la web.",
        },
        privacy: {
            title: "Política de privacidad",
            description: "Qué datos recoge MotionCore, por qué, quién los trata y cómo puedes ejercer tus derechos.",
        },
        terms: {
            title: "Condiciones de uso",
            description: "Las condiciones que se aplican al usar la app MotionCore y este sitio web.",
        },
    },
    nav: {
        features: "Funciones",
        howItWorks: "Cómo funciona",
        faq: "Preguntas",
        support: "Soporte",
        download: "Descargar la app",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        language: "Idioma",
        skipToContent: "Ir al contenido",
    },
    common: {
        googlePlayAlt: "Disponible en Google Play",
        availability: "Gratis en Android",
        effectiveLabel: "En vigor desde",
        contents: "Contenido",
        backToTop: "Volver arriba",
        emailUs: "Escríbenos",
    },
    home: {
        hero: {
            eyebrow: "Análisis de técnica con IA en tu dispositivo",
            titleLead: "Cada repetición, vista.",
            titleAccent: "Cada repetición, contada.",
            subtitle:
                "MotionCore sigue tus articulaciones con la cámara del móvil, cuenta repeticiones completas y medias, corrige tu técnica en tiempo real y te permite retar a otros deportistas en duelos de 60 segundos. Tu vídeo nunca sale de tu móvil.",
            secondaryCta: "Mira cómo funciona",
            hud: { full: "Completas", half: "Medias", time: "Tiempo", cue: "Gran profundidad", exercise: "Sentadilla" },
        },
        ribbon: [
            "17 ejercicios guiados",
            "Corrección de técnica en tiempo real",
            "Las imágenes de la cámara se quedan en tu móvil",
            "English · Türkçe · Deutsch · Español",
        ],
        showcase: {
            eyebrow: "Dentro de la app",
            titleLead: "Coloca el móvil y empieza a moverte.",
            titleAccent: "MotionCore lleva la cuenta.",
            description: "Cada pantalla gira en torno a una idea: tú entrenas y la cámara cuenta.",
            tracking: {
                tag: "Seguimiento en vivo",
                title: "Repeticiones completas, medias y mantenimientos, contados mientras te mueves",
                body: "El seguimiento de postura lee 33 puntos del cuerpo en cada imagen. Una sentadilla poco profunda cuenta como media repetición, la plancha solo suma tiempo mientras tu cuerpo sigue recto y unas indicaciones breves te dicen qué corregir.",
                chips: ["Completas", "Medias", "Mantenimiento"],
            },
            battle: {
                title: "Duelos 1 contra 1 en 60 segundos",
                body: "Enfréntate a alguien con un nivel de trofeos parecido, haced el mismo ejercicio a la vez y mira su esqueleto en vivo junto al tuyo. ¿No hay nadie? Juega contra un bot al instante.",
            },
            leaderboard: {
                title: "Clasificaciones que se reinician",
                body: "Sube en la clasificación del día, de la semana, del mes o de siempre, en general o de un solo ejercicio.",
            },
            library: {
                title: "17 ejercicios en 7 categorías",
                body: "Brazos, hombros, pecho, espalda, zona media, piernas y yoga, cada uno con una demostración animada y una descripción clara.",
                exercises: ["Sentadilla", "Flexiones", "Zancada", "Plancha", "Press de hombros", "Guerrero II"],
            },
            progress: {
                title: "Tu semana de un vistazo",
                body: "La actividad semanal, el tiempo de entrenamiento total y diario, las rachas y los logros mantienen tu progreso a la vista.",
            },
        },
        features: {
            eyebrow: "Por qué MotionCore",
            titleLead: "Un entrenador en tu bolsillo.",
            titleAccent: "Sin pulseras ni sensores.",
            description: "Solo necesitas el móvil que ya tienes y un poco de espacio.",
            items: [
                {
                    title: "Privacidad desde el diseño",
                    body: "El análisis de postura se hace por completo en tu móvil. Las imágenes de la cámara nunca se graban, guardan ni suben.",
                },
                {
                    title: "Indicaciones en el momento justo",
                    body: "Avisos breves como «Baja más» o «Gran repetición» en pantalla y por voz, sin romper tu ritmo.",
                },
                {
                    title: "De frente o de lado",
                    body: "La mayoría de los ejercicios funcionan de frente a la cámara o de perfil, y la app te avisa cuando tienes que entrar del todo en el encuadre.",
                },
                {
                    title: "Puntuación justa",
                    body: "Las repeticiones llevan marca de tiempo y se comprueban en nuestros servidores, así que los resultados de clasificaciones y duelos no se pueden escribir a mano.",
                },
                {
                    title: "Habla tu idioma",
                    body: "Usa MotionCore en español, inglés, turco o alemán.",
                },
                {
                    title: "Acceso rápido",
                    body: "Crea una cuenta con tu correo electrónico o continúa con Google.",
                },
            ],
        },
        privacy: {
            eyebrow: "Privacidad",
            title: "La imagen de tu cámara nunca sale de tu móvil",
            body: "MotionCore convierte cada imagen de la cámara en puntos del cuerpo en el propio dispositivo y solo guarda los números: repeticiones, tiempo y técnica. En un duelo, tu rival ve un esqueleto simplificado, nunca tu vídeo.",
            link: "Leer la política de privacidad",
            stats: [
                { value: "0", label: "imágenes de vídeo subidas" },
                { value: "33", label: "puntos del cuerpo por imagen" },
                { value: "60 s", label: "por duelo clasificatorio" },
                { value: "17", label: "ejercicios guiados" },
            ],
        },
        steps: {
            eyebrow: "Cómo funciona",
            titleLead: "De la descarga a la primera repetición",
            titleAccent: "en tres pasos",
            description: "Nada que emparejar y sin configuraciones largas: solo tu móvil y algo de espacio para moverte.",
            stepLabel: "Paso",
            items: [
                {
                    title: "Crea tu cuenta",
                    body: "Descarga MotionCore en Google Play y regístrate con tu correo o con Google. La edad, la altura y el peso son opcionales y solo se usan para tus propias estadísticas.",
                },
                {
                    title: "Coloca el móvil",
                    body: "Ponlo en vertical a la altura de la cadera, a unos pasos de distancia, para que todo tu cuerpo, de la cabeza a los pies, quede en el encuadre.",
                },
                {
                    title: "Empieza a moverte",
                    body: "Elige un ejercicio o un duelo. MotionCore cuenta cada repetición, corrige tu técnica y guarda la sesión en tu historial y en la clasificación.",
                },
            ],
        },
        faq: {
            eyebrow: "Preguntas",
            titleLead: "Buenas preguntas,",
            titleAccent: "respuestas claras",
            items: [
                {
                    q: "¿Se sube o se guarda el vídeo de mi cámara?",
                    a: "No. El análisis de postura se hace en tu móvil, y las imágenes de la cámara no se graban, guardan ni envían a ningún sitio. En tu cuenta solo se guardan los resultados: repeticiones, duración y técnica.",
                },
                {
                    q: "¿MotionCore es gratis?",
                    a: "Sí. MotionCore se descarga gratis y, por ahora, todas sus funciones son gratuitas.",
                },
                {
                    q: "¿Qué móviles son compatibles?",
                    a: "MotionCore está disponible para móviles Android en Google Play. Necesita una cámara que funcione; en los móviles más recientes el seguimiento es más fluido.",
                },
                {
                    q: "¿Dónde coloco el móvil?",
                    a: "Ponlo en vertical a la altura de la cadera, a unos pasos, de forma que se vean tanto tu cabeza como tus pies. Una luz uniforme ayuda. La mayoría de los ejercicios se pueden hacer de frente a la cámara o de perfil.",
                },
                {
                    q: "¿Cómo funcionan los duelos?",
                    a: "Elige un ejercicio y MotionCore encuentra un rival con un nivel de trofeos parecido. Ambos tenéis 60 segundos; gana la puntuación más alta, que además suma trofeos. Si no hay nadie disponible, puedes jugar contra un bot al instante.",
                },
                {
                    q: "¿Cómo elimino mi cuenta?",
                    a: "En la app, toca tu foto de perfil y luego **Ajustes → Editar perfil → Eliminar cuenta**. También puedes enviar una solicitud desde nuestra [página de eliminación de cuenta](/delete-account).",
                },
            ],
        },
        cta: {
            titleLead: "¿Listo para tu",
            titleAccent: "primera repetición contada?",
            body: "Descarga MotionCore, coloca el móvil y deja que la cámara cuente.",
            secondary: "¿Dudas? Visita el soporte",
        },
    },
    footer: {
        tagline: "La app de entrenamiento con cámara que cuenta cada repetición.",
        columns: { app: "App", help: "Ayuda", legal: "Legal" },
        links: {
            features: "Funciones",
            howItWorks: "Cómo funciona",
            faq: "Preguntas",
            support: "Soporte y contacto",
            deleteAccount: "Eliminar cuenta",
            privacy: "Política de privacidad",
            terms: "Condiciones de uso",
        },
        rights: "© 2026 MotionCore. Todos los derechos reservados.",
    },
    support: {
        title: "¿Cómo podemos ayudarte?",
        intro: "¿Tienes una pregunta, un error o comentarios sobre MotionCore? Escríbenos: te responderá una persona real del equipo.",
        contact: {
            title: "Escríbenos un correo",
            body: "Escribe a {email}. Indica el correo que usas en la app y, si es un error, el modelo de tu móvil.",
            note: "Intentamos responder en pocos días laborables.",
        },
        inApp: {
            title: "Infórmanos desde la app",
            body: "En la app, toca tu foto de perfil y luego **Ajustes → Informar de un problema**, y cuéntanos qué ha pasado.",
        },
        topics: {
            title: "Preguntas frecuentes",
            items: [
                {
                    title: "No se cuentan mis repeticiones",
                    body: "Asegúrate de que todo tu cuerpo, de la cabeza a los pies, está en el encuadre y bien iluminado. Aléjate un poco y consulta en la descripción del ejercicio el mejor ángulo de cámara.",
                },
                {
                    title: "No puedo iniciar sesión",
                    body: "Usa **¿Olvidaste tu contraseña?** en la pantalla de inicio de sesión para recibir un enlace por correo. Si te registraste con Google, vuelve a usar el botón de Google.",
                },
                {
                    title: "Mi puntuación en la clasificación parece incorrecta",
                    body: "Las puntuaciones se calculan en nuestros servidores a partir de las sesiones completadas; las sesiones solapadas o no verificadas no cuentan. Si aun así algo no cuadra, escríbenos con la fecha de la sesión.",
                },
                {
                    title: "La cámara no se abre",
                    body: "MotionCore necesita acceso a la cámara para seguir tu movimiento. Si lo denegaste, vuelve a permitirlo en los ajustes del móvil, en Aplicaciones → MotionCore → Permisos.",
                },
            ],
        },
        deletion: {
            title: "Eliminar tu cuenta",
            body: "Puedes eliminar tu cuenta en la app cuando quieras o, si ya no tienes acceso, enviarnos una solicitud desde la web.",
            cta: "Ir a eliminar la cuenta",
        },
    },
    deletion: {
        title: "Eliminar tu cuenta o tus datos",
        intro: "Cómo eliminar tu cuenta de MotionCore y los datos vinculados, con la app o sin ella.",
        app: "App: MotionCore (com.motioncore.app) · Desarrollador: MotionCore",
        inApp: {
            title: "Eliminarla desde la app",
            badge: "Lo más rápido",
            steps: [
                "Abre MotionCore e inicia sesión.",
                "Toca tu foto de perfil y luego **Ajustes**.",
                "Abre **Editar perfil** y toca **Eliminar cuenta**.",
                "Confirma. Tu cuenta y todos sus datos se eliminan al momento.",
            ],
        },
        form: {
            title: "Solicitar la eliminación en la web",
            intro: "¿Ya no tienes acceso a la app? Envíanos aquí tu solicitud. Antes de eliminar nada te la confirmamos por correo desde {email}, y completamos las solicitudes en un plazo de 7 días.",
            email: "Correo electrónico de tu cuenta de MotionCore",
            emailHelp: "Solo tramitamos solicitudes confirmadas desde el correo de la cuenta.",
            scope: "¿Qué quieres que eliminemos?",
            scopeAccount: "Toda mi cuenta y todos sus datos",
            scopeAccountHelp: "Es definitivo: no se puede deshacer.",
            scopeData: "Solo parte de mis datos (quiero conservar la cuenta)",
            scopeDataHelp: "Elige qué eliminar:",
            dataItems: [
                "Registros de entrenamiento y estadísticas",
                "Medidas corporales y objetivos",
                "Foto de perfil",
                "Informes de errores que envié",
            ],
            details: "¿Algo más que debamos saber? (opcional)",
            detailsPlaceholder: "Por ejemplo, el nombre de usuario que usabas en la app",
            confirm: "Entiendo que los datos eliminados no se pueden recuperar.",
            submit: "Enviar solicitud",
            submitting: "Enviando…",
            successTitle: "Solicitud recibida",
            successBody: "Te escribiremos en un plazo de 7 días para confirmarla y completarla. Si no tienes noticias nuestras, escribe a {email}.",
            again: "Enviar otra solicitud",
            errorGeneric: "No se ha podido enviar tu solicitud. Inténtalo de nuevo o escribe a {email}.",
            errorEmail: "Introduce un correo electrónico válido.",
            errorConfirm: "Confirma que entiendes que la eliminación es definitiva.",
            errorData: "Elige al menos un tipo de datos para eliminar.",
            privacyNote: "Lo que escribas aquí solo se usa para tramitar esta solicitud.",
        },
        email: {
            title: "O solicítalo por correo",
            body: "Envía desde el correo de tu cuenta un mensaje con el asunto **Solicitud de eliminación de cuenta** a {email}. Si quieres conservar la cuenta y eliminar solo parte de tus datos, usa el asunto **Solicitud de eliminación de datos**.",
        },
        deleted: {
            title: "Qué se elimina",
            items: [
                "Perfil: nombre, nombre de usuario, género y foto de perfil",
                "Medidas corporales y objetivos: edad, altura, peso y peso objetivo",
                "Todas las sesiones, repeticiones y estadísticas",
                "Historial de duelos y nivel de trofeos",
                "Los informes de errores que enviaste",
                "Tus datos de acceso y la propia cuenta",
            ],
            note: "La eliminación es definitiva. Los datos se borran de nuestros sistemas activos al momento; las copias de seguridad se limpian en un plazo de 30 días.",
        },
    },
    legal: {
        privacy: {
            title: "Política de privacidad",
            effective: "18 de octubre de 2026",
            intro: "Esta política explica qué datos recoge la app MotionCore, por qué los tratamos, quién nos ayuda a tratarlos y cómo puedes ejercer tus derechos.",
            sections: [
                {
                    id: "data-we-collect",
                    title: "1. Datos que recogemos",
                    blocks: [
                        table(
                            ["Datos", "Para qué"],
                            ["Correo electrónico y contraseña", "Para crear tu cuenta e iniciar sesión. Las contraseñas solo se guardan como un hash irreversible y nunca se pueden leer."],
                            ["Nombre, nombre de usuario, género", "Para crear tu perfil y mostrarte en clasificaciones y duelos."],
                            ["Foto de perfil (opcional)", "Se muestra en tu perfil, en las clasificaciones y en los duelos."],
                            ["Edad, altura, peso, peso objetivo (opcional)", "Para personalizar tus estadísticas."],
                            ["Registros de entrenamiento (ejercicio, repeticiones, duración, resultados de técnica, marcas de tiempo)", "Para seguir tu progreso, calcular la puntuación de las clasificaciones y mantener una puntuación justa."],
                            ["Registros de duelos (rival, puntuaciones, resultado, nivel de trofeos)", "Para organizar duelos, emparejamientos y clasificaciones."],
                            ["Informes de errores y comentarios que envías", "Para resolver problemas y responderte."],
                            ["Informes de fallos y errores (modelo del dispositivo, versión del sistema y de la app, detalles técnicos del error)", "Para encontrar y corregir fallos. No incluyen tu nombre, tu correo ni imágenes de la cámara."],
                        ),
                        callout(
                            "**Las imágenes de la cámara nunca salen de tu dispositivo.** El análisis del movimiento se hace por completo en tu móvil; las imágenes no se graban, guardan ni transmiten. A nuestros servidores solo llegan resultados numéricos: repeticiones, duración y resultados de técnica. Durante un duelo, unos puntos del cuerpo simplificados (un esqueleto de palitos, no una imagen) se envían en directo a tu rival para que la app pueda mostrar tu movimiento; no se guardan.",
                        ),
                        p("**No** recogemos:"),
                        list(
                            "Tu ubicación",
                            "Contactos, mensajes ni registros de llamadas",
                            "Identificadores publicitarios: la app no muestra anuncios",
                            "Datos de pago o de tarjetas: la app no tiene compras integradas",
                        ),
                    ],
                },
                {
                    id: "how-we-use",
                    title: "2. Cómo usamos tus datos",
                    blocks: [
                        list(
                            "Para crear tu cuenta, verificar tu inicio de sesión y mantenerla abierta",
                            "Para mostrar tu historial de entrenamiento y tus estadísticas",
                            "Para calcular las clasificaciones y encontrar rivales con un nivel de trofeos parecido",
                            "Para mantener una puntuación justa, por ejemplo descartando sesiones poco plausibles o solapadas",
                            "Para investigar fallos y los problemas que nos comunicas, y responder a tus solicitudes",
                        ),
                        p("No usamos tus datos para publicidad y nunca los vendemos."),
                    ],
                },
                {
                    id: "shared-with-users",
                    title: "3. Qué ven otros usuarios",
                    blocks: [
                        p("En las clasificaciones y los duelos, otros usuarios pueden ver tu **nombre de usuario, foto de perfil, puntuación y nivel de trofeos**. Durante un duelo, tu rival también ve tus repeticiones en directo y tu esqueleto. Si prefieres no compartirlo, no añadas foto de perfil y elige un nombre de usuario que no te identifique."),
                        p("Tu correo, tu edad, tu altura, tu peso y tus objetivos nunca se muestran a otros usuarios."),
                    ],
                },
                {
                    id: "service-providers",
                    title: "4. Proveedores de servicios",
                    blocks: [
                        table(
                            ["Proveedor", "Finalidad"],
                            ["Supabase", "Base de datos, autenticación, almacenamiento de archivos y la conexión en tiempo real de los duelos"],
                            ["Google", "Inicio de sesión si eliges continuar con Google; distribución de la app en Google Play"],
                            ["Apple", "Inicio de sesión si eliges continuar con Apple (iOS)"],
                            ["Sentry", "Informes de fallos y errores"],
                        ),
                        p("Estos proveedores solo tratan datos para prestarnos sus servicios. Algunos pueden tratarlos fuera de tu país; cuando la ley lo exige, lo hacen con garantías adecuadas como las cláusulas contractuales tipo."),
                    ],
                },
                {
                    id: "retention",
                    title: "5. Cuánto tiempo conservamos los datos",
                    blocks: [
                        p("Conservamos tus datos mientras exista tu cuenta. Cuando la eliminas, tus datos se borran de forma definitiva; eliminarlos de las copias de seguridad tarda hasta 30 días. Los informes de fallos se guardan durante un tiempo limitado, como máximo 90 días."),
                    ],
                },
                {
                    id: "deleting-your-account",
                    title: "6. Eliminar tu cuenta",
                    blocks: [
                        p("En la app, toca tu foto de perfil y luego **Ajustes → Editar perfil → Eliminar cuenta**. Así se borran para siempre tu perfil, tus registros de entrenamiento, tu historial de duelos, tus medidas, tus objetivos, tu foto de perfil y tus datos de acceso. No se puede deshacer."),
                        p("Si no puedes usar la app, utiliza nuestra [página de eliminación de cuenta](/delete-account)."),
                    ],
                },
                {
                    id: "your-rights",
                    title: "7. Tus derechos",
                    blocks: [
                        p("Según dónde vivas, por ejemplo, en virtud del Reglamento General de Protección de Datos de la UE (RGPD) o de la ley turca de protección de datos (KVKK), tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, limitar u oponerte a su tratamiento, recibirlos en un formato portable y presentar una reclamación ante una autoridad de protección de datos."),
                        p("Puedes editar tu perfil en la app y eliminar tu cuenta cuando quieras. Para cualquier otra cosa, escribe a {email}."),
                    ],
                },
                {
                    id: "security",
                    title: "8. Seguridad",
                    blocks: [
                        list(
                            "Todos los datos en tránsito se cifran con HTTPS",
                            "Tu sesión se guarda en el almacenamiento seguro del móvil (Android Keystore)",
                            "Las reglas de la base de datos hacen que cada usuario solo acceda a sus propios datos",
                            "El análisis de postura se hace en el dispositivo, así que no hay grabaciones de cámara que proteger",
                        ),
                    ],
                },
                {
                    id: "children",
                    title: "9. Menores",
                    blocks: [
                        p("MotionCore no está dirigida a menores de 16 años y no recogemos sus datos de forma consciente. Si descubrimos que lo hemos hecho, borramos los datos y cerramos la cuenta."),
                    ],
                },
                {
                    id: "changes",
                    title: "10. Cambios en esta política",
                    blocks: [
                        p("Podemos actualizar esta política. Si los cambios son importantes, te avisaremos en la app. La fecha de entrada en vigor de arriba indica la versión más reciente."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. Contacto",
                    blocks: [p("Preguntas o solicitudes sobre tus datos: {email}")],
                },
            ],
        },
        terms: {
            title: "Condiciones de uso",
            effective: "18 de octubre de 2026",
            intro: "Estas condiciones se aplican al uso de la app MotionCore y de este sitio web (en conjunto, el «Servicio»), ofrecidos por MotionCore («nosotros»). Al crear una cuenta o usar el Servicio, las aceptas. Si no estás de acuerdo, no uses el Servicio.",
            sections: [
                {
                    id: "health",
                    title: "1. Forma física y salud",
                    blocks: [
                        callout("**MotionCore no es un producto sanitario.** No diagnostica, no trata y no sustituye el consejo de un médico o fisioterapeuta. Los entrenamientos, el recuento de repeticiones y las indicaciones de técnica son solo para la forma física general."),
                        list(
                            "Consulta a un médico antes de empezar una nueva rutina de ejercicio, sobre todo si tienes problemas cardíacos, articulares, de espalda o respiratorios, hipertensión o estás embarazada.",
                            "El ejercicio conlleva riesgo de lesiones. Tú decides hacer cada ejercicio y lo haces bajo tu propia responsabilidad.",
                            "Para de inmediato y busca ayuda si sientes dolor, mareo, náuseas o falta de aire.",
                            "El seguimiento de postura puede equivocarse. Toma el recuento de repeticiones y las indicaciones de técnica como una orientación, no como una evaluación profesional.",
                            "Mantén despejada tu zona de entrenamiento y coloca el móvil donde no pueda caerse ni hacer tropezar a nadie.",
                        ),
                    ],
                },
                {
                    id: "eligibility",
                    title: "2. Requisitos y tu cuenta",
                    blocks: [
                        list(
                            "Debes tener al menos 16 años, o la edad de consentimiento digital de tu país si es mayor.",
                            "La información que nos das debe ser correcta, y cada cuenta es para una sola persona.",
                            "No compartas tus datos de acceso y avísanos enseguida si otra persona accede a tu cuenta.",
                        ),
                    ],
                },
                {
                    id: "fair-play",
                    title: "3. Juego limpio y uso aceptable",
                    blocks: [
                        p("Para que las clasificaciones y los duelos sean justos para todos, no puedes:"),
                        list(
                            "Falsear o manipular repeticiones, puntuaciones o resultados de duelos, por ejemplo con scripts, apps modificadas, emuladores o vídeos grabados",
                            "Aplicar ingeniería inversa, descompilar, modificar o manipular la app o sus modelos",
                            "Eludir medidas de seguridad o límites de uso, o acceder al Servicio de forma automatizada",
                            "Usar un nombre de usuario o una foto de perfil ofensivos, engañosos o que suplanten a otra persona",
                            "Acosar, amenazar o insultar a otros usuarios",
                        ),
                        p("Si incumples estas normas, podemos eliminar resultados, reiniciar niveles de trofeos o suspender o cerrar tu cuenta."),
                    ],
                },
                {
                    id: "your-content",
                    title: "4. Tu contenido",
                    blocks: [
                        p("Conservas los derechos sobre el nombre de usuario y la foto de perfil que añadas. Nos permites guardarlos y mostrarlos a otros usuarios dentro del Servicio mientras exista tu cuenta."),
                    ],
                },
                {
                    id: "intellectual-property",
                    title: "5. Propiedad intelectual",
                    blocks: [
                        p("El Servicio, con su software, la tecnología de análisis de postura, los diseños, las ilustraciones, los sonidos, el nombre y el logotipo, pertenece a MotionCore o a sus licenciantes. Te concedemos una licencia personal, no exclusiva, intransferible y revocable para usar el Servicio en tu propio entrenamiento, sin fines comerciales."),
                    ],
                },
                {
                    id: "purchases",
                    title: "6. Compras",
                    blocks: [
                        p("MotionCore es gratis por ahora. Si añadimos funciones de pago, se venderán a través de la facturación de Google Play y se aplicarán sus condiciones. Las suscripciones se renuevan automáticamente hasta que las canceles en Play Store al menos 24 horas antes de la renovación, y los reembolsos siguen la política de reembolsos de Google Play."),
                    ],
                },
                {
                    id: "termination",
                    title: "7. Eliminación de la cuenta y terminación",
                    blocks: [
                        p("Puedes dejar de usar el Servicio y eliminar tu cuenta cuando quieras, en la app o desde nuestra [página de eliminación de cuenta](/delete-account). Podemos suspender o cerrar las cuentas que incumplan estas condiciones de forma grave o repetida."),
                    ],
                },
                {
                    id: "changes",
                    title: "8. Disponibilidad y cambios",
                    blocks: [
                        p("Trabajamos para que el Servicio funcione, pero a veces puede interrumpirse, y podemos cambiar o retirar funciones. Podemos actualizar estas condiciones; te avisaremos en la app de los cambios importantes, y seguir usando el Servicio supone aceptar las nuevas condiciones."),
                    ],
                },
                {
                    id: "liability",
                    title: "9. Exención de garantías y limitación de responsabilidad",
                    blocks: [
                        p("En la medida en que la ley lo permita, el Servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo. En la medida en que la ley lo permita, MotionCore no responde de daños indirectos o consecuentes ni de lesiones derivadas de los ejercicios que decidas hacer."),
                        p("Nada de estas condiciones limita la responsabilidad que la ley no permite limitar (por ejemplo, por dolo o negligencia grave) ni tus derechos como consumidor."),
                    ],
                },
                {
                    id: "governing-law",
                    title: "10. Legislación aplicable",
                    blocks: [
                        p("Estas condiciones se rigen por las leyes de la República de Turquía, y son competentes los tribunales de Ankara. Si eres consumidor, conservas además la protección de las leyes imperativas de tu país de residencia."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. Contacto",
                    blocks: [p("Preguntas sobre estas condiciones: {email}")],
                },
            ],
        },
    },
};

export default es;
