---
title: Ramas, planes y tareas de codificación
description: Organizar el trabajo de codificación en tareas manejables y controlables.
url: 4-3-0-ramas_planes_y_tareas_de_codificacion
footer: 4.3. Ramas, planes y tareas de codificación. &copy; [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 
marp: true
theme: ab
---

[4. Flujo de trabajo basado en especificaciones](./4-0-0-flujo_de_trabajo_basado_en_especificaciones.md)  
# 4.3. Ramas, planes y tareas de codificación

- Organizar el trabajo de codificación en tareas manejables y controlables.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)

---

## Conexión

- **¿Cómo dividir una especificación en trabajo ejecutable?**
  - Las soluciones pueden ser demasiado complejas para manejar de una vez.
  - Necesitamos dividir el trabajo en tareas pequeñas y controlables.
  - La planificación permite verificar progreso y mantener el control.

---

## Conceptos

- **Planificación de tareas**:
  - Dividir especificaciones en pasos manejables.
  - Definir dependencias y orden de ejecución.
- **Ramas de desarrollo**:
  - Usar ramas de Git para aislar el trabajo.
  - Facilitar revisión y verificación incremental.
- **Human in the Loop**:
  - Mantener pasos cortos, repetibles y controlables.
  - Evitar acumulación de errores o desviaciones.

---

## Concreción

`planning-spec` : planificar las capas físicas de una especificación funcional detallada (SDD) con tareas ordenadas y dependencias claras.
- `spec-slug.data.plan.md`: base de datos 
- `spec-slug.back.plan.md`: backend api services
- `spec-slug.front.plan.md`: frontend ui
- `spec-slug.test.plan.md`: e2e testing

> Inicio de git workflow: `git checkout -b spec-slug`

---
### Anatomía de un plan de implementación

- Plan para la <Capa> de la <Especificación>
  - Skills necesarias: `skill-1`, `skill-2`, ...
  - 1 Nombre de paso 1
    - Descripción detallada del paso 1.
    - Ficheros afectados: [`ruta/archivo.ext`]
    - [ ] Tarea 1.1
    - [ ] Tarea 1.2
  - 2 Nombre de paso 2
    - Descripción detallada del paso 2.
    - Ficheros afectados: [`ruta/archivo.ext`]
    - [ ] Tarea 2.1
    - [ ] Tarea 2.2
---

## Conclusión

- La planificación convierte especificaciones en **trabajo ejecutable**.
- Las tareas pequeñas y controlables permiten **verificación continua**.
- El flujo estructurado mantiene la **calidad y el control** del desarrollo.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
