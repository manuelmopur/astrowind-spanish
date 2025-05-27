import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Aplicación Móvil',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Páginas',
      links: [
        {
          text: 'Características (Enlace Ancla)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Servicios',
          href: getPermalink('/services'),
        },
        {
          text: 'Precios',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Nosotros',
          href: getPermalink('/about'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
        {
          text: 'Términos',
          href: getPermalink('/terms'),
        },
        {
          text: 'Política de Privacidad',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Generación de Leads',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Ventas (Formato Largo)',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Detalles de Producto (o Servicios)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Próximamente o Pre-Lanzamiento',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Suscripción',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Lista de Artículos del Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Artículo',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Artículo (con MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Página de Categoría',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Página de Etiqueta',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Descargar', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Producto',
      links: [
        { text: 'Características', href: '#' },
        { text: 'Seguridad', href: '#' },
        { text: 'Equipo', href: '#' },
        { text: 'Empresa', href: '#' },
        { text: 'Casos de Éxito', href: '#' },
        { text: 'Precios', href: '#' },
        { text: 'Recursos', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'API para Desarrolladores', href: '#' },
        { text: 'Socios', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Escritorio', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Documentación', href: '#' },
        { text: 'Foro de la Comunidad', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
        { text: 'Habilidades', href: '#' },
        { text: 'Estado', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Nosotros', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Empleo', href: '#' },
        { text: 'Prensa', href: '#' },
        { text: 'Inclusión', href: '#' },
        { text: 'Impacto Social', href: '#' },
        { text: 'Tienda', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="logo onWidget" loading="lazy"></img>
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · Todos los derechos reservados.
  `,
};
