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
  - Las especificaciones son el contrato entre el negocio y el código.

---

## Conceptos

- **SDD (Software Design Document)**:
  - Especificaciones funcionales detalladas en lenguaje natural.
  - Define qué construir y cómo verificarlo.
  - Estructura clara y completa para guiar el desarrollo.
- **Spec-Driven Development**:
  - Las especificaciones son el punto de partida del desarrollo.
  - El código se genera a partir de las especificaciones.
  - Las especificaciones también definen los criterios de verificación.
- **Prompt de especificación**:
  - Usar prompts estructurados para generar especificaciones.
  - Aplicar Prompt as Code para mantener y versionar especificaciones.
  - Reutilizar plantillas y patrones de especificación.

---

## Concreción

- **Estructura de una especificación**:
  - Descripción general del sistema o componente.
  - Funcionalidades principales y casos de uso.
  - Reglas de negocio y validaciones.
  - Criterios de aceptación y verificación.
- **Ejemplo de prompt de especificación**:
  - `rockets_spec.prompt.md` -> `rockets.spec.md`
- **Herramientas**:
  - Ficheros markdown versionados en el repositorio.
  - Plantillas reutilizables para diferentes tipos de componentes.

---

## Conclusión

- Las especificaciones detalladas son el **contrato** del desarrollo.
- Permiten que la IA genere código **correcto desde el inicio**.
- Son el **punto de referencia** para verificación y validación.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
