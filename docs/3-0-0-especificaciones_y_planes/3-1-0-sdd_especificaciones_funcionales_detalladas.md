---
title: SDD, especificaciones funcionales detalladas
description: Spec-Driven Development implica detallar qué construir y cómo verificarlo.
url: 3-1-0-sdd_especificaciones_funcionales_detalladas
footer: 3 Especificaciones y planes. &copy; [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)  
marp: true
theme: ab
---

[3. Especificaciones y planes](./3-0-0-especificaciones_y_planes.md)  
# 3.1. SDD, especificaciones funcionales detalladas

- Spec-Driven Development implica detallar qué construir y cómo verificarlo.

#### [Programación Inteligente](programacion_inteligente.md)  
> _Code smarter!_  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 

---

## Conexión

- **¿Qué problema concreto vas a resolver ahora?**
  - Las especificaciones vagas generan código incorrecto o incompleto.
- **¿Cómo lo conviertes en una unidad implementable y verificable?**
  - Hacer y verificar son dos caras de la misma moneda.

---

## Conceptos

- **Specs**:
  - Especificaciones funcionales detalladas en lenguaje natural.
  - Define qué construir y cómo verificarlo, sin detalles de implementación.
- **Spec-Driven Development**:
  - Las especificaciones son el punto de partida del desarrollo.
  - Y el hilo conductor durante la generación y verificación del código.
- **Granularidad**: 
  - Cada spec aborda una sola capacidad  técnica o de negocio para poder planificarla y validarla mejor.

---

## Concreción

### Especificación `project/specs/<id-slug>.spec.md`
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

## Conclusión

- Las especificaciones detalladas son el **contrato** del desarrollo.
- Permiten que la IA genere código **correcto desde el inicio**.
- Son el **punto de referencia** para verificación y validación.
  
#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)