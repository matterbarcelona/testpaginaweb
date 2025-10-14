# 📊 AUDITORÍA INTEGRAL HOME v4 — MAPEO Y COMPARACIÓN

**Fecha auditoría:** 2025-01-16  
**Snapshot solicitado:** `home-pre-upgrade-v4`  
**Página:** `/` (Home)  
**Objetivo:** Mapear secciones actuales, comparar con auditoría 2025-01-15, identificar huecos y dependencias.

---

## 🚨 HALLAZGO CRÍTICO: COMPONENTE DUPLICADO

### ⚠️ Inconsistencia Detectada: WhatIsMatter vs QueEsMatter

**Problema identificado:**
- **Index.tsx IMPORTA:** `WhatIsMatter` (línea 9: `import QueEsMatter from "@/components/home/WhatIsMatter";`)
- **Archivo renderizado:** `src/components/home/WhatIsMatter.tsx`
- **Archivo NO usado:** `src/components/home/QueEsMatter.tsx` (existe pero no se importa)
- **Auditoría del 15/01/2025 documentó:** `QueEsMatter.tsx`

**Diferencias entre los dos archivos:**

| Aspecto | WhatIsMatter.tsx (ACTUAL) | QueEsMatter.tsx (NO USADO) |
|---------|---------------------------|----------------------------|
| **H2 Título** | "Un ecosistema que impulsa la materialidad contemporánea." | "Qué es Matter Group" |
| **Icono 1** | `Building2` | `Lightbulb` |
| **Icono 2** | `TrendingUp` | `Users` |
| **Icono 3** | `Truck` | `Truck` |
| **Título pilar 2** | "TGMA Agency" | "TGMA (The Grey Matter Agency)" |
| **Descripción pilar 2** | "Visibilidad y marketing estratégico para marcas de materiales." | "Visibilidad, contenido y leads de especificación para fabricantes." |
| **Descripción pilar 3** | "Suministro integral y servicio técnico hasta la entrega en obra." | "Suministro integral y soporte técnico en obra." |
| **Layout** | Centrado, iconos arriba | Izquierda, iconos en cards con borde |
| **BG Sección** | `bg-background` | `bg-surface` |
| **CTA Scroll** | Scroll smooth a `#proceso` | Link a `/prescriptores#proceso` |
| **Analytics** | No implementado | `analyticsEvents.trackEvent()` |

**🔴 RECOMENDACIÓN:** Decidir cuál componente es la versión definitiva y eliminar/archivar el otro para evitar confusión.

---

## 🗺️ 1. ESTRUCTURA ACTUAL DE LA HOME (/ — Index.tsx)

### 1.1 Componentes de Infraestructura

```tsx
// src/pages/Index.tsx — Líneas 1-16
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
```

**Estado:** ✅ Implementados correctamente (no auditados en detalle aquí, solo se mencionan).

---

### 1.2 Secciones de Contenido (Orden de aparición)

#### **Sección 1: Hero**
- **Archivo:** `src/components/home/Hero.tsx`
- **ID:** Sin ID de sección (pero tiene `aria-label="Inicio"`)
- **H1:** "Donde los materiales inspiran, conectan y se transforman en proyectos reales."
- **Subtítulo:** "Somos el hub que une a arquitectos, fabricantes y constructores para que la innovación fluya del concepto a la obra."
- **CTAs:**
  - "Explorar materiales" → `/biblioteca` (primary)
  - "Hablar con un experto" → `/contacto` (secondary)
- **Métricas:** "+4.000 proyectos asesorados · +900 fabricantes · 3 sedes: Barcelona · Madrid · Sotogrande"
- **Imagen:** `hero-home.jpg` (alt: "Materioteca Matter Group con materiales de arquitectura e interiorismo")
- **BG:** `bg-background` (no explícito, heredado)
- **Spacing:** `min-h-[85vh]`

**✅ Auditoría:** Sin cambios respecto a documentación anterior.

---

