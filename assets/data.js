// Edit this one file to update your personal information, projects, and skills.
const portfolio = {
  name: 'Uriel Lomelí',
  email: 'tu-correo@ejemplo.com',
  links: { github: 'https://github.com/your-username', linkedin: 'https://www.linkedin.com/in/your-profile/' },
  experience: [
    {
      period: 'Ingeniería de producto · Plataformas de manufactura',
      role: { es: 'Ingeniero sénior de producto', en: 'Senior Product Engineer' },
      company: 'Wiwynn',
      description: {
        es: 'Ingeniería de producto para plataformas de servidores Microsoft: análisis del rendimiento de primera pasada, métricas de producción, investigación de causa raíz y acciones correctivas. Colaboración diaria con equipos de México, Taiwán e India para resolver incidencias y sostener la calidad de manufactura.',
        en: 'Product-engineering support for Microsoft server platforms: First Pass Yield analysis, production metrics, root-cause investigations, and corrective actions. Daily collaboration with teams in Mexico, Taiwan, and India to resolve issues and sustain manufacturing quality.',
      },
    },
    {
      period: 'Internet de las cosas automotriz · Validación de sistemas embebidos',
      role: { es: 'Ingeniero sénior de sistemas embebidos', en: 'Senior Embedded Systems Engineer' },
      company: 'Deloitte / Dextra Technologies',
      description: {
        es: 'Validación de equipos electrónicos y programas internos para dispositivos de vehículo conectado de Verizon. Desarrollo de herramientas y bancos de prueba con Python y USB-a-CAN; análisis de CAN, J1939 y OBD-II, además de apoyo en la depuración de C/C++ con equipos distribuidos en Estados Unidos, India, Irlanda y Nueva Zelanda.',
        en: 'Hardware and firmware validation for Verizon connected-vehicle devices. Developed Python and USB-to-CAN tooling and test benches; analyzed CAN, J1939, and OBD-II, while supporting C/C++ debugging with distributed teams in the United States, India, Ireland, and New Zealand.',
      },
    },
    {
      period: 'Equipos empresariales · Confiabilidad de plataformas',
      role: { es: 'Ingeniero de validación de equipos electrónicos', en: 'Hardware Validation Engineer' },
      company: 'IBM',
      description: {
        es: 'Validación y diagnóstico de plataformas IBM POWER Systems e IBM Z: pruebas de esfuerzo, pruebas de rigidez dieléctrica (Hi-Pot), herramientas basadas en Linux e investigación de fallas en la interacción entre equipos y programas internos. Fui seleccionado para integrarme al equipo de validación de IBM Z.',
        en: 'Validated and diagnosed IBM POWER Systems and IBM Z platforms through stress and Hi-Pot testing, Linux-based tools, and hardware/firmware failure investigation. Selected to join the IBM Z validation team.',
      },
    },
    {
      period: 'Automatización industrial · Manufactura automotriz',
      role: { es: 'Ingeniero de automatización', en: 'Automation Engineer' },
      company: 'Montaño Industrial',
      description: {
        es: 'Diseño, puesta en marcha y solución de problemas de sistemas de automatización para manufactura automotriz. Integración de PLC, lógica de escalera, diagramas eléctricos, neumática, variadores de frecuencia y sistemas de visión Cognex.',
        en: 'Designed, commissioned, and troubleshot automation systems for automotive manufacturing. Integrated PLCs, Ladder logic, electrical diagrams, pneumatics, variable-frequency drives, and Cognex vision systems.',
      },
    },
    {
      period: 'Educación en electrónica · Mentoría técnica',
      role: { es: 'Profesor universitario', en: 'University Lecturer' },
      company: 'Universidad Politécnica de Sinaloa',
      description: {
        es: 'Impartí electrónica analógica y digital, sistemas de control, microcontroladores y automatización. También contribuí al desarrollo de un laboratorio de creación, la mentoría estudiantil y la participación en hackatones.',
        en: 'Taught analog and digital electronics, control systems, microcontrollers, and automation. Also contributed to Maker Lab development, student mentoring, and hackathon participation.',
      },
    },
    {
      period: 'Base práctica en ingeniería',
      role: { es: 'Técnico en electrónica', en: 'Electronics Technician' },
      company: 'Taller independiente de electrónica',
      description: {
        es: 'Trayectoria práctica de diseño, ensamblaje, fabricación de placas de circuito impreso y reparación a nivel componente. Incluye amplificadores de audio, mezcladoras, divisores de frecuencia, ecualizadores y diagnóstico analógico.',
        en: 'Hands-on background in design, assembly, PCB manufacturing, and component-level repair. Includes audio amplifiers, mixers, crossovers, equalizers, and analog troubleshooting.',
      },
    },
  ],
  skills: [
    { label: { es: 'Sistemas embebidos', en: 'Embedded systems' }, items: [
      { label: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/c/c-original.svg' },
      { label: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/cplusplus/cplusplus-original.svg' },
      { label: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { label: 'ESP32', icon: 'https://cdn.simpleicons.org/espressif' },
      { label: 'STM32', icon: 'https://cdn.simpleicons.org/stmicroelectronics', iconClass: 'skill-icon--stm32' },
      { label: 'Microchip', icon: 'https://companieslogo.com/img/orig/MCHP-a814c0cc.svg', iconClass: 'skill-icon--pic' },
      { label: 'CAN · J1939 · OBD-II', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/network.svg' },
      { label: 'UART · SPI · I²C', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/radio.svg' },
    ] },
    { label: { es: 'Electrónica y validación', en: 'Electronics & validation' }, items: { es: [
      { label: 'Diseño analógico y digital', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/circuit-board.svg' },
      { label: 'Diseño de PCB con KiCad', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/KiCad-Logo.svg' },
      { label: 'Validación de equipos y programas internos', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/badge-check.svg' },
      { label: 'Linux y pruebas de esfuerzo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/linux/linux-original.svg' },
      { label: 'Depuración y análisis de causa raíz', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/search-check.svg' },
    ], en: [
      { label: 'Analog and digital design', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/circuit-board.svg' },
      { label: 'PCB design with KiCad', icon: 'https://commons.wikimedia.org/wiki/Special:FilePath/KiCad-Logo.svg' },
      { label: 'Hardware and firmware validation', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/badge-check.svg' },
      { label: 'Linux and stress testing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/linux/linux-original.svg' },
      { label: 'Debugging and root-cause analysis', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/search-check.svg' },
    ] } },
    { label: { es: 'Automatización e ingeniería', en: 'Automation & engineering' }, items: { es: [
      { label: 'PLC y lógica de escalera', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/workflow.svg' },
      { label: 'Sistemas neumáticos', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/wind.svg' },
      { label: 'Diagramas eléctricos', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/route.svg' },
      { label: 'Bancos de prueba y herramientas de ingeniería', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/flask-conical.svg' },
      { label: 'Git y documentación técnica', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg' },
    ], en: [
      { label: 'PLCs and Ladder logic', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/workflow.svg' },
      { label: 'Pneumatic systems', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/wind.svg' },
      { label: 'Electrical diagrams', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/route.svg' },
      { label: 'Test benches and tooling', icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/flask-conical.svg' },
      { label: 'Git and engineering documentation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg' },
    ] } },
  ],
  projects: [
    { title: 'Proyecto destacado 01', technologies: ['TypeScript', 'React', 'CSS'], repository: 'https://github.com/your-username/project-one', demo: '', es: { summary: 'Una aplicación web para simplificar una tarea cotidiana y ofrecer una experiencia rápida y accesible.', challenge: 'Organizar información compleja sin aumentar la carga cognitiva de las personas usuarias.', outcome: 'Una interfaz clara, adaptable a móviles y preparada para crecer con nuevas funcionalidades.' }, en: { summary: 'A web application that simplifies an everyday task with a fast, accessible experience.', challenge: 'Organize complex information without increasing cognitive load for users.', outcome: 'A clear, mobile-friendly interface ready to grow with new functionality.' } },
    { title: 'Proyecto destacado 02', technologies: ['Node.js', 'API REST', 'PostgreSQL'], repository: 'https://github.com/your-username/project-two', demo: '', es: { summary: 'Un servicio enfocado en automatizar procesos y presentar datos útiles para la toma de decisiones.', challenge: 'Reducir pasos manuales y mantener información consistente entre distintas partes del sistema.', outcome: 'Un flujo más eficiente, documentado y fácil de mantener por el equipo.' }, en: { summary: 'A service focused on automating processes and surfacing useful data for decision-making.', challenge: 'Reduce manual steps while keeping data consistent across different parts of the system.', outcome: 'A more efficient, documented flow that is easy for a team to maintain.' } },
  ],
};

const labels = {
  es: { challenge: 'El reto', outcome: 'Resultado', repository: 'Repositorio', demo: 'Ver demo', noExperience: 'Agrega aquí tu experiencia profesional, prácticas o trabajo freelance.' },
  en: { challenge: 'Challenge', outcome: 'Outcome', repository: 'Repository', demo: 'View demo', noExperience: 'Add your professional experience, internships, or freelance work here.' },
};

window.portfolioData = { portfolio, labels };
