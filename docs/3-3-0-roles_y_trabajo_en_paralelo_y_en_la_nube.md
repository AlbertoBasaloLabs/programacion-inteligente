---
title: Roles y trabajo en paralelo y en la nube
description: Orquestando equipos de agentes.
url: 3-3-0-roles_y_trabajo_en_paralelo_y_en_la_nube
footer: 3.3. Roles y trabajo en paralelo y en la nube. [AlbertoBasalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026
marp: true
theme: ab
---

[3. Bibliotecas y talleres](./3-0-0-bibliotecas_y_talleres.md)
# 3.3. Roles y trabajo en paralelo y en la nube

- Orquestando equipos de agentes en trabajos largos y complejos.

#### [Programación Inteligente](programacion_inteligente.md)  
> Por [Alberto Basalo](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy) &copy; 2026

---

## Conexión

- **¿Un solo programador para todo el proyecto?**
  - En equipos humanos especializamos roles (QA, Dev, Arch).
  - Los miembros de equipo trabajan en paralelo.

---

## Conceptos

- **Roles especializados**:
  - Capacidades y herramientas específicas para cada función.
- **Orquestación**:
  - Coordinación de múltiples agentes en flujos de trabajo.
    - **Cloud**: Infraestructura escalable.
    - **WorkTree**: Ramas simultáneas locales.
---

## Concreción

- **Agente de codificación**: `3-3-1-coder.md`
- Ejecutar en modo Coder

```markdown
Implement the plan at issue id {issue-id}.
```

- **Skill de Abstracción de Persistencia**: `3-3-2-SKILL.md`
- Ejecutar en modo Coder

```markdown
@cli abstract the store implementation for rockets
```

```markdown
@cloud abstract the store implementation for launches
```

```markdown
@cli Refactor the store factories to be homogeneous. 
Make a release of the final code state.
```

---

## Conclusión

- La **especialización** aumenta la calidad.
- La **orquestación** permite abordar proyectos complejos.
- La **nube** escala la capacidad de producción de software.

#### [Programación Inteligente](programacion_inteligente.md).  
> _No es magia, es tecnología._  
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)
