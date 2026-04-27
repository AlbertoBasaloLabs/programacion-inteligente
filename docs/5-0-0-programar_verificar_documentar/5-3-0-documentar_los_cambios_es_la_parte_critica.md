---
title: Documentar los cambios es la parte crítica
description: Mantener la documentación viva para mantener el producto.
url: 5-3-0-documentar_los_cambios_es_la_parte_critica
footer: 5.3. Documentar los cambios es la parte crítica. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 
marp: true
theme: ab
---

[5. Programar, verificar, documentar](./5-0-0-programar_verificar_documentar.md)  
# 5.3. Documentar los cambios es la parte crítica

- Mantener la documentación viva para mantener el producto.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) 

---

## Conexión

- **¿Qué has hecho?**
  - Documentar la historia para el futuro.
- **Lo único estable es el cambio.**
  - Reduce obstáculos para facilitarlo.

---

## Conceptos

- **Living Documentation**:
  - La documentación no es un artefacto estático.
  - `Changelogs` y `Agents` deben reflejar el estado actual.
- **Artifact Updates**:
  - No solo el producto evoluciona, también los artefactos.
  - Mantenerlos alineados es crucial para la sostenibilidad.

---

## Concreción

### Anatomía de un CHANGELOG
- Fichero `project/CHANGELOG.md`:
```md
# Changelog
## [Version] - YYYY-MM-DD
### Added
### Changed
### Fixed
```

> Git tags and merge commits: `git tag -a vX.Y.Z -m "Release version X.Y.Z"` y `git merge --no-ff feature/spec-slug`

---

## Conclusión

- La documentación **actualizada** es clave para la mantenibilidad.
- Saber _Qué he hecho y por qué_.
- Documentar es **invertir en sostenibilidad**.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
