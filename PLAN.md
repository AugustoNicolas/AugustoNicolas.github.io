# Museo 2D Interactivo — Plan de Implementación

## Objetivo

Crear una experiencia de portafolio interactiva en 2D con perspectiva top-down.

El jugador podrá explorar un museo que representa el portafolio profesional y descubrir diferentes proyectos mediante exhibiciones, objetos, salas y zonas especiales.

La experiencia debe sentirse como un pequeño videojuego terminado, no como una demo técnica de Phaser.

---

# REGLA DE EJECUCIÓN

El desarrollo se realiza mediante fases secuenciales.

Cada fase termina con un **GATE**.

La IA:

* Puede analizar.
* Puede investigar.
* Puede proponer.
* Puede comparar alternativas.
* Puede preparar documentación.

Pero **NO puede avanzar a la siguiente fase sin aprobación explícita del usuario**.

Si aparece una decisión importante no definida en este documento:

> DETENERSE Y PREGUNTAR.

Nunca asumir una decisión importante.

---

# GATE 0 — Auditoría del Proyecto Actual

## Objetivo

Entender el sistema existente antes de modificarlo.

### Tareas

* [ ] Identificar la versión de Phaser.
* [ ] Identificar el punto de entrada del juego.
* [ ] Identificar cómo se inicializa Phaser.
* [ ] Identificar cómo se cargan los assets.
* [ ] Identificar si existen PNG, JPG, WebP o SVG.
* [ ] Identificar spritesheets.
* [ ] Identificar texture atlases.
* [ ] Identificar tilemaps.
* [ ] Identificar gráficos generados mediante código.
* [ ] Identificar `assets-generator.js` y sus dependencias.
* [ ] Identificar el sistema de movimiento.
* [ ] Identificar el sistema de colisiones.
* [ ] Identificar el sistema de cámara.
* [ ] Identificar el sistema de interacción.
* [ ] Identificar el sistema actual de modales.
* [ ] Identificar código temporal o procedural.
* [ ] Identificar qué código puede reutilizarse.
* [ ] Identificar qué código debe eliminarse.

### Entregable

La IA debe presentar una auditoría breve explicando:

* Arquitectura actual.
* Sistema gráfico actual.
* Problemas actuales.
* Código reutilizable.
* Código candidato a eliminación.
* Riesgos antes de comenzar la migración.

### GATE

**WAITING FOR USER APPROVAL**

No modificar código todavía.

---

# GATE 1 — Dirección Artística

## Objetivo

Definir el lenguaje visual completo antes de elegir assets definitivos.

---

## 1.1 Perspectiva

* [ ] Definir perspectiva exacta.
* [ ] Definir cuánto se ve la parte superior del personaje.
* [ ] Definir proporciones del personaje.
* [ ] Definir representación de paredes.
* [ ] Definir representación del suelo.
* [ ] Definir representación de muebles.
* [ ] Definir representación de objetos.

### Decisión

Elegir una perspectiva coherente para todo el juego.

---

## 1.2 Resolución y Grid

Definir:

* [ ] Tamaño de tile.
* [ ] Tamaño del personaje.
* [ ] Tamaño de puertas.
* [ ] Tamaño de muebles.
* [ ] Tamaño de objetos interactivos.
* [ ] Escala de renderizado.

Posibles puntos de partida:

* 16×16.
* 32×32.
* 48×48.
* Otra resolución.

No asumir ninguna opción.

---

## 1.3 Pixel Art

Definir:

* [ ] Nivel de detalle.
* [ ] Outlines.
* [ ] Sombras.
* [ ] Iluminación.
* [ ] Contraste.
* [ ] Saturación.
* [ ] Dithering.
* [ ] Tratamiento de materiales.
* [ ] Nivel de estilización.

---

## 1.4 Paleta

Definir:

* [ ] Suelo.
* [ ] Paredes.
* [ ] Madera.
* [ ] Piedra.
* [ ] Metal.
* [ ] Plantas.
* [ ] Iluminación.
* [ ] Elementos interactivos.
* [ ] Elementos especiales.

---

## 1.5 Identidad del Museo