#### **Sección 2: WhatIsMatter (⚠️ Componente en uso actual)**
- **Archivo ACTUAL:** `src/components/home/WhatIsMatter.tsx`
- **Archivo ALTERNATIVO (no usado):** `src/components/home/QueEsMatter.tsx`
- **ID:** Sin ID de sección
- **H2:** "Un ecosistema que impulsa la materialidad contemporánea."
- **Layout:** Centrado, 3 columnas (grid)
- **BG:** `bg-background`
- **Spacing:** `py-20 md:py-32`

**Pilares:**
1. **Consultoría & Materiotecas** (icono: `Building2`)
   - "Inspiración y asesoramiento técnico para especificar con seguridad."
2. **TGMA Agency** (icono: `TrendingUp`)
   - "Visibilidad y marketing estratégico para marcas de materiales."
3. **Distribución & Logística** (icono: `Truck`)
   - "Suministro integral y servicio técnico hasta la entrega en obra."

**CTA:** "Descubre cómo trabajamos" → Scroll smooth a `#proceso` (secondary)

**⚠️ Diferencias clave vs QueEsMatter.tsx:**
- Título más inspiracional vs más descriptivo
- No tiene `id="que-es-matter"` ni `aria-labelledby`
- No usa analytics tracking
- BG diferente (background vs surface)

---

#### **Sección 3: MaterialBankIntegracion**
- **Archivo:** `src/components/home/MaterialBankIntegracion.tsx`
- **ID:** `id="material-bank"`
- **H2:** "Material Bank x Matter"
- **Subtítulo:** "Solicita muestras en 24 h gracias a nuestra integración con Material Bank: un único envío, menor impacto y máxima eficiencia."
- **BG:** `bg-surface`
- **Spacing:** `section-spacing` (clase custom)

**Beneficios (3 iconos + texto):**
1. **24 horas** (icono: `Clock`) → "Muestras en tu estudio al día siguiente"
2. **Un único envío** (icono: `Package`) → "Consolidamos todas tus muestras"
3. **Menor impacto** (icono: `Leaf`) → "Máxima eficiencia y sostenibilidad"

**CTAs:**
- "Explorar biblioteca" → `/biblioteca` (primary)
- "Cómo funciona" → `/biblioteca#mb-demo` (secondary)

**✅ Auditoría:** Contenido coincide con auditoría anterior.

---

#### **Sección 4: Audiences**
- **Archivo:** `src/components/home/Audiences.tsx`
- **ID:** `id="audiences"`
- **H2 (id="audiences-heading"):** "Trabajamos junto a quienes construyen el futuro de la arquitectura"
- **Subtítulo:** "Soluciones específicas para cada perfil profesional"
- **BG:** `bg-surface`
- **Spacing:** `py-20 md:py-32`

**3 Audiencias:**
1. **Arquitectos & Interioristas** (icono: `Lightbulb`)
   - "Te ayudamos a materializar ideas con soluciones innovadoras y sostenibles."
   - CTA: "Saber más" → `/prescriptores`
2. **Fabricantes & Marcas** (icono: `Building2`)
   - "Conecta con arquitectos y obtén leads de especificación reales."
   - CTA: "Saber más" → `/fabricantes`
3. **Constructores & Buyers** (icono: `HardHat`)
   - "Simplifica tu cadena de suministro con materiales fiables y soporte técnico."
   - CTA: "Saber más" → `/constructores`

**Analytics:** ✅ Implementado (`analyticsEvents.trackEvent('audience_card_click')`)

**✅ Auditoría:** Contenido coincide con auditoría anterior.

---

#### **Sección 5: CasosExito**
- **Archivo:** `src/components/home/CasosExito.tsx`
- **ID:** `id="cases"`
- **H2 (id="cases-heading"):** "Casos de éxito"
- **BG:** `bg-surface`
- **Spacing:** `section-spacing`

