---
title: Documentar los cambios es la parte crítica
description: Mantener la documentación viva para cerrar el ciclo de feedback.
url: 5-3-0-documentar_los_cambios_es_la_parte_critica
footer: 5.3. Documentar los cambios es la parte crítica. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[5. Programar, verificar, documentar](./5-0-0-programar_verificar_documentar.md)  
# 5.3. Documentar los cambios es la parte crítica

- Mantener la documentación viva para cerrar el ciclo de feedback.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **El código es la verdad, pero la documentación es el mapa.**
  - Si el mapa no coincide con el territorio, te perderás en la siguiente iteración.
- **Deuda técnica vs Deuda de documentación**
  - Un código perfecto sin documentación actualizada es difícil de evolucionar por un agente.

---

## Conceptos

- **Living Documentation**:
  - La documentación no es un artefacto estático al final, es parte del proceso.
  - `Specs`, `Architecture`, `Plans` deben reflejar el estado actual.
- **Artifact Updates**:
  - Cada tarea de codificación debe terminar actualizando los artefactos relacionados.
  - Si cambiaste la API, actualiza el contrato/swagger y el PRD si aplica.
- **Walkthroughs & Changelogs**:
  - "Qué he hecho, por qué y cómo probarlo".
  - Historia del proyecto legible por humanos y máquinas.

---

## Concreción

- **Technical Writer Agent**: `Update docs`
```md
#### [MODIFY] [auth.service.ts]
- Added `validateSession` method.
- Updated `Login` signature to returns `SessionToken`.

#### [UPDATE] [ARCHITECTURE.md]
- Added `SessionManager` component in Core layer.
```
- **Definition of Done**:
  - Code committed + Tests passed + Docs updated.

---

## Conclusión

- La documentación actualizada es el **contexto** para la siguiente tarea de la IA.
- Sin documentación, la IA pierde eficacia y aumenta la probabilidad de alucinaciones.
- Documentar es **invertir en la productividad futura**.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
