# Portafolio

Portafolio personal en Vue 3 + Vite + TypeScript + Tailwind CSS.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:5174
pnpm build    # typecheck + build a dist/
pnpm preview  # sirve dist/ localmente
```

## Estructura

- `src/components/` — secciones de la página (header, hero, about, experience, projects, contact, footer)
- `src/directives/` — directivas de animación (`v-tilt`, `v-magnetic`, `v-reveal`)
- `src/composables/` — scroll-spy del nav
- `src/data/portfolio.ts` — **todo el contenido editable** (nombre, bio, skills, experiencia, proyectos, enlaces)
- `tailwind.config.js` — tokens de color, tipografía y espaciado del diseño

Para cambiar el contenido del portafolio no hace falta tocar los componentes:
basta editar `src/data/portfolio.ts`.

## Animaciones

El movimiento no sigue al cursor de forma directa. `src/directives/animation-utils.ts`
guarda un valor objetivo y cada frame avanza una fracción hacia él, lo que produce
un desplazamiento suave con inercia. Todo se desactiva si el sistema pide
`prefers-reduced-motion: reduce`.

## Deploy

Cada push a `main` publica en GitHub Pages vía `.github/workflows/deploy.yml`.

La ruta base se calcula sola en `vite.config.ts` a partir de `GITHUB_REPOSITORY`,
así que el repo puede llamarse como sea:

- repo normal → `https://<usuario>.github.io/<repo>/`
- repo `<usuario>.github.io` → `https://<usuario>.github.io/`

Requisito único: en **Settings → Pages**, poner *Source* en **GitHub Actions**.