Decidir:

* [ ] Museo moderno.
* [ ] Museo clásico.
* [ ] Museo acogedor.
* [ ] Museo tecnológico.
* [ ] Mezcla de museo + estudio de desarrollador.
* [ ] Otra dirección.

Definir una frase de dirección artística que sirva como referencia para todos los assets.

### GATE

**WAITING FOR USER APPROVAL**

No integrar assets definitivos.

---

# GATE 2 — Estrategia de Assets

## Objetivo

Decidir de dónde procederán los gráficos.

### Opciones

#### A — Asset Pack Existente

Utilizar un pack completo de pixel art.

#### B — Assets Propios

Crear los assets específicamente para el museo.

#### C — Híbrido

Utilizar un pack base y crear assets propios para elementos únicos.

### Tareas

* [ ] Elegir estrategia.
* [ ] Buscar candidatos compatibles.
* [ ] Comprobar licencia.
* [ ] Comparar consistencia visual.
* [ ] Comprobar resolución.
* [ ] Comprobar perspectiva.
* [ ] Comprobar escala.
* [ ] Comprobar cobertura del tileset.

---

# GATE 3 — Tileset y Environment

## Objetivo

Aprobar el entorno visual antes de diseñar el mapa definitivo.

### Tileset mínimo deseado

* [ ] Suelo.
* [ ] Variaciones de suelo.
* [ ] Paredes.
* [ ] Esquinas.
* [ ] Bordes.
* [ ] Puertas.
* [ ] Transiciones.
* [ ] Decoración.
* [ ] Elementos arquitectónicos.

### Environment

* [ ] Mesas.
* [ ] Sillas.
* [ ] Plantas.
* [ ] Estanterías.
* [ ] Pedestales.
* [ ] Vitrinas.
* [ ] Cuadros.
* [ ] Ordenadores.
* [ ] Pantallas.
* [ ] Máquinas arcade.
* [ ] Elementos decorativos.

### GATE

Presentar los assets candidatos y esperar aprobación.

**WAITING FOR USER APPROVAL**

---

# GATE 4 — Personaje

## Objetivo

Definir el personaje antes de integrarlo.

### Decisiones

* [ ] Tamaño.
* [ ] Proporciones.
* [ ] Cabeza.
* [ ] Cuerpo.
* [ ] Piernas.
* [ ] Pies.
* [ ] Ropa.
* [ ] Colores.
* [ ] Silueta.
* [ ] Nivel de detalle.

### Animaciones

* [ ] Idle Down.
* [ ] Walk Down.
* [ ] Idle Left.
* [ ] Walk Left.
* [ ] Idle Right.
* [ ] Walk Right.
* [ ] Idle Up.
* [ ] Walk Up.

### Compatibilidad

Comprobar que el personaje:

* [ ] Utiliza la misma escala.
* [ ] Utiliza la misma perspectiva.
* [ ] Utiliza una paleta compatible.
* [ ] Parece pertenecer al entorno.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 5 — Arquitectura de Assets

## Objetivo

Definir cómo se organizarán los assets definitivos.

Propuesta inicial:

```text
assets/
├── characters/
├── tilesets/
├── maps/
├── environment/
├── furniture/
├── exhibits/
├── ui/
├── audio/
└── effects/
```

La estructura final debe adaptarse al proyecto existente.

### Decisiones

* [ ] PNG.
* [ ] Spritesheets.
* [ ] Texture atlases.
* [ ] Tilemaps.
* [ ] JSON.
* [ ] Convenciones de nombres.
* [ ] IDs internos de Phaser.
* [ ] Organización de carpetas.

### Limpieza

Después de comprender las dependencias:

* [ ] Eliminar generación procedural.
* [ ] Eliminar assets temporales.
* [ ] Eliminar código muerto.
* [ ] Eliminar `assets-generator.js` si ya no es necesario.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 6 — Diseño Conceptual del Museo

## Objetivo

Diseñar el museo antes de construirlo.

---

## Espacios

Definir:

* [ ] Entrada.
* [ ] Recepción.
* [ ] Sala principal.
* [ ] Zona de proyectos.
* [ ] Zona retro.
* [ ] Zona especial.
* [ ] Zona secreta.
* [ ] Pasillos.
* [ ] Salidas.

---

## Flujo

Definir:

* [ ] Punto de aparición.
* [ ] Primera impresión.
* [ ] Primer punto de interés.
* [ ] Orden de exploración.
* [ ] Áreas opcionales.
* [ ] Áreas bloqueadas.
* [ ] Condiciones de desbloqueo.
* [ ] Final de la experiencia.

---

## Escala

Definir:

* [ ] Tamaño total.
* [ ] Tamaño de habitaciones.
* [ ] Anchura de pasillos.
* [ ] Distancia entre exhibiciones.
* [ ] Espacio de interacción.
* [ ] Límites de cámara.

---

## Layout

Crear primero un mapa conceptual sin arte definitivo.

Ejemplo conceptual:

```text
┌─────────────────────────────────────┐
│             MAIN HALL               │
│                                     │
│   [EXHIBIT]          [EXHIBIT]      │
│                                     │
│            [RECEPTION]              │
│                  │                  │
│                  ▼                  │
│             ┌────────┐              │
│             │HALLWAY │──────────┐   │
│             └────────┘          │   │
│                                 │   │
│           RETRO ZONE            │   │
│                                 │   │
│                       [SECRET]  │   │
└─────────────────────────────────────┘
```

Este ejemplo no constituye el diseño final.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 7 — Diseño del Sistema de Juego

## Movimiento

Definir:

* [ ] WASD.
* [ ] Arrow keys.
* [ ] Controller.
* [ ] Touch.
* [ ] Velocidad.
* [ ] Animaciones.
* [ ] Dirección.
* [ ] Comportamiento al detenerse.

---

## Cámara

Definir:

* [ ] Seguimiento.
* [ ] Zoom.
* [ ] Límites.
* [ ] Suavizado.
* [ ] Posición del jugador.
* [ ] Comportamiento en habitaciones pequeñas.

---

## Colisiones

Definir:

* [ ] Paredes.
* [ ] Muebles.
* [ ] Exhibiciones.
* [ ] Objetos.
* [ ] Límites.
* [ ] Elementos atravesables.

---

## Interacción

Definir:

* [ ] Distancia.
* [ ] Tecla.
* [ ] Indicador.
* [ ] Animación.
* [ ] Sonido.
* [ ] Feedback.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 8 — Contenido del Portafolio

## Objetivo

Definir qué representa cada exhibición.

| Exhibición | Proyecto          | Tipo        | Interacción        |
| ---------- | ----------------- | ----------- | ------------------ |
| Exhibit A  | Soy Yo Digital    | Application | Demo / Information |
| Exhibit B  | SpacedLingo       | Application | Demo / Information |
| Exhibit C  | Economy Simulator | Project     | Information        |
| Exhibit D  | Portfolio         | Website     | Open Project       |
| Exhibit E  | Retro Zone        | Experience  | Play               |

La lista final debe ser confirmada por el usuario.

---

## Para cada proyecto

Definir:

* [ ] Nombre.
* [ ] Descripción.
* [ ] Imagen.
* [ ] Tipo.
* [ ] Interacción.
* [ ] Modal.
* [ ] URL.
* [ ] Demo.
* [ ] Contenido visual.
* [ ] Acción principal.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 9 — Diseño de UI

## Objetivo

Diseñar una interfaz coherente con el mundo del museo.

Definir:

* [ ] Modal.
* [ ] Paneles.
* [ ] Botones.
* [ ] Tipografía.
* [ ] Iconos.
* [ ] Bordes.
* [ ] Sombras.
* [ ] Animaciones.
* [ ] Indicadores de interacción.
* [ ] Mensajes.
* [ ] Responsive behavior.

### Dirección

La UI puede inspirarse en interfaces de juegos pixel art, pero debe tener identidad propia.

No copiar directamente elementos de Stardew Valley.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 10 — Implementación

Solo comenzar después de aprobar las fases anteriores.

## Orden recomendado

