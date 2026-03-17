# Playwright + TypeScript QA Framework

Proyecto base de automatización con **Playwright + TypeScript** usando:
- **Page Object Model (POM)**
- **Fixtures reutilizables**
- **Multi-browser execution**
- **HTML Report**
- **GitHub Actions CI**

## Flujo cubierto
- Login exitoso
- Validación de usuario bloqueado
- Búsqueda/selección implícita de producto
- Add to cart
- Checkout completo
- Confirmación de orden

## Estructura

```bash
playwright-ts-saucedemo/
├── .github/workflows/playwright.yml
├── data/
├── fixtures/
├── pages/
├── tests/
├── utils/
├── .env.example
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

## Instalación

```bash
npm install
npx playwright install
```

## Variables de entorno
Copiá el archivo de ejemplo:

```bash
cp .env.example .env
```

## Ejecutar tests

```bash
npm test
```
Para visualizar el navegador testeandose usar:
npx playwright test --headed

Para ver el reporte HTML:
npx playwright show-report

Modo UI:

```bash
npm run test:ui
```

Modo headed:

```bash
npm run test:headed
```

Solo Chromium:

```bash
npm run test:chromium
```

## Sitio demo usado
El framework está preparado contra SauceDemo