**3 Casos:**
1. **Hotel Paxton Barcelona**
   - Imagen: `caso-hotel-paxton.jpg`
   - Badges: "Prescripción", "Distribución"
   - Dato: "120 habitaciones suministradas en 8 semanas"
   - CTA: "Ver proyecto" → `/proyectos/hotel-paxton-barcelona`
   
2. **Oficinas Tech Madrid**
   - Imagen: `caso-oficinas-tech.jpg`
   - Badge: "Distribución"
   - Dato: "Coordinación de 15 proveedores; −25% tiempo de instalación"
   - CTA: "Ver proyecto" → `/proyectos/oficinas-tech-madrid`

3. **Vivienda Costa Brava**
   - Imagen: `caso-vivienda-costa.jpg`
   - Badge: "Prescripción"
   - Dato: "Materialidad cálida y sostenible; maderas certificadas"
   - CTA: "Ver proyecto" → `/proyectos/vivienda-costa-brava`

**Analytics:** ✅ Implementado (`analyticsEvents.trackEvent('case_card_click')`)

**✅ Auditoría:** Contenido coincide con auditoría anterior.

---

#### **Sección 6: Process**
- **Archivo:** `src/components/home/Process.tsx`
- **ID:** `id="proceso-360"`
- **H2 (id="proceso-heading"):** "Un proceso completo, de la idea a la obra"
- **Subtítulo:** "Te acompañamos en cada fase del proyecto con expertise técnico y soporte integral"
- **BG:** `bg-background`
- **Spacing:** `py-20 md:py-32`

**5 Pasos (números tipográficos grandes):**
1. **01 — Inspírate** → "Explora la biblioteca física y digital"
2. **02 — Selecciona** → "Asesoramiento técnico personalizado"
3. **03 — Prueba** → "Recibe muestras en 24 h"
4. **04 — Especifica** → "Validación de materiales y fichas técnicas"
5. **05 — Entregamos** → "Suministro y soporte logístico a obra"

**Analytics:** ✅ Implementado (`analyticsEvents.trackEvent('process_step_view')`)

**✅ Auditoría:** Contenido coincide con auditoría anterior.

---

#### **Sección 7: TrustSignals**
- **Archivo:** `src/components/home/TrustSignals.tsx`
- **ID:** `id="confian"`
- **H2 (id="confian-heading"):** "Confían en Matter Group"
- **BG:** `bg-background`
- **Spacing:** `section-spacing`

**Logo Walls (2 imágenes):**
1. **Estudios de arquitectura**
   - Imagen: `logos-estudios.jpg`
   - Alt: "Logos de estudios de arquitectura que confían en Matter Group: GCA Architects, Estudio Mesura, El Equipo Creativo, Barozzi Veiga, Flores & Prats, Stone Designs"
   
2. **Fabricantes de materiales**
   - Imagen: `logos-fabricantes.jpg`
   - Alt: "Logos de fabricantes de materiales que confían en Matter Group: Florim Ceramiche, Cosentino, Porcelanosa, Laminam, Kerakoll, FMG"

**Testimonials Slider (rotación automática 5s):**
1. "Matter nos ahorró semanas y garantizó calidad en obra." — GCA Architects
2. "Curaduría impecable y rápida." — Estudio Mesura
3. "Suministro y soporte técnico de primer nivel." — El Equipo Creativo

**Analytics:** ✅ Implementado (`analyticsEvents.trackEvent('logo_wall_interaction')`)

**✅ Auditoría:** Contenido coincide con auditoría anterior.

---

#### **Sección 8: FinalCTA**
- **Archivo:** `src/components/home/FinalCTA.tsx`
- **ID:** `id="cta-final"`
- **H2 (id="cta-final-heading"):** "Convierte la innovación en materia."
- **Subtítulo:** "Solicita tus muestras, agenda una visita o descubre nuestras materiotecas."
- **BG:** `bg-surface`
- **Spacing:** `py-20 md:py-32`

**CTAs:**
- "Solicitar muestra" → `/biblioteca` (primary)
- "Agendar visita" → `/contacto` (secondary)

