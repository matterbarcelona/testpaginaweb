# QA Continuo - Matter Group

Checklist de verificación que debe ejecutarse después de cada cambio en el proyecto.

---

## 📋 Índice Rápido

- [Navegación y Routing](#navegación-y-routing)
- [Performance Web Vitals](#performance-web-vitals)
- [Accesibilidad y Contraste](#accesibilidad-y-contraste)
- [Formularios y Validación](#formularios-y-validación)
- [SEO y Meta Tags](#seo-y-meta-tags)
- [CTAs y Conversión](#ctas-y-conversión)
- [Responsive y Breakpoints](#responsive-y-breakpoints)
- [Analytics y Tracking](#analytics-y-tracking)

---

## Navegación y Routing

### Enlaces Internos
- [ ] Logo en Navbar redirige a `/` (home)
- [ ] Todos los enlaces del menú principal funcionan:
  - [ ] `/prescriptores`
  - [ ] `/fabricantes`
  - [ ] `/constructores`
  - [ ] `/biblioteca`
  - [ ] `/proyectos`
  - [ ] `/eventos`
  - [ ] `/journal`
  - [ ] `/sobre`
  - [ ] `/contacto`
- [ ] Enlaces en Footer funcionan correctamente
- [ ] Navegación móvil (hamburger menu) despliega y cierra correctamente
- [ ] No hay enlaces rotos (404) en el sitio

### Estados Activos
- [ ] Estado activo visible en Navbar (current page highlighted)
- [ ] Color de estado activo usa token de diseño (`text-primary` o similar)
- [ ] Estado hover en navegación funciona correctamente
- [ ] Focus state visible en navegación por teclado (Tab)

### Comportamiento
- [ ] Scroll to top al cambiar de página
- [ ] No hay flash de contenido sin estilos (FOUC)
- [ ] Transiciones entre páginas suaves (fade)
- [ ] Breadcrumbs funcionan en páginas de detalle (si aplica)

---

## Performance Web Vitals

### Largest Contentful Paint (LCP)

**Home - Target: < 1.8s (móvil)**
- [ ] Hero image/content carga en < 1.8s
- [ ] Métricas en Chrome DevTools Lighthouse
- [ ] Test en móvil real o throttling 4G
- [ ] Precarga de recursos críticos implementada
- [ ] Imágenes hero optimizadas (WebP, compresión)

**Páginas Interiores - Target: < 2.2s (móvil)**
- [ ] `/prescriptores` LCP < 2.2s
- [ ] `/fabricantes` LCP < 2.2s
- [ ] `/constructores` LCP < 2.2s
- [ ] `/biblioteca` LCP < 2.2s
- [ ] `/proyectos` LCP < 2.2s
- [ ] `/eventos` LCP < 2.2s
- [ ] `/journal` LCP < 2.2s
- [ ] `/sobre` LCP < 2.2s
- [ ] `/contacto` LCP < 2.2s

### Cumulative Layout Shift (CLS)

**Target: < 0.1 en todas las páginas**
- [ ] Home CLS < 0.1
- [ ] Prescriptores CLS < 0.1
- [ ] Fabricantes CLS < 0.1
- [ ] Constructores CLS < 0.1
- [ ] Biblioteca CLS < 0.1
- [ ] Proyectos CLS < 0.1
- [ ] Eventos CLS < 0.1
- [ ] Journal CLS < 0.1
- [ ] Sobre CLS < 0.1
- [ ] Contacto CLS < 0.1

**Prevención CLS**
- [ ] Imágenes tienen `width` y `height` definidos
- [ ] Fonts usan `font-display: swap` o `optional`
- [ ] No hay contenido inyectado dinámicamente arriba del fold
- [ ] Skeleton loaders para contenido dinámico
- [ ] Espacio reservado para anuncios/embeds (si aplica)

### First Input Delay (FID) / Interaction to Next Paint (INP)
- [ ] FID < 100ms en todas las páginas
- [ ] INP < 200ms en interacciones clave
- [ ] JavaScript no bloquea el hilo principal > 50ms
- [ ] Event handlers optimizados (debounced/throttled)

### Lighthouse Score
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 90

---

## Accesibilidad y Contraste

### Contrast Ratio

**Target: ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande y UI**

#### Texto sobre Fondos
- [ ] Texto principal (#E2E2E2) sobre fondo oscuro (#121212) ≥ 4.5:1
- [ ] Headings blancos (#FAFAFA) sobre fondo oscuro ≥ 4.5:1
- [ ] Texto cobre (#C8762C) sobre fondo oscuro ≥ 3:1 (UI/enlaces)
- [ ] Texto en botones primarios tiene contraste suficiente
- [ ] Texto en badges/chips cumple ratio mínimo

#### Herramientas de Verificación
- [ ] Test con Chrome DevTools > Lighthouse > Accessibility
- [ ] Test con WebAIM Contrast Checker
- [ ] Test manual en modo "Inspect" > Contrast ratio indicator
- [ ] Verificar con simulador de daltonismo

### Navegación por Teclado
- [ ] Todos los elementos interactivos accesibles con Tab
- [ ] Focus indicators visibles (outline o ring)
- [ ] Skip to content link funciona (primera Tab)
- [ ] Modals/dialogs se pueden cerrar con Escape
- [ ] Dropdowns navegables con flechas

### ARIA y Semántica
- [ ] Botones tienen `aria-label` descriptivos
- [ ] Imágenes tienen `alt` text relevante
- [ ] Formularios usan `<label>` asociados
- [ ] Roles ARIA correctos (`role="navigation"`, `role="main"`, etc.)
- [ ] Estados dinámicos usan `aria-live` regions

### Modo Alto Contraste
- [ ] Toggle de alto contraste funciona en Footer
- [ ] Colores se ajustan correctamente al activar
- [ ] Textos permanecen legibles

### Reduced Motion
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] Parallax y scroll effects se desactivan si procede
- [ ] Transiciones críticas permanecen accesibles

---

## Formularios y Validación

### Formulario Contacto (`/contacto`)

#### Validación Cliente
- [ ] Validación en tiempo real con Zod
- [ ] Campo "Nombre" requerido, max 100 caracteres
- [ ] Campo "Email" valida formato correcto
- [ ] Campo "Empresa" opcional pero validado si se rellena
- [ ] Campo "Ciudad" validado
- [ ] Select "Soy" tiene opciones: Prescriptor / Fabricante / Comprador
- [ ] Campo "Mensaje" requerido, max 1000 caracteres
- [ ] Errores se muestran inline bajo cada campo
- [ ] Color de error usa token de diseño (`text-destructive`)

#### Consentimiento RGPD
- [ ] Checkbox RGPD visible y requerido
- [ ] Texto legal claro: "Acepto la política de privacidad..."
- [ ] No se permite envío sin consentimiento
- [ ] Link a política de privacidad funciona

#### Estados y Feedback
- [ ] Botón "Enviar" deshabilitado si validación falla
- [ ] Loading state durante envío (spinner + texto "Enviando...")
- [ ] Toast de éxito aparece tras envío correcto
- [ ] Toast de error aparece si falla
- [ ] Mensaje éxito: "¡Gracias! Te contactaremos en 24 h."
- [ ] Mensaje error: "Hubo un problema. Revisa tu email."
- [ ] Toast se cierra automáticamente en 4s
- [ ] Formulario se resetea tras éxito

#### Tracking GA4
- [ ] Evento `form_submit_success` se dispara al enviar
- [ ] Evento incluye tipo de usuario (Prescriptor/Fabricante/Comprador)
- [ ] Error en envío no dispara evento de éxito
- [ ] Datos sensibles NO se envían a Analytics

### Newsletter (Footer)
- [ ] Campo email validado
- [ ] Botón suscripción funciona
- [ ] Mensaje de confirmación aparece
- [ ] Tracking de suscripción a newsletter

---

## SEO y Meta Tags

### Meta Tags Únicos por Página

#### Home `/`
- [ ] `<title>` único: "Matter Group | Materiales de Arquitectura y Diseño"
- [ ] Meta description única ≤ 155 caracteres
- [ ] H1 único: "La nueva forma de trabajar con materiales."
- [ ] Canonical tag correcto
- [ ] Open Graph tags (og:title, og:description, og:image)

#### Prescriptores `/prescriptores`
- [ ] Title: "Arquitectos & Interioristas | Matter Group"
- [ ] Meta description con beneficio claro
- [ ] H1 único: "Tu partner en materialidad de proyectos."
- [ ] Canonical, OG tags

#### Fabricantes `/fabricantes`
- [ ] Title: "TGMA - Marketing para Fabricantes | Matter Group"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

#### Constructores `/constructores`
- [ ] Title: "Constructores & Buyers | Matter Group"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

#### Biblioteca `/biblioteca`
- [ ] Title: "Biblioteca de Materiales | Matter Group"
- [ ] Meta description
- [ ] H1 único: "Muestra, compara y elige."
- [ ] Canonical, OG tags

#### Proyectos `/proyectos`
- [ ] Title: "Proyectos Realizados | Matter Group"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

#### Eventos `/eventos`
- [ ] Title: "Eventos y Workshops | Matter Group"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

#### Journal `/journal`
- [ ] Title: "It Matters Journal | Matter Group"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

#### Sobre `/sobre`
- [ ] Title: "Sobre Matter Group | Materialidad Curada"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

#### Contacto `/contacto`
- [ ] Title: "Contacto | Matter Group"
- [ ] Meta description
- [ ] H1 único
- [ ] Canonical, OG tags

### Jerarquía de Headings

**Cada página debe tener:**
- [ ] Un solo H1 (título principal)
- [ ] H2 para secciones principales
- [ ] H3 para subsecciones
- [ ] No saltar niveles (H1 → H3 sin H2)
- [ ] Orden lógico y semántico

### Schema.org Structured Data

**Implementar según tipo de contenido:**
- [ ] `Organization` schema en Home
- [ ] `LocalBusiness` schema con sedes (BCN, MAD, SOT)
- [ ] `Service` schema en páginas de audiencia
- [ ] `Product` schema en Biblioteca (materiales)
- [ ] `Event` schema en páginas de eventos
- [ ] `Article` schema en Journal posts
- [ ] `FAQPage` schema en Contacto
- [ ] Validar con Google Rich Results Test

### Robots y Sitemap
- [ ] `robots.txt` configurado correctamente
- [ ] Sitemap.xml generado y actualizado
- [ ] No hay páginas duplicadas en sitemap
- [ ] Páginas 404/500 excluidas de indexación

---

## CTAs y Conversión

### StickyCTA Comportamiento

**Visibilidad Desktop**
- [ ] Aparece tras 25% de scroll en páginas relevantes
- [ ] Transición suave (fade-in + slide-up)
- [ ] No obstruye contenido importante
- [ ] Se oculta al llegar a footer

**Visibilidad Móvil**
- [ ] Siempre visible (fixed bottom)
- [ ] Botones redondeados y sombra sutil
- [ ] No cubre contenido crítico
- [ ] Z-index correcto (por encima de contenido, debajo de modals)

### CTAs Contextuales por Página

#### Home `/`
- [ ] CTA primario: "Solicitar muestra"
- [ ] CTA secundario: "Reservar visita"
- [ ] Tracking `cta_solicitar_muestra` funciona
- [ ] Tracking `cta_reservar_visita` funciona

#### Prescriptores `/prescriptores`
- [ ] CTA primario: "Solicitar muestra gratuita"
- [ ] CTA secundario: "Reservar visita"
- [ ] WhatsApp link correcto (validado y encoded)
- [ ] Tracking correcto

#### Fabricantes `/fabricantes`
- [ ] CTA primario: "Quiero ser partner TGMA"
- [ ] CTA secundario: "Solicitar reunión"
- [ ] Link a contacto funciona
- [ ] Tracking correcto

#### Constructores `/constructores`
- [ ] CTA primario: "Solicitar presupuesto"
- [ ] CTA secundario: "Hablar con técnico"
- [ ] Tracking `cta_solicitar_presupuesto` funciona
- [ ] Tracking correcto

#### Biblioteca `/biblioteca`
- [ ] CTA: "Solicitar muestra"
- [ ] Aparece tras seleccionar materiales
- [ ] Tracking de búsqueda funciona: `biblioteca_busqueda`
- [ ] Tracking de filtros funciona

#### Proyectos `/proyectos`
- [ ] CTA: "Quiero una propuesta similar"
- [ ] Link correcto a contacto o formulario
- [ ] Tracking correcto

#### Journal `/journal`
- [ ] CTA newsletter visible
- [ ] CTA: "Leer más artículos"
- [ ] Tracking de clics en artículos

#### Contacto `/contacto`
- [ ] Formulario es el CTA principal
- [ ] No hay StickyCTA (redundante)
- [ ] Botón submit visible

### Microcopy Conversional
- [ ] Textos persuasivos y claros
- [ ] Beneficio evidente: "24 h", "gratuito", "sin compromiso"
- [ ] Urgencia sutil sin agresividad
- [ ] Tono coherente con marca Matter

---

## Responsive y Breakpoints

### Mobile (360px - 767px)
- [ ] Layout adaptado a pantalla pequeña
- [ ] Texto legible sin zoom (≥ 16px base)
- [ ] Botones táctiles ≥ 44x44px
- [ ] Navbar mobile funciona correctamente
- [ ] StickyCTA no obstruye contenido
- [ ] Formularios usables sin scroll horizontal
- [ ] Imágenes responsive (no overflow)

### Tablet (768px - 1279px)
- [ ] Grid de 2 columnas en cards (Biblioteca, Proyectos)
- [ ] Espaciado adecuado entre elementos
- [ ] Navbar muestra enlaces o hamburger según diseño
- [ ] CTAs visibles y accesibles

### Desktop (1280px+)
- [ ] Grid de 3-4 columnas en cards
- [ ] Hero ocupa espacio óptimo
- [ ] Navbar horizontal completo
- [ ] Espaciado generoso (80px entre secciones)
- [ ] StickyCTA aparece tras scroll

### Landscape Móvil
- [ ] Hero no ocupa 100vh (ajustado)
- [ ] CTAs accesibles sin scroll
- [ ] Navbar no obstruye contenido

---

## Analytics y Tracking

### Google Analytics 4

**Pageviews**
- [ ] Todas las páginas trackean correctamente
- [ ] Route changes registrados (SPA tracking)
- [ ] No hay duplicados de pageviews

**Eventos Principales**
- [ ] `cta_solicitar_muestra` - Clic en CTA muestra
- [ ] `cta_reservar_visita` - Clic en CTA visita
- [ ] `cta_solicitar_presupuesto` - Clic en CTA presupuesto
- [ ] `form_submit_success` - Formulario enviado correctamente
- [ ] `biblioteca_busqueda` - Uso de buscador/filtro
- [ ] `scroll_75` - Usuario llega al 75% del scroll
- [ ] `lead_tag` - Lead clasificado por tipo

**Event Parameters**
- [ ] Eventos incluyen parámetros relevantes:
  - `page_path`
  - `user_type` (Prescriptor/Fabricante/Comprador)
  - `button_text` o `cta_text`
- [ ] No se envían datos sensibles (emails, mensajes)

### Meta Pixel

**Si implementado:**
- [ ] Pixel ID configurado correctamente
- [ ] PageView se dispara en cada ruta
- [ ] Lead event en formulario submit
- [ ] No hay errores en consola

### Scroll Tracking
- [ ] Hook `useScrollTracking` funciona
- [ ] Evento `scroll_75` se dispara una sola vez por sesión/página
- [ ] No afecta performance (throttled)

---

## ✅ Checklist Pre-Deploy

Antes de cada deploy a producción, verificar:

### Critical
- [ ] Todos los enlaces funcionan (no hay 404s)
- [ ] Formulario de contacto envía correctamente
- [ ] CTAs visibles en todas las páginas clave
- [ ] Performance Lighthouse ≥ 85 en todas las métricas
- [ ] No hay errores en consola del navegador
- [ ] No hay warnings críticos en build

### High Priority
- [ ] LCP < 2.2s en móvil en todas las páginas
- [ ] CLS < 0.1 en todas las páginas
- [ ] Contrast ratio ≥ 4.5:1 verificado
- [ ] Meta tags únicos en todas las páginas
- [ ] Tracking GA4 funciona correctamente

### Medium Priority
- [ ] Schema.org implementado y validado
- [ ] Imágenes optimizadas (WebP, compresión)
- [ ] Fonts precargados
- [ ] Animaciones respetan reduced motion

### Nice to Have
- [ ] Sitemap actualizado
- [ ] Robots.txt correcto
- [ ] Open Graph images optimizadas
- [ ] Twitter cards configuradas

---

## 🔧 Herramientas Recomendadas

### Performance
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) (Chrome DevTools)
- [WebPageTest](https://www.webpagetest.org/) (real device testing)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Accessibility
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/) (Chrome extension)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)

### SEO
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Screaming Frog SEO Spider](https://www.screamingfrogseoseo.co.uk/seo-spider/)
- [Meta Tags Validator](https://metatags.io/)

### Analytics
- [Google Tag Assistant](https://tagassistant.google.com/)
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) (Chrome extension)
- [GA Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)

---

## 📝 Registro de QA

Después de cada verificación, documenta:

**Fecha:** [YYYY-MM-DD]  
**Branch:** [nombre-rama]  
**Verificado por:** [nombre]  
**Resultado:** ✅ Pass / ⚠️ Issues encontrados / ❌ Fail  
**Issues críticos:** [lista]  
**Issues menores:** [lista]  
**Acciones tomadas:** [resumen]

---

**Última actualización:** 2025-10-13  
**Versión:** 1.0 - Mejoras Q4
