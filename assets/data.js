// Edit this one file to update your personal information, projects, and skills.
const portfolio = {
  name: 'Uriel Lomelí',
  links: { github: 'https://github.com/Uriel-L', linkedin: 'https://www.linkedin.com/in/uriel-lome%C3%AD-21a811426/' },
  experience: [
    {
      period: { es: 'Ingeniería de producto · Plataformas de manufactura', en: 'Product engineering · Manufacturing platforms' },
      role: { es: 'Ingeniero sénior de producto', en: 'Senior Product Engineer' },
      company: 'Wiwynn',
      description: {
        es: 'Ingeniería de producto para plataformas de servidores Microsoft: análisis del rendimiento de primera pasada, métricas de producción, investigación de causa raíz y acciones correctivas. Colaboración diaria con equipos de México, Taiwán e India para resolver incidencias y sostener la calidad de manufactura.',
        en: 'Product-engineering support for Microsoft server platforms: First Pass Yield analysis, production metrics, root-cause investigations, and corrective actions. Daily collaboration with teams in Mexico, Taiwan, and India to resolve issues and sustain manufacturing quality.',
      },
    },
    {
      period: { es: 'Internet de las cosas automotriz · Validación de sistemas embebidos', en: 'Automotive IoT · Embedded systems validation' },
      role: { es: 'Ingeniero sénior de sistemas embebidos', en: 'Senior Embedded Systems Engineer' },
      company: 'Deloitte / Dextra Technologies',
      description: {
        es: 'Validación de equipos electrónicos y programas internos para dispositivos de vehículo conectado de Verizon. Desarrollo de herramientas y bancos de prueba con Python y USB-a-CAN; análisis de CAN, J1939 y OBD-II, además de apoyo en la depuración de C/C++ con equipos distribuidos en Estados Unidos, India, Irlanda y Nueva Zelanda.',
        en: 'Hardware and firmware validation for Verizon connected-vehicle devices. Developed Python and USB-to-CAN tooling and test benches; analyzed CAN, J1939, and OBD-II, while supporting C/C++ debugging with distributed teams in the United States, India, Ireland, and New Zealand.',
      },
    },
    {
      period: { es: 'Equipos empresariales · Confiabilidad de plataformas', en: 'Enterprise systems · Platform reliability' },
      role: { es: 'Ingeniero de validación de equipos electrónicos', en: 'Hardware Validation Engineer' },
      company: 'IBM',
      description: {
        es: 'Validación y diagnóstico de plataformas IBM POWER Systems e IBM Z: pruebas de esfuerzo, pruebas de rigidez dieléctrica (Hi-Pot), herramientas basadas en Linux e investigación de fallas en la interacción entre equipos y programas internos. Fui seleccionado para integrarme al equipo de validación de IBM Z.',
        en: 'Validated and diagnosed IBM POWER Systems and IBM Z platforms through stress and Hi-Pot testing, Linux-based tools, and hardware/firmware failure investigation. Selected to join the IBM Z validation team.',
      },
    },
    {
      period: { es: 'Automatización industrial · Manufactura automotriz', en: 'Industrial automation · Automotive manufacturing' },
      role: { es: 'Ingeniero de automatización', en: 'Automation Engineer' },
      company: 'Montaño Industrial',
      description: {
        es: 'Diseño, puesta en marcha y solución de problemas de sistemas de automatización para manufactura automotriz. Integración de PLC, lógica de escalera, diagramas eléctricos, neumática, variadores de frecuencia y sistemas de visión Cognex.',
        en: 'Designed, commissioned, and troubleshot automation systems for automotive manufacturing. Integrated PLCs, Ladder logic, electrical diagrams, pneumatics, variable-frequency drives, and Cognex vision systems.',
      },
    },
    {
      period: { es: 'Educación en electrónica · Mentoría técnica', en: 'Electronics education · Technical mentoring' },
      role: { es: 'Profesor universitario', en: 'University Lecturer' },
      company: 'Universidad Politécnica de Sinaloa',
      description: {
        es: 'Impartí electrónica analógica y digital, sistemas de control, microcontroladores y automatización. También contribuí al desarrollo de un laboratorio de creación, la mentoría estudiantil y la participación en hackatones.',
        en: 'Taught analog and digital electronics, control systems, microcontrollers, and automation. Also contributed to Maker Lab development, student mentoring, and hackathon participation.',
      },
    },
    {
      period: { es: 'Base práctica en ingeniería', en: 'Hands-on engineering foundation' },
      role: { es: 'Técnico en electrónica', en: 'Electronics Technician' },
      company: 'Taller independiente de electrónica',
      description: {
        es: 'Trayectoria práctica de diseño, ensamblaje, fabricación de placas de circuito impreso y reparación a nivel componente. Incluye amplificadores de audio, mezcladoras, divisores de frecuencia, ecualizadores y diagnóstico analógico.',
        en: 'Hands-on background in design, assembly, PCB manufacturing, and component-level repair. Includes audio amplifiers, mixers, crossovers, equalizers, and analog troubleshooting.',
      },
    },
  ],
  skills: [
    { items: [
      { label: 'C', icon: '../assets/logos/c.svg' },
      { label: 'C++', icon: '../assets/logos/cplusplus.svg' },
      { label: 'Python', icon: '../assets/logos/python.svg' },
      { label: 'Linux', icon: '../assets/logos/linux.svg' },
      { label: 'ESP32', icon: '../assets/logos/espressif.svg' },
      { label: 'STM32', icon: '../assets/logos/stmicroelectronics.svg', iconClass: 'skill-icon--stm32' },
      { label: 'Microchip', icon: '../assets/logos/microchip.svg', iconClass: 'skill-icon--pic' },
      { label: 'Arduino', icon: '../assets/logos/arduino.svg', iconClass: 'skill-icon--arduino' },
      { label: 'Git', icon: '../assets/logos/git.svg' },
      { label: 'GitHub', icon: '../assets/logos/github.svg' },
      { label: 'Raspberry Pi', icon: '../assets/logos/raspberrypi.svg', iconClass: 'skill-icon--raspberry-pi' },
      { label: 'KiCad', icon: '../assets/logos/kicad.svg' },
    ] },
  ],
  projects: [
    { title: { es: 'PixelOLED Studio', en: 'PixelOLED Studio' }, technologies: [{ label: 'Python', icon: '../assets/logos/python.svg' }, { label: 'ESP32', icon: '../assets/logos/espressif.svg' }, { label: 'Arduino', icon: '../assets/logos/arduino.svg', iconClass: 'skill-icon--arduino' }], screenshots: [{ src: '../assets/projects/pixeloled-studio-macos.png', alt: { es: 'Vista del editor PixelOLED Studio en macOS', en: 'PixelOLED Studio editor running on macOS' } }, { src: '../assets/projects/pixeloled-studio-hardware.png', alt: { es: 'PixelOLED Studio conectado a hardware de demostración', en: 'PixelOLED Studio connected to demonstration hardware' } }], repository: 'https://github.com/Uriel-Engine/PixelOLED-Studio', demo: '', es: { summary: 'Editor visual de bitmaps y animaciones para pantallas OLED SSD1306, con aplicación de escritorio y firmware de demostración.', challenge: 'Crear gráficos en una matriz de píxeles y llevarlos al hardware sin convertir datos manualmente.', outcome: 'Previsualiza y exporta arreglos C; transmite diseños por USB/Serial a placas Arduino y ESP32.' }, en: { summary: 'Visual editor for SSD1306 OLED bitmaps and animations, combining a desktop application with demonstration firmware.', challenge: 'Turn pixel-grid designs into embedded-display assets without manual data conversion.', outcome: 'Preview and export C arrays; send designs over USB/Serial to Arduino and ESP32 boards.' } },
    { title: { es: 'PixelOLED Studio Web', en: 'PixelOLED Studio Web' }, technologies: [{ label: 'HTML', icon: '../assets/logos/html5.svg' }, { label: 'CSS', icon: '../assets/logos/css3.svg' }, { label: 'JavaScript', icon: '../assets/logos/javascript.svg' }], repository: 'https://github.com/Uriel-Engine/PixelOLED-Studio-Web', demo: '', es: { summary: 'Editor web para crear bitmaps y animaciones para pantallas OLED SSD1306 directamente desde el navegador.', challenge: 'Diseñar gráficos para pantallas OLED sin instalar una aplicación de escritorio ni convertir formatos manualmente.', outcome: 'Una interfaz ligera para editar y previsualizar diseños antes de integrarlos al firmware.' }, en: { summary: 'Browser-based editor for creating SSD1306 OLED bitmaps and animations directly in the browser.', challenge: 'Design OLED graphics without installing a desktop application or converting formats by hand.', outcome: 'A lightweight interface to edit and preview designs before integrating them into firmware.' } },
    { title: { es: 'Fuente de alimentación bipolar variable', en: 'Variable Bipolar Laboratory Power Supply' }, technologies: [{ label: 'KiCad', icon: '../assets/logos/kicad.svg' }, { label: { es: 'Diseño de PCB', en: 'PCB Design' }, icon: '../assets/logos/circuit-board.svg' }, { label: { es: 'Validación de hardware', en: 'Hardware Validation' }, icon: '../assets/logos/badge-check.svg' }], screenshots: [{ src: '../assets/projects/variable-bipolar-power-supply.png', alt: { es: 'Fuente de alimentación bipolar variable ensamblada', en: 'Assembled variable bipolar power supply' } }], repository: 'https://github.com/Uriel-Engine/Variable-Bipolar-Power-Supply', demo: '', es: { summary: 'Fuente lineal bipolar ajustable para prácticas de electrónica analógica, diseñada, fabricada y validada como PCB real.', challenge: 'Llevar un circuito con reguladores LM317 y LM337 desde requisitos hasta una placa manufacturable y ensamblada.', outcome: 'Primera puesta en marcha exitosa sin retrabajo; se documentó una mejora de usabilidad para la Revisión B.' }, en: { summary: 'Adjustable bipolar linear supply for analog-electronics labs, designed, manufactured, and validated as a physical PCB.', challenge: 'Take an LM317/LM337 regulator circuit from requirements through a manufacturable, assembled PCB.', outcome: 'Successful first bring-up without rework; a usability improvement was documented for Revision B.' } },
  ],
};

const labels = {
  es: { challenge: 'El reto', outcome: 'Resultado', repository: 'Repositorio', demo: 'Ver demo', noExperience: 'Agrega aquí tu experiencia profesional, prácticas o trabajo freelance.' },
  en: { challenge: 'Challenge', outcome: 'Outcome', repository: 'Repository', demo: 'View demo', noExperience: 'Add your professional experience, internships, or freelance work here.' },
};

window.portfolioData = { portfolio, labels };
