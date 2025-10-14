# AUDITORÍA UX/UI — Matter Group v1
**Fecha:** 2025-01-15  
**Objetivo:** Auditar y mejorar diseño, UX, accesibilidad y rendimiento sin eliminar contenido

---

## 1. AUDITORÍA ACTUAL

### ✅ Aspectos Positivos
- **Design System**: Tokens bien definidos en `index.css` (colores HSL, tipografía, espaciados)
- **Tailwind Config**: Usa semantic tokens correctamente
- **Componentes Base**: Button, Card, Input, Badge tienen buenas bases
- **Navbar**: Sticky con shadow en scroll, active states
- **Footer**: Estructura clara con newsletter y enlaces
- **StickyCTA**: Contextual por página, buena UX
- **Animaciones**: fade-in, scale definidas en tailwind

### ⚠️ Áreas de Mejora Identificadas

#### A. JERARQUÍA VISUAL Y ESPACIADO
- **Inconsistencia en spacing**: Algunos componentes usan valores arbitrarios (py-20, py-32) en lugar de tokens
- **Spacing entre secciones**: Falta ritmo visual consistente (80-120px entre secciones)
- **Márgenes H1-H3**: Necesitan ajuste para mejor jerarquía
- **Grid inconsistente**: No todas las páginas usan max-width 1280px correctamente

#### B. TIPOGRAFÍA
- **H1/H2/H3 no siempre usan tokens**: Muchos componentes usan clases directas (text-4xl) en lugar de text-h1
- **Line-height inconsistente**: Algunos textos largos no tienen leading adecuado
- **Text-balance**: No se aplica consistentemente en títulos largos

