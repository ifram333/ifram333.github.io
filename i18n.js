/* document.getElementById("german").onclick = function () {
  translate('de')
};

document.getElementById("english").onclick = function () {
  translate('en')
}; */

var buttons = document.getElementsByClassName('i18n-button');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    translate(buttons[i].getAttribute('data-value'));
  })
}

function translate(selectedLanguage) {

  // List of available locales
  const availableLocales = ['en', 'es'];

  // Default locale.
  const defaultLanguage = 'en';

  // Manually detect users' language, strip languages such as `en-GB` to just `en`.
  let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

  // If `?lang=` exists in URL params & is valid, then use that instead.
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  if (langFromUrl && availableLocales.includes(langFromUrl)) {
    language = langFromUrl
  }

  // Set `pageLanguage` only if its available within our locales, otherwise default.
  let pageLanguage = defaultLanguage;

  if (selectedLanguage !== undefined) {
    language = selectedLanguage;
  }

  if (availableLocales.includes(language)) {
    pageLanguage = language;
  }

  // Locale translations.
  const locales = {

    // EN
    en: {
      "title": "Iván Ramírez - Personal Website",
      "sidebar": {
        "roll": "Test Automation Engineer",
        "show": "Show Information",
        "email": "Email",
        "phone": "Phone",
        "birthday": "Birthday",
        "location": "Location"
      },

      "navbar": {
        "about": "About",
        "resume": "Resume",
        "portfolio": "Portfolio",
        "contact": "Contact"
      },

      "about": {
        "title": "About me",
        "p1": "Bilingual Systems and Computer Science Engineer. I have 5+ years of experience in test automation for mobile devices and web applications with Java and Python programming languages and Selenium and Appium frameworks.",
        "p2": "Critical Thinker - Responsible - Mentoring",
        "service": "What am I doing?",
        "service1": "Tests cases design",
        "service1-description": "Design test cases for all possible scenarios.",
        "service2": "Tests data preparation",
        "service2-description": "Prepare the test data necessary for execution.",
        "service3": "Tests execution",
        "service3-description": "Execute test cases and report findings.",
        "service4": "Tests automation",
        "service4-description": "Automate test cases on mobile devices or browsers."
      },

      "resume": {
        "title": "My resume",
        "studies": "Studies",
        "studies1": "Pontificia Universidad Javeriana",
        "studies1-description": "Systems and Computer Science Engineer.",
        "studies2": "Tulio Enrique Tascón educational institution",
        "studies2-description": "Commercial high School."
      },

      "experience": {
        "title": "Experience",
        "job1-title": "Zemoga S.A.S",
        "job1-name": "Test Automation Engineer",
        "job1-date": "August 2020 — Now",
        "job1-description": "I am in charge of designing, executing, and evaluating functional tests in mobile applications for the Bridgestone company. I also automate these test cases designed with tools like Selenium, Appium, and the Java language.",

        "job2-title": "Q-Vision Technologies",
        "job2-name": "QA Automation Lead",
        "job2-date": "December 2019 - August 2020",
        "job2-description": "I led the automation team in the development of an RPA tool that would allow the execution and testing of bank loan processes.",

        "job3-title": "Q-Vision Technologies",
        "job3-name": "QA Automation Engineer",
        "job3-date": "January 2019 — November 2019",
        "job3-description": "I designed, executed, evaluated, and automated test cases for bank loans at Banco de Occidente.",

        "job4-title": "Q-Vision Technologies",
        "job4-name": "Senior Functional Testing Engineer",
        "job4-date": "July 2018 — December 2018",
        "job4-description": "I designed, executed, and evaluated functional tests for the ONBASE documentation control application in the banking environment of Banco de Occidente.",

        "job5-title": "Q-Vision Technologies",
        "job5-name": "Functional Testing Engineer",
        "job5-date": "November 2016 — June 2018",
        "job5-description": "I designed, executed, and evaluated functional tests for a BPM business loan project at Banco de Occidente.",

        "job6-title": "IP Total Software S.A.",
        "job6-name": "Junior Software Developer",
        "job6-date": "January 2016 — October 2016",
        "job6-description": "I designed and executed functional tests for desktop and mobile applications and developed a BPM Web application to manage project documentation."
      },

      "skills": {
        "title": "My skills",
        "skill1": "Functional testing",
        "skill2": "Test automation"
      },

      "portfolio": {
        "title": "My portfolio",
        "all": "All",
        "category": "Select Category"
      },

      "contact": {
        "title": "Contact Me",
        "form": "Contact Form",
        "send": "Send Message",
        "fullname": "Full Name",
        "email": "Email Address",
        "message": "Your Message"
      }
    },

    // ES
    es: {
      "title": "Iván Ramírez - Página Web Personal",
      "sidebar":{
        "roll": "Ingeniero Automatizador de Pruebas",
        "show": "Mostrar Información",
        "email": "Correo Electrónico",
        "phone": "Teléfono",
        "birthday": "Cumpleaños",
        "location": "Ubicación"
      },

      "navbar": {
        "about": "Acerca De",
        "resume": "Currículum",
        "portfolio": "Proyectos",
        "contact": "Contacto"
      },

      "about": {
        "title": "Acerca de mí",
        "p1": "Ingeniero de Sistemas y Ciencias de la Computación bilingüe. Tengo más de 5 años de experiencia en automatización de pruebas para dispositivos móviles y aplicaciones web con los lenguajes de programación Java y Python y los frameworks Selenium y Appium.",
        "p2": "Pensador Crítico - Responsable - Mentoría",
        "service": "¿Qué hago?",
        "service1": "Diseño de casos de prueba",
        "service1-description": "Diseñar los casos de pruebas para todos los escenarios posibles.",
        "service2": "Preparación datos de pruebas",
        "service2-description": "Prepara los datos de pruebas necesarios para ejecución.",
        "service3": "Ejecución de pruebas",
        "service3-description": "Ejecutar casos de pruebas y reportar hallazgos.",
        "service4": "Automatización de pruebas",
        "service4-description": "Automatizar casos de pruebas para dispositivos móviles y navegadores."
      },

      "resume": {
        "title": "Mi currículum",
        "studies": "Educación",
        "studies1": "Pontificia Universidad Javeriana",
        "studies1-description": "Ingeniero de Sistemas y Ciencias de la Computación",
        "studies2": "Institución educativa Tulio Enrique Tascón",
        "studies2-description": "Bachiller comercial."
      },

      "experience": {
        "title": "Experiencia laboral",
        "job1-title": "Zemoga S.A.S",
        "job1-name": "Ingeniero de Automatización de Pruebas",
        "job1-date": "Agosto 2020 — Actual",
        "job1-description": "Estoy a cargo de diseñar, ejecutar y evaluar pruebas funcionales en aplicaciones móviles para la empresa Bridgestone. También automatizo estos casos de prueba diseñados con herramientas como Selenium, Appium y el lenguaje Java.",

        "job2-title": "Q-Vision Technologies",
        "job2-name": "Líder de Automatización QA",
        "job2-date": "Diciembre 2019 - Agosto 2020",
        "job2-description": "Lideré el equipo de automatización en el desarrollo de una herramienta RPA que permitiría la ejecución y prueba de procesos de préstamos bancarios.",

        "job3-title": "Q-Vision Technologies",
        "job3-name": "Ingeniero de Automatización QA",
        "job3-date": "Enero 2019 — Noviembre 2019",
        "job3-description": "Diseñé, ejecuté, evalué y automaticé casos de prueba para créditos bancarios en el Banco de Occidente.",

        "job4-title": "Q-Vision Technologies",
        "job4-name": "Ingeniero Senior de Pruebas Funcionales",
        "job4-date": "Julio 2018 — Diciembre 2018",
        "job4-description": "Diseñé, ejecuté y evalué pruebas funcionales de la aplicación de control de documentación ONBASE en el entorno bancario del Banco de Occidente.",

        "job5-title": "Q-Vision Technologies",
        "job5-name": "Ingeniero de Pruebas Funcionales",
        "job5-date": "Noviembre 2016 — Junio 2018",
        "job5-description": "Diseñé, ejecuté y evalué pruebas funcionales para un proyecto de crédito empresarial BPM en el Banco de Occidente.",

        "job6-title": "IP Total Software S.A.",
        "job6-name": "Desarrollador de Software Junior",
        "job6-date": "Enero 2016 — Octubre 2016",
        "job6-description": "Diseñé y ejecuté pruebas funcionales para aplicaciones de escritorio y móviles y desarrollé una aplicación web BPM para gestionar la documentación del proyecto."
      },

      "skills": {
        "title": "Mis habilidades",
        "skill1": "Pruebas funcionales",
        "skill2": "Automatización de pruebas"
      },

      "portfolio": {
        "title": "Mis proyectos",
        "all": "Todos",
        "category": "Seleccionar Categoría"
      },

      "contact": {
        "title": "Contáctame",
        "form": "Formulario de Contacto",
        "send": "Enviar Mensaje",
        "fullname": "Nombre Completo",
        "email": "Correo Electrónico",
        "message": "Tu Mensaje"
      }
    },

  };

  // Get all page elements to be translated.
  const elements = document.querySelectorAll('[data-i18n]');

  // Get JSON object of translations.
  const json = locales[pageLanguage];

  // On each element, found the translation from JSON file & update.
  elements.forEach((element, index) => {
    const key = element.getAttribute('data-i18n');
    let text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);

    // Does this text have any variables? (eg {something})
    const variables = text.match(/{(.*?)}/g);
    if (variables) {

      // Iterate each variable in the text.
      variables.forEach((variable) => {

        // Filter all `data-*` attributes for this element to find the matching key.
        Object.entries(element.dataset).filter(([key, value]) => {
          if (`{${key}}` === variable) {
            try {
              // Attempt to run actual JavaScript code.
              text = text.replace(`${variable}`, new Function(`return (${value})`)());
            } catch (error) {
              // Probably just static text replacement.
              text = text.replace(`${variable}`, value);
            }
          }
        })
      });
    }

    // Regular text replacement for given locale.

    if(element.hasAttribute("placeholder")) {
      element.setAttribute("placeholder", text);
    } else {
      element.innerHTML = text;
    }
  });
}

window.onload = translate();
