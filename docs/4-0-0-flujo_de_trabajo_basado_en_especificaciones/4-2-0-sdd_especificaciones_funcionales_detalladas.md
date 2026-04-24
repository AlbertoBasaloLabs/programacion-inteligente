---
title: SDD, especificaciones funcionales detalladas
description: Spec-Driven Development implica detallar qué construir y cómo verificarlo.
url: 4-2-0-sdd_especificaciones_funcionales_detalladas
footer: 4.2. SDD, especificaciones funcionales detalladas. &copy; [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)  
marp: true
theme: ab
---

[4. Flujo de trabajo basado en especificaciones](./4-0-0-flujo_de_trabajo_basado_en_especificaciones.md)  
# 4.2. SDD, especificaciones funcionales detalladas

- Spec-Driven Development implica detallar qué construir y cómo verificarlo.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)

---

## Conexión

- **¿Qué problema concreto vas a resolver ahora?**
- **¿Cómo lo conviertes en una unidad implementable y verificable?**
- **¿Cómo comunicar exactamente qué debe hacer el sistema?**
  - Las especificaciones vagas generan código incorrecto o incompleto.
  - La IA necesita detalles precisos sobre funcionalidades y comportamientos.
  - No se puede detallar todo a la vez en un solo prompt.
---

## Conceptos

- **Specs**:
  - Especificaciones funcionales detalladas en lenguaje natural.
  - Define qué construir y cómo verificarlo, sin detalles de implementación.
- **Spec-Driven Development**:
  - Las especificaciones son el punto de partida del desarrollo.
  - Y el hilo conductor durante la generación y verificación del código.
- **Granularidad**: Cada spec aborda una sola capacidad de negocio para poder planificarla y validarla mejor.
- **Skill `writing-spec`**: Prompt reutilizable para generar specs consistentes desde el P.R.D.
---

## Concreción

### Anatomía de una especificación
- Fichero `project/specs/<id-slug>.spec.md`:
  - Problema
    - COMO _rol_ QUIERO _acción_ PARA _beneficio_
  - Solución
    - Data
    - Back
    - Front
  - Verificación
    - EL sistema DEBE _comportamiento_
    - CUANDO _evento_ EL sistema DEBE _respuesta_
    - SI _condición_ ENTONCES EL sistema DEBE _respuesta_

---

### Anatomía de un BACKLOG
- Fichero `project/BACKLOG.md`:

| Spec | Depende de | Estado |
| ---- | ---------- | ------ |
| ~~sf1~~  | -          | hecho |
| _sf2_  | sf1        | trabajando |
| st1  | sf1, sf2   | bloqueado |
| sf3  | -          | pendiente |
| **_st2_**  | sf3        | bloqueado |

---

- Reglas prácticas:
  - Empieza por specs sin dependencias.
  - Marca bloqueadas las que no puedan avanzar sin otra previa.
  - Revisa estados al cerrar cada spec para mantener trazabilidad real.

---

- Demo:
  - Partir de `project/specs/*.spec.md` ya definidas.
  - Ejecutar `planning-backlog` para generar o actualizar `project/BACKLOG.md`.
  - Revisar dependencias y estados para detectar bloqueos antes de implementar.

--- 

## Conclusión

- Las especificaciones detalladas son el **contrato** del desarrollo.
- Permiten que la IA genere código **correcto desde el inicio**.
- Son el **punto de referencia** para verificación y validación.
- El backlog traduce specs en una secuencia de entrega controlada.
  
#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