* [ ] Integrar assets.
* [ ] Configurar preload.
* [ ] Configurar spritesheets/atlases.
* [ ] Configurar animaciones.
* [ ] Crear tilemap.
* [ ] Crear mapa.
* [ ] Crear colisiones.
* [ ] Crear jugador.
* [ ] Crear cámara.
* [ ] Crear interacción.
* [ ] Crear exhibiciones.
* [ ] Crear UI.
* [ ] Conectar proyectos.
* [ ] Implementar zona retro.
* [ ] Implementar zona secreta.

### Regla

No introducir decisiones visuales nuevas durante la implementación sin aprobación.

Si aparece una decisión no contemplada:

**DETENERSE Y PREGUNTAR.**

---

# GATE 11 — Audio y Feedback

## Audio

* [ ] Pasos.
* [ ] Interacción.
* [ ] UI.
* [ ] Puertas.
* [ ] Elementos especiales.
* [ ] Ambiente.
* [ ] Música, si corresponde.

## Feedback

* [ ] Indicador de interacción.
* [ ] Animaciones.
* [ ] Transiciones.
* [ ] Respuesta visual.
* [ ] Respuesta sonora.

Todo feedback debe ser sutil y no distraer del contenido profesional.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 12 — Mobile

## Controles

* [ ] D-Pad.
* [ ] Botón de interacción.
* [ ] Escalado.
* [ ] Zoom.
* [ ] Touch.

## UI

* [ ] Modales.
* [ ] Botones.
* [ ] Texto.
* [ ] Orientación.
* [ ] Responsiveness.

## Rendimiento

* [ ] Carga de assets.
* [ ] FPS.
* [ ] Memoria.
* [ ] Tamaño de archivos.

### GATE

**WAITING FOR USER APPROVAL**

---

# GATE 13 — Pulido Final

## Visual

* [ ] Consistencia de assets.
* [ ] Escala.
* [ ] Perspectiva.
* [ ] Iluminación.
* [ ] Sombras.
* [ ] Grid.
* [ ] Animaciones.
* [ ] UI.

## UX

* [ ] El jugador entiende cómo moverse.
* [ ] El jugador entiende qué puede inspeccionar.
* [ ] El jugador sabe cuándo puede interactuar.
* [ ] La navegación es natural.
* [ ] Los modales son claros.
* [ ] Los enlaces funcionan.
* [ ] No existen zonas confusas.

## Técnico

* [ ] No existen errores de consola.
* [ ] No existen assets innecesarios.
* [ ] No existe código procedural descartado.
* [ ] No existen mocks.
* [ ] No existen dependencias innecesarias.
* [ ] Los assets cargan correctamente.
* [ ] El rendimiento es aceptable.

---

# GATE 14 — Revisión Final

* [ ] Desktop probado.
* [ ] Mobile probado.
* [ ] Movimiento probado.
* [ ] Colisiones probadas.
* [ ] Cámara probada.
* [ ] Interacciones probadas.
* [ ] Todos los proyectos comprobados.
* [ ] Todos los enlaces comprobados.
* [ ] Todos los modales comprobados.
* [ ] Todos los assets revisados.
* [ ] Audio revisado.
* [ ] Consola limpia.
* [ ] Código residual eliminado.
* [ ] Experiencia completa de principio a fin.

---

# CRITERIO DE FINALIZACIÓN

El Museo 2D se considera terminado únicamente cuando:

1. El arte es visualmente consistente.
2. La perspectiva es coherente.
3. El mapa tiene un flujo intencional.
4. El jugador entiende las interacciones.
5. Los proyectos del portafolio están correctamente representados.
6. La UI está integrada visualmente con la experiencia.
7. Desktop y mobile funcionan correctamente.
8. No existe código temporal innecesario.
9. No existen errores conocidos importantes.
10. La experiencia se siente como un producto terminado.

---

# ESTADO ACTUAL

**Current Phase:** GATE 0 — Auditoría del Proyecto Actual

**Status:** WAITING FOR USER APPROVAL

La IA debe comenzar realizando únicamente la auditoría del proyecto actual.

No modificar código ni comenzar la siguiente fase hasta recibir aprobación explícita.