#### C. COLORES Y CONTRASTE
- **Valores hardcodeados**: Algunos componentes usan #17181A, #9EA3A8 directamente
- **Contraste en muted-foreground**: Verificar AA (4.5:1 mínimo)
- **Hover states**: Necesitan color consistente (#E08C45)

#### D. COMPONENTES UI

**Botones:**
- ✅ Variantes bien definidas
- ⚠️ Transitions podrían ser más suaves (añadir transform scale)
- ⚠️ Focus ring necesita ser más visible

**Cards:**
- ✅ Hover effect presente
- ⚠️ Shadow podría ser más sutil en reposo
- ⚠️ Padding interior no siempre consistente

**Formularios:**
- ⚠️ Focus state correcto pero falta feedback visual más claro
- ⚠️ Error states necesitan mejora (color + iconos)
- ⚠️ Labels no siempre tienen for attribute

**Badges:**
- ✅ Hover scale presente
- ⚠️ Necesitan variantes personalizadas (.c-badge--pres, --dist, --tgma)

#### E. RESPONSIVIDAD
- ⚠️ Algunos hero sections muy altos en móvil
- ⚠️ Grid de métricas/KPIs podría colapsar mejor
- ⚠️ StickyCTA mobile podría interferir con teclado (ya implementado check)

#### F. MICROINTERACCIONES
- ⚠️ Links en footer/navbar necesitan underline animation más visible
- ⚠️ Cards podrían tener lift effect más pronunciado
- ⚠️ Scroll reveal falta en algunas secciones largas

#### G. ACCESIBILIDAD
- ✅ Skip to content presente
- ✅ ARIA labels en navbar y sticky CTA
- ⚠️ Alt text en imágenes: revisar que todas sean descriptivas
- ⚠️ Focus visible: necesita ser cobre en TODOS los elementos
- ⚠️ Formularios: roles y aria-describedby faltan en algunos campos
- ⚠️ Navegación teclado: revisar orden tab en todas las páginas

#### H. PERFORMANCE VISUAL
- ⚠️ Imágenes: verificar WebP/AVIF y lazy load
- ⚠️ CLS: hero images podrían causar layout shift
- ⚠️ Preload: fonts Inter y hero principal

#### I. CONSISTENCIA DE MARCA
- ✅ Tipografía Inter consistente
- ✅ Cobre como acento funcional
- ⚠️ Iconografía: mix de lucide icons (revisar consistencia visual)
- ⚠️ Tono de voz: revisar copy para mantener premium/técnico/humano

---

## 2. PLAN DE MEJORAS (PRIORIZADO)

### 🔴 CRÍTICO (Impacto Alto, Esfuerzo Bajo)

1. **Contraste AA en todos los textos**
   - Verificar muted-foreground sobre backgrounds
   - Ajustar si necesario

2. **Focus visible cobre en todos los interactivos**
   - Links, botones, inputs, cards clickables
   - Ring 2px con offset

3. **Spacing consistente entre secciones**
   - Usar py-20 md:py-28 como estándar
   - Separación 80-120px visual

4. **Tipografía con tokens**
   - Reemplazar text-4xl por text-h1, etc.
   - Añadir text-balance en títulos

### 🟡 IMPORTANTE (Impacto Medio, Esfuerzo Medio)

5. **Mejoras en formularios**
   - Labels con for
   - Error states con iconos y aria-describedby
   - Success feedback visual

6. **Cards hover más elegante**
   - Shadow sutil → shadow elevada
   - Border accent/20 → accent/50
   - Transform scale(1.02)

7. **Microinteracciones en links**
   - Underline animation más visible
   - Hover color transition suave

8. **Badges personalizados**
   - .c-badge--pres (verde/azul)
   - .c-badge--dist (naranja)
   - .c-badge--tgma (morado)

### 🟢 MEJORA CONTINUA (Impacto Bajo, Pulir)

9. **Optimización de imágenes**
   - WebP + lazy load
   - Preload críticas

10. **Scroll reveal animations**
    - Intersection Observer en secciones largas
    - Fade-in-up staggered

---

## 3. CHECKLIST DE IMPLEMENTACIÓN

### Design System
- [ ] Revisar y completar tokens en index.css
- [ ] Crear variantes badge personalizadas
- [ ] Estandarizar spacing (section-spacing utility)

### Componentes
- [ ] Button: mejorar focus ring
- [ ] Card: mejorar hover effect
- [ ] Input: mejorar error/success states
- [ ] Badge: crear variantes rol

### Páginas
- [ ] Home: revisar spacing y tipografía
- [ ] Prescriptores: revisar spacing y tipografía
- [ ] Fabricantes: revisar spacing y tipografía
- [ ] Constructores: revisar spacing y tipografía
- [ ] Biblioteca: revisar spacing y tipografía
- [ ] Proyectos: revisar spacing y tipografía
- [ ] Journal: revisar spacing y tipografía
- [ ] Sobre: revisar spacing y tipografía
- [ ] Contacto: revisar spacing y tipografía

### Accesibilidad
- [ ] Verificar contraste AA en todos los textos
- [ ] Focus visible cobre en todos los interactivos
- [ ] Alt text descriptivo en todas las imágenes
- [ ] Labels con for en todos los inputs
- [ ] Error states accesibles (aria-invalid, aria-describedby)
- [ ] Navegación teclado completa

### Performance
- [ ] Imágenes WebP/AVIF
- [ ] Lazy load en imágenes no críticas
- [ ] Preload Inter font y hero images
- [ ] Verificar CLS < 0.1

---

## 4. MÉTRICAS DE ÉXITO

### Antes (Estimado)
- Performance: ~85
- Accessibility: ~85
- SEO: ~90
- CLS: ~0.15
- Contrast ratio: ~4.2:1 (algunas áreas)

### Después (Objetivo)
- Performance: ≥90
- Accessibility: ≥95
- SEO: ≥95
- CLS: <0.1
- Contrast ratio: ≥4.5:1 (AA en todos)

---

## 5. NOTAS

- **No eliminar contenido**: Solo mejorar presentación
- **Respetar tono**: Premium, técnico, humano, claro
- **Mobile-first**: Verificar en 360px, 768px, 1024px, 1280px
- **Prefers-reduced-motion**: Respetar en todas las animaciones

---

**Próximos pasos:**
1. Aplicar mejoras críticas en design system
2. Mejorar componentes base (Button, Card, Input, Badge)
3. Revisar y mejorar cada página sistemáticamente
4. Validar con Lighthouse
5. Documentar cambios aplicados
