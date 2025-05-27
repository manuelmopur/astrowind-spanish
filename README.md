# 🚀 AstroWind

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

🌟 _Tema de Astro con más *estrellas* y *forks* en 2022, 2023 y 2024_. 🌟

**AstroWind** es una plantilla gratuita y de código abierto para crear tu sitio web usando **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Lista para iniciar un nuevo proyecto y diseñada teniendo en cuenta las mejores prácticas web.

- ✅ Puntuaciones **listas para producción** en los informes de **PageSpeed Insights**.
- ✅ Integración con **Tailwind CSS** soportando **modo oscuro** y **_RTL_**.
- ✅ **Blog rápido y amigable con SEO** con **RSS feed** automático, soporte **MDX**, **Categorías y Etiquetas**, **Compartir en redes sociales**, ...
- ✅ **Optimización de imágenes** (usando los nuevos **Astro Assets** y **Unpic** para CDN universal de imágenes).
- ✅ Generación de **sitemap del proyecto** basado en tus rutas.
- ✅ **Etiquetas Open Graph** para compartir en redes sociales.
- ✅ **Analíticas** integradas con Google Analytics y Splitbee.

<br>

![Captura de AstroWind](https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/screenshot-astrowind-1.0.png)

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![Licencia](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Mantenido](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contribuciones Bienvenidas](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/astrowind#contributing)
[![Vulnerabilidades Conocidas](https://snyk.io/test/github/onwidget/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/astrowind)
[![Estrellas](https://img.shields.io/github/stars/onwidget/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)
[![Forks](https://img.shields.io/github/forks/onwidget/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)

<br>

<details open>
<summary>Tabla de Contenidos</summary>

- [Demo](#demo)
- [Próximamente: AstroWind 2.0 – ¡Necesitamos Tu Visión!](#-próximamente-astrowind-20--necesitamos-tu-visión)
- [En Resumen](#en-resumen)
- [Empezando](#empezando)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Comandos](#comandos)
  - [Configuración](#configuración)
  - [Desplegar](#desplegar)
- [Preguntas Frecuentes](#preguntas-frecuentes)
- [Proyectos Relacionados](#proyectos-relacionados)
- [Contribuyendo](#contribuyendo)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

</details>

<br>

## Demo

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

<br>

## 🔔 Próximamente: AstroWind 2.0 – ¡Necesitamos Tu Visión!

¡Nos embarcamos en un emocionante viaje con **AstroWind 2.0**, y queremos que seas parte de él! Actualmente estamos dando los primeros pasos en el desarrollo de esta nueva versión y tus ideas son invaluables. Únete a la discusión y comparte tus comentarios, ideas y sugerencias para ayudar a dar forma al futuro de **AstroWind**. ¡Hagamos **AstroWind 2.0** aún mejor, juntos!

[¡Comparte tus comentarios en nuestra discusión!](https://github.com/onwidget/astrowind/discussions/392)

<br>

## En Resumen

```shell
npm create astro@latest -- --template onwidget/astrowind
```

## Empezando

**AstroWind** intenta darte acceso rápido para crear un sitio web usando [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). Es un tema gratuito que se enfoca en la simplicidad, buenas prácticas y alto rendimiento.

Se utiliza muy poco javascript puro solo para proporcionar funcionalidad básica, para que cada desarrollador decida qué framework (React, Vue, Svelte, Solid JS...) usar y cómo abordar sus objetivos.

En esta versión, la plantilla admite todas las opciones en la configuración `output`, `static`, `hybrid` y `server`, pero el blog solo funciona con `prerender = true`. Estamos trabajando en la próxima versión y nuestro objetivo es hacerla totalmente compatible con SSR.

### Estructura del proyecto

Dentro de la plantilla **AstroWind**, verás las siguientes carpetas y archivos:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.ts
└── ...
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial sobre `src/components/`, pero ahí es donde nos gusta poner cualquier componente de Astro/React/Vue/Svelte/Preact.

Cualquier recurso estático, como imágenes, puede colocarse en el directorio `public/` si no requieren transformación, o en el directorio `assets/` si se importan directamente.

[![Editar AstroWind en CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/astrowind/tree/main) [![Abrir en Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/onwidget/astrowind) [![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/onwidget/astrowind)

> 🧑‍🚀 **¿Astronauta experimentado?** Elimina este archivo `README.md`. Actualiza `src/config.yaml` y los contenidos. ¡Diviértete!

<br>

### Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando             | Acción                                               |
| :------------------ | :--------------------------------------------------- |
| `npm install`       | Instala las dependencias                             |
| `npm run dev`       | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`     | Construye tu sitio para producción en `./dist/`      |
| `npm run preview`   | Previsualiza tu build localmente, antes de desplegar |
| `npm run check`     | Verifica tu proyecto en busca de errores             |
| `npm run fix`       | Ejecuta Eslint y formatea el código con Prettier     |
| `npm run astro ...` | Ejecuta comandos CLI como `astro add`, `astro preview` |

<br>

### Configuración

Archivo de configuración básico: `./src/config.yaml`

```yaml
site:
  name: 'Ejemplo'
  site: 'https://example.com'
  base: '/' # Cambia esto si necesitas desplegar en Github Pages, por ejemplo
  trailingSlash: false # Genera enlaces permanentes con o sin "/" al final

  googleSiteVerificationId: false # O algún valor,

# Metadatos SEO por defecto
metadata:
  title:
    default: 'Ejemplo'
    template: '%s — Ejemplo'
  description: 'Esta es la meta descripción por defecto del sitio Ejemplo'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Ejemplo'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@usuario_twitter'
    site: '@usuario_twitter'
    cardType: summary_large_image

i18n:
  language: es
  textDirection: ltr

apps:
  blog:
    isEnabled: true # Si el blog estará habilitado
    postsPerPage: 6 # Número de publicaciones por página

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Ruta principal del blog, puedes cambiar esto a "articulos" (/articulos)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Ruta principal de categoría /category/alguna-categoria, puedes cambiar esto a "grupo" (/grupo/alguna-categoria)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Ruta principal de etiqueta /tag/alguna-etiqueta, puedes cambiar esto a "temas" (/temas/alguna-categoria)
      robots:
        index: false

    isRelatedPostsEnabled: true # Si se mostrará un widget con publicaciones relacionadas debajo de cada post
    relatedPostsCount: 4 # Número de publicaciones relacionadas a mostrar

analytics:
  vendors:
    googleAnalytics:
      id: null # o "G-XXXXXXXXXX"

ui:
  theme: 'system' # Valores: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Personalizar diseño

Para personalizar familias de fuentes, colores u otros elementos, consulta los siguientes archivos:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Desplegar

#### Desplegar a producción (manual)

Puedes crear una build optimizada para producción con:

```shell
npm run build
```

Ahora, tu sitio web está listo para ser desplegado. Todos los archivos generados están en la carpeta
`dist`, la cual puedes subir a cualquier servicio de hosting que prefieras.

#### Desplegar en Netlify

Clona este repositorio en tu propia cuenta de GitHub y despliega en Netlify:

[![Botón de Deploy en Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Desplegar en Vercel

Clona este repositorio en tu propia cuenta de GitHub y despliega en Vercel:

[![Deploy con Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

## Preguntas Frecuentes

- ¿Por qué?
-
-

<br>

## Proyectos relacionados

- [TailNext](https://tailnext.vercel.app/) - Plantilla gratuita usando Next.js 14 y Tailwind CSS con el nuevo App Router.
- [Qwind](https://qwind.pages.dev/) - Plantilla gratuita para crear tu sitio web usando Qwik + Tailwind CSS.

## Contribuyendo

Si tienes ideas, sugerencias o encuentras errores, siéntete libre de abrir una discusión, un issue o crear un pull request.
Eso sería muy útil para todos y estaremos encantados de escuchar y actuar.

## Agradecimientos

Inicialmente creado por [onWidget](https://onwidget.com) y mantenido por una comunidad de [colaboradores](https://github.com/onwidget/astrowind/graphs/contributors).

## Licencia

**AstroWind** está licenciado bajo la licencia MIT — consulta el archivo [LICENSE](./LICENSE.md) para más detalles.