**Analytics:** ✅ Implementado (`analyticsEvents.ctaSolicitarMuestra()` / `ctaReservarVisita()`)

**✅ Auditoría:** Contenido coincide con auditoría anterior.

---

## 📊 2. COMPARACIÓN CON AUDITORÍA 2025-01-15

### 2.1 Estructura General

| Sección | Auditoría 15/01 | Estado Actual 16/01 | Cambios |
|---------|-----------------|---------------------|---------|
| 1. Hero | ✅ Documentado | ✅ Presente | Sin cambios |
| 2. Qué es Matter | ✅ Documentado como `QueEsMatter.tsx` | ⚠️ **Reemplazado por `WhatIsMatter.tsx`** | **🔴 CAMBIO CRÍTICO** |
| 3. Material Bank | ✅ Documentado | ✅ Presente | Sin cambios |
| 4. Audiences | ✅ Documentado | ✅ Presente | Sin cambios |
| 5. Casos de éxito | ✅ Documentado | ✅ Presente | Sin cambios |
| 6. Process | ✅ Documentado | ✅ Presente | Sin cambios |
| 7. Trust Signals | ✅ Documentado | ✅ Presente | Sin cambios |
| 8. Final CTA | ✅ Documentado | ✅ Presente | Sin cambios |

---

### 2.2 Huecos Identificados (Gaps)

#### 🔴 Gap 1: Componente WhatIsMatter vs QueEsMatter

**Descripción:**
- El Index.tsx importa `WhatIsMatter.tsx` pero el import dice `import QueEsMatter from "@/components/home/WhatIsMatter"`
- Existe un archivo `QueEsMatter.tsx` que no se usa pero tiene mejores prácticas:
  - IDs de sección y aria-labelledby
  - Analytics tracking
  - Background alternado (surface)
  - Link directo a `/prescriptores#proceso` vs scroll smooth

**Impacto:**
- **UX:** Título menos claro ("Un ecosistema..." vs "Qué es Matter Group")
- **Accesibilidad:** Falta `id="que-es-matter"` en versión actual
- **SEO:** Falta ancla específica para navegación interna
- **Analytics:** No se trackea interacción con CTA

**Dependencias afectadas:**
- Navbar puede tener links internos que apunten a `#que-es-matter` (verificar)
- Footer puede referenciar esta sección
- Documentación externa/interna puede usar anclas obsoletas

---

## 🧩 3. DEPENDENCIAS Y ASSETS

### 3.1 Imágenes Utilizadas

| Asset | Ubicación | Usado en | Alt Text | Formato | Lazy Load |
|-------|-----------|----------|----------|---------|-----------|
| `hero-home.jpg` | `src/assets/` | Hero | "Materioteca Matter Group con materiales de arquitectura e interiorismo" | JPG | ❌ (eager) |
| `caso-hotel-paxton.jpg` | `src/assets/` | CasosExito | "Proyecto Hotel Paxton Barcelona" | JPG | ✅ |
| `caso-oficinas-tech.jpg` | `src/assets/` | CasosExito | "Proyecto Oficinas Tech Madrid" | JPG | ✅ |
| `caso-vivienda-costa.jpg` | `src/assets/` | CasosExito | "Proyecto Vivienda Costa Brava" | JPG | ✅ |
| `logos-estudios.jpg` | `src/assets/` | TrustSignals | "Logos de estudios de arquitectura..." | JPG | ✅ |
| `logos-fabricantes.jpg` | `src/assets/` | TrustSignals | "Logos de fabricantes de materiales..." | JPG | ✅ |

---

### 3.2 IDs de Sección y Anclas

