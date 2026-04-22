---
title: Análisis de requerimientos y arquitectura del sistema
description: La primera fase del workflow es entender el problema y diseñar la solución.
url: 4-1-0-analisis_de_requerimientos_y_arquitectura_del_sistema
footer: 4.1. Análisis de requerimientos y arquitectura del sistema. &copy; [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 
marp: true
theme: ab
---

[4. Flujo de trabajo basado en especificaciones](./4-0-0-flujo_de_trabajo_basado_en_especificaciones.md)  
# 4.1. Análisis de requerimientos y arquitectura del sistema

- La primera fase del workflow es entender el problema y diseñar la solución.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)

---

## Conexión

- **¿Por dónde empezar cuando solo tienes una idea?**
  - Saltar directamente al código es tentador, pero peligroso.
- **¿Y si lo que tienes es un viejo proyecto en marcha?**
  - Mantener y modificar requiere entender su estructura y objetivos.

---

## Conceptos

- **Análisis de requerimientos** - > `Briefing.md` + `PRD.md`:
  - Identificar y documentar las necesidades del sistema.
  - Definir funcionalidades y restricciones técnicas.
- **Arquitectura del sistema** -> `AGENTS.md` + `ADD.md` 
  - Diseñar la estructura y stack tecnológico del software.
  - Establecer patrones y principios arquitectónicos.
- **Habilidades de agentes** -> `/skills`
  - Guiar en el proceso de desarrollo con agentes IA.
  - Asegurar que los agentes sigan la arquitectura definida.

---

## Concreción

### `1` **Analyst Agent**: `Generate PRD from idea or existing project`

- Workflow de análisis:
  - Prompt maestro: define idea, alcance y objetivo de salida.
  - Subagente 1 + `writing-briefing` -> `project/briefing.md`
  - Subagente 2 + `writing-prd` (usa briefing) -> `project/PRD.md`
- Validación:
  - Existencia de `project/briefing.md` y `project/PRD.md`.
  - Coherencia entre misión, alcance, FR/TR y reglas de negocio.

---

### `2` **Architect Agent**: `Generate AGENTS rules, ADD and skills from boilerplate or user input`

- Skills del modulo 3:
  - `writing-rules`
  - `writing-add`
  - `adding-skills`

- Flujo recomendado:
  - Briefing + boilerplate -> (`writing-rules`) -> `AGENTS.md`
  - `AGENTS.md` -> (`writing-add`) -> `project/ADD.md`
  - `project/ADD.md` -> (`adding-skills`) -> skills del proyecto

- Resultado esperado:
  - Reglas claras para agentes.
  - Arquitectura trazable con ADRs.
  - Skills alineadas al stack y workflow real.

---

## Conclusión

- El análisis y la arquitectura son la **base sólida** del desarrollo.
- Proporcionan el **contexto necesario** para que la IA genere código adecuado.
- Invertir tiempo aquí **ahorra tiempo** en fases posteriores.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
