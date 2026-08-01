# Portafolio profesional

Sitio bilingüe creado únicamente con HTML, CSS y JavaScript del navegador. No usa Node.js, npm, dependencias externas ni un proceso de compilación.

## Personalizar el contenido

Edita `assets/data.js` para cambiar tu nombre, correo, GitHub, LinkedIn, experiencia, habilidades y proyectos. Los dos proyectos iniciales y sus enlaces son ejemplos.

Las páginas en español e inglés están en `es/index.html` y `en/index.html`. Actualiza la URL canónica de ambas cuando conozcas el usuario y el nombre del repositorio de GitHub.

## Vista local

Puedes abrir `index.html` directamente con tu navegador. No se requiere instalar ni ejecutar nada.

## Publicación gratuita

1. Crea un repositorio en GitHub y sube el proyecto a la rama `main`.
2. En **Settings → Pages**, selecciona **GitHub Actions** como fuente de publicación.
3. Cada envío a `main` publicará los archivos estáticos con el flujo de `.github/workflows/deploy.yml`.

Los enlaces internos son relativos, por lo que funcionan tanto en `usuario.github.io` como en un repositorio de proyecto.
