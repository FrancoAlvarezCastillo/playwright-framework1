# Framework de Automatización E2E con Playwright (TypeScript)

Este proyecto es un framework de automatización de pruebas end-to-end (E2E) construido con **Playwright + TypeScript**, diseñado para validar flujos reales de usuario en una aplicación web (escenario de e-commerce).

Sigue buenas prácticas de la industria como **Page Object Model (POM)**, uso de **fixtures**, y separación de datos de prueba, garantizando escalabilidad, mantenibilidad y una arquitectura limpia.

---

## Características

- Pruebas End-to-End (E2E)
- Playwright Test Runner
- Soporte con TypeScript
- Page Object Model (POM)
- Fixtures personalizadas (inyección de dependencias)
- Datos de prueba estructurados (JSON)
- Reportes HTML
- Ejecución en paralelo
- Auto-waits (sin esperas manuales)
- Soporte multi-navegador

---

## Estructura del Proyecto
playwright-ts-saucedemo/
│
├── tests/ # Casos de prueba (lógica de negocio)
│ ├── auth/
│ │ └── login.spec.ts
│ └── checkout/
│ └── checkout-flow.spec.ts
│
├── pages/ # Page Object Model (abstracción de UI)
├── fixtures/ # Configuración reutilizable (DI)
├── data/ # Datos de prueba (JSON)
├── utils/ # Funciones auxiliares
│
├── playwright.config.ts # Configuración global
├── package.json
└── README.md


---

## Flujos de Prueba Cubiertos

### Flujo de Autenticación
- ✔️ Login exitoso con usuario válido
- ❌ Intento de login con usuario bloqueado

### Flujo de Compra (Checkout)
- ✔️ El usuario inicia sesión
- ✔️ Selecciona un producto
- ✔️ Agrega el producto al carrito
- ✔️ Completa el proceso de compra
- ✔️ Verifica la confirmación de la orden

---

## Diseño de Pruebas

### Page Object Model (POM)
Se abstraen las interacciones con la interfaz en clases separadas, lo que permite reutilización y fácil mantenimiento.

### Fixtures
Se utilizan fixtures personalizadas para inyectar dependencias (como páginas) en los tests.

### Asserts (Validaciones)
Se utilizan las validaciones de Playwright (`expect`):
- `toHaveURL`
- `toBeVisible`
- `toHaveText`

### Estrategia de Espera
El framework utiliza **auto-waits de Playwright**, evitando el uso de esperas fijas (`sleep`), lo que mejora la estabilidad.

---

## Cómo ejecutar el proyecto

```bash
npm install
npx playwright install
npm test

Para visualizar el navegador testeandose usar:
npx playwright test --headed

Para ver el reporte HTML:
npx playwright show-report