| Sección | ID Actual | aria-labelledby | Heading ID | Estado |
|---------|-----------|-----------------|------------|--------|
| Hero | ❌ (solo aria-label) | ❌ | ❌ | ⚠️ Sin ID |
| WhatIsMatter | ❌ | ❌ | ❌ | 🔴 **Falta ID** |
| MaterialBank | ✅ `material-bank` | ❌ | ❌ | ⚠️ Falta heading ID |
| Audiences | ✅ `audiences` | ✅ `audiences-heading` | ✅ `audiences-heading` | ✅ Completo |
| CasosExito | ✅ `cases` | ✅ `cases-heading` | ✅ `cases-heading` | ✅ Completo |
| Process | ✅ `proceso-360` | ✅ `proceso-heading` | ✅ `proceso-heading` | ✅ Completo |
| TrustSignals | ✅ `confian` | ✅ `confian-heading` | ✅ `confian-heading` | ✅ Completo |
| FinalCTA | ✅ `cta-final` | ✅ `cta-final-heading` | ✅ `cta-final-heading` | ✅ Completo |

**🔴 Problema crítico:** WhatIsMatter no tiene ID, rompe la coherencia de navegación interna.

---

## 🎯 4. ANÁLISIS DE IMPACTO Y RECOMENDACIONES

### 4.1 Prioridad Alta 🔴

**1. Resolver duplicación WhatIsMatter vs QueEsMatter**

**Decisión recomendada:** Restaurar QueEsMatter y archivar WhatIsMatter.

**Razones:**
- ✅ Mejor semántica (ID, aria-labelledby)
- ✅ Analytics completo
- ✅ Título más claro para SEO
- ✅ Background alternado correcto
- ✅ Iconografía más representativa

**Cambios necesarios:**
```tsx
// src/pages/Index.tsx línea 9
- import QueEsMatter from "@/components/home/WhatIsMatter";
+ import QueEsMatter from "@/components/home/QueEsMatter";
```

---

### 4.2 Métricas de Calidad Actual

| Área | Puntuación Actual | Puntuación Objetivo | Gap |
|------|-------------------|---------------------|-----|
| **Estructura** | 3.5/5 | 5/5 | 1.5 |
| **Contenido** | 5/5 | 5/5 | 0 |
| **Accesibilidad** | 4.5/5 | 5/5 | 0.5 |
| **SEO** | 4.5/5 | 5/5 | 0.5 |
| **Rendimiento** | 4/5 | 5/5 | 1 |
| **Analytics** | 4/5 | 5/5 | 1 |

**Promedio: 4.25/5** (Bueno, con margen de mejora)

---

## 📋 5. CHECKLIST DE VALIDACIÓN

### Contenido
- [x] 8 secciones principales mapeadas
- [x] Todos los textos documentados
- [x] Todos los CTAs identificados con destinos
- [x] Imágenes inventariadas con alt texts
- [x] Iconografía documentada

### Estructura
- [x] IDs de sección identificados
- [x] aria-labels verificados
- [x] Jerarquía H1-H3 validada
- [x] Spacing patterns documentados

### Diferencias con Auditoría 15/01
- [x] WhatIsMatter vs QueEsMatter identificado como cambio crítico
- [x] Resto de secciones sin cambios confirmado
- [x] Assets sin cambios confirmado

---

## 🎯 6. CONCLUSIONES

### Estado Actual: 🟡 BUENO CON ALERTA CRÍTICA

**Fortalezas:**
- ✅ 7 de 8 secciones mantienen coherencia con auditoría anterior
- ✅ Accesibilidad alta en mayoría de componentes
- ✅ Analytics implementado en casi todos los CTAs
- ✅ Diseño visual premium y coherente

**Debilidades Críticas:**
- 🔴 **Componente duplicado WhatIsMatter/QueEsMatter crea confusión**
- 🔴 **Sección 2 sin ID rompe navegación interna**
- ⚠️ Hero sin ID
- ⚠️ Imágenes en JPG (no optimizadas)

---

**FIN DEL DOCUMENTO**  
**Snapshot:** `home-pre-upgrade-v4`  
**Fecha:** 2025-01-16  
**Próxima acción:** Resolver duplicación antes de aplicar mejoras.
