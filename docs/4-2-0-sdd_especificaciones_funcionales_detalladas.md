---
title: SDD, especificaciones funcionales detalladas
description: Spec-Driven Development implica detallar qué construir y cómo verificarlo.
url: 4-2-0-sdd_especificaciones_funcionales_detalladas
footer: 4.2. SDD, especificaciones funcionales detalladas. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[4. Flujo de trabajo basado en especificaciones](./4-0-0-flujo_de_trabajo_basado_en_especificaciones.md)  
# 4.2. SDD, especificaciones funcionales detalladas

- Spec-Driven Development implica detallar qué construir y cómo verificarlo.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **¿Cómo comunicar exactamente qué debe hacer el sistema?**
  - Las especificaciones vagas generan código incorrecto o incompleto.
  - La IA necesita detalles precisos sobre funcionalidades y comportamientos.
  - No se puede detallar todo a la vez en un solo prompt.

---

## Conceptos

- **Specs**:
  - Especificaciones funcionales detalladas en lenguaje natural.
  - Define qué construir y cómo verificarlo.
- **Spec-Driven Development**:
  - Las especificaciones son el punto de partida del desarrollo.
  - Y el hilo conductor durante la generación y verificación del código.
- **Prompt de especificación**:
  - Aplicar _Prompt as Code_ y tratar `specs as code`.
  - Reutilizar plantillas y patrones de especificación.

---

## Concreción

- `3` **Product Owner Agent**: `Write specifications for features, bugs, chores...`
```md
# Specification for [feature/bug/chore name]
## Problem Description
## Solution Overview
## Acceptance Criteria
```


---

## Conclusión

- Las especificaciones detalladas son el **contrato** del desarrollo.
- Permiten que la IA genere código **correcto desde el inicio**.
- Son el **punto de referencia** para verificación y validación.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
